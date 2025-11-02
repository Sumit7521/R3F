import { Gltf } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Vector3 } from "three";
import { degToRad, lerp } from "three/src/math/MathUtils.js";

import { Wizard } from "./Wizard";

export const Magic = ({ ...props }) => {
  const pointerPosition = useRef(new Vector3(0, 0.001, 0));
  const pointer = useRef();
  const wizard = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (pointer.current && pointerPosition.current) {
      pointer.current.position.lerp(pointerPosition.current, 0.1);

      pointer.current.scale.x =
        pointer.current.scale.y =
        pointer.current.scale.z =
          lerp(
            pointer.current.scale.x,
            2 + (Math.sin(elapsedTime * 4) + 0.5) * 1,
            0.1
          );
    }
    wizard.current.lookAt(pointerPosition.current);
  });

  return (
    <group {...props}>
      <mesh
        receiveShadow
        rotation-x={-Math.PI / 2}
        position-y={0.001}
        onPointerMove={(e) =>
          pointerPosition.current.set(e.point.x, e.point.y + 0.001, e.point.z)
        }
      >
        <planeGeometry args={[100, 100]} />
        <shadowMaterial opacity={0.4} transparent />
      </mesh>
      <mesh ref={pointer} rotation-x={degToRad(-90)}>
        <circleGeometry args={[0.1, 32]} />
        <meshStandardMaterial emissive={"white"} emissiveIntensity={2.5} />
      </mesh>
      <group position-z={5} ref={wizard}>
        <Wizard model="Animated Wizard" scale={0.4} />
      </group>
      <Gltf scale={0.5} src="/models/WizardTraining.glb" receiveShadow />
    </group>
  );
};
