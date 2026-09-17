function BrandFilter({ selectedBrand, setSelectedBrand }) {
  const brands = [
    "All",
    "Apple",
    "Samsung",
    "HP",
    "Dell",
    "Lenovo",
    "JBL",
    "Sony",
    "Asus",
  ];

  return (
    <div className="mt-8">
      <h3 className="mb-4 text-lg font-semibold text-white">
        Filter by Brand
      </h3>

      <div className="flex flex-wrap gap-2 sm:gap-3">
        {brands.map((brand) => (
          <button
            key={brand}
            onClick={() => setSelectedBrand(brand)}
            className={`rounded-xl px-3 py-2 text-xs font-medium transition sm:px-4 sm:py-2.5 sm:text-sm ${
              selectedBrand === brand
                ? "bg-orange-500 text-white"
                : "bg-[#111111] text-gray-300 hover:bg-orange-500 hover:text-white"
            }`}
          >
            {brand}
          </button>
        ))}
      </div>
    </div>
  );
}

export default BrandFilter;