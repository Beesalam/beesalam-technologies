import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";
import { addMessage } from "../../admin/services/contactService";



function ContactForm() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  });

  const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
  }; 

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (
    !formData.name ||
    !formData.email ||
    !formData.phone ||
    !formData.subject ||
    !formData.message
  ) {
    toast.error("Please fill in all fields.");
    return;
  }

  try {
    setLoading(true);

    await addMessage(formData);

    toast.success("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    console.error(error);
    toast.error("Failed to send message.");
  } finally {
    setLoading(false);
  }
};
  return (
    <section
      id="contact-form"
      className="bg-[#0A0A0A] py-20"
    >
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-orange-500/20 bg-[#111111] p-8 md:p-12"
        >
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold text-white">
              Send Us a Message
            </h2>

            <p className="mt-4 text-gray-400">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>
          </div>

          <form className="space-y-6"
            onSubmit={handleSubmit}>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-white">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-gray-700 bg-[#1A1A1A] px-4 py-3 text-white outline-none transition focus:border-orange-500"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="mb-2 block text-white">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-gray-700 bg-[#1A1A1A] px-4 py-3 text-white outline-none transition focus:border-orange-500"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-white">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full rounded-xl border border-gray-700 bg-[#1A1A1A] px-4 py-3 text-white outline-none transition focus:border-orange-500"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="mb-2 block text-white">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full rounded-xl border border-gray-700 bg-[#1A1A1A] px-4 py-3 text-white outline-none transition focus:border-orange-500"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-white">
                Message
              </label>

              <textarea
                rows="6"
                placeholder="Type your message..."
                className="w-full resize-none rounded-xl border border-gray-700 bg-[#1A1A1A] px-4 py-3 text-white outline-none transition focus:border-orange-500"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactForm;