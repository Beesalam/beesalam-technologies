import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../admin/services/productService";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import useCartStore from "../store/cartStore";
import toast from "react-hot-toast";


function ProductDetails() {
const { id } = useParams();
const addToCart = useCartStore((state) => state.addToCart);

const [product, setProduct] = useState(null);
const [loading, setLoading] = useState(true);

const [selectedImage, setSelectedImage] = useState("");


useEffect(() => {
  const fetchProduct = async () => {
    try {
      const data = await getProductById(id);

      if (!data) return;

      setProduct(data);

      setSelectedImage(data.image);

     
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  fetchProduct();
}, [id]);

if (loading) {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center text-white">
      Loading product...
    </div>
  );
}

if (!product) {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center text-white">
      Product not found.
    </div>
  );
}

const formatPrice = (price) =>
  `₦${Number(price).toLocaleString()}`;

const handleAddToCart = () => {
  addToCart(product);

  toast.success(`${product.name} added to cart`);
};

  return (
  <>
    <Navbar />

    <main className="min-h-screen bg-[#0A0A0A] pt-28 pb-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">

          {/* Image */}
          <div>
            <div className="rounded-3xl bg-[#111111] p-8">
              <img
                src={selectedImage}
                alt={product.name}
                className="mx-auto h-[450px] object-contain"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="rounded-3xl bg-[#111111] p-8">
            <p className="text-orange-500 font-semibold">
              {product.brand}
            </p>

            <h1 className="mt-2 text-4xl font-bold">
              {product.name}
            </h1>

            <p className="mt-5 text-3xl font-bold text-orange-500">
              {formatPrice(product.price)}
            </p>

            <div className="mt-5 flex items-center gap-4">
              <span
                className={`rounded-full px-3 py-1 text-sm ${
                  product.stock > 0
                    ? "bg-green-600"
                    : "bg-red-600"
                }`}
              >
                {product.stock > 0
                  ? `${product.stock} In Stock`
                  : "Out of Stock"}
              </span>

              <span className="text-gray-400">
                {product.category}
              </span>
            </div>

            <p className="mt-8 leading-8 text-gray-300">
              {product.description}
            </p>

            <a
              href={`https://wa.me/2348063562104?text=Hello, I'm interested in the ${product.name}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 flex w-full items-center justify-center rounded-xl bg-green-600 py-4 text-lg font-semibold text-white transition hover:bg-green-700"
            >
              Order on WhatsApp
            </a>
            <button
                 onClick={handleAddToCart}
                className="mt-10 w-full rounded-xl bg-orange-500 py-4 text-lg font-semibold text-white transition hover:bg-orange-600"
            >
               Add to Cart
            </button>
          </div>

        </div>
      </div>
    </main>

    <Footer />
  </>
);
}

export default ProductDetails;