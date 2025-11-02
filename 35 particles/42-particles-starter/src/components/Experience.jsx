import { Environment, Gltf, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

// "Low Poly Winter Scene" (https://skfb.ly/6R6MM) by EdwiixGG is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).

export const Experience = () => {
  const light = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    light.current.position.x = Math.sin(time * 0.8) * 1.5;
  });

  return (
    <>
      <OrbitControls
        minDistance={3}
        maxDistance={12}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
      />

      <Environment preset="night" />

      <Gltf src="models/scene.gltf" scale={0.22} />
      <pointLight
        ref={light}
        position={[0, 1, 0.5]}
        intensity={2.5}
        decay={1}
      />
      <mesh position-y={-5.185}>
        <boxGeometry args={[3.6, 10, 3.6]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </>
  );
};
