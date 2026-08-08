import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import logo from "../../assets/images/logo.png";
import { HiOutlineShoppingBag } from "react-icons/hi";
import useCartStore from "../../store/cartStore";

const links = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" }
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const totalItems = useCartStore((state) => state.totalItems);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-orange-500/20 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Beesalam Technologies"
            className="h-12 w-12 rounded-xl"
          />

          <div>
            <h1 className="text-lg font-bold text-white">
              BEESALAM
            </h1>

            <p className="text-xs tracking-[4px] text-orange-400">
              TECHNOLOGIES
            </p>
          </div>
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `font-medium transition duration-300 ${
                  isActive
                    ? "text-orange-400"
                    : "text-white hover:text-orange-400"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
  
         <Link
          to="/cart"
          className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-orange-500/30 text-white transition hover:border-orange-500 hover:bg-orange-500"
        >
          <HiOutlineShoppingBag size={24} />

        {totalItems() > 0 && (
         <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
           {totalItems()}
         </span>
         )}
       </Link> 
       <NavLink
         to="/products"
         className="rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 px-6 py-3 font-semibold text-white transition duration-300 hover:scale-105"
       >
        Shop Now
      </NavLink>
       </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-3xl text-white lg:hidden"
        >
          {open ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden bg-[#111111] transition-all duration-300 lg:hidden ${
          open ? "max-h-110 border-t border-orange-500/20" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col p-6">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `border-b border-gray-800 py-4 font-medium transition ${
                  isActive
                    ? "text-orange-400"
                    : "text-white hover:text-orange-400"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <Link
             to="/cart"
             onClick={() => setOpen(false)}
             className="mt-6 flex items-center justify-center gap-3 rounded-xl border border-orange-500 py-3 text-white"
          >
            <HiOutlineShoppingBag size={22} />

            Cart

         {totalItems() > 0 && (
         <span className="rounded-full bg-orange-500 px-2 py-1 text-xs">
           {totalItems()}
         </span>
          )}
         </Link>

          <NavLink
            to="/products"
            onClick={() => setOpen(false)}
            className="mt-6 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 py-3 text-center font-semibold text-white transition hover:scale-105"
          >
            Shop Now
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;