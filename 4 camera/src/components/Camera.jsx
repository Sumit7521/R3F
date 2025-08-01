import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, OrthographicCamera, PerspectiveCamera } from '@react-three/drei'


const Camera = () => {
  return (
    <div className='h-screen w-screen bg-black'>
      <Canvas camera={{position:[3,3,3]}}>
        {/* <PerspectiveCamera position={[8,8,8]} makeDefault near={1} far={1000}/> */}
        <OrthographicCamera position={[1,1,1]} />
        <ambientLight />
        <OrbitControls />
        <mesh>
        <boxGeometry />
        <meshNormalMaterial color="red" />
        </mesh>
      </Canvas>
    </div>
  )
}

export default Camera