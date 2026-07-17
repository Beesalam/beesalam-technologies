import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";
import features from "../../data/features";

function WhyChooseUs() {
  return (
    <section className="bg-[#0A0A0A] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="font-semibold uppercase tracking-[4px] text-orange-400">
            Why Choose Us
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Technology You Can Trust
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-400">
            We provide premium gadgets, reliable repair services, and excellent
            customer support to ensure you get the best technology experience.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;