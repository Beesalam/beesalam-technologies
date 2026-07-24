import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function ContactHero() {
  return (
    <section className="bg-[#0A0A0A] pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-sm font-semibold uppercase tracking-[6px] text-orange-500"
        >
          Contact Us
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl"
        >
          We'd Love to Hear From You
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300"
        >
          Have questions about our products, repairs, or services?
          Our team is ready to help. Reach out today and we'll
          respond as quickly as possible.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <NavLink
            to="/products"
            className="rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105"
          >
            Shop Products
          </NavLink>

          <a
            href="#contact-form"
            className="rounded-xl border border-orange-500 px-8 py-4 font-semibold text-orange-500 transition-all duration-300 hover:bg-orange-500 hover:text-white"
          >
            Send a Message
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactHero;