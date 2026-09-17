function SortFilter({ sortBy, setSortBy }) {
  return (
    <div className="flex w-full justify-end sm:w-auto">
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="w-full rounded-xl border border-gray-700 bg-[#111111] px-3 py-2.5 text-sm text-white outline-none transition focus:border-orange-500 sm:w-auto sm:min-w-[200px] sm:px-4 sm:text-base"
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