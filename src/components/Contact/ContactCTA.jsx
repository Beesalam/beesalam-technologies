import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function ContactCTA() {
  return (
    <section className="bg-[#0A0A0A] py-14 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-r from-orange-500 to-yellow-400 p-6 text-center sm:p-10 md:p-16"
        >
          {/* Heading */}
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Let's Help You Find the Right Device
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-white/90 sm:mt-6 sm:text-lg sm:leading-8">
            Whether you're looking for a smartphone, laptop, accessories, or
            professional device repairs, Beesalam Technologies is here to
            provide quality products and reliable service.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
            {/* Contact */}
            <a
              href="#contact-form"
              className="w-full rounded-xl bg-white px-6 py-3.5 font-semibold text-orange-600 transition duration-300 hover:scale-[1.02] sm:w-auto sm:px-8 sm:py-4"
            >
              Contact Us
            </a>

            {/* Products */}
            <NavLink
              to="/products"
              className="w-full rounded-xl border-2 border-white px-6 py-3.5 font-semibold text-white transition duration-300 hover:bg-white hover:text-orange-600 sm:w-auto sm:px-8 sm:py-4"
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