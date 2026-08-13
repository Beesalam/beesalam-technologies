import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  HiOutlineMenuAlt3,
  HiOutlineX,
  HiOutlineShoppingBag,
} from "react-icons/hi";

import logo from "../../assets/images/logo.png";
import useCartStore from "../../store/cartStore";

const links = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const totalItems = useCartStore((state) => state.totalItems);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-orange-500/20 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <NavLink
          to="/"
          onClick={() => setOpen(false)}
          className="flex min-w-0 items-center gap-2 sm:gap-3"
        >
          <img
            src={logo}
            alt="Beesalam Technologies"
            className="h-10 w-10 shrink-0 rounded-xl sm:h-12 sm:w-12"
          />

          <div className="min-w-0">
            <h1 className="text-base font-bold text-white sm:text-lg">
              BEESALAM
            </h1>

            <p className="text-[9px] tracking-[2px] text-orange-400 sm:text-xs sm:tracking-[4px]">
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

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 lg:flex">
          {/* Cart */}
          <Link
            to="/cart"
            className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-orange-500/30 text-white transition hover:border-orange-500 hover:bg-orange-500"
            aria-label="Shopping cart"
          >
            <HiOutlineShoppingBag size={24} />

            {totalItems() > 0 && (
              <span className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-orange-500 px-1 text-xs font-bold text-white">
                {totalItems()}
              </span>
            )}
          </Link>

          {/* Shop Now */}
          <NavLink
            to="/products"
            className="rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 px-6 py-3 font-semibold text-white transition duration-300 hover:scale-105"
          >
            Shop Now
          </NavLink>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Mobile Cart */}
          <Link
            to="/cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-orange-500/30 text-white transition hover:border-orange-500 hover:bg-orange-500"
            aria-label="Shopping cart"
          >
            <HiOutlineShoppingBag size={22} />

            {totalItems() > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-500 px-1 text-[10px] font-bold text-white">
                {totalItems()}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center text-3xl text-white"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden bg-[#111111] transition-all duration-300 lg:hidden ${
          open
            ? "max-h-[500px] border-t border-orange-500/20"
            : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-4 py-4 sm:px-6">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `border-b border-gray-800 py-3.5 font-medium transition ${
                  isActive
                    ? "text-orange-400"
                    : "text-white hover:text-orange-400"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Mobile Cart */}
          <Link
            to="/cart"
            onClick={() => setOpen(false)}
            className="mt-4 flex items-center justify-center gap-3 rounded-xl border border-orange-500 py-3 font-medium text-white transition hover:bg-orange-500"
          >
            <HiOutlineShoppingBag size={22} />

            <span>Cart</span>

            {totalItems() > 0 && (
              <span className="rounded-full bg-orange-500 px-2 py-1 text-xs font-bold">
                {totalItems()}
              </span>
            )}
          </Link>

          {/* Mobile Shop Button */}
          <NavLink
            to="/products"
            onClick={() => setOpen(false)}
            className="mt-3 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 py-3 text-center font-semibold text-white transition hover:scale-[1.02]"
          >
            Shop Now
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;