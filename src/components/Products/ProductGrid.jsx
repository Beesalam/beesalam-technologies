import ProductCard from "./ProductCard";
import ProductSkeleton from "./ProductSkeleton";

function ProductGrid({
  products = [],
  hasProducts = false,
  loading = false,
}) {
  if (loading) {
    return (
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (!hasProducts) {
    return (
      <div className="py-20 text-center">
        <h3 className="text-2xl font-semibold text-white">
          No Products Available
        </h3>

        <p className="mt-3 text-gray-400">
          Products added from the admin dashboard will appear here.
        </p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="py-20 text-center">
        <h3 className="text-2xl font-semibold text-white">
          No Products Found
        </h3>

        <p className="mt-3 text-gray-400">
          Try changing your search, category, or brand filter.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="animate-fade-in"
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;