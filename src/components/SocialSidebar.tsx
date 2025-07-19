"use client";

import React, { useEffect, useRef } from "react";
import { Github, Mail, Linkedin, Youtube, Instagram } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/rohith", label: "GitHub" },
  { icon: Mail, href: "mailto:rohith@example.com", label: "Email" },
  { icon: Linkedin, href: "https://linkedin.com/in/rohith", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com/@rohith", label: "YouTube" },
  { icon: Instagram, href: "https://instagram.com/rohith", label: "Instagram" },
];

function SocialSidebar() {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sidebarRef.current) {
        const scrollY = window.scrollY;
        const parallaxSpeed = 0.5; // Adjust this value (0 to 1) for parallax effect intensity
        const translateY = scrollY * parallaxSpeed;
        sidebarRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={sidebarRef}
      className="hidden md:flex flex-col items-center gap-4 fixed left-4 top-1/2 -translate-y-1/2 z-50"
      style={{
        borderRadius: "1rem",
        padding: "1rem 0.5rem",
        backdropFilter: "blur(8px)",
        width: "3.5rem",
        transition: "transform 0.1s ease-out",
      }}
    >
      <div className="relative flex flex-col items-center">
        <div className="w-[2px] h-40 bg-white/40" />
      </div>
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="w-10 h-10 flex items-center justify-center border-2 border-white hover:border-accent rounded-full text-white hover:text-accent transition-colors duration-300"
        >
          <Icon className="w-4 h-4" />
        </a>
      ))}
    </div>
  );
}

export default SocialSidebar;