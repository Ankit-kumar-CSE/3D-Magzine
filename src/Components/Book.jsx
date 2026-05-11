import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {useState} from "react";
import * as THREE from "three";
import Page from "./page";


const Book = () => {
const [currentPage, setCurrentPage] = useState(1);
const frontpage = `textures/page${currentPage}.jpg`;
const backpage = `textures/page${currentPage + 1}.jpg`;

const [isFlipping, setIsFlipping] = useState(false);
const [flipDirection, setFlipDirection] = useState("next");

const nextPage = () => {

  if (currentPage >= 14 || isFlipping) return;

  setFlipDirection("next");
  setIsFlipping(true);

  setTimeout(() => {
    setCurrentPage((prev) => prev + 2);
  }, 500);

  setTimeout(() => {
    setIsFlipping(false);
  }, 1000);
};

const prevPage = () => {

  if (currentPage <= 1 || isFlipping) return;

  setFlipDirection("prev");
  setIsFlipping(true);

  setTimeout(() => {
    setCurrentPage((prev) => prev - 2);
  }, 500);

  setTimeout(() => {
    setIsFlipping(false);
  }, 1000);
};

  return (
    <>
      <div 
        className="h-10 w-full flex items-center justify-start absolute mt-150 z-20">
        <button
          className="h-10 w-30 bg-blue-900 rounded-3xl flex items-center justify-center hover:cursor-pointer"
          onClick={prevPage}
          >
            Previous Page
        </button>
      </div>
      <div 
        className="h-10 w-100 flex items-center justify-end absolute mt-150 ml-280 z-20">
        <button 
          className="h-10 w-30 bg-blue-900 rounded-3xl flex items-center justify-center hover:cursor-pointer"
          onClick={nextPage}
          >
            Next Page
        </button>
      </div>
      <Canvas
        camera={{
          position: [0, 0, 10],
          fov: 45,
        }}
      >
        {/* Lights */}
        <ambientLight 
          intensity={1.5} />
        <directionalLight 
          position={[2, 5, 5]} 
          intensity={2} />
        <Page 
          front={frontpage}
          back={backpage}
          isFlipping={isFlipping}
          flipDirection={flipDirection}
        />
        <OrbitControls
          enablePan={false}
          minDistance={8}
          maxDistance={11}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
          minAzimuthAngle={-0.5}
          maxAzimuthAngle={0.5}
        />
      </Canvas>
    </>
  );
};

export default Book;
