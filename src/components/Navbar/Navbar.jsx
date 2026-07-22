import { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import logo from "../../assets/images/logo.png";

const links = [
  { name: "Home", href: "#home" },
  { name: "Products", href: "#products" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-orange-500/20 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
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
        </a>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white transition duration-300 hover:text-orange-400"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Shop Button */}
        <button className="hidden rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 px-6 py-3 font-semibold text-white transition duration-300 hover:scale-105 lg:block">
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
      <div
        className={`overflow-hidden bg-[#111111] transition-all duration-300 lg:hidden ${
          open ? "max-h-96 border-t border-orange-500/20" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col p-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-gray-800 py-4 text-white transition hover:text-orange-400"
            >
              {link.name}
            </a>
          ))}

          <button className="mt-6 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 py-3 font-semibold text-white transition hover:scale-105">
            Shop Now
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;