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
    <section className="bg-[#0A0A0A] py-20">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-orange-500/20 bg-[#111111] p-8 md:p-12"
        >
          <div className="mb-10 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-2xl text-white">
              <FaClock />
            </div>

            <h2 className="text-4xl font-bold text-white">
              Business Hours
            </h2>

            <p className="mt-4 text-gray-400">
              Visit us during our working hours. We're always ready to help.
            </p>
          </div>

          <div className="space-y-4">
            {hours.map((item) => (
              <div
                key={item.day}
                className="flex items-center justify-between rounded-xl border border-gray-800 bg-[#1A1A1A] px-6 py-4"
              >
                <span className="font-medium text-white">
                  {item.day}
                </span>

                <span
                  className={
                    item.time === "Closed"
                      ? "font-semibold text-red-400"
                      : "text-gray-300"
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