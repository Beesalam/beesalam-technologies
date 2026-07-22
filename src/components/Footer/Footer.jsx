import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import logo from "../../assets/images/logo.png";

function Footer() {
  return (
    <footer className="border-t border-orange-500/20 bg-[#080808] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">

        {/* Company */}
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Beesalam Technologies"
              className="h-12 w-12 rounded-xl"
            />

            <div>
              <h2 className="text-xl font-bold">BEESALAM</h2>
              <p className="text-xs tracking-[4px] text-orange-400">
                TECHNOLOGIES
              </p>
            </div>
          </div>

          <p className="mt-6 leading-7 text-gray-400">
            Your trusted destination for genuine smartphones, laptops,
            accessories and professional device repair services.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="#"
              className="rounded-full bg-[#111111] p-3 transition hover:bg-orange-500"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="rounded-full bg-[#111111] p-3 transition hover:bg-orange-500"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="rounded-full bg-[#111111] p-3 transition hover:bg-orange-500"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="rounded-full bg-[#111111] p-3 transition hover:bg-orange-500"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-6 text-xl font-bold">Quick Links</h3>

          <ul className="space-y-3 text-gray-400">
            <li><a href="#" className="hover:text-orange-400">Home</a></li>
            <li><a href="#" className="hover:text-orange-400">Products</a></li>
            <li><a href="#" className="hover:text-orange-400">Services</a></li>
            <li><a href="#" className="hover:text-orange-400">About</a></li>
            <li><a href="#" className="hover:text-orange-400">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="mb-6 text-xl font-bold">Services</h3>

          <ul className="space-y-3 text-gray-400">
            <li>Phone Sales</li>
            <li>Laptop Sales</li>
            <li>Accessories</li>
            <li>Device Repairs</li>
            <li>Nationwide Delivery</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-6 text-xl font-bold">Contact</h3>

          <div className="space-y-4 text-gray-400">

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-orange-400" />
              <p>Lagos, Nigeria</p>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-orange-400" />
              <p>+234 XXX XXX XXXX</p>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-orange-400" />
              <p>info@beesalamtech.com</p>
            </div>

          </div>
        </div>

      </div>

      <div className="border-t border-orange-500/20 py-6 text-center text-gray-500">
        © {new Date().getFullYear()} BEESALAM TECHNOLOGIES LIMITED. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;