import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function ContactMap() {
  return (
    <section className="bg-[#0A0A0A] py-14 sm:py-20">
      <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-orange-500/20 bg-[#111111] p-5 sm:p-8"
        >
          <h2 className="mb-7 text-2xl font-bold text-white sm:mb-8 sm:text-3xl">
            Visit Our Store
          </h2>

          <div className="space-y-6 sm:space-y-8">
            {/* Address */}
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white sm:h-12 sm:w-12">
                <FaMapMarkerAlt />
              </div>

              <div className="min-w-0">
                <h3 className="font-semibold text-white">
                  Address
                </h3>

                <p className="mt-1 text-sm leading-6 text-gray-400 sm:mt-2 sm:text-base">
                  14, Oremeji Street, Ikeja, Lagos State, Nigeria
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white sm:h-12 sm:w-12">
                <FaPhoneAlt />
              </div>

              <div className="min-w-0">
                <h3 className="font-semibold text-white">
                  Phone
                </h3>

                <a
                  href="tel:+2348063562104"
                  className="mt-1 block text-sm text-gray-400 transition hover:text-orange-400 sm:mt-2 sm:text-base"
                >
                  +234 806 356 2104
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white sm:h-12 sm:w-12">
                <FaEnvelope />
              </div>

              <div className="min-w-0">
                <h3 className="font-semibold text-white">
                  Email
                </h3>

                <a
                  href="mailto:beesalamtechnologieslimited@gmail.com"
                  className="mt-1 block break-words text-sm text-gray-400 transition hover:text-orange-400 sm:mt-2 sm:text-base"
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
          className="h-[320px] overflow-hidden rounded-3xl border border-orange-500/20 sm:h-[400px] lg:h-full lg:min-h-[500px]"
        >
          <iframe
            title="Beesalam Technologies Location"
            src="https://www.google.com/maps?q=14,+Oremeji+Street,+Ikeja,+Lagos+State,+Nigeria&output=embed"
            width="100%"
            height="100%"
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