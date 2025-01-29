import React from "react";
import { Plus } from "lucide-react";
import Link from "next/link";

const ValuationTool = () => {
  return (
    <section className="relative w-full">
      <div className="relative w-full">
        {/* Container for the image */}
        <div className="w-full relative">
          <img
            className="w-full h-auto"
            src="images/Valuation.png"
            alt="Valuation Tool"
          />
          
          {/* Container for the button positioned over the image */}
          <div className="absolute bottom-1/4 md:bottom-1/3 left-[9%]">
            <Link
              href="/valuation"
              className="flex items-center text-white text-xl lg:text-4xl font-bold font-['helveticanowtext-black-demo']"
            >
              Get Started
              <Plus 
                className="text-yellow-300 ml-1" 
                size={30}  
                strokeWidth={5}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuationTool;
