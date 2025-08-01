import { OrbitControls, useHelper } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useControls } from 'leva'
import React, { useRef } from 'react'
import * as THREE from "three"


const Love = () => {
    const ref = useRef()
    const helper = useHelper(ref, THREE.PointLight , 0.5 ,"red")
    const {color , distance , decay ,intensity} = useControls(
      {
        color:"#ff0000",
        distance: 3,
        decay : 2,
        intensity :0.5
      }
    )
  return(
    <pointLight 
    ref={ref} 
    position={[1,1,1]} 
    intensity={intensity} 
    distance={distance} 
    decay={decay} 
    color={color} />
  )
}


const Lightings = () => {
    
  return (
    <div className='h-screen w-screen'>
        <Canvas camera={{position:[0,3,3]}} >
            <OrbitControls />
            <Love />
            <mesh>
                <boxGeometry />
                <meshStandardMaterial color={"red"} />
            </mesh>
        </Canvas>
    </div>
  )
}

export default Lightings