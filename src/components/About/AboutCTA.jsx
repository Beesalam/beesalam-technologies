import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function AboutCTA() {
  return (
    <section className="bg-[#0A0A0A] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-center shadow-2xl sm:p-10 lg:p-12"
        >
          {/* Heading */}
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Ready to Upgrade Your Tech?
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-orange-100 sm:mt-6 sm:text-lg sm:leading-8">
            Whether you're looking for a premium smartphone, laptop,
            accessories, or expert repair services, Beesalam Technologies is
            here to provide quality products and exceptional customer service.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-5">
            <Link
              to="/products"
              className="w-full rounded-xl bg-white px-6 py-3.5 font-semibold text-orange-600 transition hover:scale-[1.02] sm:w-auto sm:px-8 sm:py-4"
            >
              Shop Now
            </Link>

            <Link
              to="/contact"
              className="w-full rounded-xl border-2 border-white px-6 py-3.5 font-semibold text-white transition hover:bg-white hover:text-orange-600 sm:w-auto sm:px-8 sm:py-4"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutCTA;