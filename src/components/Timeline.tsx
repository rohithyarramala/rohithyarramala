"use client";
import React from "react";
import { motion } from "framer-motion";

const timelineVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

function Timeline() {
  return (
    <>
      {/* ===== EDUCATION SECTION ===== */}
      <section className="relative bg-gradient-to-b from-[#0B0C10] via-[#1F2833] to-[#0B0C10] text-white py-16 px-6 flex items-center justify-center overflow-hidden">
        <div className="w-full max-w-5xl mx-auto px-4 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-center font-heading mb-16 tracking-wide text-[#FFEFE3] uppercase">
            Education
          </h2>

          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-gradient-to-b from-[#FFEFE3] to-transparent opacity-70"></div>

            {/* Diviseema Polytechnic */}
            <motion.div
              className="flex items-center mb-20"
              variants={timelineVariant}
              initial="hidden"
              whileInView="visible"
              custom={0}
              viewport={{ once: true }}
            >
              <div className="w-1/2"></div>
              <div className="relative flex justify-center">
                <div className="w-12 h-12 rounded-full border-[6px] border-[#FFEFE3] flex items-center justify-center shadow-[0_0_25px_#FFEFE3] animate-pulse">
                  <div className="w-5 h-5 rounded-full bg-[#FFEFE3]"></div>
                </div>
              </div>
              <div className="w-1/2 pl-8 text-right">
                <motion.div
                  className="bg-[#FFEFE3]/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-[#FFEFE3]/20 hover:scale-105 transition-transform"
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="text-2xl font-semibold text-[#FFEFE3] font-heading">
                    Diviseema Polytechnic College
                  </h3>
                  <p className="text-sm text-gray-300 mt-1">
                    Diploma in Computer Science
                  </p>
                  <p className="text-xs text-gray-400 mt-1">2020 - 2023</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Bapatla Engineering College */}
            <motion.div
              className="flex items-center mb-20"
              variants={timelineVariant}
              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{ once: true }}
            >
              <div className="w-1/2 pr-8 text-left">
                <motion.div
                  className="bg-[#FFEFE3]/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-[#FFEFE3]/20 hover:scale-105 transition-transform"
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="text-2xl font-semibold text-[#FFEFE3] font-heading">
                    Bapatla Engineering College
                  </h3>
                  <p className="text-sm text-gray-300 mt-1">
                    Bachelor’s in Computer Science
                  </p>
                  <p className="text-xs text-gray-400 mt-1">2023 - 2026</p>
                </motion.div>
              </div>
              <div className="relative flex justify-center">
                <div className="w-12 h-12 rounded-full border-[6px] border-[#FFEFE3] flex items-center justify-center shadow-[0_0_25px_#FFEFE3] animate-pulse">
                  <div className="w-5 h-5 rounded-full bg-[#FFEFE3]"></div>
                </div>
              </div>
              <div className="w-1/2"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== PROFESSIONAL SECTION ===== */}
      <section className="relative bg-gradient-to-b from-[#0B0C10] via-[#141E27] to-[#0B0C10] text-white py-16 px-6 flex items-center justify-center overflow-hidden">
        <div className="w-full max-w-5xl mx-auto px-4 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-center font-heading mb-16 tracking-wide text-yellow-400 uppercase">
            Professional
          </h2>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-gradient-to-b from-yellow-400 to-transparent opacity-70"></div>

            {/* Freelancing */}
            <motion.div
              className="flex items-center mb-20"
              variants={timelineVariant}
              initial="hidden"
              whileInView="visible"
              custom={0}
              viewport={{ once: true }}
            >
              <div className="w-1/2"></div>
              <div className="relative flex justify-center">
                <div className="w-12 h-12 rounded-full border-[6px] border-yellow-400 flex items-center justify-center shadow-[0_0_25px_#FFD700] animate-pulse">
                  <div className="w-5 h-5 rounded-full bg-yellow-400"></div>
                </div>
              </div>
              <div className="w-1/2 pl-8 text-right">
                <motion.div
                  className="bg-yellow-500/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-yellow-500/20 hover:scale-105 transition-transform"
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="text-xl font-semibold text-yellow-400 font-heading">
                    Entered World of Computers
                  </h3>
                  <p className="text-sm text-gray-300 mt-1">
                    Freelancing & Independent Projects
                  </p>
                  <p className="text-xs text-gray-400 mt-1">2022 — Present</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Renitiate Technologies */}
            <motion.div
              className="flex items-center mb-20"
              variants={timelineVariant}
              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{ once: true }}
            >
              <div className="w-1/2 pr-8 text-left">
                <motion.div
                  className="bg-yellow-500/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-yellow-500/20 hover:scale-105 transition-transform"
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="text-xl font-semibold text-yellow-400 font-heading">
                    Founder & CEO
                  </h3>
                  <p className="text-sm text-gray-300 mt-1">
                    Renitiate Technologies
                  </p>
                  <p className="text-xs text-gray-400 mt-1">Current Role</p>
                </motion.div>
              </div>
              <div className="relative flex justify-center">
                <div className="w-12 h-12 rounded-full border-[6px] border-yellow-400 flex items-center justify-center shadow-[0_0_25px_#FFD700] animate-pulse">
                  <div className="w-5 h-5 rounded-full bg-yellow-400"></div>
                </div>
              </div>
              <div className="w-1/2"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Timeline;
