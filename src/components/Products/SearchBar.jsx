import { FiSearch } from "react-icons/fi";

function SearchBar({ search, setSearch }) {
  return (
    <div className="relative w-full">
      <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-400" />

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-2xl border border-gray-700 bg-[#111111] py-3.5 pl-12 pr-4 text-sm text-white outline-none transition focus:border-orange-500 sm:py-4 sm:text-base"
      />
    </div>
  );
}

export default SearchBar;