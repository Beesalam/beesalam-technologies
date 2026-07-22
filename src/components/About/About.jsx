import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaUsers,
  FaAward,
  FaShippingFast,
} from "react-icons/fa";

import aboutImage from "../../assets/images/about/about.png";
import SectionTitle from "../UI/SectionTitle";

function About() {
  return (
    <section className="bg-[#0A0A0A] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          subtitle="About Us"
          title="Your Trusted Technology Partner"
          description="At Beesalam Technologies Limited, we provide premium gadgets, expert repairs, and exceptional customer service across Nigeria."
        />

        <div className="mt-16 grid items-center gap-16 lg:grid-cols-2">

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
            <h3 className="text-4xl font-bold leading-tight">
              Premium Gadgets.
              <span className="block text-orange-400">
                Professional Service.
              </span>
            </h3>

            <p className="mt-6 leading-8 text-gray-400">
              We specialize in genuine smartphones, laptops, accessories,
              and professional device repairs. Our goal is to provide
              high-quality technology products backed by excellent customer
              support and reliable after-sales service.
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-orange-400" />
                <span>100% Genuine Products</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-orange-400" />
                <span>Professional Repair Services</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-orange-400" />
                <span>Affordable Prices</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-orange-400" />
                <span>Nationwide Delivery</span>
              </div>

            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-6">

              <div className="rounded-2xl border border-gray-800 bg-[#111111] p-6 text-center">
                <FaUsers className="mx-auto mb-3 text-3xl text-orange-400" />
                <h4 className="text-3xl font-bold">2K+</h4>
                <p className="mt-2 text-gray-400">Happy Customers</p>
              </div>

              <div className="rounded-2xl border border-gray-800 bg-[#111111] p-6 text-center">
                <FaAward className="mx-auto mb-3 text-3xl text-orange-400" />
                <h4 className="text-3xl font-bold">5+</h4>
                <p className="mt-2 text-gray-400">Years Experience</p>
              </div>

              <div className="rounded-2xl border border-gray-800 bg-[#111111] p-6 text-center">
                <FaShippingFast className="mx-auto mb-3 text-3xl text-orange-400" />
                <h4 className="text-3xl font-bold">Nationwide</h4>
                <p className="mt-2 text-gray-400">Fast Delivery</p>
              </div>

              <div className="rounded-2xl border border-gray-800 bg-[#111111] p-6 text-center">
                <FaCheckCircle className="mx-auto mb-3 text-3xl text-orange-400" />
                <h4 className="text-3xl font-bold">100%</h4>
                <p className="mt-2 text-gray-400">Customer Satisfaction</p>
              </div>

            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 px-8 py-4 font-semibold text-white transition hover:scale-105">
                Learn More
              </button>

              <button className="rounded-xl border border-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-500">
                Contact Us
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;