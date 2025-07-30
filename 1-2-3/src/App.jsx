import { Canvas } from '@react-three/fiber'
import React from 'react'
import { BoxGeometry } from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js'

const App = () => {
  return (
    <Canvas
      camera={{position:[5,5,5]}}>
      <mesh>
        {/* <orbitControls /> */}
        <boxGeometry args={[1,1,1]}/>
        <meshStandardMaterial color='green' />
      </mesh>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0,0,3]} intensity={1}/>
      <directionalLight position={[0,3,3]} intensity={0.5}/>
    </Canvas>
  )
}

export default App