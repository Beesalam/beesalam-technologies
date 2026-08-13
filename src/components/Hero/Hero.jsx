import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaShieldAlt,
  FaShippingFast,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

import HeroProducts from "./HeroProducts";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#0A0A0A] text-white"
    >
      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col-reverse items-center justify-between gap-10 px-4 py-10 sm:px-6 sm:py-12 lg:min-h-[calc(100vh-96px)] lg:flex-row lg:gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full flex-1 text-center lg:text-left"
        >
          {/* Badge */}
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-2 sm:px-4">
            <span className="shrink-0 text-sm sm:text-base">
              ⭐
            </span>

            <span className="text-[10px] font-medium leading-4 text-orange-400 sm:text-sm">
              BEESALAM TECHNOLOGIES LIMITED
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-3xl font-extrabold leading-[1.15] sm:text-5xl lg:text-7xl">
            Your Trusted Store for

            <span className="mt-2 block bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
              Premium Phones,
            </span>

            Laptops & Smart Gadgets
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-gray-400 sm:text-lg sm:leading-8 lg:mx-0">
            Discover genuine smartphones, laptops, accessories, and
            professional repair services backed by quality,
            reliability and excellent customer support.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 lg:justify-start">
            <NavLink
              to="/products"
              className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 px-6 py-3.5 text-center font-semibold text-white transition duration-300 hover:scale-105 sm:w-auto sm:px-8 sm:py-4"
            >
              Explore Products
            </NavLink>

            <NavLink
              to="/contact"
              className="w-full rounded-xl border border-orange-500 px-6 py-3.5 text-center font-semibold text-white transition duration-300 hover:bg-orange-500 sm:w-auto sm:px-8 sm:py-4"
            >
              Contact Us
            </NavLink>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
            <div className="flex w-full items-center justify-center gap-2 rounded-full border border-orange-500/20 bg-[#141414] px-4 py-2.5 sm:w-auto">
              <FaCheckCircle className="shrink-0 text-orange-400" />

              <span className="text-xs text-gray-300 sm:text-sm">
                100% Genuine Products
              </span>
            </div>

            <div className="flex w-full items-center justify-center gap-2 rounded-full border border-orange-500/20 bg-[#141414] px-4 py-2.5 sm:w-auto">
              <FaShieldAlt className="shrink-0 text-orange-400" />

              <span className="text-xs text-gray-300 sm:text-sm">
                Warranty Available
              </span>
            </div>

            <div className="flex w-full items-center justify-center gap-2 rounded-full border border-orange-500/20 bg-[#141414] px-4 py-2.5 sm:w-auto">
              <FaShippingFast className="shrink-0 text-orange-400" />

              <span className="text-xs text-gray-300 sm:text-sm">
                Fast Delivery
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex w-full min-w-0 flex-1 items-center justify-center overflow-hidden"
        >
          <div className="w-full max-w-[420px]">
            <HeroProducts />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;