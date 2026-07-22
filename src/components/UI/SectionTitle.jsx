function SectionTitle({ subtitle, title, description }) {
  return (
    <div className="mb-16 text-center">
      <p className="font-semibold uppercase tracking-[4px] text-orange-400">
        {subtitle}
      </p>

      <h2 className="mt-4 text-4xl font-bold md:text-5xl">
        {title}
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-400">
        {description}
      </p>
    </div>
  );
}

export default SectionTitle;