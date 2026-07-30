import {
  FiGrid,
  FiBox,
  FiShoppingCart,
  FiUsers,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const menuItems = [
  { name: "Dashboard", path: "/admin/dashboard", icon: FiGrid },
  { name: "Products", path: "/admin/products", icon: FiBox },
  { name: "Orders", path: "/admin/orders", icon: FiShoppingCart },
  { name: "Customers", path: "/admin/customers", icon: FiUsers },
  { name: "Settings", path: "/admin/settings", icon: FiSettings },
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-zinc-900 text-white flex flex-col">
      <div className="h-20 flex items-center justify-center border-b border-zinc-800">
        <img
          src={logo}
          alt="Beesalam Technologies"
          className="h-12 object-contain"
        />
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map(({ name, path, icon: Icon }) => (
          <NavLink
            key={name}
            to={path}
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

      <div className="p-4 border-t border-zinc-800">
        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-zinc-300 hover:bg-red-500 hover:text-white transition-all">
          <FiLogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;