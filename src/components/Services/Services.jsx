import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard.jsx";
import services from "../../data/services.js";
import SectionTitle from "../UI/SectionTitle.jsx";

function Services() {
  return (
    <section className="bg-[#0A0A0A] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="font-semibold uppercase tracking-[4px] text-orange-400">
            Our Services
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Technology Solutions You Can Trust
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-400">
            From premium gadgets to expert repairs, we provide reliable technology services for individuals and businesses.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;