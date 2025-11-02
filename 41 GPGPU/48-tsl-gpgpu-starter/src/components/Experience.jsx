import { Environment, OrbitControls } from "@react-three/drei";

export const Experience = () => {
  return (
    <>
      <Environment preset="warehouse" />
      <OrbitControls />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </>
  );
};
