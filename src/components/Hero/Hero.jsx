import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-16 px-6 pt-24 lg:flex-row">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          {/* Badge */}
          <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm text-orange-400">
            ⭐ Trusted Technology Store in Nigeria
          </span>

          {/* Heading */}
          <h1 className="mt-6 text-5xl font-extrabold leading-tight lg:text-7xl">
            Your Trusted Store for
            <span className="block bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
              Premium Phones,
            </span>
            Laptops & Gadgets
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Discover genuine smartphones, laptops, accessories and
            professional repair services backed by quality, reliability,
            and exceptional customer support.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 px-8 py-4 font-semibold transition hover:scale-105">
              Explore Products
            </button>

            <button className="rounded-xl border border-orange-500 px-8 py-4 font-semibold transition hover:bg-orange-500">
              Contact Us
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-300">
            <span>✔ Genuine Products</span>
            <span>✔ Warranty</span>
            <span>✔ Fast Delivery</span>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex flex-1 items-center justify-center"
        >
          {/* Orange Glow */}
          <div className="absolute h-80 w-80 rounded-full bg-orange-500/20 blur-3xl"></div>

          {/* Placeholder */}
          <div className="relative flex h-[450px] w-[450px] items-center justify-center rounded-3xl border border-orange-500/20 bg-[#141414]">
            <h2 className="text-center text-2xl font-bold text-gray-500">
              Product Showcase
              <br />
              (Coming Next)
            </h2>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;