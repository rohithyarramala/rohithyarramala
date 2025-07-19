"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full bg-background z-50 relative pt-12">
      <nav className="bg-white/10 backdrop-blur-sm flex justify-between items-center h-[100px] px-6 md:px-20 py-4 border-y border-white/50 text-white">
        {/* Logo */}
        <div className="font-bold font-heading text-4xl tracking-widest text-center z-50">
          HELL 0 !
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.name}>
                <Link href={item.href} passHref>
                  <div
                    className={`relative w-[130px] h-[100px] flex items-center justify-center border 
                      uppercase font-heading text-base tracking-widest
                      ${
                        isActive
                          ? "border-accent text-accent bg-background"
                          : "border-white/50 text-white hover:border-accent hover:text-accent hover:bg-background"
                      } transition-all duration-200`}
                  >
                    {item.name}
                    <span className={`absolute bottom-1 left-2 text-sm ${isActive ? "text-accent" : "text-text"}`}>
                      {String(index + 1).padStart(3, "0")}
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-[60]"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Slide Panel */}
      <aside
        className={`fixed top-0 left-0 h-full w-[260px] bg-background border-r border-white/20 z-50 transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}
      >
        <div className="flex flex-col gap-4 p-6 pt-28">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)}>
                <div
                  className={`relative w-full h-[60px] flex items-center justify-center border 
                    uppercase font-heading text-base tracking-widest
                    ${
                      isActive
                        ? "border-accent text-accent bg-background"
                        : "border-white/50 text-white hover:border-accent hover:text-accent hover:bg-background"
                    } transition-all duration-200`}
                >
                  {item.name}
                  <span className={`absolute bottom-1 left-3 text-sm ${isActive ? "text-accent" : "text-text"}`}>
                    {String(index + 1).padStart(3, "0")}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </aside>
    </section>
  );
}

export default NavBar;
