import { motion } from "framer-motion";
import { FaBullseye, FaEye } from "react-icons/fa";
import SectionTitle from "../UI/SectionTitle";

function MissionVision() {
  return (
    <section className="bg-[#111111] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          subtitle="Our Purpose"
          title="Mission & Vision"
          description="Everything we do is driven by quality, trust, and customer satisfaction."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-gray-800 bg-[#0A0A0A] p-8"
          >
            <FaBullseye className="mb-5 text-5xl text-orange-500" />

            <h3 className="text-3xl font-bold">Our Mission</h3>

            <p className="mt-4 leading-8 text-gray-400">
              To provide genuine technology products, reliable repair services,
              and outstanding customer support while making quality gadgets
              accessible to everyone.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-gray-800 bg-[#0A0A0A] p-8"
          >
            <FaEye className="mb-5 text-5xl text-orange-500" />

            <h3 className="text-3xl font-bold">Our Vision</h3>

            <p className="mt-4 leading-8 text-gray-400">
              To become one of Nigeria's most trusted technology brands by
              delivering innovative products, exceptional service, and lasting
              customer relationships.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default MissionVision;