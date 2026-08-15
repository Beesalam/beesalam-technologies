import { FaMobileAlt, FaLaptop, FaHeadphones, FaTools, } from "react-icons/fa";

import { IoWatch } from "react-icons/io5";
import { GiGamepad } from "react-icons/gi";

const categories = [
  {
    id: 1,
    title: "Smartphones",
    description: "Latest iPhone, Samsung, Tecno, Infinix and more.",
    icon: FaMobileAlt,
     path: "/products?category=Phones"
  },
  {
    id: 2,
    title: "Laptops",
    description: "MacBook, HP, Dell, Lenovo and other top brands.",
    icon: FaLaptop,
    path: "/products?category=Laptops",
  },
  {
    id: 3,
    title: "Smart Watches",
    description: "Apple Watch, Samsung Galaxy Watch and more.",
    icon: IoWatch,
     path: "/products?category=Smart Watches"
  },
  {
    id: 4,
    title: "Accessories",
    description: "AirPods, Chargers, Speakers, Cases and more.",
    icon: FaHeadphones,
    path: "/products?category=Accessories"
  },
  {
    id: 5,
    title: "Gaming",
    description: "PlayStation, Controllers and Gaming Accessories.",
    icon: GiGamepad,
     path: "/products?category=Gaming"
  },
  {
    id: 6,
    title: "Repairs",
    description: "Professional phone and laptop repair services.",
    icon: FaTools,
     path: "/services"
  },
];

export default categories;