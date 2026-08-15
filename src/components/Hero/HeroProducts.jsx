import { motion } from "framer-motion";

import iphone from "../../assets/images/hero/iphone.png";
import samsung from "../../assets/images/hero/samsung.png";
import macbook from "../../assets/images/hero/macbook.png";
import hpLaptop from "../../assets/images/hero/hp.png";
import airpods from "../../assets/images/hero/airpods.png";
import watch from "../../assets/images/hero/watch.png";

function HeroProducts() {
  return (
    <div className="relative mx-auto flex h-[280px] w-full max-w-[360px] items-center justify-center sm:h-[390px] sm:max-w-[440px] lg:h-[450px] lg:max-w-[600px] lg:overflow-visible">
      {/* Background Glow */}
      <div className="absolute h-44 w-44 rounded-full bg-orange-500/20 blur-3xl sm:h-64 sm:w-64 lg:h-[360px] lg:w-[360px]" />

     
      <motion.img
        src={macbook}
        alt="MacBook"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute z-10 w-36 sm:w-52 lg:w-[300px]"
      />

     
      <motion.img
        src={hpLaptop}
        alt="HP Laptop"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-1 left-0 z-20 w-22 sm:bottom-4 sm:left-1 sm:w-32 lg:bottom-5 lg:-left-2 lg:w-[190px]"
      />

      <motion.img
        src={iphone}
        alt="iPhone"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute left-2 top-1 z-30 w-11 sm:left-7 sm:top-4 sm:w-20 lg:left-14 lg:top-5 lg:w-[140px]"
      />

      <motion.img
        src={samsung}
        alt="Samsung"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 4.8, repeat: Infinity }}
        className="absolute right-1 top-2 z-30 w-11 sm:right-5 sm:top-5 sm:w-20 lg:right-5 lg:top-8 lg:w-[140px]"
      />

      <motion.img
        src={watch}
        alt="Smart Watch"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3.8, repeat: Infinity }}
        className="absolute bottom-8 right-4 z-30 w-9 sm:bottom-14 sm:right-7 sm:w-14 lg:bottom-16 lg:right-12 lg:w-[110px]"
      />

      {/* AirPods */}
      {/* <motion.img
        src={airpods}
        alt="AirPods"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity }}
        className="absolute bottom-0 left-7 z-30 w-9 sm:bottom-2 sm:left-12 sm:w-14 lg:bottom-2 lg:left-20 lg:w-[100px]"
      /> */}
    </div>
  );
}

export default HeroProducts;