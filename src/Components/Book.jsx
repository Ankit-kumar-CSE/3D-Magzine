import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {useState} from "react";
import * as THREE from "three";
import Page from "./page";

const Book = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const frontpage = `textures/page${currentPage}.jpg`;
  const backpage = `textures/page${currentPage + 1}.jpg`;
  return (
    <>
      <div 
        className="h-10 w-full flex items-center justify-start absolute mt-150 z-20">
        <button
          className="h-10 w-30 bg-blue-900 rounded-3xl flex items-center justify-center hover:cursor-pointer"
          onClick={() => currentPage>1 ? setCurrentPage(currentPage - 2) : null}
          >
            Previous Page
        </button>
      </div>
      <div 
        className="h-10 w-100 flex items-center justify-end absolute mt-150 ml-280 z-20">
        <button 
          className="h-10 w-30 bg-blue-900 rounded-3xl flex items-center justify-center hover:cursor-pointer"
          onClick={() => currentPage < 15 ? setCurrentPage(currentPage + 2) : null}
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
