function SectionTitle({ subtitle, title, description }) {
  return (
    <div className="mb-10 text-center sm:mb-12 lg:mb-16">
      {/* Subtitle */}
      <p className="text-xs font-semibold uppercase tracking-[3px] text-orange-400 sm:text-sm sm:tracking-[4px]">
        {subtitle}
      </p>

      {/* Title */}
      <h2 className="mt-3 text-3xl font-bold leading-tight sm:mt-4 sm:text-4xl md:text-5xl">
        {title}
      </h2>

      {/* Description */}
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:mt-5 sm:text-base sm:leading-8 lg:text-lg">
        {description}
      </p>
    </div>
  );
}

export default SectionTitle;