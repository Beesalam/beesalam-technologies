import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom"

function CategoryCard({ title, description, icon: Icon, path }) {
  return (
    <div className="group rounded-3xl border border-gray-800 bg-[#111111] p-5 transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.2)] sm:p-6 lg:p-8">
      {/* Icon */}
      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-2xl text-orange-400 transition group-hover:bg-orange-500 group-hover:text-white sm:mb-6 sm:h-16 sm:w-16 sm:text-3xl">
        <Icon />
      </div>

      {/* Title */}
      <h3 className="mb-3 text-xl font-bold sm:text-2xl">
        {title}
      </h3>

      {/* Description */}
      <p className="mb-5 text-sm leading-7 text-gray-400 sm:mb-6 sm:text-base sm:leading-7">
        {description}
      </p>

      {/* Explore */}
      <Link
        to={path}
        type="button"
        className="flex items-center gap-2 font-semibold text-orange-400 transition-all duration-300 group-hover:gap-4"
      >
        Explore
        <FaArrowRight />
      </Link>
    </div>
  );
}

export default CategoryCard;