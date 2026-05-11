import { OrbitControls } from "@react-three/drei";
import Book from "./Book";

const Experience = () => {
  return (
    <>
      <ambientLight intensity={1.5} />

      <directionalLight
        position={[2, 5, 2]}
        intensity={2}
      />

      <Book />

      <OrbitControls
        enableZoom={true}
      />
    </>
  );
};

export default Experience;