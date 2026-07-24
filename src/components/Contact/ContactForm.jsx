import { motion } from "framer-motion";

function ContactForm() {
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

          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-white">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-gray-700 bg-[#1A1A1A] px-4 py-3 text-white outline-none transition focus:border-orange-500"
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
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactForm;