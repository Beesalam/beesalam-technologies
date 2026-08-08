import {
  FiGrid,
  FiBox,
  FiShoppingCart,
  FiUsers,
  FiSettings,
  FiLogOut,
  FiMail,
  FiX,
} from "react-icons/fi";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const menuItems = [
  { name: "Dashboard", path: "/admin/dashboard", icon: FiGrid },
  { name: "Products", path: "/admin/products", icon: FiBox },
  { name: "Orders", path: "/admin/orders", icon: FiShoppingCart },
  { name: "Customers", path: "/admin/customers", icon: FiUsers },
  { name: "Settings", path: "/admin/settings", icon: FiSettings },
  { name: "Messages", path: "/admin/messages", icon: FiMail },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-72 flex-col bg-zinc-900 text-white transition-transform duration-300
        ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }
        lg:translate-x-0 lg:z-30`}
      >
        {/* Logo */}
        <div className="h-20 flex items-center  gap-3 justify-between px-5 border-b border-zinc-800">
          <img
            src={logo}
            alt="Beesalam Technologies"
            className="h-12 object-contain"
          />

           <div>
            <h1 className="text-lg font-bold text-white">
              BEESALAM
            </h1>

            <p className="text-xs tracking-[4px] text-orange-400">
              TECHNOLOGIES
            </p>
          </div>
          

          {/* Close Button (Mobile Only) */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {menuItems.map(({ name, path, icon: Icon }) => (
            <NavLink
              key={name}
              to={path}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive
                    ? "bg-orange-500 text-white"
                    : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
                }`
              }
            >
              <Icon size={20} />
              <span>{name}</span>
            </NavLink>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-zinc-800">
          <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-zinc-300 hover:bg-red-500 hover:text-white transition-all">
            <FiLogOut size={20} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;