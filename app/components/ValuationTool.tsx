// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// const ValuationTool = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div className="bg-black lg:h-[88vh] flex items-center py-8 lg:py-0 relative overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black"></div>

//       <section className="w-full relative z-10">
//         <div className="mx-auto max-w-screen-xl px-4 flex flex-wrap lg:flex-nowrap lg:items-center">
//           <div className="lg:w-1/2 text-center lg:text-left">
//             <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 animate-fade-in font-['helveticanowtext-black-demo]">
//               <span className="bg-black bg-clip-text text-transparent font-['helveticanowtext-black-demo] text-white">
//                 The
//                 <span className="inline-block  w-1 h-1 lg:w-3 lg:h-3 bg-white rounded-full font-['Uniform_Rounded_Condensed_Black]"></span>
//                 Now
//                 <span className="inline-block  w-1 h-1 lg:w-3 lg:h-3 bg-white rounded-full font-['Uniform_Rounded_Condensed_Black]"></span>
//                 Valution
//               </span>
//               <span className="inline-block  w-1 h-1 lg:w-3 lg:h-3 bg-white rounded-full font-['Uniform_Rounded_Condensed_Black]"></span>
//               Tool
//             </h2>
//             <h2 className="text-xl md:text-3xl  text-white mb-4 animate-fade-in font-['helveticanowtext-black-demo] font-extrabold">
//               <span className="bg-clip-text text-white">
//                 Start With some key details
//               </span>
//             </h2>

//             <div>
//               <p className="text-lg text-white/90 sm:text-xl mb-4 font-['helveticanowtext-black-demo]">
//                 TNV uses your inputs and compares data to thousands of similar
//                 sites that have sold on TNV. We analyze business model,
//                 category, age, and other factors.
//               </p>
//               <p className="text-lg text-white/90 sm:text-xl mb-4 font-['helveticanowtext-black-demo]">
//                 We also consider how many buyers are interested in sites like
//                 yours.
//               </p>
//             </div>

//             <div className="flex flex-col items-center lg:items-start mt-7 mb-8 lg:mb-2">
//               <Link href="/valuation">
//                 <button
//                   className="relative overflow-hidden bg-white text-black px-7 py-3 rounded-full font-extrabold font-['helveticanowtext-black-demo] text-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
//                   onMouseEnter={() => setIsHovered(true)}
//                   onMouseLeave={() => setIsHovered(false)}
//                 >
//                   <span
//                     className={`relative z-10  ${
//                       isHovered ? "text-black" : ""
//                     }`}
//                   >
//                     Get a Free Valuation
//                   </span>
//                   <div
//                     className={`absolute inset-0 transition-transform duration-300 ${
//                       isHovered ? "translate-x-0" : "-translate-x-full"
//                     }`}
//                   ></div>
//                 </button>
//               </Link>
//             </div>
//           </div>

//           <div className="lg:w-1/2 mb-6 lg:mb-0 lg:pl-10">
//             <div
//               className="relative group transform transition-all duration-500 hover:scale-105"
//               style={{
//                 filter: "drop-shadow(0 0 20px rgba(139, 92, 246, 0.3))",
//               }}
//             >
//               <Image
//                 src="/images/Group.png"
//                 width={400}
//                 height={400}
//                 alt="Image Description"
//                 className="w-full h-auto transition-transform duration-300"
//               />
//               <div className="absolute inset-0 transition-opacity duration-300 rounded-lg"></div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ValuationTool;

import React from "react";
import Image from "next/image";
import Link from "next/link";

const ValuationTool = () => {
  return (
    <div className="bg-black h-[70vh] lg:h-[88vh] relative overflow-hidden ">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 -translate-x-1/2 top-20 flex items-center justify-center lg:flex-row flex-col">
          {/* Gray cross */}
          <div className="relative w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]">
            <Image
              src="/images/Cross.png"
              alt="Decorative cross"
              fill
              className="object-contain opacity-80"
              priority
            />
          </div>

          {/* Blue circle - hidden on smaller screens */}
          <div className="relative w-[400px] h-[300px] lg:w-[600px] lg:h-[500px] -ml-0 lg:-ml-20 hidden md:block">
            <Image
              src="/images/Circle.png"
              alt="Decorative circle"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-24 md:pt-48">
        <div className="space-y-4 md:ml-64 text-center md:text-left">
          <div className="text-white text-6xl lg:text-8xl font-bold font-['helveticanowtext-black-demo]">
            Valuation<span className="text-red-500">.</span>
          </div>
          <h2 className="text-white text-6xl lg:text-8xl font-bold font-['helveticanowtext-black-demo]">
            Pro<span className="text-red-500">.</span>
          </h2>
          <Link href="/valuation">
            <div className="pt-6 md:pt-8">
              <button className="text-white text-2xl lg:text-4xl font-bold hover:text-gray-200 transition-colors duration-200 group font-['helveticanowtext-black-demo]">
                Get Started
                <span className="text-yellow-200 group-hover:text-yellow-300 ml-1">
                  +
                </span>
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ValuationTool;
