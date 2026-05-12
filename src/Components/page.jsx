import { useTexture } from "@react-three/drei";
import { useMemo} from "react";
import * as THREE from "three";

const Page = ({
  front,
  back,
}) => {

  // TEXTURES
  const frontTexture = useTexture(front);
  const backTexture = useTexture(back);


  // LEFT PAGE CURVE
  const leftGeometry = useMemo(() => {

    const geo = new THREE.PlaneGeometry(
      3,
      5,
      40,
      40
    );

    const position = geo.attributes.position;

    for (let i = 0; i < position.count; i++) {

      const x = position.getX(i);

      const z =
        Math.sin((x / 3) * Math.PI) * 0.15;

      position.setZ(i, z);
    }

    position.needsUpdate = true;

    geo.computeVertexNormals();

    return geo;

  }, []);

  // RIGHT PAGE CURVE
  const rightGeometry = useMemo(() => {

    const geo = new THREE.PlaneGeometry(
      3,
      5,
      40,
      40
    );

    const position = geo.attributes.position;

    for (let i = 0; i < position.count; i++) {

      const x = position.getX(i);

      const z =
        -Math.sin((x / 3) * Math.PI) * 0.15;

      position.setZ(i, z);
    }

    position.needsUpdate = true;

    geo.computeVertexNormals();

    return geo;

  }, []);

  return (

    <group rotation={[-0.2, 0, 0]}>

      {/* LEFT PAGE */}
      <mesh
        position={[-1.5, 0, 0]}
        rotation={[0, 0.2, 0]}
      >

        <primitive object={leftGeometry} />

        <meshStandardMaterial
          map={frontTexture}
          side={THREE.DoubleSide}
        />

      </mesh>

      {/* RIGHT PAGE */}
      <mesh
        position={[1.5, 0, 0]}
        rotation={[0, -0.2, 0]}
      >

        <primitive object={rightGeometry} />

        <meshStandardMaterial
          map={backTexture}
          side={THREE.DoubleSide}
        />

      </mesh>

    </group>
  );
};

export default Page;