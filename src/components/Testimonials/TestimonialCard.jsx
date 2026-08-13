import { FaQuoteLeft, FaStar } from "react-icons/fa";

function TestimonialCard({
  name,
  location,
  image,
  rating,
  review,
}) {
  return (
    <div className="group flex h-full flex-col rounded-3xl border border-gray-800 bg-[#111111] p-5 transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.2)] sm:p-6 lg:p-8">
      {/* Quote Icon */}
      <FaQuoteLeft className="mb-5 text-2xl text-orange-500/70 sm:mb-6 sm:text-3xl" />

      {/* Review */}
      <p className="mb-6 flex-1 text-sm leading-7 text-gray-400 italic sm:mb-8 sm:text-base sm:leading-8">
        "{review}"
      </p>

      {/* Customer */}
      <div className="flex items-center gap-3 sm:gap-4">
        <img
          src={image}
          alt={name}
          className="h-12 w-12 shrink-0 rounded-full border-2 border-orange-500 object-cover sm:h-16 sm:w-16"
        />

        <div className="min-w-0">
          <h3 className="truncate font-bold text-white">
            {name}
          </h3>

          <p className="truncate text-xs text-orange-400 sm:text-sm">
            {location}
          </p>

          {/* Rating */}
          <div className="mt-1.5 flex gap-1 sm:mt-2">
            {[...Array(rating)].map((_, index) => (
              <FaStar
                key={index}
                className="text-xs text-yellow-400 sm:text-sm"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;