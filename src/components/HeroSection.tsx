"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Download } from "lucide-react";
import RohithImg from "../../public/rohithyarramala-anime.png";

// Typing effect function
function startTypingEffect({
  id,
  words,
  typingSpeed = 100,
  pauseDelay = 1000,
}: {
  id: string;
  words: string[];
  typingSpeed?: number;
  pauseDelay?: number;
}) {
  const element = document.getElementById(id);
  if (!element) return;

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const type = () => {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    const currentText = currentWord.substring(0, charIndex);
    element.textContent = currentText;

    if (!isDeleting && charIndex === currentWord.length) {
      setTimeout(() => {
        isDeleting = true;
        type();
      }, pauseDelay);
      return;
    }

    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(type, isDeleting ? typingSpeed / 2 : typingSpeed);
  };

  type();
}

function HeroSection() {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    startTypingEffect({
      id: "typing-text",
      words: [
        "DEVELOPER",
        "FREELANCER",
        "FOUNDER",
        "TECH ADVISOR",
        "OPEN SOURCE ENTHUSIAST",
      ],
      typingSpeed: 100,
      pauseDelay: 1200,
    });

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const parallaxSpeedText = 0.2; // Slower speed for text
      const parallaxSpeedImage = 0.6; // Faster speed for image

      if (textRef.current) {
        textRef.current.style.transform = `translateY(${scrollY * parallaxSpeedText}px)`;
      }
      if (imageRef.current) {
        imageRef.current.style.transform = `translateY(${scrollY * parallaxSpeedImage}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full bg-transparent text-white py-18 md:py-12 px-6 md:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
        
        {/* TEXT SECTION */}
        <div
          ref={textRef}
          className="flex flex-col items-center md:items-start text-center md:ml-2.5 md:text-left order-2 md:order-1 pb-12 md:pb-0"
        >
          <p className="font-heading text-xl text-accent uppercase">It's Me</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mt-2">
            Rohith Yarramala
          </h1>

          {/* Dynamic Title + Line */}
          <div className="flex items-center md:items-start mt-4 gap-2">
            <p className="font-heading text-text text-2xl md:text-3xl">I AM</p>
            <span
              id="typing-text"
              className="text-accent font-bold border-r-2 border-accent animate-pulse block text-2xl md:text-3xl 
                text-center md:whitespace-nowrap break-words md:break-normal leading-snug
                max-w-xs sm:max-w-sm md:max-w-none min-h-[2.5rem] md:min-h-[3rem]"
            >
              DEVELOPER
            </span>
          </div>

          <div className="w-16 h-[2px] bg-white mt-2" />
          {/* Description */}
          <p className="mt-8 text-gray-400 font-body text-lg md:text-xl max-w-md">
            A bold, fast-learning freelancer and the founder of Renitiate
            Technologies, driving AI innovation while crushing the final year of
            graduation. A web and AI enthusiast with unstoppable momentum,
            blending practical skills with fearless ambition to build the
            future.
          </p>

          <button
            type="button"
            className="px-16 py-2 flex cursor-pointer justify-around items-center gap-4 border-2 border-accent bg-transparent mt-8 relative text-accent font-medium transition-all duration-300 hover:bg-primary hover:border-text hover:text-text"
            style={{
              transformStyle: "preserve-3d",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateZ(5px) rotateX(5deg)";
              e.currentTarget.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.2)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateZ(0)";
              e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
            }}
          >
            <Download className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 " />
            MY CV
          </button>
        </div>

        {/* IMAGE SECTION */}
        <div ref={imageRef} className="relative w-full flex justify-center order-1 md:order-2 pb-12 md:pb-0">
          <div className="relative w-[260px] h-[300px] md:w-[383px] md:h-[450px]">
            {/* Blurred Elliptical Background */}
            <div className="absolute inset-0 bg-[rgba(177,143,116,0.25)] rounded-full blur-[26.5px] z-0" />
            <Image
              src={RohithImg}
              alt="Rohith Yarramala"
              fill
              priority
              className="object-cover rounded-full z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;