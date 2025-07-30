import { Stats, useHelper } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useControls } from 'leva'
import React, { useRef } from 'react'
import * as THREE from "three"

const Box = () => {
  const ref = useRef()
  useHelper(ref, THREE.BoxHelper, "cyan")

  const { position,color ,opacity,transparent } = useControls({
    position: {
      value: { x: 0, y: 0, z: 0 },
    },
    opacity:{
        value:0.5,
        min:0,
        max:2,
        step:0.01
    },
    color:"#ff0000",
    transparent:true
  })

  return (
    <mesh ref={ref} position={[position.x, position.y, position.z]}>
      <boxGeometry />
      <meshBasicMaterial color={color} transparent={transparent} opacity={opacity} />
    </mesh>
  )
}

const Debug = () => {
  return (
    <div className='h-screen w-screen bg-black block'>
        <Stats />
      <Canvas camera={{ position: [3, 3, 3] }}>
        <axesHelper />
        <Box />
      </Canvas>
    </div>
  )
}

export default Debug
