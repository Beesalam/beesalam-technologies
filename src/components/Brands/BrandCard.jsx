function BrandCard({ image, name }) {
  return (
    <div className="group flex h-28 items-center justify-center rounded-2xl border border-gray-800 bg-[#111111] p-4 transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.2)] sm:h-36 sm:p-6">
      <img
        src={image}
        alt={name}
        className="max-h-16 max-w-[120px] object-contain grayscale transition duration-300 group-hover:grayscale-0 sm:max-h-20 sm:max-w-[150px]"
      />
    </div>
  );
}

export default BrandCard;