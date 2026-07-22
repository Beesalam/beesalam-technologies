import { FiSearch } from "react-icons/fi";

function SearchBar() {
  return (
    <div className="relative w-full">
      <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-400" />

      <input
        type="text"
        placeholder="Search products..."
        className="w-full rounded-2xl border border-gray-700 bg-[#111111] py-4 pl-12 pr-4 text-white outline-none transition focus:border-orange-500"
      />
    </div>
  );
}

export default SearchBar;