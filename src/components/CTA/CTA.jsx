import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

function CTA() {
  return (
    <section className="bg-[#0A0A0A] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 to-yellow-400 p-10 text-center text-white shadow-2xl lg:p-16"
        >
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Ready to Get Your Next Device?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
            Whether you're looking for the latest smartphones, laptops,
            accessories, or expert repair services, we're here to help.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="rounded-xl bg-black px-8 py-4 font-semibold transition hover:scale-105">
              Shop Products
            </button>

            <button className="flex items-center gap-2 rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-orange-500">
              Contact Us
              <FaArrowRight />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;