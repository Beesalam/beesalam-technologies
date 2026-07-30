import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import AdminLayout from "../layouts/AdminLayout";

const Products = () => {
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
            <tr className="text-left">
              <th className="px-6 py-4">Image</th>
              <th className="px-6 py-4">Product</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Price</th>
              <th className="px-6 py-4">Stock</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td
                colSpan={6}
                className="text-center py-16 text-gray-500"
              >
                No products available.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default Products;