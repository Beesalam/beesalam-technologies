import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

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
      value: "abdulsalambabatunde305@gmail.com",
      link: "mailto:abdulsalambabatunde305@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: " 14, Oremeji Street, Ikeja, Lagos State, Nigeria",
      link: null,
    },
  ];

  return (
    <section className="bg-[#0A0A0A] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-3"
        >
          {contactDetails.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-orange-500/20 bg-[#111111] p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-orange-500"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-2xl text-white">
                {item.icon}
              </div>

              <h3 className="mb-3 text-2xl font-bold text-white">
                {item.title}
              </h3>

              {item.link ? (
                <a
                  href={item.link}
                  className="break-all text-gray-300 transition hover:text-orange-400"
                >
                  {item.value}
                </a>
              ) : (
                <p className="break-all text-gray-300">{item.value}</p>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ContactInfo;