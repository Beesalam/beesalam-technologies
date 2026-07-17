import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaShieldAlt,
  FaShippingFast,
} from "react-icons/fa";
import HeroProducts from "./HeroProducts";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] text-white">
      <div className="mx-auto flex min-h-[calc(100vh-96px)] max-w-7xl flex-col items-center justify-between gap-12 px-6 py-10 lg:flex-row">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2">
            <span>⭐</span>
            <span className="text-sm font-medium text-orange-400">
              BEESALAM TECHNOLOGIES LIMITED
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-5xl font-extrabold leading-tight lg:text-7xl">
            Your Trusted Store for
            <span className="mt-2 block bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
              Premium Phones,
            </span>
            Laptops & Smart Gadgets
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
            Discover genuine smartphones, laptops, accessories, and
            professional repair services backed by quality, reliability,
            and excellent customer support.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105">
              Explore Products
            </button>

            <button className="rounded-xl border border-orange-500 px-8 py-4 font-semibold text-white transition duration-300 hover:bg-orange-500">
              Contact Us
            </button>
          </div>

          {/* Trust Badges */}
          <div className="mt-10 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 rounded-full border border-orange-500/20 bg-[#141414] px-4 py-2">
              <FaCheckCircle className="text-orange-400" />
              <span className="text-sm text-gray-300">
                100% Genuine Products
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-orange-500/20 bg-[#141414] px-4 py-2">
              <FaShieldAlt className="text-orange-400" />
              <span className="text-sm text-gray-300">
                Warranty Available
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-orange-500/20 bg-[#141414] px-4 py-2">
              <FaShippingFast className="text-orange-400" />
              <span className="text-sm text-gray-300">
                Fast Delivery
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-1 items-center justify-center"
        >
          <HeroProducts />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;