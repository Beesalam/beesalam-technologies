function SortFilter({ sortBy, setSortBy }) {
  return (
    <div className="flex justify-end">
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="rounded-xl border border-gray-700 bg-[#111111] px-5 py-3 text-white outline-none focus:border-orange-500"
      >
        <option value="default">Featured</option>
        <option value="low-high">Price: Low to High</option>
        <option value="high-low">Price: High to Low</option>
        <option value="name">Name (A-Z)</option>
      </select>
    </div>
  );
}

export default SortFilter;