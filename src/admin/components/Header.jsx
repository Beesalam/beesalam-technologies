import {
  FiBell,
  FiMenu,
  FiSearch,
} from "react-icons/fi";
import { useLocation } from "react-router-dom";

const Header = ({ setSidebarOpen }) => {
  const location = useLocation();

  const getPageTitle = () => {
    if (location.pathname.includes("/products")) return "Products";
    if (location.pathname.includes("/orders")) return "Orders";
    if (location.pathname.includes("/customers")) return "Customers";
    if (location.pathname.includes("/settings")) return "Settings";
    if (location.pathname.includes("/messages")) return "Messages";
    return "Dashboard";
  };

  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-gray-200 bg-white px-4 sm:px-6 md:px-8">
      {/* Left */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500 text-white lg:hidden"
        >
          <FiMenu size={22} />
        </button>

        <div>
          <h1 className="text-xl font-bold text-gray-800 sm:text-2xl">
            {getPageTitle()}
          </h1>

          <p className="hidden text-sm text-gray-500 sm:block">
            Welcome back, Admin 👋
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2 sm:gap-3 md:gap-5">
        {/* Search */}
        <div className="hidden xl:flex items-center bg-gray-100 rounded-xl px-4 py-2 w-72">
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
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
            A
          </div>

          <div className="hidden md:block">
            <p className="font-semibold text-gray-800">
              Administrator
            </p>

            <p className="text-sm text-gray-500">
              Admin
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;