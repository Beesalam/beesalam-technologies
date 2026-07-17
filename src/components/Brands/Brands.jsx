import BrandCard from "./BrandCard";
import brands from "../../data/brands";

function Brands() {
  return (
    <section className="bg-[#0A0A0A] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="font-semibold uppercase tracking-[4px] text-orange-400">
            Trusted Brands
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Brands We Offer
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            We partner with leading technology brands to bring you genuine smartphones,
            laptops, accessories and more.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
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