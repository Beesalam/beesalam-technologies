function CategoryFilter({
  selectedCategory,
  setSelectedCategory,
}) {
  const categories = [
    "All",
    "Phones",
    "Laptops",
    "Accessories",
    "Smart Watches",
    "Gaming",
  ];

  return (
    <div className="flex flex-wrap gap-2 sm:gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`rounded-xl px-3 py-2 text-xs font-medium transition sm:px-4 sm:py-2.5 sm:text-sm lg:px-5 ${
            selectedCategory === category
              ? "bg-orange-500 text-white"
              : "bg-[#111111] text-gray-300 hover:bg-orange-500 hover:text-white"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;