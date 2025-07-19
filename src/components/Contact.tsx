import React from "react";
import MyLoc from "../../public/nadimpalli_my_loc.png";
import Image from "next/image";
import { User, Mail, Smartphone, MessageSquare } from "lucide-react";

function Contact() {
  return (
    <section className="text-white px-10 py-20">
      <h3 className="text-center text-md uppercase text-[#b89d75] mb-2 tracking-widest">
        No Limits Here
      </h3>
      <h2 className="text-center text-3xl md:text-5xl font-heading font-bold mb-10 text-gray-200">
        Let's Bring Big Ideas Alive
      </h2>

      <div className="flex flex-col md:flex-row items-start justify-around gap-18">
        {/* Contact Form */}
        <div className="flex-1 w-full h-full max-w-md  space-y-4">
          <h3 className="text-2xl font-heading font-bold mb-4 text-gray-300">
            Let's Talk with Us
          </h3>

          {/* Full Name */}
          <div className="relative">
            <User
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              className="w-full pl-10 p-3 bg-[#44444480] border-0 border-b border-gray-600 text-white placeholder-gray-300 focus:outline-none focus:border-accent hover:border-accent transition-colors"
              placeholder="Full name"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              className="w-full pl-10 p-3 bg-[#44444480] border-0 border-b border-gray-600 text-white placeholder-gray-300 focus:outline-none focus:border-accent hover:border-accent transition-colors"
              placeholder="Email ID"
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <Smartphone
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              className="w-full pl-10 p-3 bg-[#44444480] border-0 border-b border-gray-600 text-white placeholder-gray-300 focus:outline-none focus:border-accent hover:border-accent transition-colors"
              placeholder="Phone"
            />
          </div>

          {/* Message */}
          <div className="relative">
            <MessageSquare
              className="absolute left-3 top-5 text-gray-400"
              size={20}
            />
            <textarea
              className="w-full h-24 pl-10 p-3 bg-[#44444480] border-0 border-b border-gray-600 text-white placeholder-gray-300 focus:outline-none focus:border-accent hover:border-accent transition-colors"
              placeholder="Message"
            />
          </div>

          <button className="w-full bg-primary text-text font-heading px-6 py-3 uppercase font-semibold tracking-wide hover:bg-accent transition-all">
            Send Message
          </button>
        </div>
        {/* Location / Map */}
        <div className="flex-1 w-full max-w-md text-center space-y-4">
          {/* <h3 className="text-3xl font-heading font-bold text-white mb-4">
            I AM AT
          </h3> */}
          <Image src={MyLoc} className="" alt="MY LOCATION" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
