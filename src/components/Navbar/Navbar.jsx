import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import logo from "../../assets/images/logo.png";

const links = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-orange-500/20 bg-black/70 backdrop-blur-md">
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
                `transition ${
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

        {/* Button */}
        <button className="hidden rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 px-6 py-3 font-semibold text-white transition hover:scale-105 lg:block">
          Shop Now
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-3xl text-white lg:hidden"
        >
          {open ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-orange-500/20 bg-[#111111] lg:hidden">
          <nav className="flex flex-col gap-5 p-6">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `transition ${
                    isActive
                      ? "text-orange-400"
                      : "text-white hover:text-orange-400"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <button className="rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 py-3 font-semibold text-white">
              Shop Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;