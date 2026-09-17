import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiEdit, FiPlus, FiTrash2 } from "react-icons/fi";
import { toast } from "react-hot-toast";

import AdminLayout from "../layouts/AdminLayout";
import {
  getProducts,
  deleteProduct,
} from "../services/productService";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = [...products]
  .filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.brand.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  })
  .sort((a, b) => {
    switch (sortBy) {
      case "Price Low":
        return a.price - b.price;

      case "Price High":
        return b.price - a.price;

      case "Name":
        return a.name.localeCompare(b.name);

      case "Stock":
        return b.stock - a.stock;

      case "Newest":
      default:
        return 0;
    }
  });

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    try {
      await deleteProduct(id);

      setProducts((prev) => prev.filter((item) => item.id !== id));

      toast.success("Product deleted successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete product");
    }
  };

  const formatPrice = (price) => {
    return `₦${Number(price).toLocaleString()}`;
  };

  const getStockBadge = (stock) => {
    if (stock <= 0) {
      return (
        <span className="px-3 py-1 rounded-full text-xs bg-red-100 text-red-600">
          Out of Stock
        </span>
      );
    }

    if (stock <= 5) {
      return (
        <span className="px-3 py-1 rounded-full text-xs bg-yellow-100 text-yellow-700">
          Low Stock
        </span>
      );
    }

    return (
      <span className="px-3 py-1 rounded-full text-xs bg-green-100 text-green-700">
        In Stock
      </span>
    );
  };

  return (
    <AdminLayout>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">Products</h1>
          <p className="mt-1 text-sm text-gray-500 sm:text-base">
            Manage all your store products.
          </p>
        </div>

        <Link
          to="/admin/products/add"
          className="flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-3 font-medium text-white transition hover:bg-orange-600 sm:px-5"
        >
          <FiPlus />
          Add Product
        </Link>
      </div>

      <div className="mb-6 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:p-5">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <input
            type="text"
            placeholder="Search by product or brand..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-black outline-none transition focus:ring-2 focus:ring-orange-500"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-black outline-none transition focus:ring-2 focus:ring-orange-500"
          >
            <option value="All">All Categories</option>

            {[...new Set(products.map((p) => p.category))].map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-black outline-none transition focus:ring-2 focus:ring-orange-500"
          >
            <option value="Newest">Newest</option>
            <option value="Name">Name (A-Z)</option>
            <option value="Price Low">Price: Low to High</option>
            <option value="Price High">Price: High to Low</option>
            <option value="Stock">Stock</option>
          </select>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-[760px] w-full">
            <thead className="bg-gray-50">
              <tr className="text-left text-gray-700">
                <th className="px-4 py-4 sm:px-6">Image</th>
                <th className="px-4 py-4 sm:px-6">Product</th>
                <th className="px-4 py-4 sm:px-6">Category</th>
                <th className="px-4 py-4 sm:px-6">Price</th>
                <th className="px-4 py-4 sm:px-6">Stock</th>
                <th className="px-4 py-4 sm:px-6">Actions</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td
                    colSpan={6}
                    className="py-16 text-center text-gray-500"
                  >
                    Loading products...
                  </td>
                </tr>
              ) : filteredProducts.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="py-16 text-center text-gray-500"
                  >
                    No matching products found.
                  </td>
                </tr>
              ) : (
                filteredProducts.map((product) => (
                  <tr
                    key={product.id}
                    className="border-t hover:bg-gray-50"
                  >
                    <td className="px-4 py-4 sm:px-6">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-16 w-16 rounded-lg border object-cover"
                      />
                    </td>

                    <td className="px-4 py-4 sm:px-6">
                      <div className="font-semibold text-gray-800">
                        {product.name}
                      </div>

                      <div className="text-sm text-gray-500">
                        {product.brand}
                      </div>
                    </td>

                    <td className="px-4 py-4 text-gray-700 sm:px-6">
                      {product.category}
                    </td>

                    <td className="px-4 py-4 font-medium text-gray-900 sm:px-6">
                      {formatPrice(product.price)}
                    </td>

                    <td className="px-4 py-4 sm:px-6">
                      {getStockBadge(product.stock)}
                    </td>

                    <td className="px-4 py-4 sm:px-6">
                      <div className="flex items-center gap-3">
                        <Link
                          to={`/admin/products/edit/${product.id}`}
                          className="text-blue-600 transition hover:text-blue-800"
                        >
                          <FiEdit size={18} />
                        </Link>

                        <button
                          onClick={() => handleDelete(product.id)}
                          className="text-red-600 transition hover:text-red-800"
                        >
                          <FiTrash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Products;