import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

function ServiceCard({ title, description, icon: Icon }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group rounded-3xl border border-gray-800 bg-[#111111] p-8 transition-all duration-300 hover:border-orange-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]"
    >
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 text-3xl text-orange-400 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
        <Icon />
      </div>

      <h3 className="mb-3 text-2xl font-bold">
        {title}
      </h3>

      <p className="mb-6 leading-7 text-gray-400">
        {description}
      </p>

      <button className="flex items-center gap-2 font-semibold text-orange-400 transition-all duration-300 group-hover:gap-4">
        Learn More
        <FaArrowRight />
      </button>
    </motion.div>
  );
}

export default ServiceCard;