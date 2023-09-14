import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { Perf } from 'r3f-perf'
//import Sensorama from './components/models/Sensorama-01'
import Room04 from './components/models/Room-04'
import Sensorama2 from './components/models/Sensorama-01-2'
import CajaMexicana from './components/models/Caja-mexicana-maleta-01'

function App() {
  return (
    <Canvas shadows>
      <Perf position='top-left' />
      <OrbitControls />
      <Environment preset='city' />
      <directionalLight
        position={[0.5, 0.5, 0.5]}
        intensity={4}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-normalBias={0.04}
      />
      {/*      <directionalLight
        position={[-1, 1, 1]}
        intensity={5}
        castShadow
        shadow-normalBias={0.1}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      /> */}
      {/* <directionalLight
        position={[1, -1, -1]}
        intensity={1}
        castShadow
        shadow-normalBias={0.1}
      /> */}

      {/*  <mesh receiveShadow castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'blue'} />
      </mesh> */}
      <Sensorama2 position={[-6.5, 0, 0]} />
      <Room04 position={[-2, 0, 0]} />
      <CajaMexicana position={[-2, -1.47, 1.5]} />
    </Canvas>
  )
}

export default App
