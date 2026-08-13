import { motion } from "framer-motion";

import iphone from "../../assets/images/hero/iphone.png";
import samsung from "../../assets/images/hero/samsung.png";
import macbook from "../../assets/images/hero/macbook.png";
import hpLaptop from "../../assets/images/hero/hp.png";
import airpods from "../../assets/images/hero/airpods.png";
import watch from "../../assets/images/hero/watch.png";

function HeroProducts() {
  return (
    <div className="relative mx-auto flex h-[300px] w-full max-w-[380px] items-center justify-center overflow-hidden sm:h-[400px] sm:max-w-[450px] lg:h-[550px] lg:max-w-none lg:overflow-visible">
      {/* Background Glow */}
      <div className="absolute h-48 w-48 rounded-full bg-orange-500/20 blur-3xl sm:h-64 sm:w-64 lg:h-[380px] lg:w-[380px]" />

      {/* MacBook */}
      <motion.img
        src={macbook}
        alt="MacBook"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute z-10 w-40 sm:w-56 lg:w-[340px]"
      />

      {/* HP Laptop */}
      <motion.img
        src={hpLaptop}
        alt="HP Laptop"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-2 left-0 z-20 w-24 sm:bottom-5 sm:left-2 sm:w-32 lg:bottom-8 lg:-left-2 lg:w-[200px]"
      />

      {/* iPhone */}
      <motion.img
        src={iphone}
        alt="iPhone"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute left-3 top-2 z-30 w-12 sm:left-8 sm:top-5 sm:w-20 lg:left-16 lg:top-8 lg:w-[150px]"
      />

      {/* Samsung */}
      <motion.img
        src={samsung}
        alt="Samsung"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 4.8, repeat: Infinity }}
        className="absolute right-2 top-3 z-30 w-12 sm:right-6 sm:top-6 sm:w-20 lg:right-6 lg:top-12 lg:w-[150px]"
      />

      {/* Watch */}
      <motion.img
        src={watch}
        alt="Smart Watch"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3.8, repeat: Infinity }}
        className="absolute bottom-10 right-5 z-30 w-10 sm:bottom-16 sm:right-8 sm:w-14 lg:bottom-24 lg:right-14 lg:w-[110px]"
      />

      {/* AirPods */}
      <motion.img
        src={airpods}
        alt="AirPods"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity }}
        className="absolute bottom-1 left-8 z-30 w-10 sm:bottom-3 sm:left-14 sm:w-14 lg:bottom-6 lg:left-24 lg:w-[110px]"
      />
    </div>
  );
}

export default HeroProducts;