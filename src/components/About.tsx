"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import MyPhoto from "../../public/rohith-about.png";

function About() {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const parallaxSpeedImage = 0.2;
      const parallaxSpeedText = 0.05;

      if (imageRef.current) {
        imageRef.current.style.transform = `translateY(${
          scrollY * parallaxSpeedImage
        }px)`;
      }
      if (textRef.current) {
        textRef.current.style.transform = `translateY(${
          scrollY * parallaxSpeedText
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="about"
      className="bg-gradient-to-b from-accent to-primary text-white px-2 md:px-12 py-16 md:py- relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <h4 className="w-full text-center font-heading text-base text-black">
          Relentless Vision
        </h4>
        <h2 className="w-full text-center text-4xl md:text-5xl mb-6 font-heading text-white">
          Unleash My Story
        </h2>

        {/* <hr className="border-t h-2.5 border-text w-20 mx-auto mb-12" /> */}

        <div className="w-32 h-[2px] bg-white mt-2 mx-auto" />

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* IMAGE */}
          <div ref={imageRef} className="relative w-full flex justify-center">
            <div className="relative w-[260px] h-[360px] md:w-[300px] md:h-[500px] rounded-xl overflow-hidden">
              <Image
                src={MyPhoto}
                alt="Rohith Yarramala"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* TEXT */}
          <div ref={textRef} className="space-y-2 font-heading bg-gradient-to-b from-accent to-primary md:bg-none text-white pb-12 md:pb-0 px-4 md:px-0">
            <h3 className="text-2xl md:text-3xl text-black">Who I Am</h3>
            <ul className="space-y-3 text-sm md:text-base">
              <li>
                • Rohith Yarramala — unstoppable tech innovator, founder of
                Renitiate Technologies
              </li>
              <li>
                • Currently pursuing B.Tech CSE (2024–2026) after topping my
                diploma (9.3 CGPA, ECET 200 rank)
              </li>
              <li>
                • Built high-impact projects and led internships before even
                finishing college
              </li>
              <li>
                • From AI Telegram chatbots to production-grade SaaS apps — I
                build, I scale, I ship
              </li>
              <li>
                • Chief Tech Advisor at Krupa Corporation Pvt Ltd, leading
                freelance innovations
              </li>
              <li>
                • Active contributor to AsyncAPI, President of Codeverse Coding
                Club
              </li>
              <li>• Fuelled by vision, zero fear, and relentless execution</li>
            </ul>
            <button className="my-6 px-8 py-3 bg-black text-white rounded-md hover:bg-white hover:text-black transition-colors duration-300">
              Join My Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
