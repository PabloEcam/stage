/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./public/models/Room-04.glb --shadows 
*/

import { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./models/Room-04.glb')

  const { actions } = useAnimations(animations, group)
  console.log(actions)
  useEffect(() => {
    actions['MarioCartonAction'].play()
    actions['AviónPapel|Take 001|BaseLayer'].play()
  }, [actions])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene' position={[2, -1.67, 0]}>
        <group name='Mueble' position={[-1.704, 1.116, -1.763]} scale={0.025}>
          <mesh
            name='Box003'
            castShadow
            receiveShadow
            geometry={nodes.Box003.geometry}
            material={materials['color-02']}
            position={[0.005, -7.948, -6.157]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            name='Box004'
            castShadow
            receiveShadow
            geometry={nodes.Box004.geometry}
            material={materials['color-02']}
            position={[-15.082, 4.521, -6.157]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            name='Box006'
            castShadow
            receiveShadow
            geometry={nodes.Box006.geometry}
            material={materials['color-02']}
            position={[13.905, -20.348, -6.157]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            name='Box017'
            castShadow
            receiveShadow
            geometry={nodes.Box017.geometry}
            material={materials['color-02']}
            position={[0.005, 16.919, -6.157]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            name='Box018'
            castShadow
            receiveShadow
            geometry={nodes.Box018.geometry}
            material={materials['color-02']}
            position={[14.9, 21.405, -6.157]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            name='Cylinder005'
            castShadow
            receiveShadow
            geometry={nodes.Cylinder005.geometry}
            material={materials['color-02']}
            position={[25.439, -35.201, 5.331]}
          />
          <mesh
            name='Cylinder006'
            castShadow
            receiveShadow
            geometry={nodes.Cylinder006.geometry}
            material={materials['color-02']}
            position={[25.439, -35.201, -5.121]}
          />
          <mesh
            name='Cylinder007'
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007.geometry}
            material={materials['color-02']}
            position={[-25.377, -35.201, 5.331]}
          />
          <mesh
            name='Cylinder008'
            castShadow
            receiveShadow
            geometry={nodes.Cylinder008.geometry}
            material={materials['color-02']}
            position={[-25.377, -35.201, -5.121]}
          />
          <mesh
            name='Rectangle002'
            castShadow
            receiveShadow
            geometry={nodes.Rectangle002.geometry}
            material={materials['color-01']}
            position={[0, 2.421, -8.5]}
            rotation={[Math.PI / 2, 0, 0]}
          />
        </group>
        <group
          name='AviónTrayectoria'
          position={[-2.203, 1.308, 0.41]}
          rotation={[0.579, 0, 0]}
          scale={[0.029, 0.027, 0.029]}
        />
        <group name='Reloj' position={[0.084, 1.817, -1.92]} scale={0.025}>
          <mesh
            name='Cylinder003'
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003.geometry}
            material={materials['color-00']}
            position={[0.064, -0.093, -2.356]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            name='Cylinder004'
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004.geometry}
            material={materials['color-00']}
            position={[0.064, -0.093, -0.795]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.103, 1, 0.103]}
          />
          <mesh
            name='Tube003'
            castShadow
            receiveShadow
            geometry={nodes.Tube003.geometry}
            material={materials['color-03']}
            position={[0, 0, -2.189]}
            rotation={[Math.PI / 2, 0, 0]}
          />
        </group>
        <group name='Taburetes1' position={[0.191, 0.455, 0.345]} scale={0.025}>
          <group name='Taburete2' position={[-14.934, 0, -36.569]}>
            <mesh
              name='Line008'
              castShadow
              receiveShadow
              geometry={nodes.Line008.geometry}
              material={materials['color-04']}
              position={[5.538, 3.497, 0]}
              rotation={[Math.PI / 2, 0, 0]}
            />
          </group>
          <group name='Taburete4' position={[14.84, 0, -36.569]}>
            <mesh
              name='Line014'
              castShadow
              receiveShadow
              geometry={nodes.Line014.geometry}
              material={materials['color-04']}
              position={[5.538, 3.497, 0]}
              rotation={[Math.PI / 2, 0, 0]}
            />
          </group>
          <mesh
            name='Taburete1'
            castShadow
            receiveShadow
            geometry={nodes.Taburete1.geometry}
            material={materials['color-03']}
            position={[-9.302, 3.497, 36.569]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            name='Taburete3'
            castShadow
            receiveShadow
            geometry={nodes.Taburete3.geometry}
            material={materials['color-03']}
            position={[20.472, 3.497, 36.569]}
            rotation={[Math.PI / 2, 0, 0]}
          />
        </group>
        <group
          name='Taburetes1001'
          position={[-4.408, 0.455, 0.55]}
          scale={0.025}
        >
          <group name='Taburete6' position={[0.366, 0, 32.637]}>
            <mesh
              name='Line007'
              castShadow
              receiveShadow
              geometry={nodes.Line007.geometry}
              material={materials['color-05']}
              position={[5.538, 3.497, 0]}
              rotation={[Math.PI / 2, 0, 0]}
            />
          </group>
          <group name='Taburete7' position={[0.366, 0, -32.637]}>
            <mesh
              name='Line006'
              castShadow
              receiveShadow
              geometry={nodes.Line006.geometry}
              material={materials['color-05']}
              position={[5.538, 3.497, 0]}
              rotation={[Math.PI / 2, 0, 0]}
            />
          </group>
          <group name='Taburete8' position={[-43.755, 0, -2.983]}>
            <mesh
              name='Line005'
              castShadow
              receiveShadow
              geometry={nodes.Line005.geometry}
              material={materials['color-05']}
              position={[5.538, 3.497, 0]}
              rotation={[Math.PI / 2, 0, 0]}
            />
          </group>
          <mesh
            name='Taburete5'
            castShadow
            receiveShadow
            geometry={nodes.Taburete5.geometry}
            material={materials['color-05']}
            position={[49.293, 3.497, -2.983]}
            rotation={[Math.PI / 2, 0, 0]}
          />
        </group>
        <group name='Mesa1' position={[0.204, 0.815, 0.346]} scale={0.025}>
          <mesh
            name='Malla'
            castShadow
            receiveShadow
            geometry={nodes.Malla.geometry}
            material={materials['color-05']}
          />
          <mesh
            name='Malla_1'
            castShadow
            receiveShadow
            geometry={nodes.Malla_1.geometry}
            material={materials['color-06']}
          />
        </group>
        <group name='Mesa2' position={[-4.419, 0.716, 0.538]} scale={0.025}>
          <mesh
            name='Malla001'
            castShadow
            receiveShadow
            geometry={nodes.Malla001.geometry}
            material={materials['color-02']}
          />
          <mesh
            name='Malla001_1'
            castShadow
            receiveShadow
            geometry={nodes.Malla001_1.geometry}
            material={materials['color-07']}
          />
        </group>
        <mesh
          name='Pared'
          castShadow
          receiveShadow
          geometry={nodes.Pared.geometry}
          material={materials['color-08']}
          position={[-2.478, 0.222, -2.068]}
          scale={0.025}
        />
        <mesh
          name='RelojPendulo'
          castShadow
          receiveShadow
          geometry={nodes.RelojPendulo.geometry}
          material={materials['color-03']}
          position={[-0.172, 1.111, -1.929]}
          rotation={[Math.PI / 2, -0.436, 0]}
          scale={[0.025, 0.005, 0.025]}
        />
        <mesh
          name='Poster'
          castShadow
          receiveShadow
          geometry={nodes.Poster.geometry}
          material={materials['mario poster']}
          position={[0.955, 1.453, -1.965]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.022, 0.004, 0.022]}
        />
        <group
          name='MarioCarton'
          position={[-2.011, 1.157, 0.334]}
          rotation={[Math.PI / 2, 0, 0.001]}
          scale={[0.063, 0.02, 0.063]}
        >
          <mesh
            name='Malla015'
            castShadow
            receiveShadow
            geometry={nodes.Malla015.geometry}
            material={materials['color-00']}
          />
          <mesh
            name='Malla015_1'
            castShadow
            receiveShadow
            geometry={nodes.Malla015_1.geometry}
            material={materials['mario silueta']}
          />
        </group>
        <mesh
          name='MarioAlpha'
          castShadow
          receiveShadow
          geometry={nodes.MarioAlpha.geometry}
          material={materials['mario alpha']}
          position={[-5.7, 1.026, 1.702]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.02, 0.019, 0.02]}
        />
        <mesh
          name='Estrella'
          castShadow
          receiveShadow
          geometry={nodes.Estrella.geometry}
          material={materials['estrella alpha']}
          position={[-4.416, 1.138, 0.517]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.007, 0.025, 0.007]}
        />
        <mesh
          name='AviónPapel'
          castShadow
          receiveShadow
          geometry={nodes.AviónPapel.geometry}
          material={materials['color-00']}
          position={[-1.911, 1.439, -1.126]}
          scale={0.015}
        />
        <group name='Suelo' position={[-2.495, 0, 0.06]} scale={0.025}>
          <mesh
            name='Malla019'
            castShadow
            receiveShadow
            geometry={nodes.Malla019.geometry}
            material={materials['color-00']}
          />
          <mesh
            name='Malla019_1'
            castShadow
            receiveShadow
            geometry={nodes.Malla019_1.geometry}
            material={materials.suelo}
          />
        </group>
        <mesh
          name='RelojManilla1'
          castShadow
          receiveShadow
          geometry={nodes.RelojManilla1.geometry}
          material={materials['color-03']}
          position={[0.086, 1.814, -1.9]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.025}
        />
        <mesh
          name='RelojManilla2'
          castShadow
          receiveShadow
          geometry={nodes.RelojManilla2.geometry}
          material={materials['color-03']}
          position={[0.086, 1.814, -1.887]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.025}
        />
        <mesh
          name='EspejoMarco'
          castShadow
          receiveShadow
          geometry={nodes.EspejoMarco.geometry}
          material={materials['color-01']}
          position={[-3.369, 1.389, -1.98]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[-0.032, -0.009, -0.032]}
        />
        <mesh
          name='Espejo'
          castShadow
          receiveShadow
          geometry={nodes.Espejo.geometry}
          material={materials.espejo}
          position={[-3.37, 1.389, -1.959]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.025}
        />
        <mesh
          name='Saturno'
          castShadow
          receiveShadow
          geometry={nodes.Saturno.geometry}
          material={materials['metal-1']}
          position={[0.231, 1.036, 0.39]}
          scale={0.034}
        />
        <mesh
          name='SaturnoAro'
          castShadow
          receiveShadow
          geometry={nodes.SaturnoAro.geometry}
          material={materials['metal-1']}
          position={[0.226, 1.027, 0.392]}
          rotation={[0, 0, Math.PI / 9]}
          scale={[0.025, 0.02, 0.012]}
        />
        <group name='Arco' position={[0.99, 0.37, -1.686]} scale={0.025}>
          <mesh
            name='Malla029'
            castShadow
            receiveShadow
            geometry={nodes.Malla029.geometry}
            material={materials['color-00']}
          />
          <mesh
            name='Malla029_1'
            castShadow
            receiveShadow
            geometry={nodes.Malla029_1.geometry}
            material={materials['color-08']}
          />
          <mesh
            name='Malla029_2'
            castShadow
            receiveShadow
            geometry={nodes.Malla029_2.geometry}
            material={materials['color-02']}
          />
        </group>
        <mesh
          name='MaquinaJuegos-pantalla'
          castShadow
          receiveShadow
          geometry={nodes['MaquinaJuegos-pantalla'].geometry}
          material={materials['pantalla game']}
          position={[-5.432, 1.301, -1.257]}
          rotation={[1.313, 0, 0]}
          scale={[0.021, 0.025, 0.022]}
        />
        <group
          name='MaquinaJuegos'
          position={[-4.931, 1.08, -1.261]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.025}
        >
          <mesh
            name='Malla039'
            castShadow
            receiveShadow
            geometry={nodes.Malla039.geometry}
            material={materials['metal-1']}
          />
          <mesh
            name='Malla039_1'
            castShadow
            receiveShadow
            geometry={nodes.Malla039_1.geometry}
            material={materials['color-01.001']}
          />
          <mesh
            name='Malla039_2'
            castShadow
            receiveShadow
            geometry={nodes.Malla039_2.geometry}
            material={materials['color-00.001']}
          />
          <mesh
            name='Malla039_3'
            castShadow
            receiveShadow
            geometry={nodes.Malla039_3.geometry}
            material={materials['color-08']}
          />
          <mesh
            name='Malla039_4'
            castShadow
            receiveShadow
            geometry={nodes.Malla039_4.geometry}
            material={materials['color-03']}
          />
          <mesh
            name='Malla039_5'
            castShadow
            receiveShadow
            geometry={nodes.Malla039_5.geometry}
            material={materials['metal-1.001']}
          />
          <mesh
            name='Malla039_6'
            castShadow
            receiveShadow
            geometry={nodes.Malla039_6.geometry}
            material={materials['color negro']}
          />
          <mesh
            name='Malla039_7'
            castShadow
            receiveShadow
            geometry={nodes.Malla039_7.geometry}
            material={materials['color-04.001']}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/Room-04.glb')