import { motion } from "framer-motion";

import iphone from "../../assets/images/hero/iphone.png";
import samsung from "../../assets/images/hero/samsung.png";
import macbook from "../../assets/images/hero/macbook.png";
import hpLaptop from "../../assets/images/hero/hp.png";
import airpods from "../../assets/images/hero/airpods.png";
import watch from "../../assets/images/hero/watch.png";

function HeroProducts() {
  return (
    <div className="relative flex h-[550px] w-full items-center justify-center">

      {/* Background Glow */}
      <div className="absolute h-[380px] w-[380px] rounded-full bg-orange-500/20 blur-3xl"></div>

      {/* MacBook */}
      <motion.img
        src={macbook}
        alt="MacBook"
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[340px] z-10"
      />

      {/* HP Laptop */}
      <motion.img
        src={hpLaptop}
        alt="HP Laptop"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-2 bottom-8 w-[200px] z-20"
      />

      {/* iPhone */}
      <motion.img
        src={iphone}
        alt="iPhone"
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-16 top-8 w-[150px] z-30"
      />

      {/* Samsung */}
      <motion.img
        src={samsung}
        alt="Samsung"
        animate={{ y: [0, 12, 0] }}
        transition={{
          duration: 4.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-6 top-12 w-[150px] z-30"
      />

      {/* Watch */}
      <motion.img
        src={watch}
        alt="Apple Watch"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 3.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-14 bottom-24 w-[110px] z-30"
      />

      {/* AirPods */}
      <motion.img
        src={airpods}
        alt="AirPods"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-24 bottom-6 w-[110px] z-30"
      />
    </div>
  );
}

export default HeroProducts;