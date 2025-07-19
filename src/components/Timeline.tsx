"use client";
import React from "react";

function Timeline() {
  return (
    <>
      <section className="relative bg-accent text-white py-6 px-6 min-h-[600px] flex items-center justify-center">
        <div className="w-full px-8">
          {/* Education Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text font-heading left-0 mb-8 uppercase tracking-wide">
              Education
            </h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-text"></div>
              {/* Diviseema Polytechnic College */}
              <div className="flex items-center mb-12">
                <div className="w-1/2"></div>
                {/* <div className="w-4 h-4 bg-white rounded-full absolute left-1/2 transform -translate-x-1/2"></div> */}
                <div
                  className="w-12 h-12 rounded-full absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center"
                  style={{
                    border: "6px solid #FFEFE3", // Outer layer color (e.g., orange-red) and width
                    boxSizing: "border-box",
                  }}
                >
                  <div
                    className="w-6 h-6 rounded-full"
                    style={{
                      backgroundColor: "#FFEFE3", // Inner circle color (e.g., gold)
                      border: "4px solid #FFEFE3", // Middle border color (e.g., orange) and width
                      boxSizing: "border-box",
                    }}
                  ></div>
                </div>
                <div className="w-1/2 pl-8 text-right">
                <center>
                  <div className="bg-primary bg-opacity-20 font-heading p-4 rounded-lg shadow-lg">
                    <h3 className="text-lg md:text-xl font-semibold text-accent">
                      Diviseema Polytechnic College
                    </h3>
                    <p className="text-sm text-text">
                      Diploma in Computer's
                    </p>
                    <p className="text-xs text-text">[2020 - 2023]</p>
                  </div>
                  </center>
                </div>
              </div>
              {/* Bapatla Engineering College */}
              <div className="flex items-center justify-center mb-12 gap-24">
                <div className="w-1/2 pl-8 font-heading">
                <center>
                  <div className="bg-[#FFEFE3] bg-opacity-20 p-4 rounded-lg shadow-lg">
                    <h3 className="text-2xl md:text-xl font-semibold text-accent">
                      Bapatla Engineering College
                    </h3>
                    <p className="text-xl text-black/75">Bachelor's in CS</p>
                    <p className="text-sm text-black">[2023 - 2026]</p>
                  </div>
                  </center>
                </div>
                <div
                  className="w-12 h-12 rounded-full absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center"
                  style={{
                    border: "6px solid #FFEFE3", // Outer layer color (e.g., orange-red) and width
                    boxSizing: "border-box",
                  }}
                >
                  <div
                    className="w-6 h-6 rounded-full"
                    style={{
                      backgroundColor: "#FFEFE3", // Inner circle color (e.g., gold)
                      border: "4px solid #FFEFE3", // Middle border color (e.g., orange) and width
                      boxSizing: "border-box",
                    }}
                  ></div>
                </div>
                <div className="w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative text-white py-6 px-6 min-h-[600px] flex items-center justify-center">
        <div className="w-full px-8">
          {/* Professional Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-8 uppercase tracking-wide">
              Professional
            </h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-600"></div>
              {/* Freelancing */}
              <div className="flex items-center mb-12">
                <div className="w-1/2"></div>
                <div className="w-4 h-4 bg-white rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                <div className="w-1/2 pl-8 text-right">
                  <div className="bg-yellow-800 bg-opacity-20 p-4 rounded-lg shadow-lg">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-200">
                      Entered World of Computers
                    </h3>
                    <p className="text-sm text-yellow-400">Freelancing ...</p>
                    <p className="text-xs text-gray-400">[2022 Started]</p>
                  </div>
                </div>
              </div>
              {/* Renitiate Technologies */}
              <div className="flex items-center mb-12">
                <div className="w-1/2 pl-8">
                  <div className="bg-yellow-800 bg-opacity-20 p-4 rounded-lg shadow-lg">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-200">
                      Founder & CEO
                    </h3>
                    <p className="text-sm text-yellow-400">
                      Renitiate Technologies
                    </p>
                    <p className="text-xs text-gray-400">[Current Working]</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-white rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                <div className="w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Timeline;
