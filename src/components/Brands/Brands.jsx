import BrandCard from "./BrandCard";
import brands from "../../data/brands";

function Brands() {
  return (
    <section className="bg-[#0A0A0A] py-16 text-white sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 text-center sm:mb-12 lg:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[3px] text-orange-400 sm:text-sm sm:tracking-[4px]">
            Trusted Brands
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:mt-4 sm:text-4xl">
            Brands We Offer
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-gray-400 sm:mt-4 sm:text-base sm:leading-8">
            We partner with leading technology brands to bring you genuine
            smartphones, laptops, accessories and more.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand) => (
            <BrandCard
              key={brand.id}
              image={brand.image}
              name={brand.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Brands;