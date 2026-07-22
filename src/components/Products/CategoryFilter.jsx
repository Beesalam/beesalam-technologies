function CategoryFilter() {
  const categories = [
    "All",
    "Phones",
    "Laptops",
    "Accessories",
    "Smart Watches",
    "Gaming",
  ];

  return (
    <div className="mt-8 flex flex-wrap gap-4">
      {categories.map((category, index) => (
        <button
          key={index}
          className={`rounded-xl px-6 py-3 font-medium transition ${
            index === 0
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