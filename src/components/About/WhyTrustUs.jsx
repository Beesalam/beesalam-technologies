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
    <section className="bg-[#111111] py-16 text-white sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Why Choose Us"
          title="Why Customers Trust Beesalam Technologies"
          description="We're committed to quality products, reliable service, and a great customer experience."
        />

        {/* Features */}
        <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 lg:mt-16 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="flex items-start gap-4 rounded-3xl border border-gray-800 bg-[#0A0A0A] p-5 transition hover:border-orange-500 sm:gap-5 sm:p-6 lg:p-8"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-500 text-xl text-white sm:h-14 sm:w-14 sm:text-2xl lg:h-16 lg:w-16">
                {feature.icon}
              </div>

              {/* Content */}
              <div className="min-w-0">
                <h3 className="text-lg font-bold leading-snug sm:text-xl lg:text-2xl">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-gray-400 sm:mt-3 sm:text-base">
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