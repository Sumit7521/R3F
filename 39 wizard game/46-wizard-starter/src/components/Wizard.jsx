import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { LoopOnce } from "three";

export const Wizard = ({ ...props }) => {
  const [animation, setAnimation] = useState("CharacterArmature|Idle");
  const { scene, nodes, animations } = useGLTF(`/models/Animated Wizard.glb`);
  const ref = useRef();
  const { actions } = useAnimations(animations, ref);

  if (actions?.["CharacterArmature|Death"]) {
    actions["CharacterArmature|Death"].setLoop(LoopOnce);
    actions["CharacterArmature|Death"].clampWhenFinished = true;
  }

  useEffect(() => {
    const action = actions[animation];
    if (!action) {
      return;
    }
    action.reset().fadeIn(0.5).play();
    return () => {
      action.fadeOut(0.5);
    };
  }, [animation, actions]);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);
  return (
    <group {...props}>
      <primitive ref={ref} object={scene} />
    </group>
  );
};
