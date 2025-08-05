import { useCursor, useKeyboardControls } from "@react-three/drei";
import { useRef, useState } from "react";
import { Controls } from "../App";
import { useFrame } from "@react-three/fiber";


const MOVEMENT_SPEED = 0.05

export const MoveableSphere = (props) => {
  const ref = useRef()
  const [hovered, sethovered] = useState(false)
  useCursor(hovered)
  const [selcted, setselcted] = useState(false)

  const forwardpressed = useKeyboardControls((state)=>state[Controls.forward])
  const back = useKeyboardControls((state)=>state[Controls.back])
  const left = useKeyboardControls((state)=>state[Controls.left])
  const right = useKeyboardControls((state)=>state[Controls.right])

  useFrame(()=>{
    if(!selcted){
      return;
    }
    if(forwardpressed){
      ref.current.position.y +=  MOVEMENT_SPEED
    }
    if(back){
      ref.current.position.y -= MOVEMENT_SPEED
    }
    if(left){
      ref.current.position.x -= MOVEMENT_SPEED
    }
    if(right){
      ref.current.position.x += MOVEMENT_SPEED
    }
  })

  let color = hovered ? "red" : "white" 
  if(selcted){
    color = "hotpink"
  }
  return (
    <mesh 
    ref={ref} {...props}
    onPointerEnter={(e)=>{
      e.stopPropagation();
      sethovered(true)
    }} 
    onPointerLeave={(e)=>{
      e.stopPropagation()
      sethovered(false)
    }} 
    onClick={(e)=>{
      e.stopPropagation()
      setselcted(!selcted)
      }} 
    onPointerMissed={()=>{
      setselcted(false)
    }}>
      <sphereGeometry args={[0.5, 64, 64]} />
      <meshStandardMaterial color={color}/>
    </mesh>
  );
};
