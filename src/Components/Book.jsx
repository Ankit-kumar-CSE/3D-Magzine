import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Page from "./Page";

const Book = () => {


  return (
    <Canvas>
      <ambientLight intensity={1.5} />
      <directionalLight
        position={[2, 5, 2]}
        intensity={2}
      />
      <mesh>
      <sphereGeometry />
      <meshStandardMaterial color="hotpink" />
    </mesh>
    </Canvas>
  );
};

export default Book;