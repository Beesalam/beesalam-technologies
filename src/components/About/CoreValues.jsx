import { motion } from "framer-motion";
import {
  FaHandshake,
  FaShieldAlt,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";
import SectionTitle from "../UI/SectionTitle";

const values = [
  {
    icon: <FaHandshake />,
    title: "Integrity",
    description:
      "We are honest, transparent, and committed to doing business the right way.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Quality",
    description:
      "We provide genuine gadgets and professional repair services you can trust.",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovation",
    description:
      "We embrace new technology to deliver better products and experiences.",
  },
  {
    icon: <FaUsers />,
    title: "Customer First",
    description:
      "Every decision we make is focused on giving our customers the best experience.",
  },
];

function CoreValues() {
  return (
    <section className="bg-[#0A0A0A] py-16 text-white sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Our Values"
          title="The Principles That Guide Us"
          description="Everything we do is built on trust, quality, innovation, and putting our customers first."
        />

        {/* Values Grid */}
        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:grid-cols-4 lg:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="rounded-3xl border border-gray-800 bg-[#111111] p-5 text-center transition hover:-translate-y-2 hover:border-orange-500 sm:p-6 lg:p-8"
            >
              {/* Icon */}
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-2xl text-white sm:mb-6 sm:h-16 sm:w-16 sm:text-3xl">
                {value.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold sm:text-2xl">
                {value.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-7 text-gray-400 sm:mt-4 sm:text-base">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreValues;