import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function ContactHero() {
  return (
    <section className="bg-[#0A0A0A] pt-16 pb-14 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-20">
      <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-3 text-xs font-semibold uppercase tracking-[3px] text-orange-500 sm:mb-4 sm:text-sm sm:tracking-[6px]"
        >
          Contact Us
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-6xl"
        >
          We'd Love to Hear From You
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-300 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg"
        >
          Have questions about our products, repairs, or services?
          Our team is ready to help. Reach out today and we'll
          respond as quickly as possible.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-7 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4"
        >
          <NavLink
            to="/products"
            className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:scale-[1.02] sm:w-auto sm:px-8 sm:py-4"
          >
            Shop Products
          </NavLink>

          <a
            href="#contact-form"
            className="w-full rounded-xl border border-orange-500 px-6 py-3.5 font-semibold text-orange-500 transition-all duration-300 hover:bg-orange-500 hover:text-white sm:w-auto sm:px-8 sm:py-4"
          >
            Send a Message
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactHero;