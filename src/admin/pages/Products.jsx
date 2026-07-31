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
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Products</h1>
          <p className="text-gray-500 mt-1">
            Manage all your store products.
          </p>
        </div>

        <Link
          to="/admin/products/add"
          className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-xl font-medium transition"
        >
          <FiPlus />
          Add Product
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr className="text-left text-gray-700">
              <th className="px-6 py-4">Image</th>
              <th className="px-6 py-4">Product</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Price</th>
              <th className="px-6 py-4">Stock</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan={6}
                  className="text-center py-16 text-gray-500"
                >
                  Loading products...
                </td>
              </tr>
            ) : products.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="text-center py-16 text-gray-500"
                >
                  No products available.
                </td>
              </tr>
            ) : (
              products.map((product) => (
                <tr
                  key={product.id}
                  className="border-t hover:bg-gray-50"
                >
                  <td className="px-6 py-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-lg border"
                    />
                  </td>

                  <td className="px-6 py-4">
                    <div className="font-semibold text-gray-800">
                      {product.name}
                    </div>

                    <div className="text-sm text-gray-500">
                      {product.brand}
                    </div>
                  </td>

                  <td className="px-6 py-4 text-gray-700">
                    {product.category}
                  </td>

                  <td className="px-6 py-4 font-medium text-gray-900">
                    {formatPrice(product.price)}
                  </td>

                  <td className="px-6 py-4">
                    {getStockBadge(product.stock)}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                     <Link
                     to={`/admin/products/edit/${product.id}`}
                     className="text-blue-600 hover:text-blue-800"
                     >
                      <FiEdit size={18} />
                    </Link>

                      <button
                        onClick={() =>
                          handleDelete(product.id)
                        }
                        className="text-red-600 hover:text-red-800"
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
    </AdminLayout>
  );
};

export default Products;