import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import AdminLayout from "../layouts/AdminLayout";
import ProductForm from "../components/ProductForm";
import { uploadImage } from "../services/cloudinaryService";
import { addProduct } from "../services/productService";

const AddProduct = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    brand: "",
    price: "",
    stock: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      toast.error("Please select a product image.");
      return;
    }

    try {
      setLoading(true);

      const imageUrl = await uploadImage(image);

      await addProduct({
        ...formData,
        price: Number(formData.price),
        stock: Number(formData.stock),
        image: imageUrl,
      });

      toast.success("Product added successfully!");

      navigate("/admin/products");
    } catch (error) {
      console.error(error);
      toast.error("Failed to add product.");
    } finally {
      setLoading(false);
    }
  };

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

        <ProductForm
          formData={formData}
          setFormData={setFormData}
          image={image}
          setImage={setImage}
          loading={loading}
          onSubmit={handleSubmit}
          buttonText="Save Product"
        />
      </div>
    </AdminLayout>
  );
};

export default AddProduct;