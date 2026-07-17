import { FaArrowRight } from "react-icons/fa";

function CategoryCard({ title, description, icon: Icon }) {
  return (
    <div className="group rounded-3xl border border-gray-800 bg-[#111111] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]">

      <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 text-3xl text-orange-400 transition group-hover:bg-orange-500 group-hover:text-white">
        <Icon />
      </div>

      <h3 className="mb-3 text-2xl font-bold">
        {title}
      </h3>

      <p className="mb-6 text-gray-400">
        {description}
      </p>

      <button className="flex items-center gap-2 font-semibold text-orange-400 transition-all duration-300 group-hover:gap-4">
        Explore
        <FaArrowRight />
      </button>
    </div>
  );
}

export default CategoryCard;