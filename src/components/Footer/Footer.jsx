import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function Footer() {
  return (
    <footer className="border-t border-orange-500/20 bg-[#080808] text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 lg:px-8">
        {/* Company */}
        <div>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Beesalam Technologies"
              className="h-10 w-10 shrink-0 rounded-xl sm:h-12 sm:w-12"
            />

            <div>
              <h2 className="text-lg font-bold sm:text-xl">
                BEESALAM
              </h2>

              <p className="text-[9px] tracking-[2px] text-orange-400 sm:text-xs sm:tracking-[4px]">
                TECHNOLOGIES
              </p>
            </div>
          </Link>

          {/* Description */}
          <p className="mt-5 text-sm leading-7 text-gray-400 sm:mt-6 sm:text-base">
            Your trusted destination for genuine smartphones, laptops,
            accessories and professional device repair services.
          </p>

          {/* Social Links */}
          <div className="mt-5 flex gap-3 sm:mt-6 sm:gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="rounded-full bg-[#111111] p-3 transition hover:bg-orange-500"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="rounded-full bg-[#111111] p-3 transition hover:bg-orange-500"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              aria-label="Twitter"
              className="rounded-full bg-[#111111] p-3 transition hover:bg-orange-500"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="rounded-full bg-[#111111] p-3 transition hover:bg-orange-500"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-lg font-bold sm:mb-6 sm:text-xl">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm text-gray-400 sm:text-base">
            <li>
              <NavLink
                to="/"
                className="transition hover:text-orange-400"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/products"
                className="transition hover:text-orange-400"
              >
                Products
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className="transition hover:text-orange-400"
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className="transition hover:text-orange-400"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="mb-5 text-lg font-bold sm:mb-6 sm:text-xl">
            Services
          </h3>

          <ul className="space-y-3 text-sm text-gray-400 sm:text-base">
            <li>Phone Sales</li>
            <li>Laptop Sales</li>
            <li>Accessories</li>
            <li>Device Repairs</li>
            <li>Nationwide Delivery</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 text-lg font-bold sm:mb-6 sm:text-xl">
            Contact
          </h3>

          <div className="space-y-4 text-sm text-gray-400 sm:text-base">
            {/* Address */}
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 shrink-0 text-orange-400" />

              <span className="leading-6">
                14, Oremeji Street, Ikeja, Lagos State, Nigeria
              </span>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="shrink-0 text-orange-400" />

              <a
                href="tel:+2348063562104"
                className="transition hover:text-orange-400"
              >
                +234 806 356 2104
              </a>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <FaEnvelope className="mt-1 shrink-0 text-orange-400" />

              <a
                href="mailto:beesalamtechnologieslimited@gmail.com"
                className="break-all transition hover:text-orange-400"
              >
                beesalamtechnologieslimited@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-orange-500/20 px-4 py-5 text-center text-xs text-gray-500 sm:px-6 sm:py-6 sm:text-sm">
        © {new Date().getFullYear()} BEESALAM TECHNOLOGIES LIMITED. All
        Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;