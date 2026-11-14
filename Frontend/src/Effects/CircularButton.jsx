import React, { useEffect } from "react";

function CircularButton() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const element = document.getElementById("circle");
      if (element) {
        element.style.opacity = "1";
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="circle"
      className="opacity-0 relative flex items-center justify-center w-20 h-20 bg-black rounded-full overflow-hidden shadow-2xl transition-opacity duration-400 ease-in-out"
    >
      <svg
        className="absolute w-full h-full animate-spin-slow text-white"
        viewBox="0 0 200 200"
      >
        <path
          id="textPath"
          fill="transparent"
          d="M 20, 100 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
        />
        <text
          className="text-[19px] uppercase tracking-widest font-medium"
          fill="currentColor"
        >
          <textPath href="#textPath" startOffset="0%">
            • DOWNLOAD • CV • HERE •
          </textPath>
        </text>
      </svg>

      <div className="relative z-10 flex items-center justify-center w-11 h-11 bg-white rounded-full shadow-md cursor-pointer hover:scale-105 transition-transform">
        <svg
          className="w-5 h-5 text-black"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
}

export default CircularButton;
