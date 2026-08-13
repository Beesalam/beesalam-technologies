import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function CTA() {
  return (
    <section className="bg-[#0A0A0A] py-16 text-white sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 to-yellow-400 p-6 text-center text-white shadow-2xl sm:p-10 lg:p-16"
        >
          {/* Heading */}
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Ready to Get Your Next Device?
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/90 sm:mt-6 sm:text-lg sm:leading-8">
            Whether you're looking for the latest smartphones, laptops,
            accessories, or expert repair services, we're here to help.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
            {/* Shop Products */}
            <NavLink
              to="/products"
              className="w-full rounded-xl bg-black px-6 py-3.5 font-semibold transition hover:scale-[1.02] sm:w-auto sm:px-8 sm:py-4"
            >
              Shop Products
            </NavLink>

            {/* Contact Us */}
            <NavLink
              to="/contact"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-white px-6 py-3.5 font-semibold transition hover:bg-white hover:text-orange-500 sm:w-auto sm:px-8 sm:py-4"
            >
              Contact Us
              <FaArrowRight />
            </NavLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;