import { motion } from "framer-motion";
import { FaArrowRight, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const formatPrice = (price) =>
    `₦${Number(price).toLocaleString()}`;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-2xl border border-gray-800 bg-[#111111] transition-all duration-300 hover:border-orange-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.2)] sm:rounded-3xl"
    >
      {/* Product Image */}
      <div className="relative overflow-hidden bg-[#1A1A1A]">
        <img
          src={product.image}
          alt={product.name}
          className="h-44 w-full object-contain p-4 transition duration-500 group-hover:scale-105 sm:h-64 sm:p-6"
        />

        {/* Favourite Button */}
        <button
          type="button"
          aria-label={`Add ${product.name} to favourites`}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-orange-500 sm:right-4 sm:top-4 sm:h-11 sm:w-11"
        >
          <FaHeart className="text-xs sm:text-base" />
        </button>

        {/* Badge */}
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-orange-500 px-2.5 py-1 text-[11px] font-semibold text-white sm:left-4 sm:top-4 sm:px-3 sm:text-xs">
            {product.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        {/* Category */}
        <p className="text-xs text-orange-400 sm:text-sm">
          {product.category}
        </p>

        {/* Name */}
        <h3 className="mt-1.5 min-h-[48px] line-clamp-2 text-lg font-bold leading-6 text-white sm:mt-2 sm:min-h-[56px] sm:text-xl sm:leading-7">
          {product.name}
        </h3>

        {/* Brand */}
        <p className="mt-1.5 text-xs text-gray-400 sm:mt-2 sm:text-sm">
          {product.brand}
        </p>

        {/* Price */}
        <p className="mt-3 text-xl font-bold text-orange-400 sm:mt-4 sm:text-2xl">
          {formatPrice(product.price)}
        </p>

        {/* View Details */}
        <Link
          to={`/products/${product.id}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition-all duration-300 group-hover:gap-4 sm:mt-6 sm:text-base"
        >
          View Details
          <FaArrowRight />
        </Link>
      </div>
    </motion.div>
  );
}

export default ProductCard;