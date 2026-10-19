import { motion } from 'framer-motion';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaWhatsapp,
  FaBuilding,
} from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#0f0720] pb-20 text-white">

      {/* HEADER BANNER */}
      <section className="relative overflow-hidden border-b border-purple-500/20 bg-gradient-to-b from-[#1a0b36] to-[#0f0720] py-16 text-center md:py-24">
        <div className="absolute left-1/2 top-0 h-[300px] w-[600px] max-w-full -translate-x-1/2 rounded-full bg-purple-600/20 blur-[100px]" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 px-4"
        >
          <h1 className="mb-6 text-4xl font-black tracking-tight md:text-6xl">
            Get In{' '}
            <span className="bg-gradient-to-r from-[#FFD700] via-[#FF007F] to-[#00FFFF] bg-clip-text text-transparent">
              Touch
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-300">
            Ready to build your dream entertainment park? Let's create an
            unforgettable experience together.
          </p>
        </motion.div>
      </section>

      {/* CONTACT CARDS */}
      <section className="relative left-1/2 w-full max-w-[1600px] -translate-x-1/2 px-4 py-12 sm:px-6 md:py-16 lg:px-10">
        <div className="mx-auto grid w-full grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-[0.9fr_0.9fr_1.5fr]">

          {/* REGISTERED OFFICE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="group flex min-w-0 flex-col justify-between rounded-2xl border border-purple-500/30 bg-[#1a103c]/60 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-purple-500/70 sm:p-8"
          >
            <div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-purple-900/50 transition-colors group-hover:bg-purple-600/20">
                <FaMapMarkerAlt className="h-7 w-7 text-[#FF007F]" />
              </div>

              <h2 className="mb-5 text-xl font-bold text-white">
                Registered Office
              </h2>

              <address className="space-y-3 break-words text-base not-italic leading-relaxed text-gray-300">
                <p className="text-lg font-bold text-white">
                  World of Dreamz Entertainment
                </p>
                <p>BharatOne Retail Ventures Corp</p>
                <p>Jaipur, Rajasthan</p>

                <p className="flex items-center gap-2 pt-1 text-sm text-purple-300">
                  <FaBuilding className="h-4 w-4 shrink-0" />
                  India
                </p>
              </address>
            </div>

            <a
              href="https://maps.google.com/?q=Jaipur+Rajasthan"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#00FFFF] transition-colors hover:text-[#FF007F]"
            >
              View on Google Maps <span>→</span>
            </a>
          </motion.div>

          {/* CALL US */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="group flex min-w-0 flex-col justify-between rounded-2xl border border-purple-500/30 bg-[#1a103c]/60 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-purple-500/70 sm:p-8"
          >
            <div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-900/30 transition-colors group-hover:bg-green-500/20">
                <FaPhone className="h-7 w-7 text-[#25D366]" />
              </div>

              <h2 className="mb-5 text-xl font-bold text-white">Call Us</h2>

              <div className="space-y-5">
                <div>
                  <p className="mb-2 text-sm text-purple-300">Primary Sales</p>
                  <a
                    href="tel:+919830085101"
                    className="block whitespace-nowrap text-base font-bold text-white transition-colors hover:text-[#25D366] sm:text-lg"
                  >
                    +91-9830085101
                  </a>
                </div>

                <div className="border-t border-purple-500/20 pt-4">
                  <p className="mb-2 text-sm text-purple-300">
                    Business Enquiries
                  </p>
                  <a
                    href="tel:+919694171644"
                    className="block whitespace-nowrap text-base font-bold text-white transition-colors hover:text-[#25D366] sm:text-lg"
                  >
                    +91-9694171644
                  </a>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/919830085101"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-3 py-3.5 font-bold text-white shadow-lg shadow-green-500/20 transition-all hover:scale-[1.02] hover:bg-[#128C7E]"
            >
              <FaWhatsapp className="h-5 w-5 shrink-0" />
              <span className="whitespace-nowrap text-sm sm:text-base">
                WhatsApp
              </span>
            </a>
          </motion.div>

          {/* EMAIL US — EXTRA WIDTH */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="group flex min-w-0 flex-col rounded-2xl border border-purple-500/40 bg-[#1a103c]/60 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-purple-500/80 sm:p-8"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-pink-900/30 transition-colors group-hover:bg-pink-500/20">
              <FaEnvelope className="h-7 w-7 text-[#FF007F]" />
            </div>

            <h2 className="mb-6 text-xl font-bold text-white">Email Us</h2>

            <div className="space-y-6">

              {/* GENERAL ENQUIRIES */}
              <div className="min-w-0">
                <p className="mb-3 text-sm text-purple-300 sm:text-base">
                  General Enquiries
                </p>

                <a
                  href="mailto:connect@worldofdreamz.in"
                  className="flex w-full min-w-0 items-center gap-3 whitespace-nowrap text-white transition-colors hover:text-[#FF007F]"
                >
                  <FaEnvelope className="h-5 w-5 shrink-0 text-purple-300" />

                  <span className="whitespace-nowrap text-xs font-bold sm:text-sm lg:text-base">
                    connect@worldofdreamz.in
                  </span>
                </a>
              </div>

              <div className="border-t border-purple-500/30" />

              {/* CORPORATE / MANAGEMENT */}
              <div className="min-w-0">
                <p className="mb-3 text-sm text-purple-300 sm:text-base">
                  Corporate / Management
                </p>

                <a
                  href="mailto:bharatone.retail@gmail.com"
                  className="flex w-full min-w-0 items-center gap-3 whitespace-nowrap text-white transition-colors hover:text-[#FF007F]"
                >
                  <FaEnvelope className="h-5 w-5 shrink-0 text-purple-300" />

                  <span className="whitespace-nowrap text-xs font-bold sm:text-sm lg:text-base">
                    bharatone.retail@gmail.com
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BUSINESS HOURS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative mx-auto mt-8 w-full overflow-hidden rounded-2xl border border-purple-500/30 bg-gradient-to-r from-purple-900/50 to-pink-900/40 p-6 text-white shadow-xl md:mt-10 md:p-8"
        >
          <div className="absolute right-0 top-0 h-36 w-36 translate-x-1/3 -translate-y-1/3 rounded-full bg-[#FF007F]/10 blur-2xl" />

          <div className="relative z-10 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-6">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <FaClock className="h-8 w-8 text-[#FFD700]" />
            </div>

            <div className="text-center sm:text-left">
              <h2 className="mb-1 text-xl font-bold">Business Hours</h2>
              <p className="text-gray-300">
                Monday - Saturday:{' '}
                <span className="font-semibold text-white">
                  10:00 AM - 7:00 PM
                </span>
              </p>
              <p className="mt-1 text-sm text-gray-400">Sunday: Closed</p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}