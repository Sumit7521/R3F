import { Environment, OrbitControls } from "@react-three/drei";

export const Experience = () => {
  return (
    <>
      <directionalLight position={[5, 5, -5]} intensity={0.5} castShadow />
      <Environment preset="sunset" environmentIntensity={0.5} />
      <OrbitControls maxPolarAngle={Math.PI / 2 - 0.1} />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </>
  );
};
