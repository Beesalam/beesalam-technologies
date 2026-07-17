function BrandCard({ image, name }) {
  return (
    <div className="group flex h-36 items-center justify-center rounded-2xl border border-gray-800 bg-[#111111] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]">
      <img
        src={image}
        alt={name}
        className="max-h-16 w-auto grayscale transition duration-300 group-hover:grayscale-0"
      />
    </div>
  );
}

export default BrandCard;