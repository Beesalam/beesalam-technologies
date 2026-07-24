import { motion } from "framer-motion";
import {
  FaMobileAlt,
  FaTools,
  FaShippingFast,
  FaHeadset,
} from "react-icons/fa";
import SectionTitle from "../UI/SectionTitle";

const features = [
  {
    icon: <FaMobileAlt />,
    title: "100% Genuine Products",
    description:
      "We sell authentic smartphones, laptops, accessories, and gadgets from trusted brands.",
  },
  {
    icon: <FaTools />,
    title: "Professional Repairs",
    description:
      "Our experienced technicians provide reliable and high-quality device repair services.",
  },
  {
    icon: <FaShippingFast />,
    title: "Nationwide Delivery",
    description:
      "Fast and secure delivery across Nigeria, ensuring your products arrive safely.",
  },
  {
    icon: <FaHeadset />,
    title: "Excellent Support",
    description:
      "Our customer support team is always ready to help before and after your purchase.",
  },
];

function WhyTrustUs() {
  return (
    <section className="bg-[#111111] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          subtitle="Why Choose Us"
          title="Why Customers Trust Beesalam Technologies"
          description="We're committed to quality products, reliable service, and a great customer experience."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex gap-5 rounded-3xl border border-gray-800 bg-[#0A0A0A] p-8 transition hover:border-orange-500"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-2xl text-white">
                {feature.icon}
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-400">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyTrustUs;