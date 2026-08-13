import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaUsers,
  FaAward,
  FaShippingFast,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

import aboutImage from "../../assets/images/about/about.png";
import SectionTitle from "../UI/SectionTitle";

function About() {
  return (
    <section className="bg-[#0A0A0A] py-16 text-white sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <SectionTitle
          subtitle="About Us"
          title="Your Trusted Technology Partner"
          description="At Beesalam Technologies Limited, we provide premium gadgets, expert repairs, and exceptional customer service across Nigeria."
        />

        <div className="mt-10 grid items-center gap-10 sm:mt-12 sm:gap-12 lg:mt-16 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src={aboutImage}
              alt="About Beesalam Technologies"
              className="w-full rounded-3xl border border-orange-500/20 shadow-2xl"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold leading-tight sm:text-4xl">
              Premium Gadgets.

              <span className="block text-orange-400">
                Professional Service.
              </span>
            </h3>

            <p className="mt-5 text-sm leading-7 text-gray-400 sm:mt-6 sm:text-base sm:leading-8">
              We specialize in genuine smartphones, laptops, accessories,
              and professional device repairs. Our goal is to provide
              high-quality technology products backed by excellent customer
              support and reliable after-sales service.
            </p>

            {/* Benefits */}
            <div className="mt-7 space-y-3 sm:mt-8 sm:space-y-4">
              <div className="flex items-start gap-3">
                <FaCheckCircle className="mt-1 shrink-0 text-orange-400" />
                <span className="text-sm sm:text-base">
                  100% Genuine Products
                </span>
              </div>

              <div className="flex items-start gap-3">
                <FaCheckCircle className="mt-1 shrink-0 text-orange-400" />
                <span className="text-sm sm:text-base">
                  Professional Repair Services
                </span>
              </div>

              <div className="flex items-start gap-3">
                <FaCheckCircle className="mt-1 shrink-0 text-orange-400" />
                <span className="text-sm sm:text-base">
                  Affordable Prices
                </span>
              </div>

              <div className="flex items-start gap-3">
                <FaCheckCircle className="mt-1 shrink-0 text-orange-400" />
                <span className="text-sm sm:text-base">
                  Nationwide Delivery
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-5">
              {/* Customers */}
              <div className="rounded-2xl border border-gray-800 bg-[#111111] p-4 text-center sm:p-6">
                <FaUsers className="mx-auto mb-2 text-2xl text-orange-400 sm:mb-3 sm:text-3xl" />

                <h4 className="text-2xl font-bold sm:text-3xl">
                  2K+
                </h4>

                <p className="mt-1 text-xs text-gray-400 sm:mt-2 sm:text-sm">
                  Happy Customers
                </p>
              </div>

              {/* Experience */}
              <div className="rounded-2xl border border-gray-800 bg-[#111111] p-4 text-center sm:p-6">
                <FaAward className="mx-auto mb-2 text-2xl text-orange-400 sm:mb-3 sm:text-3xl" />

                <h4 className="text-2xl font-bold sm:text-3xl">
                  5+
                </h4>

                <p className="mt-1 text-xs text-gray-400 sm:mt-2 sm:text-sm">
                  Years Experience
                </p>
              </div>

              {/* Delivery */}
              <div className="rounded-2xl border border-gray-800 bg-[#111111] p-4 text-center sm:p-6">
                <FaShippingFast className="mx-auto mb-2 text-2xl text-orange-400 sm:mb-3 sm:text-3xl" />

                <h4 className="text-xl font-bold sm:text-3xl">
                  Nationwide
                </h4>

                <p className="mt-1 text-xs text-gray-400 sm:mt-2 sm:text-sm">
                  Fast Delivery
                </p>
              </div>

              {/* Satisfaction */}
              <div className="rounded-2xl border border-gray-800 bg-[#111111] p-4 text-center sm:p-6">
                <FaCheckCircle className="mx-auto mb-2 text-2xl text-orange-400 sm:mb-3 sm:text-3xl" />

                <h4 className="text-2xl font-bold sm:text-3xl">
                  100%
                </h4>

                <p className="mt-1 text-xs text-gray-400 sm:mt-2 sm:text-sm">
                  Customer Satisfaction
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <NavLink
                to="/products"
                className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 px-6 py-3.5 text-center font-semibold text-white transition hover:scale-[1.02] sm:w-auto sm:px-8 sm:py-4"
              >
                Learn More
              </NavLink>

              <NavLink
                to="/contact"
                className="w-full rounded-xl border border-orange-500 px-6 py-3.5 text-center font-semibold text-white transition hover:bg-orange-500 sm:w-auto sm:px-8 sm:py-4"
              >
                Contact Us
              </NavLink>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;