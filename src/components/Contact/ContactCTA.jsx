import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function ContactCTA() {
  return (
    <section className="bg-[#0A0A0A] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-r from-orange-500 to-yellow-400 p-10 text-center md:p-16"
        >
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Let's Help You Find the Right Device
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/90">
            Whether you're looking for a smartphone, laptop, accessories, or
            professional device repairs, Beesalam Technologies is here to
            provide quality products and reliable service.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#contact-form"
              className="rounded-xl bg-white px-8 py-4 font-semibold text-orange-600 transition duration-300 hover:scale-105"
            >
              Contact Us
            </a>

            <NavLink
              to="/products"
              className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white transition duration-300 hover:bg-white hover:text-orange-600"
            >
              Browse Products
            </NavLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactCTA;