import { motion } from "framer-motion";
import { FaArrowRight, FaHeart } from "react-icons/fa";

function ProductCard({ product }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-3xl border border-gray-800 bg-[#111111] transition-all duration-300 hover:border-orange-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]"
    >
      {/* Product Image */}
      <div className="relative overflow-hidden bg-[#1A1A1A]">
        <img
          src={product.image}
          alt={product.name}
          className="h-64 w-full object-contain p-6 transition duration-500 group-hover:scale-110"
        />

        {/* Favourite Button */}
        <button className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white backdrop-blur transition hover:bg-orange-500">
          <FaHeart />
        </button>

        {/* Badge */}
        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
            {product.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-sm text-orange-400">
          {product.category}
        </p>

        <h3 className="mt-2 text-xl font-bold text-white">
          {product.name}
        </h3>

        <p className="mt-3 text-2xl font-bold text-orange-400">
          ₦{product.price}
        </p>

        <button className="mt-6 flex items-center gap-2 font-semibold text-white transition group-hover:gap-4">
          View Details
          <FaArrowRight />
        </button>
      </div>
    </motion.div>
  );
}

export default ProductCard;