import { motion } from "framer-motion";

function FeatureCard({ title, description, icon: Icon }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group rounded-3xl border border-gray-800 bg-[#111111] p-5 transition-all duration-300 hover:border-orange-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.2)] sm:p-6 lg:p-8"
    >
      {/* Icon */}
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-2xl text-orange-400 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white sm:mb-6 sm:h-16 sm:w-16 sm:text-3xl">
        <Icon />
      </div>

      {/* Title */}
      <h3 className="mb-3 text-xl font-bold sm:text-2xl">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-7 text-gray-400 sm:text-base">
        {description}
      </p>
    </motion.div>
  );
}

export default FeatureCard;