import { useTexture } from "@react-three/drei";
import * as THREE from "three";

const Page = ({ front, back }) => {
  const frontTexture = useTexture(front);
  const backTexture = useTexture(back);

  return (
    <group rotation={[-0.2, 0, 0]}>
      {/* Front Page */}
      <mesh position={[-1.45, 0, 0]} rotation={[0, 0.2, 0]}>
        <planeGeometry args={[3, 5]} />

        <meshStandardMaterial map={frontTexture} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[1.45, 0, 0]} rotation={[0, -0.2, 0]}>
        <planeGeometry args={[3, 5]} />

        <meshStandardMaterial map={backTexture} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

export default Page;
