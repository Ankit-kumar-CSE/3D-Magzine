import React from "react";
import { Canvas } from "@react-three/fiber";
import Navbar from "./Components/Navbar";
import UI from "./Components/UI";
import Book from "./Components/Book";
import "./App.css";


const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020617]">

      {/* Glow */}
      <div className="
        absolute
        top-20
        left-1/2
        -translate-x-1/2
        h-125
        w-225
        rounded-full
        bg-purple-900/40
        blur-[140px]
      " />

      {/* Navbar */}
      <div className="absolute z-50 w-full">
        <Navbar />
      </div>

      {/* 3D Canvas */}
      <div className="h-screen w-full absolute inset z-10">
        <Book />
      </div>

      {/* UI */}
      <UI />

    </div>
  );
};

export default App;
