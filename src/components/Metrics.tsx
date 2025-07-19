"use client";
import React, { useEffect, useState, useRef } from "react";

function Metrics() {
  const [projectsCount, setProjectsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateCount(35, setProjectsCount);
          animateCount(20, setClientsCount);
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  const animateCount = (target, setter) => {
    let current = 0;
    const speed = 30;

    const increment = () => {
      if (current < target) {
        current++;
        setter(current);
        setTimeout(increment, speed);
      }
    };
    increment();
  };

  return (
    <section
      ref={sectionRef}
      id="metrics"
      className="relative bg-black text-white py-12 px-4 bg-image bg-cover bg-center min-h-[200px] flex items-center justify-center"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-bold text-2xl md:text-4xl font-heading tracking-widest mb-8 text-gray-300 uppercase">
          NUMERIC'S
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          {/* Projects */}
          <span className="text-9xl font-heading font-bold text-gray-200 inline-block text-center min-w-[120px] transition-transform">
            {projectsCount.toString().padStart(2, "0")}
          </span>

          <div className="flex flex-col items-center">
            <div className="flex flex-col font-heading counter-number mt-2 text-yellow-600 font-semibold text-sm md:text-lg tracking-wider">
              {"PROJECTS".split("").map((char, idx) => (
                <span key={idx}>{char}</span>
              ))}
            </div>
          </div>

          {/* Animated Vertical Divider */}
          <div className="w-[2px] h-16 md:h-44 animated-vertical"></div>

          {/* Clients */}
          <div className="flex items-center">
            <div className="flex flex-col font-heading items-center mt-2 text-yellow-600 font-semibold text-sm md:text-lg tracking-wider">
              {"CLIENTS".split("").map((char, idx) => (
                <span key={idx}>{char}</span>
              ))}
            </div>
          </div>

          <span className="text-9xl font-heading counter-number font-bold text-gray-200 inline-block text-center min-w-[120px] transition-transform">
            {clientsCount.toString().padStart(2, "0")}+
          </span>
        </div>
      </div>
    </section>
  );
}

export default Metrics;
