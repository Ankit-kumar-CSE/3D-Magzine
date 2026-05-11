import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import Page from "./page";

const Book = () => {
  return (
    <Canvas
      camera={{
        position: [0, 0, 10],
        fov: 45,
      }}
    >
      {/* Lights */}
      <ambientLight intensity={1.5} />
      <directionalLight position={[2, 5, 5]} intensity={2} />
      <Page
        front="/textures/page1.jpg"
        back="/textures/page2.jpg"
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
  );
};

export default Book;
