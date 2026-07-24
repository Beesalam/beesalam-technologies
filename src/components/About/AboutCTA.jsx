import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function AboutCTA() {
  return (
    <section className="bg-[#0A0A0A] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 to-orange-600 p-12 text-center shadow-2xl"
        >
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Ready to Upgrade Your Tech?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-orange-100">
            Whether you're looking for a premium smartphone, laptop,
            accessories, or expert repair services, Beesalam Technologies is
            here to provide quality products and exceptional customer service.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Link
              to="/products"
              className="rounded-xl bg-white px-8 py-4 font-semibold text-orange-600 transition hover:scale-105"
            >
              Shop Now
            </Link>

            <Link
              to="/contact"
              className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-orange-600"
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