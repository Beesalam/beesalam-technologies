import CategoryCard from "./CategoryCard";
import categories from "../../data/categories";

function Categories() {
  return (
    <section className="bg-[#0A0A0A] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <p className="font-semibold uppercase tracking-[4px] text-orange-400">
            Categories
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Shop by Category
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Browse our wide range of premium gadgets and professional services.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              description={category.description}
              icon={category.icon}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Categories;