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
    <section className="bg-[#0A0A0A] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          subtitle="Our Values"
          title="The Principles That Guide Us"
          description="Everything we do is built on trust, quality, innovation, and putting our customers first."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-gray-800 bg-[#111111] p-8 text-center transition hover:-translate-y-2 hover:border-orange-500"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-3xl text-white">
                {value.icon}
              </div>

              <h3 className="text-2xl font-bold">{value.title}</h3>

              <p className="mt-4 leading-7 text-gray-400">
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