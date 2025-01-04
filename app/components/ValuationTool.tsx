"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ValuationTool = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    "Start with some key details",
    "Start with some key details",
    "Start with some key details",
  ];

  const handleDotClick = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <div className="bg-black lg:h-[85vh] flex items-center py-8 lg:py-0 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black"></div>

      <section className="w-full relative z-10">
        <div className="mx-auto max-w-screen-xl px-4 flex flex-wrap lg:flex-nowrap lg:items-center">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 animate-fade-in">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                The.Now.Valuation.Tool
              </span>
            </h2>
            <p className="text-xl font-extrabold sm:text-3xl mb-4 text-white">
              {slides[activeSlide]}
            </p>
            <div className="transform transition-all duration-500 hover:scale-105">
              <p className="text-lg text-white/90 sm:text-xl mb-4">
                Flippa uses your inputs and compares data to thousands of
                similar sites that have sold on Flippa. We analyze business
                model, category, age, and other factors.
              </p>
              <p className="text-lg text-white/90 sm:text-xl mb-4">
                We also consider how many buyers are interested in sites like
                yours.
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-start">
              <Link href="/valuation">
                <button
                  className="relative overflow-hidden bg-white text-black px-7 py-3 rounded-full font-extrabold text-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <span
                    className={`relative z-10 transition-colors duration-300 ${
                      isHovered ? "text-white" : ""
                    }`}
                  >
                    Get a Free Valuation
                  </span>
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-transform duration-300 ${
                      isHovered ? "translate-x-0" : "-translate-x-full"
                    }`}
                  ></div>
                </button>
              </Link>
            </div>

            <div className="flex justify-center lg:justify-start gap-2 mt-6">
              {[0, 1, 2].map((index: number) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    activeSlide === index
                      ? "bg-gradient-to-r from-blue-400 to-purple-600 scale-125"
                      : "bg-gray-500 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 mb-6 lg:mb-0 lg:pl-10">
            <div
              className="relative group transform transition-all duration-500 hover:scale-105"
              style={{
                filter: "drop-shadow(0 0 20px rgba(139, 92, 246, 0.3))",
              }}
            >
              <Image
                src="/images/GROUP.png"
                width={400}
                height={400}
                alt="Image Description"
                className="w-full h-auto transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ValuationTool;
