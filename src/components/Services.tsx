import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

// Mock image imports (replace with actual image paths)
import FullStackImg from "../../public/services/fullstack.png";
import MobileAppsImg from "../../public/services/mobileapps.png";
import GenAIImg from "../../public/services/genai.png";
import DevOpsImg from "../../public/services/devops.png";
import ChatbotImg from "../../public/services/chatbots.png";
import IotArImg from "../../public/services/iot-ar.png";

const services = [
  {
    title: "Full Stack Web Solutions",
    image: FullStackImg,
  },
  {
    title: "Mobile Applications",
    image: MobileAppsImg,
  },
  {
    title: "Gen AI & AI Solutions",
    image: GenAIImg,
  },
  {
    title: "DevOps & System Administration",
    image: DevOpsImg,
  },
  {
    title: "Smart Chatbot Systems",
    image: ChatbotImg,
  },
  {
    title: "IoT + AR Integration",
    image: IotArImg,
  },
];

function Services() {
  return (
    <section className="bg-black text-white px-6 md:px-12 py-20">
      <h4 className="text-accent text-center font-heading mb-2">
        Built To Defy
      </h4>
      <h2 className="text-3xl md:text-5xl font-heading text-center mb-12">
        Forge The Future
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <div key={i} className="group relative rounded-xl overflow-hidden group shadow-sm shadow-accent">
            <Image
              src={service.image}
              alt={service.title}
              className="w-full h-56 object-cover bg-red-100 group-hover:scale-105 transition-transform duration-300"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-60 group-hover:opacity-80 transition duration-300"></div>

            <div className="absolute inset-0 font-heading font-semibold  flex flex-col justify-center items-center p-4">
              <h3 className="text-lg md:text-xl font-semibold text-center">
                {service.title}
              </h3>
 
              <button className="absolute group-hover:rotate-240 duration-150 rotate-45 bottom-4 right-4 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-primary hover:text-white transition">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
