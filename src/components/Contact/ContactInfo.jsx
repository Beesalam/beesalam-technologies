import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function ContactInfo() {
  const contactDetails = [
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      value: "+234 806 356 2104",
      link: "tel:+2348063562104",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "beesalamtechnologieslimited@gmail.com",
      link: "mailto:beesalamtechnologieslimited@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "14, Oremeji Street, Ikeja, Lagos State, Nigeria",
      link: null,
    },
  ];

  return (
    <section className="bg-[#0A0A0A] py-14 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid gap-5 sm:gap-6 md:grid-cols-3 lg:gap-8"
        >
          {contactDetails.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-orange-500/20 bg-[#111111] p-5 text-center transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 sm:p-6 lg:p-8"
            >
              {/* Icon */}
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-xl text-white sm:mb-6 sm:h-16 sm:w-16 sm:text-2xl">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="mb-2 text-xl font-bold text-white sm:mb-3 sm:text-2xl">
                {item.title}
              </h3>

              {/* Value */}
              {item.link ? (
                <a
                  href={item.link}
                  className="block break-words text-sm leading-6 text-gray-300 transition hover:text-orange-400 sm:text-base"
                >
                  {item.value}
                </a>
              ) : (
                <p className="break-words text-sm leading-6 text-gray-300 sm:text-base">
                  {item.value}
                </p>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ContactInfo;