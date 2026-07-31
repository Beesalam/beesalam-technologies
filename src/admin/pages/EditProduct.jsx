import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import AdminLayout from "../layouts/AdminLayout";
import ProductForm from "../components/ProductForm";
import { uploadImage } from "../services/cloudinaryService";
import {
  getProductById,
  updateProduct,
} from "../services/productService";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [image, setImage] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    brand: "",
    price: "",
    stock: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await getProductById(id);

        setFormData({
          name: product.name || "",
          category: product.category || "",
          brand: product.brand || "",
          price: product.price || "",
          stock: product.stock || "",
          description: product.description || "",
          image: product.image || "",
        });
      } catch (error) {
        console.error(error);
        toast.error("Product not found");
        navigate("/admin/products");
      } finally {
        setPageLoading(false);
      }
    };

    fetchProduct();
  }, [id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      let imageUrl = formData.image;

      if (image) {
        imageUrl = await uploadImage(image);
      }

      await updateProduct(id, {
        ...formData,
        image: imageUrl,
        price: Number(formData.price),
        stock: Number(formData.stock),
      });

      toast.success("Product updated successfully");

      navigate("/admin/products");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update product");
    } finally {
      setLoading(false);
    }
  };

  if (pageLoading) {
    return (
      <AdminLayout>
        <div className="text-center py-20">
          Loading product...
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Edit Product
          </h1>

          <p className="text-gray-500 mt-2">
            Update your product information.
          </p>
        </div>

        <ProductForm
          formData={formData}
          setFormData={setFormData}
          image={image}
          setImage={setImage}
          loading={loading}
          onSubmit={handleSubmit}
          buttonText="Update Product"
          showCurrentImage
        />
      </div>
    </AdminLayout>
  );
};

export default EditProduct;