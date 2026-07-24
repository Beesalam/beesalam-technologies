import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function ContactMap() {
  return (
    <section className="bg-[#0A0A0A] py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-orange-500/20 bg-[#111111] p-8"
        >
          <h2 className="mb-8 text-3xl font-bold text-white">
            Visit Our Store
          </h2>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-orange-500 p-4 text-white">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3 className="font-semibold text-white">Address</h3>
                <p className="mt-2 text-gray-400">
                  14, Oremeji Street, Ikeja, Lagos State, Nigeria
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-full bg-orange-500 p-4 text-white">
                <FaPhoneAlt />
              </div>

              <div>
                <h3 className="font-semibold text-white">Phone</h3>

                <a
                  href="tel:+2348063562104"
                  className="mt-2 block text-gray-400 hover:text-orange-400"
                >
                  +234 806 356 2104
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-full bg-orange-500 p-4 text-white">
                <FaEnvelope />
              </div>

              <div>
                <h3 className="font-semibold text-white">Email</h3>

                <a
                  href="mailto:beesalamtechnologieslimited@gmail.com"
                  className="mt-2 block text-gray-400 hover:text-orange-400"
                >
                  beesalamtechnologieslimited@gmail.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl border border-orange-500/20"
        >
          <iframe
            title="Beesalam Technologies Location"
            src="https://www.google.com/maps?q=14,+Oremeji+Street,+Ikeja,+Lagos+State,+Nigeria&output=embed"            width="100%"
            height="500"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactMap;