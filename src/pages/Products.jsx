import SearchBar from "../components/Products/SearchBar";
import CategoryFilter from "../components/Products/CategoryFilter";
import ProductGrid from "../components/Products/ProductGrid";
import SectionTitle from "../components/UI/SectionTitle";

function Products() {
  // This will come from the backend later
  const products = [];

  return (
    <main className="min-h-screen bg-[#0A0A0A] pt-28 pb-20 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          subtitle="Our Products"
          title="Discover Premium Gadgets"
          description="Browse our collection of genuine smartphones, laptops, accessories and more."
        />

        <div className="mt-12">
          <SearchBar />
          <CategoryFilter />
        </div>

        <ProductGrid products={products} />

      </div>
    </main>
  );
}

export default Products;