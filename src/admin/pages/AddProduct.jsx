import AdminLayout from "../layouts/AdminLayout";

const AddProduct = () => {
  return (
    <AdminLayout>
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Add Product
          </h1>
          <p className="text-gray-500 mt-2">
            Fill in the details below to add a new product.
          </p>
        </div>

        <form className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Product Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Product Name
              </label>

              <input
                type="text"
                placeholder="e.g iPhone 17 Pro Max"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500 text-black"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>

              <select className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500">
                <option>Select Category</option>
                <option>Phones</option>
                <option>Laptops</option>
                <option>Accessories</option>
              </select>
            </div>

            {/* Brand */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Brand
              </label>

              <input
                type="text"
                placeholder="Apple"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500 text-black"
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price
              </label>

              <input
                type="number"
                placeholder="2100000"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500 text-black"
              />
            </div>

            {/* Stock */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Stock Quantity
              </label>

              <input
                type="number"
                placeholder="50"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500 text-black"
              />
            </div>

            {/* Image */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Product Image
              </label>

              <input
                type="file"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-black"
              />
            </div>
          </div>

          {/* Description */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>

            <textarea
              rows="5"
              placeholder="Enter product description..."
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500 text-black"
            ></textarea>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition"
            >
              Save Product
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AddProduct;