/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./public/models/Caja-mexicana-maleta-LP-01-ani2.glb 
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(
    './models/Caja-mexicana-maleta-LP-01-ani2.glb'
  )
  const { actions } = useAnimations(animations, group)

  console.log(actions)

  useEffect(() => {
    actions['Caja1Base|Take 001|BaseLayer'].play()
    actions['Caja1Tapa|Take 001|BaseLayer'].play()
    actions['Caja2Base|Take 001|BaseLayer'].play()
    actions['Caja2Tapa|Take 001|BaseLayer'].play()
    actions['MaletaTapa|Take 001|BaseLayer'].play()
    actions['Sphere003Action'].play()
    actions['Tape001|Take 001|BaseLayer'].play()
    actions['Tape002|Take 001|BaseLayer'].play()
    actions['Tape003|Take 001|BaseLayer'].play()
    actions['Tape004|Take 001|BaseLayer'].play()
  }, [actions])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <group
          name='Tape001'
          position={[0.358, -0.001, -0.138]}
          rotation={[Math.PI / 2, -1.558, -Math.PI / 2]}
          scale={0.025}
        />
        <group
          name='Tape001Target'
          position={[0.357, 0.059, -0.138]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.025}
        />
        <group
          name='Tape002'
          position={[0.307, -0.014, -0.144]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.025}
        />
        <group
          name='Tape002Target'
          position={[-0.195, -0.014, -0.144]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.025}
        />
        <group
          name='Tape003'
          position={[0.343, -0.013, -0.094]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={0.025}
        />
        <group
          name='Tape003Target'
          position={[0.343, -0.013, 0.207]}
          scale={0.025}
        />
        <group
          name='Tape004'
          position={[0.327, 0, -0.093]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={0.025}
        />
        <group
          name='Tape004Target'
          position={[0.327, 0, 0.158]}
          scale={0.025}
        />
        <group name='Caja1Base' position={[-0.327, 0.071, 0.005]} scale={0.025}>
          <group name='CajaCarretes1' position={[-0.079, -1.331, 4.923]}>
            <mesh
              name='Line104'
              geometry={nodes.Line104.geometry}
              material={materials['pelicula cinta']}
              position={[-4.111, 1.047, -3.736]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.607, 0.607, 0.927]}
            />
            <mesh
              name='Line105'
              geometry={nodes.Line105.geometry}
              material={materials['pelicula cinta']}
              position={[7.037, 1.047, -1.845]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.557, 0.557, 0.927]}
            />
            <mesh
              name='Line106'
              geometry={nodes.Line106.geometry}
              material={materials['pelicula cinta']}
              position={[7.119, 1.047, -3.764]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.607, 0.607, 0.927]}
            />
            <mesh
              name='Line107'
              geometry={nodes.Line107.geometry}
              material={materials['pelicula cinta']}
              position={[9.119, 1.047, -3.752]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.607, 0.607, 0.927]}
            />
            <mesh
              name='Line108'
              geometry={nodes.Line108.geometry}
              material={materials['pelicula cinta']}
              position={[3.403, 1.047, -3.71]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.607, 0.607, 0.927]}
            />
            <mesh
              name='Line109'
              geometry={nodes.Line109.geometry}
              material={materials['pelicula cinta']}
              position={[1.506, 1.047, -1.854]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.607, 0.607, 0.927]}
            />
            <mesh
              name='Line110'
              geometry={nodes.Line110.geometry}
              material={materials['pelicula cinta']}
              position={[-2.254, 1.047, -3.709]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.53, 0.53, 0.927]}
            />
            <mesh
              name='Line111'
              geometry={nodes.Line111.geometry}
              material={materials['pelicula cinta']}
              position={[5.156, 1.047, -1.876]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.516, 0.516, 0.927]}
            />
            <mesh
              name='Line112'
              geometry={nodes.Line112.geometry}
              material={materials['pelicula cinta']}
              position={[5.246, 1.047, -3.7]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.607, 0.607, 0.927]}
            />
            <mesh
              name='Line113'
              geometry={nodes.Line113.geometry}
              material={materials['pelicula cinta']}
              position={[1.525, 1.047, 0.034]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.607, 0.607, 0.927]}
            />
            <mesh
              name='Line114'
              geometry={nodes.Line114.geometry}
              material={materials['pelicula cinta']}
              position={[3.38, 1.047, 3.769]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.565, 0.565, 0.927]}
            />
            <mesh
              name='Line115'
              geometry={nodes.Line115.geometry}
              material={materials['pelicula cinta']}
              position={[-0.348, 1.047, 0.097]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.607, 0.607, 0.927]}
            />
            <mesh
              name='Line116'
              geometry={nodes.Line116.geometry}
              material={materials['pelicula cinta']}
              position={[7.081, 1.047, 1.864]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.557, 0.557, 0.927]}
            />
            <mesh
              name='Line117'
              geometry={nodes.Line117.geometry}
              material={materials['pelicula cinta']}
              position={[9.163, 1.047, -0.043]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.607, 0.607, 0.927]}
            />
            <mesh
              name='Line118'
              geometry={nodes.Line118.geometry}
              material={materials['pelicula cinta']}
              position={[5.199, 1.047, 1.833]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.516, 0.516, 0.927]}
            />
            <mesh
              name='Line119'
              geometry={nodes.Line119.geometry}
              material={materials['pelicula cinta']}
              position={[-2.277, 1.047, -1.838]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.582, 0.582, 0.927]}
            />
            <mesh
              name='Line120'
              geometry={nodes.Line120.geometry}
              material={materials['pelicula cinta']}
              position={[1.358, 1.047, 1.939]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.607, 0.607, 0.927]}
            />
            <mesh
              name='Line121'
              geometry={nodes.Line121.geometry}
              material={materials['pelicula cinta']}
              position={[3.358, 1.047, 1.951]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.607, 0.607, 0.927]}
            />
            <mesh
              name='Line122'
              geometry={nodes.Line122.geometry}
              material={materials['pelicula cinta']}
              position={[-2.358, 1.047, 1.993]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.607, 0.607, 0.927]}
            />
            <mesh
              name='Line123'
              geometry={nodes.Line123.geometry}
              material={materials['pelicula cinta']}
              position={[-0.439, 1.047, 1.878]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.607, 0.607, 0.927]}
            />
            <mesh
              name='Line124'
              geometry={nodes.Line124.geometry}
              material={materials['pelicula cinta']}
              position={[-4.506, 1.047, 0.473]}
              rotation={[Math.PI / 2, 0, 1.309]}
              scale={[0.582, 0.582, 0.927]}
            />
            <mesh
              name='Line125'
              geometry={nodes.Line125.geometry}
              material={materials['pelicula cinta']}
              position={[5.269, 1.047, 3.715]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.557, 0.557, 0.927]}
            />
            <mesh
              name='Line126'
              geometry={nodes.Line126.geometry}
              material={materials['pelicula cinta']}
              position={[-7.854, 1.047, 0.046]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.607, 0.607, 0.927]}
            />
            <mesh
              name='Line127'
              geometry={nodes.Line127.geometry}
              material={materials['pelicula cinta']}
              position={[-2.368, 1.047, 3.696]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.516, 0.516, 0.927]}
            />
            <mesh
              name='Line128'
              geometry={nodes.Line128.geometry}
              material={materials['pelicula cinta']}
              position={[-8.021, 1.047, 1.95]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.607, 0.607, 0.927]}
            />
            <mesh
              name='Line129'
              geometry={nodes.Line129.geometry}
              material={materials['pelicula cinta']}
              position={[-6.017, 1.047, 1.869]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.607, 0.607, 0.927]}
            />
            <mesh
              name='Line130'
              geometry={nodes.Line130.geometry}
              material={materials['pelicula cinta']}
              position={[-4.11, 1.047, 3.727]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.557, 0.557, 0.927]}
            />
            <mesh
              name='Line131'
              geometry={nodes.Line131.geometry}
              material={materials['pelicula cinta']}
              position={[8.998, 1.047, 3.814]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.607, 0.607, 0.927]}
            />
            <mesh
              name='Line132'
              geometry={nodes.Line132.geometry}
              material={materials['pelicula cinta']}
              position={[6.714, 1.047, 4.212]}
              rotation={[Math.PI / 2, 0, 1.309]}
              scale={[0.582, 0.582, 0.927]}
            />
            <mesh
              name='Line133'
              geometry={nodes.Line133.geometry}
              material={materials['pelicula cinta']}
              position={[1.448, 1.047, 3.734]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.562, 0.562, 0.927]}
            />
            <mesh
              name='Line134'
              geometry={nodes.Line134.geometry}
              material={materials['pelicula cinta']}
              position={[-7.965, 1.047, -3.814]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.607, 0.607, 0.927]}
            />
            <mesh
              name='Line135'
              geometry={nodes.Line135.geometry}
              material={materials['pelicula cinta']}
              position={[-7.896, 1.047, -1.88]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.607, 0.607, 0.927]}
            />
            <mesh
              name='Line136'
              geometry={nodes.Line136.geometry}
              material={materials['pelicula cinta']}
              position={[7.195, 1.047, -0.02]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.607, 0.607, 0.927]}
            />
            <mesh
              name='Line137'
              geometry={nodes.Line137.geometry}
              material={materials['pelicula cinta']}
              position={[9.033, 1.047, 1.874]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.607, 0.607, 0.927]}
            />
            <mesh
              name='Line138'
              geometry={nodes.Line138.geometry}
              material={materials['pelicula cinta']}
              position={[-0.758, 1.047, 3.175]}
              rotation={[Math.PI / 2, 0, -1.134]}
              scale={[0.607, 0.607, 0.927]}
            />
            <mesh
              name='Line139'
              geometry={nodes.Line139.geometry}
              material={materials['pelicula cinta']}
              position={[-6.06, 1.047, 3.692]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.557, 0.557, 0.927]}
            />
            <mesh
              name='Line140'
              geometry={nodes.Line140.geometry}
              material={materials['pelicula cinta']}
              position={[-4.05, 1.047, 1.843]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.607, 0.607, 0.927]}
            />
            <mesh
              name='Line141'
              geometry={nodes.Line141.geometry}
              material={materials['pelicula cinta']}
              position={[-7.969, 1.047, 3.8]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.582, 0.582, 0.927]}
            />
            <mesh
              name='Line142'
              geometry={nodes.Line142.geometry}
              material={materials['pelicula cinta']}
              position={[-6.088, 1.047, -1.88]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.557, 0.557, 0.927]}
            />
            <mesh
              name='Line143'
              geometry={nodes.Line143.geometry}
              material={materials['pelicula cinta']}
              position={[-6.454, 1.047, 0.468]}
              rotation={[Math.PI / 2, 0, 1.309]}
              scale={[0.582, 0.582, 0.927]}
            />
            <mesh
              name='Line144'
              geometry={nodes.Line144.geometry}
              material={materials['pelicula cinta']}
              position={[-4.189, 1.047, -1.882]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.531, 0.531, 0.927]}
            />
            <mesh
              name='Line145'
              geometry={nodes.Line145.geometry}
              material={materials['pelicula cinta']}
              position={[-6.015, 1.047, -3.752]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.607, 0.607, 0.927]}
            />
            <mesh
              name='Line146'
              geometry={nodes.Line146.geometry}
              material={materials['pelicula cinta']}
              position={[3.329, 1.047, -0.021]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.582, 0.582, 0.927]}
            />
            <mesh
              name='Line147'
              geometry={nodes.Line147.geometry}
              material={materials['pelicula cinta']}
              position={[-2.289, 1.047, 0.06]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.557, 0.557, 0.927]}
            />
            <mesh
              name='Line148'
              geometry={nodes.Line148.geometry}
              material={materials['pelicula cinta']}
              position={[5.189, 1.047, -0.045]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.55, 0.55, 0.927]}
            />
            <mesh
              name='Line149'
              geometry={nodes.Line149.geometry}
              material={materials['pelicula cinta']}
              position={[8.29, 1.047, -2.297]}
              rotation={[Math.PI / 2, 0, -2.007]}
              scale={[0.55, 0.55, 0.927]}
            />
            <mesh
              name='Line150'
              geometry={nodes.Line150.geometry}
              material={materials['pelicula cinta']}
              position={[2.94, 1.047, -1.358]}
              rotation={[Math.PI / 2, 0, 1.309]}
              scale={[0.582, 0.582, 0.927]}
            />
            <mesh
              name='Line151'
              geometry={nodes.Line151.geometry}
              material={materials['pelicula cinta']}
              position={[1.536, 1.047, -3.81]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.607, 0.607, 0.927]}
            />
            <mesh
              name='Line152'
              geometry={nodes.Line152.geometry}
              material={materials['pelicula cinta']}
              position={[-0.414, 1.047, -1.843]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.557, 0.557, 0.927]}
            />
          </group>
          <group
            name='Caja1Tapa'
            position={[0.014, -0.032, 5.074]}
            scale={[1, 0.618, 0.859]}
          >
            <mesh
              name='Malla051'
              geometry={nodes.Malla051.geometry}
              material={materials['cuero marron-1']}
            />
            <mesh
              name='Malla051_1'
              geometry={nodes.Malla051_1.geometry}
              material={materials[' cuadricula interior']}
            />
            <mesh
              name='Malla051_2'
              geometry={nodes.Malla051_2.geometry}
              material={materials['papel antiguo-1']}
            />
          </group>
          <group
            name='CajaBase1'
            position={[0.014, -2.379, 4.998]}
            scale={[1, 0.618, 0.848]}
          >
            <mesh
              name='Malla001'
              geometry={nodes.Malla001.geometry}
              material={materials['cuero marron-1']}
            />
            <mesh
              name='Malla001_1'
              geometry={nodes.Malla001_1.geometry}
              material={materials['papel antiguo-1']}
            />
          </group>
          <mesh
            name='CajaHuecos1'
            geometry={nodes.CajaHuecos1.geometry}
            material={materials['papel antiguo-1']}
            position={[3.741, -1.271, 4.799]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={[0.815, 0.318, 1]}
          />
        </group>
        <group name='Caja2Base' position={[0.219, 0.071, 0.006]} scale={0.025}>
          <group
            name='CajaCarretes002'
            position={[0.079, -1.331, 4.941]}
            rotation={[-Math.PI, 0, -Math.PI]}
          >
            <mesh
              name='Line153'
              geometry={nodes.Line153.geometry}
              material={materials['pelicula cinta']}
              position={[-4.111, 1.047, -3.736]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.607, 0.607, 0.927]}
            />
            <mesh
              name='Line154'
              geometry={nodes.Line154.geometry}
              material={materials['pelicula cinta']}
              position={[7.037, 1.047, -1.845]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.557, 0.557, 0.927]}
            />
            <mesh
              name='Line155'
              geometry={nodes.Line155.geometry}
              material={materials['pelicula cinta']}
              position={[7.119, 1.047, -3.764]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.607, 0.607, 0.927]}
            />
            <mesh
              name='Line156'
              geometry={nodes.Line156.geometry}
              material={materials['pelicula cinta']}
              position={[9.119, 1.047, -3.752]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.607, 0.607, 0.927]}
            />
            <mesh
              name='Line157'
              geometry={nodes.Line157.geometry}
              material={materials['pelicula cinta']}
              position={[3.403, 1.047, -3.71]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.607, 0.607, 0.927]}
            />
            <mesh
              name='Line158'
              geometry={nodes.Line158.geometry}
              material={materials['pelicula cinta']}
              position={[1.506, 1.047, -1.854]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.607, 0.607, 0.927]}
            />
            <mesh
              name='Line159'
              geometry={nodes.Line159.geometry}
              material={materials['pelicula cinta']}
              position={[-2.254, 1.047, -3.709]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.53, 0.53, 0.927]}
            />
            <mesh
              name='Line160'
              geometry={nodes.Line160.geometry}
              material={materials['pelicula cinta']}
              position={[5.156, 1.047, -1.876]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.516, 0.516, 0.927]}
            />
            <mesh
              name='Line161'
              geometry={nodes.Line161.geometry}
              material={materials['pelicula cinta']}
              position={[5.246, 1.047, -3.7]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.607, 0.607, 0.927]}
            />
            <mesh
              name='Line162'
              geometry={nodes.Line162.geometry}
              material={materials['pelicula cinta']}
              position={[1.525, 1.047, 0.034]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.607, 0.607, 0.927]}
            />
            <mesh
              name='Line163'
              geometry={nodes.Line163.geometry}
              material={materials['pelicula cinta']}
              position={[3.38, 1.047, 3.769]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.565, 0.565, 0.927]}
            />
            <mesh
              name='Line164'
              geometry={nodes.Line164.geometry}
              material={materials['pelicula cinta']}
              position={[-0.348, 1.047, 0.097]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.607, 0.607, 0.927]}
            />
            <mesh
              name='Line165'
              geometry={nodes.Line165.geometry}
              material={materials['pelicula cinta']}
              position={[7.081, 1.047, 1.864]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.557, 0.557, 0.927]}
            />
            <mesh
              name='Line166'
              geometry={nodes.Line166.geometry}
              material={materials['pelicula cinta']}
              position={[9.163, 1.047, -0.043]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.607, 0.607, 0.927]}
            />
            <mesh
              name='Line167'
              geometry={nodes.Line167.geometry}
              material={materials['pelicula cinta']}
              position={[5.199, 1.047, 1.833]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.516, 0.516, 0.927]}
            />
            <mesh
              name='Line168'
              geometry={nodes.Line168.geometry}
              material={materials['pelicula cinta']}
              position={[-2.277, 1.047, -1.838]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.582, 0.582, 0.927]}
            />
            <mesh
              name='Line169'
              geometry={nodes.Line169.geometry}
              material={materials['pelicula cinta']}
              position={[1.358, 1.047, 1.939]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.607, 0.607, 0.927]}
            />
            <mesh
              name='Line170'
              geometry={nodes.Line170.geometry}
              material={materials['pelicula cinta']}
              position={[3.358, 1.047, 1.951]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.607, 0.607, 0.927]}
            />
            <mesh
              name='Line171'
              geometry={nodes.Line171.geometry}
              material={materials['pelicula cinta']}
              position={[-2.358, 1.047, 1.993]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.607, 0.607, 0.927]}
            />
            <mesh
              name='Line172'
              geometry={nodes.Line172.geometry}
              material={materials['pelicula cinta']}
              position={[-0.439, 1.047, 1.878]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.607, 0.607, 0.927]}
            />
            <mesh
              name='Line173'
              geometry={nodes.Line173.geometry}
              material={materials['pelicula cinta']}
              position={[-4.506, 1.047, 0.473]}
              rotation={[Math.PI / 2, 0, 1.309]}
              scale={[0.582, 0.582, 0.927]}
            />
            <mesh
              name='Line174'
              geometry={nodes.Line174.geometry}
              material={materials['pelicula cinta']}
              position={[5.269, 1.047, 3.715]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.557, 0.557, 0.927]}
            />
            <mesh
              name='Line175'
              geometry={nodes.Line175.geometry}
              material={materials['pelicula cinta']}
              position={[-7.854, 1.047, 0.046]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.607, 0.607, 0.927]}
            />
            <mesh
              name='Line176'
              geometry={nodes.Line176.geometry}
              material={materials['pelicula cinta']}
              position={[-2.368, 1.047, 3.696]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.516, 0.516, 0.927]}
            />
            <mesh
              name='Line177'
              geometry={nodes.Line177.geometry}
              material={materials['pelicula cinta']}
              position={[-8.021, 1.047, 1.95]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.607, 0.607, 0.927]}
            />
            <mesh
              name='Line178'
              geometry={nodes.Line178.geometry}
              material={materials['pelicula cinta']}
              position={[-6.017, 1.047, 1.869]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.607, 0.607, 0.927]}
            />
            <mesh
              name='Line179'
              geometry={nodes.Line179.geometry}
              material={materials['pelicula cinta']}
              position={[-4.11, 1.047, 3.727]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.557, 0.557, 0.927]}
            />
            <mesh
              name='Line180'
              geometry={nodes.Line180.geometry}
              material={materials['pelicula cinta']}
              position={[8.998, 1.047, 3.814]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.607, 0.607, 0.927]}
            />
            <mesh
              name='Line181'
              geometry={nodes.Line181.geometry}
              material={materials['pelicula cinta']}
              position={[6.714, 1.047, 4.212]}
              rotation={[Math.PI / 2, 0, 1.309]}
              scale={[0.582, 0.582, 0.927]}
            />
            <mesh
              name='Line182'
              geometry={nodes.Line182.geometry}
              material={materials['pelicula cinta']}
              position={[1.448, 1.047, 3.734]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.562, 0.562, 0.927]}
            />
            <mesh
              name='Line183'
              geometry={nodes.Line183.geometry}
              material={materials['pelicula cinta']}
              position={[-7.965, 1.047, -3.814]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.607, 0.607, 0.927]}
            />
            <mesh
              name='Line184'
              geometry={nodes.Line184.geometry}
              material={materials['pelicula cinta']}
              position={[-7.896, 1.047, -1.88]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.607, 0.607, 0.927]}
            />
            <mesh
              name='Line185'
              geometry={nodes.Line185.geometry}
              material={materials['pelicula cinta']}
              position={[7.195, 1.047, -0.02]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.607, 0.607, 0.927]}
            />
            <mesh
              name='Line186'
              geometry={nodes.Line186.geometry}
              material={materials['pelicula cinta']}
              position={[9.033, 1.047, 1.874]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.607, 0.607, 0.927]}
            />
            <mesh
              name='Line187'
              geometry={nodes.Line187.geometry}
              material={materials['pelicula cinta']}
              position={[-0.758, 1.047, 3.175]}
              rotation={[Math.PI / 2, 0, -1.134]}
              scale={[0.607, 0.607, 0.927]}
            />
            <mesh
              name='Line188'
              geometry={nodes.Line188.geometry}
              material={materials['pelicula cinta']}
              position={[-6.06, 1.047, 3.692]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.557, 0.557, 0.927]}
            />
            <mesh
              name='Line189'
              geometry={nodes.Line189.geometry}
              material={materials['pelicula cinta']}
              position={[-4.05, 1.047, 1.843]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.607, 0.607, 0.927]}
            />
            <mesh
              name='Line190'
              geometry={nodes.Line190.geometry}
              material={materials['pelicula cinta']}
              position={[-7.969, 1.047, 3.8]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.582, 0.582, 0.927]}
            />
            <mesh
              name='Line191'
              geometry={nodes.Line191.geometry}
              material={materials['pelicula cinta']}
              position={[-6.088, 1.047, -1.88]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.557, 0.557, 0.927]}
            />
            <mesh
              name='Line192'
              geometry={nodes.Line192.geometry}
              material={materials['pelicula cinta']}
              position={[-6.454, 1.047, 0.468]}
              rotation={[Math.PI / 2, 0, 1.309]}
              scale={[0.582, 0.582, 0.927]}
            />
            <mesh
              name='Line193'
              geometry={nodes.Line193.geometry}
              material={materials['pelicula cinta']}
              position={[-4.189, 1.047, -1.882]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.531, 0.531, 0.927]}
            />
            <mesh
              name='Line194'
              geometry={nodes.Line194.geometry}
              material={materials['pelicula cinta']}
              position={[-6.015, 1.047, -3.752]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.607, 0.607, 0.927]}
            />
            <mesh
              name='Line195'
              geometry={nodes.Line195.geometry}
              material={materials['pelicula cinta']}
              position={[3.329, 1.047, -0.021]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.582, 0.582, 0.927]}
            />
            <mesh
              name='Line196'
              geometry={nodes.Line196.geometry}
              material={materials['pelicula cinta']}
              position={[-2.289, 1.047, 0.06]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.557, 0.557, 0.927]}
            />
            <mesh
              name='Line197'
              geometry={nodes.Line197.geometry}
              material={materials['pelicula cinta']}
              position={[5.189, 1.047, -0.045]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.55, 0.55, 0.927]}
            />
            <mesh
              name='Line198'
              geometry={nodes.Line198.geometry}
              material={materials['pelicula cinta']}
              position={[8.29, 1.047, -2.297]}
              rotation={[Math.PI / 2, 0, -2.007]}
              scale={[0.55, 0.55, 0.927]}
            />
            <mesh
              name='Line199'
              geometry={nodes.Line199.geometry}
              material={materials['pelicula cinta']}
              position={[2.94, 1.047, -1.358]}
              rotation={[Math.PI / 2, 0, 1.309]}
              scale={[0.582, 0.582, 0.927]}
            />
            <mesh
              name='Line200'
              geometry={nodes.Line200.geometry}
              material={materials['pelicula cinta']}
              position={[1.536, 1.047, -3.81]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.607, 0.607, 0.927]}
            />
            <mesh
              name='Line201'
              geometry={nodes.Line201.geometry}
              material={materials['pelicula cinta']}
              position={[-0.414, 1.047, -1.843]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.557, 0.557, 0.927]}
            />
          </group>
          <group
            name='Caja2Tapa'
            position={[0.004, -0.03, 5.069]}
            scale={[1, 0.618, 0.859]}
          >
            <mesh
              name='Malla103'
              geometry={nodes.Malla103.geometry}
              material={materials['cuero marron-1']}
            />
            <mesh
              name='Malla103_1'
              geometry={nodes.Malla103_1.geometry}
              material={materials[' cuadricula interior']}
            />
            <mesh
              name='Malla103_2'
              geometry={nodes.Malla103_2.geometry}
              material={materials['papel antiguo-1']}
            />
          </group>
          <group
            name='CajaBase002'
            position={[-0.014, -2.379, 4.998]}
            rotation={[Math.PI, 0, 0]}
            scale={[-1, -0.618, -0.848]}
          >
            <mesh
              name='Malla052'
              geometry={nodes.Malla052.geometry}
              material={materials['cuero marron-1']}
            />
            <mesh
              name='Malla052_1'
              geometry={nodes.Malla052_1.geometry}
              material={materials['papel antiguo-1']}
            />
          </group>
          <mesh
            name='CajaHuecos002'
            geometry={nodes.CajaHuecos002.geometry}
            material={materials['papel antiguo-1']}
            position={[-3.741, -1.271, 5.065]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={[0.815, 0.318, 1]}
          />
        </group>
        <group
          name='MaletaCuerpoMango'
          position={[-0.049, 0.124, 0]}
          scale={0.025}
        >
          <group name='MaletaTapa' position={[-0.031, 5.016, -0.185]}>
            <group name='Bisagras' position={[0.031, 0.905, -0.01]} />
            <group
              name='CierreCentralGancho'
              position={[0.201, 0.06, 23.016]}
            />
            <group name='CierreGancho1' position={[-13.135, 0.278, 22.881]} />
            <group name='CierreGancho2' position={[13.204, 0.278, 22.881]} />
            <group name='Group001' position={[-21.452, 1.256, 21.609]} />
            <group name='Group002' position={[-21.377, 1.256, 1.207]} />
            <group name='Group003' position={[21.423, 1.256, 1.206]} />
            <group name='Group004' position={[21.439, 1.256, 21.609]} />
            <group
              name='Sphere003'
              position={[-12.958, -1.017, -6.636]}
              rotation={[Math.PI / 2, 0, Math.PI / 2]}
              scale={[1, 0.557, 1]}
            >
              <mesh
                name='Malla158'
                geometry={nodes.Malla158.geometry}
                material={materials['metal-3']}
              />
              <mesh
                name='Malla158_1'
                geometry={nodes.Malla158_1.geometry}
                material={materials['metal-cuero-1']}
              />
              <mesh
                name='Malla158_2'
                geometry={nodes.Malla158_2.geometry}
                material={materials['cuero maleta-1']}
              />
              <mesh
                name='Malla158_3'
                geometry={nodes.Malla158_3.geometry}
                material={materials['metal-2']}
              />
            </group>
          </group>
          <group name='BisagrasEje' position={[0, 3.775, -11.753]} />
          <group name='Cierre1' position={[-13.126, 3.414, 11.097]} />
          <group name='Cierre2' position={[13.212, 3.414, 11.097]} />
          <group name='CierreCentral' position={[0.133, 3.572, 11.1]}>
            <mesh
              name='Sphere051'
              geometry={nodes.Sphere051.geometry}
              material={materials['metal-3']}
              position={[-4.642, -1.554, 0.06]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[1, 0.557, 1]}
            />
          </group>
          <group name='MaletaEsquinasCuerpo' position={[0, -0.155, -0.348]}>
            <group
              name='Sphere039'
              position={[22.546, 3.042, -5.143]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={[-1, -0.408, -1]}
            >
              <mesh
                name='Malla120'
                geometry={nodes.Malla120.geometry}
                material={materials['metal-cuero-1']}
              />
              <mesh
                name='Malla120_1'
                geometry={nodes.Malla120_1.geometry}
                material={materials['metal-2']}
              />
              <mesh
                name='Malla120_2'
                geometry={nodes.Malla120_2.geometry}
                material={materials['metal-3']}
              />
              <mesh
                name='Malla120_3'
                geometry={nodes.Malla120_3.geometry}
                material={materials.mango}
              />
              <mesh
                name='Malla120_4'
                geometry={nodes.Malla120_4.geometry}
                material={materials['cuero maleta-2']}
              />
              <mesh
                name='Malla120_5'
                geometry={nodes.Malla120_5.geometry}
                material={materials['cuero marron-1']}
              />
              <mesh
                name='Malla120_6'
                geometry={nodes.Malla120_6.geometry}
                material={materials['tela interior-1']}
              />
              <mesh
                name='Malla120_7'
                geometry={nodes.Malla120_7.geometry}
                material={materials['cuero maleta-2+']}
              />
              <mesh
                name='Malla120_8'
                geometry={nodes.Malla120_8.geometry}
                material={materials['metal-1']}
              />
            </group>
          </group>
          <group name='Mangobase' position={[0.171, 2.035, 11.327]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Caja-mexicana-maleta-LP-01-ani2.glb')