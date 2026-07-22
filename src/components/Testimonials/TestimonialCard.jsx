import { FaQuoteLeft, FaStar } from "react-icons/fa";

function TestimonialCard({ name, location, image, rating, review }) {
  return (
    <div className="group h-full rounded-3xl border border-gray-800 bg-[#111111] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]">

      <FaQuoteLeft className="mb-6 text-3xl text-orange-500/70" />

      <p className="mb-8 leading-8 text-gray-400 italic">
        "{review}"
      </p>

      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="h-16 w-16 rounded-full border-2 border-orange-500 object-cover"
        />

        <div>
          <h3 className="font-bold text-white">{name}</h3>

          <p className="text-sm text-orange-400">{location}</p>

          <div className="mt-2 flex gap-1">
            {[...Array(rating)].map((_, index) => (
              <FaStar
                key={index}
                className="text-sm text-yellow-400"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;