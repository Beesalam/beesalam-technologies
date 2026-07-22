import { motion } from "framer-motion";

import iphone from "../../assets/images/hero/iphone.png";
import samsung from "../../assets/images/hero/samsung.png";
import macbook from "../../assets/images/hero/macbook.png";
import hpLaptop from "../../assets/images/hero/hp.png";
import airpods from "../../assets/images/hero/airpods.png";
import watch from "../../assets/images/hero/watch.png";

function HeroProducts() {
  return (
    <div className="relative flex h-[380px] w-full items-center justify-center sm:h-[450px] lg:h-[550px]">

      {/* Background Glow */}
      <div className="absolute h-56 w-56 rounded-full bg-orange-500/20 blur-3xl sm:h-72 sm:w-72 lg:h-[380px] lg:w-[380px]"></div>

      {/* MacBook */}
      <motion.img
        src={macbook}
        alt="MacBook"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute z-10 w-52 sm:w-64 lg:w-[340px]"
      />

      {/* HP Laptop */}
      <motion.img
        src={hpLaptop}
        alt="HP Laptop"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-4 left-2 z-20 w-28 sm:bottom-6 sm:w-36 lg:bottom-8 lg:-left-2 lg:w-[200px]"
      />

      {/* iPhone */}
      <motion.img
        src={iphone}
        alt="iPhone"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute left-4 top-4 z-30 w-16 sm:left-10 sm:top-6 sm:w-24 lg:left-16 lg:top-8 lg:w-[150px]"
      />

      {/* Samsung */}
      <motion.img
        src={samsung}
        alt="Samsung"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 4.8, repeat: Infinity }}
        className="absolute right-3 top-5 z-30 w-16 sm:right-8 sm:top-8 sm:w-24 lg:right-6 lg:top-12 lg:w-[150px]"
      />

      {/* Watch */}
      <motion.img
        src={watch}
        alt="Watch"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3.8, repeat: Infinity }}
        className="absolute bottom-16 right-8 z-30 w-12 sm:bottom-20 sm:right-10 sm:w-16 lg:bottom-24 lg:right-14 lg:w-[110px]"
      />

      {/* AirPods */}
      <motion.img
        src={airpods}
        alt="AirPods"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity }}
        className="absolute bottom-3 left-10 z-30 w-12 sm:bottom-4 sm:left-16 sm:w-16 lg:bottom-6 lg:left-24 lg:w-[110px]"
      />
    </div>
  );
}

export default HeroProducts;