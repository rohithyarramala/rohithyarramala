"use client";
import React from "react";
import Image from "next/image";
import KrupaLogo from "../../public/brands/krupa.png";
import RenitiateLogo from "../../public/brands/renitiate.png";
import AutoGradeLogo from "../../public/brands/autograde.png";
import GeniusCampusLogo from "../../public/brands/geniuscampus.png";

const brands = [
  { logo: RenitiateLogo, alt: "Renitiate", width: "w-40 md:w-48" },
  { logo: AutoGradeLogo, alt: "AutoGradeX", width: "w-32 md:w-40" },
  { logo: GeniusCampusLogo, alt: "Genius Campus", width: "w-36 md:w-44" },
  { logo: KrupaLogo, alt: "Krupa", width: "w-44 md:w-56" },
];

export default function Partner() {
  return (
    <section className="bg-accent py-8">
      <h2 className="text-center text-4xl md:text-5xl font-heading text-gray-300 mb-4">
        Worked with
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 px-6 md:px-0">
        {brands.map((brand, index) => (
          <div
            key={index}
            className={`relative grayscale hover:grayscale-0 transition-all duration-300 ${brand.width}`}
          >
            <Image
              src={brand.logo}
              alt={brand.alt}
              layout="responsive"
              width={100}
              height={60}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
