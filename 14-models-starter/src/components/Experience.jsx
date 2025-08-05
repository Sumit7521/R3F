import { useFBX, useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Fish } from "./Fish";

export const Experience = () => {
  // const model = useLoader(GLTFLoader, "models/Fish.gltf")
  const {scene} = useGLTF("models/Fish.gltf")
  const dino = useFBX("models/Dino.fbx")
  return (
    <>
    <ambientLight intensity={1}/>
      {/* <primitive object={scene} />
       */}
       <Fish />
    </>
  );
};
