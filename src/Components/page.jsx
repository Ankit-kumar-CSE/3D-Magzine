import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";

const Page = ({
  front,
  back,
  isFlipping,
  flipDirection,
}) => {

  const frontTexture = useTexture(front);
  const backTexture = useTexture(back);

  const groupRef = useRef();

  useFrame(() => {

    if (!groupRef.current) return;

    let targetRotation = 0;

    if (isFlipping) {

      targetRotation =
        flipDirection === "next"
          ? -Math.PI
          : Math.PI;
    }

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetRotation,
      0.08
    );

    if (!isFlipping) {

      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        0,
        0.08
      );
    }
  });

  return (
    <group
      ref={groupRef}
      rotation={[-0.2, 0, 0]}
    >

      {/* Left */}
      <mesh
        position={[-1.45, 0, 0]}
        rotation={[0, 0.2, 0]}
      >
        <planeGeometry args={[3, 5, 32, 32]} />

        <meshStandardMaterial
          map={frontTexture}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Right */}
      <mesh
        position={[1.45, 0, 0]}
        rotation={[0, -0.2, 0]}
      >
        <planeGeometry args={[3, 5, 32, 32]} />

        <meshStandardMaterial
          map={backTexture}
          side={THREE.DoubleSide}
        />
      </mesh>

    </group>
  );
};

export default Page;