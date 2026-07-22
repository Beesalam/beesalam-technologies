import ProductCard from "./ProductCard";

function ProductGrid({ products = [] }) {
  if (products.length === 0) {
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

  return (
    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id || product._id}
          product={product}
        />
      ))}
    </div>
  );
}

export default ProductGrid;