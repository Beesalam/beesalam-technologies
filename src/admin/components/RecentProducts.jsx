import { useEffect, useState } from "react";
import { getRecentProducts } from "../services/productService";

const RecentProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getRecentProducts();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch recent products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const formatCurrency = (amount) =>
    `₦${Number(amount).toLocaleString()}`;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mt-10 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800">
          Recent Products
        </h2>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-gray-700">
          <thead className="bg-gray-50 text-gray-700">
            <tr>
              <th className="px-6 py-4 text-left font-semibold">Image</th>
              <th className="px-6 py-4 text-left font-semibold">Product</th>
              <th className="px-6 py-4 text-left font-semibold">Category</th>
              <th className="px-6 py-4 text-left font-semibold">Stock</th>
              <th className="px-6 py-4 text-left font-semibold">Price</th>
            </tr>
          </thead>

          <tbody className="text-gray-700">
            {loading ? (
              <tr>
                <td colSpan={5} className="text-center py-10">
                  Loading...
                </td>
              </tr>
            ) : products.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="text-center py-10 text-gray-500"
                >
                  No products available.
                </td>
              </tr>
            ) : (
              products.map((product) => (
                <tr
                  key={product.id}
                  className="border-t border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  {/* Image */}
                  <td className="px-6 py-5 align-middle">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                  </td>

                  {/* Product */}
                  <td className="px-6 py-5 align-middle">
                    <div className="font-semibold text-gray-900 leading-6">
                      {product.name}
                    </div>

                    <div className="text-sm text-gray-500 mt-1">
                      {product.brand}
                    </div>
                  </td>

                  {/* Category */}
                  <td className="px-6 py-5 align-middle">
                    {product.category
                      ? product.category.charAt(0).toUpperCase() +
                        product.category.slice(1).toLowerCase()
                      : "-"}
                  </td>

                  {/* Stock */}
                  <td className="px-6 py-5 align-middle">
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${
                        product.stock === 0
                          ? "bg-red-100 text-red-700"
                          : product.stock <= 5
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {product.stock}
                    </span>
                  </td>

                  {/* Price */}
                  <td className="px-6 py-5 align-middle font-semibold text-gray-900">
                    {formatCurrency(product.price)}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentProducts;