import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { Perf } from 'r3f-perf'
//import Sensorama from './components/models/Sensorama-01'
/* import Room04 from './components/models/Room-04'
import Sensorama2 from './components/models/Sensorama-01-2'
import CajaMexicana from './components/models/Caja-mexicana-maleta-01'
import CajaMexicanaLP from './components/models/Caja-mexicana-maleta-LP-01'
import CajaMexicanaLPAni from './components/models/Caja-mexicana-maleta-LP-01-ani' */
//import CajaMexicanaLPCAni from './components/models/Caja-mexicana-maleta-LP-C-01-ani'
//import CajaMexicanaLPC2 from './components/models/Caja-mexicana-maleta-LP-C-02'
//import CajaMexicanaLPC3 from './components/models/Caja-mexicana-maleta-LP-C-03'
//import CajaMexicanaLPC4 from './components/models/Caja-mexicana-maleta-LP-C-04'
//import CajaMexicanaLP5 from './components/models/Caja-mexicana-maleta-LP-01-05'
//import CajaMexicaneLP5anim from './components/models/Caja-mexicana-maleta-LP-05-ani'
import CajaMexicanaLP01anim2 from './components/models/Caja-mexicana-maleta-LP-01-ani2'

function App() {
  return (
    <Canvas shadows>
      <Perf position='top-left' />
      <OrbitControls />
      <Environment preset='city' />
      <directionalLight
        position={[0.5, 0.5, 0.5]}
        intensity={9}
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
      {/*  <Sensorama2 position={[-6.5, 0, 0]} />
      <Room04 position={[-2, 0, 0]} /> */}
      {/*     <CajaMexicana position={[-2, -1.47, 1.5]} />
      <CajaMexicanaLP position={[0, -1.47, 1.5]} />
      <CajaMexicanaLPAni position={[2, -1.47, 1.5]} /> */}
      {/*  <CajaMexicaneLP5anim position={[0, 0, 0]} /> */}
      <CajaMexicanaLP01anim2 position={[0, 0, 0]} />
    </Canvas>
  )
}

export default App
