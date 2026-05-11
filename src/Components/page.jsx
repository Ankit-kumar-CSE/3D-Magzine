import { useTexture } from "@react-three/drei";
import { motion } from "framer-motion";

const Page = ({
  front,
  back,
  pageNumber,
  opened,
}) => {

  const frontTexture = useTexture(front);
  const backTexture = useTexture(back);

  return (
    <motion.mesh
      position={[0, 0, -pageNumber * 0.01]}
      animate={{
        rotateY: opened ? -Math.PI : 0,
      }}
      transition={{
        duration: 1,
      }}
    >
      <planeGeometry args={[2.2, 3, 32, 32]} />

      <meshStandardMaterial map={frontTexture} />
      {/* <meshStandardMaterial map={backTexture} /> */}
    </motion.mesh>
  );
};

export default Page;