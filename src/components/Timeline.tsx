"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

// Color tokens to keep visual consistency with the site
const COLORS = {
  edu: "#FFEFE3",
  prof: "#FFD54A", // close to yellow-400
  bgStart: "#0B0C10",
  bgMid: "#1F2833",
};

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.14, duration: 0.6, ease: "easeOut" },
  }),
}; 

function Timeline() {
  return (
    <>
      {/* ===== EDUCATION SECTION ===== */}
      <section
        className="relative bg-gradient-to-b from-primary via-accent to-primary text-white py-16 px-6 flex items-center justify-center overflow-hidden"
        aria-labelledby="education-heading"
      >
        <div className="w-full max-w-5xl mx-auto px-4 relative">
          <h2
            id="education-heading"
            className="text-4xl md:text-5xl font-bold text-center font-heading mb-16 tracking-wide text-[#FFEFE3] uppercase"
          >
            Education
          </h2>

          <div className="relative">
            {/* Center Line (hidden on small screens) */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-gradient-to-b from-[#FFEFE3] to-transparent opacity-70" />

            <ol className="space-y-12">
              {/* Diviseema Polytechnic */}
              <motion.li
                className="flex flex-col md:flex-row items-center md:mb-8"
                variants={itemVariant}
                initial="hidden"
                whileInView="visible"
                custom={0}
                viewport={{ once: true }}
                aria-label="Diviseema Polytechnic - Diploma in Computer Science 2020 to 2023"
              >
                <div className="md:w-1/2" />
                <div className="relative flex justify-center md:mx-0 mx-auto">
                  {/* Marker with graduation icon */}
                  <div
                    className="w-12 h-12 rounded-full border-[6px] flex items-center justify-center shadow-[0_0_25px] animate-pulse"
                    style={{ borderColor: COLORS.edu, boxShadow: `0 0 25px ${COLORS.edu}` }}
                    aria-hidden
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#FFEFE3]" viewBox="0 0 24 24" fill="none" stroke={COLORS.edu}>
                      <path d="M12 2 L3 7l9 5 9-5-9-5z" fill={COLORS.edu} stroke="none" />
                      <path d="M3 7v6a9 9 0 0 0 9 4 9 9 0 0 0 9-4V7" stroke={COLORS.edu} strokeWidth="0.5" fill="none" opacity="0.9" />
                    </svg>
                  </div>
                </div>

                <div className="md:w-1/2 md:pl-8 text-right mt-4 md:mt-0">
                  <motion.article
                    className="bg-[#FFEFE3]/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-[#FFEFE3]/20 hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-[#FFEFE3] focus:ring-offset-2"
                    whileHover={{ scale: 1.03 }}
                    tabIndex={0}
                    role="group"
                    aria-labelledby="diviseema-title"
                  >
                    <h3 id="diviseema-title" className="text-2xl font-semibold text-[#FFEFE3] font-heading">
                      Diviseema Polytechnic College
                    </h3>
                    <p className="text-sm text-gray-300 mt-1">Diploma in Computer Science</p>
                    <time className="text-xs text-gray-400 mt-1 block" dateTime="2020-2023">
                      2020 — 2023
                    </time>
                  </motion.article>
                </div>
              </motion.li>

              {/* Bapatla Engineering College */}
              <motion.li
                className="flex flex-col md:flex-row items-center md:mb-8"
                variants={itemVariant}
                initial="hidden"
                whileInView="visible"
                custom={1}
                viewport={{ once: true }}
                aria-label="Bapatla Engineering College - Bachelor's in Computer Science 2023 to 2026"
              >
                <div className="md:w-1/2 md:pr-8 text-left mt-4 md:mt-0">
                  <motion.article
                    className="bg-[#FFEFE3]/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-[#FFEFE3]/20 hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-[#FFEFE3] focus:ring-offset-2"
                    whileHover={{ scale: 1.03 }}
                    tabIndex={0}
                    role="group"
                    aria-labelledby="bapatla-title"
                  >
                    <h3 id="bapatla-title" className="text-2xl font-semibold text-[#FFEFE3] font-heading">
                      Bapatla Engineering College
                    </h3>
                    <p className="text-sm text-gray-300 mt-1">Bachelor’s in Computer Science</p>
                    <time className="text-xs text-gray-400 mt-1 block" dateTime="2023-2026">
                      2023 — 2026
                    </time>
                  </motion.article>
                </div>

                <div className="relative flex justify-center md:mx-0 mx-auto">
                  <div
                    className="w-12 h-12 rounded-full border-[6px] flex items-center justify-center shadow-[0_0_25px] animate-pulse"
                    style={{ borderColor: COLORS.edu, boxShadow: `0 0 25px ${COLORS.edu}` }}
                    aria-hidden
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2 L3 7l9 5 9-5-9-5z" fill={COLORS.edu} stroke="none" />
                      <path d="M3 7v6a9 9 0 0 0 9 4 9 9 0 0 0 9-4V7" stroke={COLORS.edu} strokeWidth="0.5" fill="none" opacity="0.9" />
                    </svg>
                  </div>
                </div>

                <div className="md:w-1/2" />
              </motion.li>
            </ol>
          </div>
        </div>
      </section>

      {/* ===== PROFESSIONAL SECTION ===== */}
      <section
        className="relative bg-transparent text-white py-16 px-6 flex items-center justify-center overflow-hidden"
        aria-labelledby="professional-heading"
      >
        <div className="w-full max-w-5xl mx-auto px-4 relative">
          <h2 id="professional-heading" className="text-4xl md:text-5xl font-bold text-center font-heading mb-16 tracking-wide text-yellow-400 uppercase">
            Professional
          </h2>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-gradient-to-b from-yellow-400 to-transparent opacity-70" />

            <ol className="space-y-12">
              {/* Freelancing */}
              <motion.li
                className="flex flex-col md:flex-row items-center"
                variants={itemVariant}
                initial="hidden"
                whileInView="visible"
                custom={0}
                viewport={{ once: true }}
                aria-label="Freelancing and independent projects 2022 to present"
              >
                <div className="md:w-1/2" />
                <div className="relative flex justify-center md:mx-0 mx-auto">
                  <div
                    className="w-12 h-12 rounded-full border-[6px] flex items-center justify-center shadow-[0_0_25px] animate-pulse"
                    style={{ borderColor: COLORS.prof, boxShadow: `0 0 25px ${COLORS.prof}` }}
                    aria-hidden
                  >
                    {/* briefcase icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke={COLORS.prof}>
                      <rect x="3" y="7" width="18" height="12" rx="2" fill={COLORS.prof} stroke="none" />
                      <path d="M8 7V5a4 4 0 0 1 8 0v2" stroke="#000" opacity="0.06" />
                    </svg>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-8 text-right mt-4 md:mt-0">
                  <motion.article
                    className="bg-yellow-500/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-yellow-500/20 hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
                    whileHover={{ scale: 1.03 }}
                    tabIndex={0}
                    role="group"
                    aria-labelledby="freelance-title"
                  >
                    <h3 id="freelance-title" className="text-xl font-semibold text-yellow-400 font-heading">
                      Entered World of Computers
                    </h3>
                    <p className="text-sm text-gray-300 mt-1">Freelancing & Independent Projects</p>
                    <time className="text-xs text-gray-400 mt-1 block" dateTime="2022">
                      2022 — Present
                    </time>
                  </motion.article>
                </div>
              </motion.li>

              {/* Renitiate Technologies */}
              <motion.li
                className="flex flex-col md:flex-row items-center"
                variants={itemVariant}
                initial="hidden"
                whileInView="visible"
                custom={1}
                viewport={{ once: true }}
                aria-label="Founder & CEO at Renitiate Technologies - Current Role"
              >
                <div className="md:w-1/2 md:pr-8 text-left mt-4 md:mt-0">
                  <motion.article
                    className="bg-yellow-500/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-yellow-500/20 hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
                    whileHover={{ scale: 1.03 }}
                    tabIndex={0}
                    role="group"
                    aria-labelledby="renitiate-title"
                  >
                    <h3 id="renitiate-title" className="text-xl font-semibold text-yellow-400 font-heading">
                      Founder & CEO
                    </h3>
                    <p className="text-sm text-gray-300 mt-1">Renitiate Technologies</p>
                    <time className="text-xs text-gray-400 mt-1 block">Current Role</time>

                    {/* small skill badges that fit the professional card */}
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="text-xs bg-yellow-400/10 text-yellow-300 px-2 py-1 rounded-md border border-yellow-400/20">React</span>
                      <span className="text-xs bg-yellow-400/10 text-yellow-300 px-2 py-1 rounded-md border border-yellow-400/20">Node.js</span>
                      <span className="text-xs bg-yellow-400/10 text-yellow-300 px-2 py-1 rounded-md border border-yellow-400/20">TypeScript</span>
                    </div>
                  </motion.article>
                </div>

                <div className="relative flex justify-center md:mx-0 mx-auto">
                  <div
                    className="w-12 h-12 rounded-full border-[6px] flex items-center justify-center shadow-[0_0_25px] animate-pulse"
                    style={{ borderColor: COLORS.prof, boxShadow: `0 0 25px ${COLORS.prof}` }}
                    aria-hidden
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="7" width="18" height="12" rx="2" fill={COLORS.prof} stroke="none" />
                    </svg>
                  </div>
                </div>

                <div className="md:w-1/2" />
              </motion.li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}

export default Timeline;
