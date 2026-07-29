import { useState } from "react";
import SearchBar from "../components/Products/SearchBar";
import CategoryFilter from "../components/Products/CategoryFilter";
import BrandFilter from "../components/Products/BrandFilter";
import SortFilter from "../components/Products/SortFilter";
import ProductGrid from "../components/Products/ProductGrid";
import SectionTitle from "../components/UI/SectionTitle";

function Products() {
  // This will come from the backend later
  const products = [];

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [loading, setLoading] = useState(false);

  const clearFilters = () => {
    setSearch("");
    setSelectedCategory("All");
    setSelectedBrand("All");
    setSortBy("default");
  };

  const filteredProducts = products
    .filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.brand.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      const matchesBrand =
        selectedBrand === "All" ||
        product.brand === selectedBrand;

      return matchesSearch && matchesCategory && matchesBrand;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "low-high":
          return a.price - b.price;

        case "high-low":
          return b.price - a.price;

        case "name":
          return a.name.localeCompare(b.name);

        default:
          return 0;
      }
    });

  return (
    <main className="min-h-screen bg-[#0A0A0A] pt-28 pb-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          subtitle="Our Products"
          title="Discover Premium Gadgets"
          description="Browse our collection of genuine smartphones, laptops, accessories and more."
        />

        <div className="mt-12 space-y-8">
          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <CategoryFilter
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />

            <SortFilter
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          </div>

          <BrandFilter
            selectedBrand={selectedBrand}
            setSelectedBrand={setSelectedBrand}
          />
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-gray-300">
            Showing{" "}
            <span className="font-semibold text-orange-500">
              {filteredProducts.length}
            </span>{" "}
            {filteredProducts.length === 1 ? "Product" : "Products"}
          </p>

          {(search ||
            selectedCategory !== "All" ||
            selectedBrand !== "All" ||
            sortBy !== "default") && (
            <button
              onClick={clearFilters}
              className="rounded-xl border border-orange-500 px-5 py-2 text-orange-500 transition hover:bg-orange-500 hover:text-white"
            >
              Clear Filters
            </button>
          )}
        </div>

        <ProductGrid
          products={filteredProducts}
          hasProducts={products.length > 0}
        />
      </div>
    </main>
  );
}

export default Products;