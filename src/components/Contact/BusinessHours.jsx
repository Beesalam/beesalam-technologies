import { motion } from "framer-motion";
import { FaClock } from "react-icons/fa";

const hours = [
  { day: "Monday", time: "9:00 AM - 6:00 PM" },
  { day: "Tuesday", time: "9:00 AM - 6:00 PM" },
  { day: "Wednesday", time: "9:00 AM - 6:00 PM" },
  { day: "Thursday", time: "9:00 AM - 6:00 PM" },
  { day: "Friday", time: "9:00 AM - 6:00 PM" },
  { day: "Saturday", time: "10:00 AM - 5:30 PM" },
  { day: "Sunday", time: "Closed" },
];

function BusinessHours() {
  return (
    <section className="bg-[#0A0A0A] py-14 sm:py-20">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-orange-500/20 bg-[#111111] p-5 sm:p-8 md:p-12"
        >
          {/* Heading */}
          <div className="mb-8 text-center sm:mb-10">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-xl text-white sm:mb-5 sm:h-16 sm:w-16 sm:text-2xl">
              <FaClock />
            </div>

            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              Business Hours
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-400 sm:mt-4 sm:text-base">
              Visit us during our working hours. We're always ready to help.
            </p>
          </div>

          {/* Hours */}
          <div className="space-y-3 sm:space-y-4">
            {hours.map((item) => (
              <div
                key={item.day}
                className="flex items-center justify-between gap-4 rounded-xl border border-gray-800 bg-[#1A1A1A] px-4 py-3.5 sm:px-6 sm:py-4"
              >
                <span className="text-sm font-medium text-white sm:text-base">
                  {item.day}
                </span>

                <span
                  className={
                    item.time === "Closed"
                      ? "text-sm font-semibold text-red-400 sm:text-base"
                      : "text-right text-sm text-gray-300 sm:text-base"
                  }
                >
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default BusinessHours;