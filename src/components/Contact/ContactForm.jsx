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
      className="bg-[#0A0A0A] py-14 sm:py-20"
    >
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-orange-500/20 bg-[#111111] p-5 sm:p-8 md:p-12"
        >
          {/* Heading */}
          <div className="mb-8 text-center sm:mb-10">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              Send Us a Message
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-400 sm:mt-4 sm:text-base">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>
          </div>

          <form
            className="space-y-5 sm:space-y-6"
            onSubmit={handleSubmit}
          >
            {/* Name + Email */}
            <div className="grid gap-5 md:grid-cols-2 md:gap-6">
              <div>
                <label className="mb-2 block text-sm text-white sm:text-base">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-gray-700 bg-[#1A1A1A] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-orange-500 sm:text-base"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white sm:text-base">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-gray-700 bg-[#1A1A1A] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-orange-500 sm:text-base"
                />
              </div>
            </div>

            {/* Phone + Subject */}
            <div className="grid gap-5 md:grid-cols-2 md:gap-6">
              <div>
                <label className="mb-2 block text-sm text-white sm:text-base">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full rounded-xl border border-gray-700 bg-[#1A1A1A] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-orange-500 sm:text-base"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white sm:text-base">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  className="w-full rounded-xl border border-gray-700 bg-[#1A1A1A] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-orange-500 sm:text-base"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="mb-2 block text-sm text-white sm:text-base">
                Message
              </label>

              <textarea
                rows="6"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message..."
                className="w-full resize-none rounded-xl border border-gray-700 bg-[#1A1A1A] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-orange-500 sm:text-base"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 py-3.5 font-semibold text-white transition-all duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 sm:py-4"
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