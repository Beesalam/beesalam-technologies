import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaShieldAlt,
  FaShippingFast,
} from "react-icons/fa";
import HeroProducts from "./HeroProducts";
import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#0A0A0A] text-white"
    >
      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col-reverse items-center justify-center gap-6 px-4 py-8 sm:gap-8 sm:px-6 sm:py-10 lg:flex-row lg:items-center lg:gap-4 lg:px-8 lg:py-6">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex-1 text-center lg:flex-[1.15] lg:text-left"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-2 sm:px-4">
            <span className="text-sm">⭐</span>

            <span className="text-xs font-medium text-orange-400 sm:text-sm">
              BEESALAM TECHNOLOGIES LIMITED
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] sm:mt-6 sm:text-5xl lg:text-5xl xl:text-6xl">
  <span className="block whitespace-nowrap">
    Your Trusted Store for
  </span>

  <span className="mt-2 block bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
    Premium Phones,
  </span>

  Laptops & Smart Gadgets
</h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:mt-6 sm:text-base sm:leading-8 lg:mx-0 lg:text-lg">
            Discover genuine smartphones, laptops, accessories, and
            professional repair services backed by quality, reliability and
            excellent customer support.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
            <NavLink
              to="/products"
              className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 px-7 py-3.5 text-center font-semibold text-white transition duration-300 hover:scale-[1.02] sm:w-auto sm:px-8 sm:py-4"
            >
              Explore Products
            </NavLink>

            <NavLink
              to="/contact"
              className="w-full rounded-xl border border-orange-500 px-7 py-3.5 text-center font-semibold text-white transition duration-300 hover:bg-orange-500 sm:w-auto sm:px-8 sm:py-4"
            >
              Contact Us
            </NavLink>
          </div>

          {/* Trust Badges */}
          <div className="mt-7 flex flex-wrap justify-center gap-2.5 sm:mt-8 sm:gap-3 lg:justify-start">
            <div className="flex items-center gap-2 rounded-full border border-orange-500/20 bg-[#141414] px-3 py-2">
              <FaCheckCircle className="shrink-0 text-sm text-orange-400" />

              <span className="text-xs text-gray-300 sm:text-sm">
                100% Genuine Products
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-orange-500/20 bg-[#141414] px-3 py-2">
              <FaShieldAlt className="shrink-0 text-sm text-orange-400" />

              <span className="text-xs text-gray-300 sm:text-sm">
                Warranty Available
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-orange-500/20 bg-[#141414] px-3 py-2">
              <FaShippingFast className="shrink-0 text-sm text-orange-400" />

              <span className="text-xs text-gray-300 sm:text-sm">
                Fast Delivery
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="w-full flex-1 lg:flex-[0.85]"
        >
          <HeroProducts />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;