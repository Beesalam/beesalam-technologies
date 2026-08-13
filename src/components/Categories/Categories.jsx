import CategoryCard from "./CategoryCard";
import categories from "../../data/categories";

function Categories() {
  return (
    <section className="bg-[#0A0A0A] py-16 text-white sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 text-center sm:mb-12 lg:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[3px] text-orange-400 sm:text-sm sm:tracking-[4px]">
            Categories
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:mt-4 sm:text-4xl md:text-5xl">
            Shop by Category
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-gray-400 sm:mt-4 sm:text-base sm:leading-8">
            Browse our wide range of premium gadgets and professional
            services.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
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