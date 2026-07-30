import { FiBell, FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <header className="h-20 bg-white border-b border-gray-200 px-8 flex items-center justify-between">
      {/* Left */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-sm text-gray-500">
          Welcome back, Admin 👋
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">
        {/* Search */}
        <div className="hidden lg:flex items-center bg-gray-100 rounded-xl px-4 py-2 w-72">
          <FiSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none ml-3 w-full text-sm"
          />
        </div>

        {/* Notification */}
        <button className="relative h-11 w-11 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
          <FiBell size={20} className="text-gray-700" />

          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-orange-500"></span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="h-11 w-11 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
            A
          </div>

          <div className="hidden md:block">
            <p className="font-semibold text-gray-800">Administrator</p>
            <p className="text-sm text-gray-500">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;