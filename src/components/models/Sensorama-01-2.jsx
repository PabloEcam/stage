import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('./models/sensorama-01-2.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]} scale={0.025}>
        <group position={[-0.174, -17.822, 21.004]}>
          <group
            position={[-0.078, -26.957, -1.251]}
            rotation={[Math.PI / 2, 0, -Math.PI]}
            scale={0.047}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Malla015.geometry}
              material={materials['color blanco']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Malla015_1.geometry}
              material={materials['color rojo']}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle014.geometry}
            material={nodes.Rectangle014.material}
            position={[0.059, -37.663, 3.122]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box001.geometry}
          material={materials['color blanco']}
          position={[15.332, -8.473, -17.299]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box004.geometry}
          material={materials['color rojo']}
          position={[0.096, -57.873, -14.995]}
          scale={[0.838, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box007.geometry}
          material={materials['color azul']}
          position={[-6.87, -13.377, -24.149]}
          scale={[0.975, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box009.geometry}
          material={materials['color azul']}
          position={[0.052, -5.363, 0.04]}
          rotation={[1.566, 0, 0]}
        />
        {/*    <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box010.geometry}
          material={nodes.Box010.material}
          position={[0.181, -5.009, 1.976]}
          rotation={[1.566, 0, 0]}
          scale={[0.14, 0.954, 0.954]}
        /> */}
        <group
          position={[0.181, -5.007, 2.194]}
          rotation={[1.566, 0, 0]}
          scale={[0.14, 0.954, 0.954]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Malla004.geometry}
            material={materials['color blanco']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Malla004_1.geometry}
            material={materials['color negro']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box012.geometry}
          material={materials['cartel superior']}
          position={[0.246, 31.465, 6.474]}
          rotation={[0.784, 0, 0]}
          scale={[1, 0.389, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box013.geometry}
          material={materials['cartel lateral']}
          position={[15.574, 17.62, -13.379]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[1.297, 0.389, 1.261]}
        />
        <group
          position={[-12.805, -57.023, -7.299]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.888, 0.822, 0.888]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Malla036.geometry}
            material={materials['color gris']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Malla036_1.geometry}
            material={materials['color negro+']}
          />
        </group>
        <group
          position={[-12.805, -57.023, -32.163]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.888, 0.822, 0.888]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Malla037.geometry}
            material={materials['color gris']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Malla037_1.geometry}
            material={materials['color negro+']}
          />
        </group>
        <group
          position={[15.41, -57.023, -7.299]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.888, 0.822, 0.888]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Malla034.geometry}
            material={materials['color gris']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Malla034_1.geometry}
            material={materials['color negro+']}
          />
        </group>
        <group
          position={[15.41, -57.023, -32.163]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.888, 0.822, 0.888]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Malla035.geometry}
            material={materials['color gris']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Malla035_1.geometry}
            material={materials['color negro+']}
          />
        </group>
        <group
          position={[-1.206, 50.359, -19.958]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1, 1.488, 1]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Malla029.geometry}
            material={materials['color blanco']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Malla029_1.geometry}
            material={materials['color azul']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle002.geometry}
          material={materials['color azul']}
          position={[-3.372, -46.361, -32.823]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials['color negro+']}
          position={[7.856, -12.059, 6.086]}
          rotation={[0.175, 0, 0]}
          scale={[0.633, 0.355, 0.633]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={materials['imagen circulo-5']}
          position={[-1.151, 50.303, -20.031]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1, 1.488, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003.geometry}
          material={materials['color gris']}
          position={[-0.883, 37.594, -17.21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005.geometry}
          material={materials['color negro+']}
          position={[7.856, -11.861, 6.121]}
          rotation={[0.175, -Math.PI / 6, 0]}
          scale={0.633}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006.geometry}
          material={materials['color negro+']}
          position={[-7.966, -12.059, 6.086]}
          rotation={[-2.967, 0, 0]}
          scale={[-0.633, -0.355, -0.633]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007.geometry}
          material={materials['color negro+']}
          position={[-7.977, -11.861, 6.121]}
          rotation={[-2.967, -Math.PI / 6, 0]}
          scale={-0.633}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008.geometry}
          material={materials.rejilla}
          position={[-3.38, -46.367, -33.342]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009.geometry}
          material={materials.rejilla}
          position={[3.277, -46.367, -33.342]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <group position={[0.204, -0.835, 10.948]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Malla006.geometry}
            material={materials['color blanco']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Malla006_1.geometry}
            material={materials['cuero negro']}
          />
        </group>
        <group position={[0.075, -57.873, -19.662]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Malla033.geometry}
            material={materials['color azul']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Malla033_1.geometry}
            material={materials['color blanco']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line005.geometry}
          material={materials['color rojo']}
          position={[-0.352, -13.592, 8.013]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003.geometry}
          material={materials['visor inteior']}
          position={[-0.233, 11.483, 1.174]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.975, 1, 1]}
        />
        <group position={[-0.115, -55.496, 24.126]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Malla028.geometry}
            material={materials['color blanco']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Malla028_1.geometry}
            material={materials['color gris']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle004.geometry}
          material={materials['color blanco']}
          position={[0.218, -4.319, 6.572]}
          rotation={[1.566, 0, 0]}
          scale={[0.954, 0.366, 0.954]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle005.geometry}
          material={materials['color azul']}
          position={[0.066, -4.887, 2.848]}
          rotation={[1.12, 0, 0]}
          scale={[1, 0.992, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle006.geometry}
          material={materials['imagen circulo-1']}
          position={[0.066, -5.01, 2.596]}
          rotation={[1.12, 0, 0]}
          scale={[1, 0.521, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle007.geometry}
          material={materials['imagen circulo-2']}
          position={[5.8, -5.01, 2.596]}
          rotation={[1.12, 0, 0]}
          scale={[1, 0.521, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle008.geometry}
          material={materials['imagen circulo-3']}
          position={[17.011, -5.01, 2.596]}
          rotation={[1.12, 0, 0]}
          scale={[1, 0.521, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle009.geometry}
          material={materials['imagen circulo-4']}
          position={[22.761, -5.01, 2.596]}
          rotation={[1.12, 0, 0]}
          scale={[1, 0.521, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle011.geometry}
          material={materials['color negro']}
          position={[-0.87, 50.604, -17.754]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.975, 1.154, 0.937]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle012.geometry}
          material={materials['color rojo']}
          position={[-0.87, 50.604, -18.534]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.975, 1.651, 0.937]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape1.geometry}
          material={materials['LOGO COLORES']}
          position={[-14.874, 44.765, -14.395]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.645, 0.642, 1.645]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('./models/sensorama-01-2.glb')
