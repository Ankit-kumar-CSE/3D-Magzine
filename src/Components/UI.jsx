import React from "react";


const UI = () => {
  return (
    < >
      <div className="fixed inset-0 flex items-center -rotate-2 overflow-hidden select-none z-0 pointer-events-none">
        <div className="flex whitespace-nowrap animate-marquee">
          {/* First Set */}
          <div className="flex items-center gap-10 px-10">
            <h1 className="text-white text-7xl ">
              IMMERSIVE</h1>
            <h2 className="text-white text-7xl font-light">
              3D EXPERIENCE
            </h2>
            <h2 className="text-white text-8xl font-bold">
              Three.js
            </h2>
            <h2 className="text-white text-8xl font-bold italic outline-text">
              CREATIVE TECH
            </h2>
            <h2 className="text-white text-8xl font-medium">
              WEBGL
            </h2>
            <h2 className="text-white text-8xl font-bold">
              REACT FIBER
            </h2>
          </div>

          {/* Duplicate Set */}
          <div className="flex items-center gap-10 px-10">
            <h1 className="text-white text-7xl ">
              IMMERSIVE</h1>
            <h2 className="text-white text-7xl font-light">
              3D EXPERIENCE
            </h2>
            <h2 className="text-white text-8xl font-bold">
              Three.js
            </h2>
            <h2 className="text-white text-8xl font-bold italic outline-text">
              CREATIVE TECH
            </h2>
            <h2 className="text-white text-8xl font-medium">
              WEBGL
            </h2>
            <h2 className="text-white text-8xl font-bold">
              REACT FIBER
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default UI;
