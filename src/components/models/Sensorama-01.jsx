import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('./models/sensorama-01.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]} scale={0.025}>
        <group position={[-0.174, 40.478, 21.004]}>
          <group
            position={[-0.078, -26.957, -1.251]}
            rotation={[Math.PI / 2, 0, -Math.PI]}
            scale={0.047}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Malla031.geometry}
              material={materials['color blanco']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Malla031_1.geometry}
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
          material={nodes.Box001.material}
          position={[15.332, 49.827, -17.299]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box004.geometry}
          material={materials['color rojo']}
          position={[0.096, 0.427, -14.995]}
          scale={[0.838, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box007.geometry}
          material={materials['color azul']}
          position={[-6.87, 44.923, -24.149]}
          scale={[0.975, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box009.geometry}
          material={materials['color azul']}
          position={[0.052, 52.937, 0.04]}
          rotation={[1.566, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box010.geometry}
          material={nodes.Box010.material}
          position={[0.181, 53.292, 1.976]}
          rotation={[1.566, 0, 0]}
          scale={[0.14, 0.954, 0.954]}
        />
        <group
          position={[0.181, 53.293, 2.194]}
          rotation={[1.566, 0, 0]}
          scale={[0.14, 0.954, 0.954]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Malla013.geometry}
            material={materials['color blanco']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Malla013_1.geometry}
            material={materials['color negro']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box012.geometry}
          material={materials['cartel superior']}
          position={[0.246, 89.766, 6.474]}
          rotation={[0.784, 0, 0]}
          scale={[1, 0.389, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box013.geometry}
          material={materials['cartel lateral']}
          position={[15.574, 75.92, -13.379]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[1.297, 0.389, 1.261]}
        />
        <group
          position={[-12.805, 1.277, -7.299]}
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
          position={[-12.805, 1.277, -32.163]}
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
          position={[15.41, 1.277, -7.299]}
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
          position={[15.41, 1.277, -32.163]}
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
          position={[-1.206, 108.659, -19.958]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1, 1.488, 1]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Malla023.geometry}
            material={materials['color blanco']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Malla023_1.geometry}
            material={materials['color azul']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle002.geometry}
          material={materials['color azul']}
          position={[-3.372, 11.94, -32.823]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials['color negro+']}
          position={[7.856, 46.241, 6.086]}
          rotation={[0.175, 0, 0]}
          scale={[0.633, 0.355, 0.633]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={materials['imagen circulo-5']}
          position={[-1.151, 108.603, -20.031]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1, 1.488, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003.geometry}
          material={materials['color gris']}
          position={[-0.883, 95.894, -17.21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005.geometry}
          material={materials['color negro+']}
          position={[7.856, 46.44, 6.121]}
          rotation={[0.175, -Math.PI / 6, 0]}
          scale={0.633}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006.geometry}
          material={materials['color negro+']}
          position={[-7.966, 46.241, 6.086]}
          rotation={[-2.967, 0, 0]}
          scale={[-0.633, -0.355, -0.633]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007.geometry}
          material={materials['color negro+']}
          position={[-7.977, 46.44, 6.121]}
          rotation={[-2.967, -Math.PI / 6, 0]}
          scale={-0.633}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008.geometry}
          material={materials.rejilla}
          position={[-3.38, 11.933, -33.342]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009.geometry}
          material={materials.rejilla}
          position={[3.277, 11.933, -33.342]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <group position={[0.204, 57.465, 10.948]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Malla003.geometry}
            material={materials['color blanco']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Malla003_1.geometry}
            material={materials['cuero negro']}
          />
        </group>
        <group position={[0.075, 0.427, -19.662]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Malla007.geometry}
            material={materials['color azul']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Malla007_1.geometry}
            material={materials['color blanco']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Line005.geometry}
          material={materials['color rojo']}
          position={[-0.352, 44.708, 8.013]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003.geometry}
          material={materials['visor inteior']}
          position={[-0.233, 69.783, 1.174]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.975, 1, 1]}
        />
        <group position={[-0.115, 2.804, 24.126]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Malla009.geometry}
            material={materials['color blanco']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Malla009_1.geometry}
            material={materials['color gris']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle004.geometry}
          material={materials['color blanco']}
          position={[0.218, 53.981, 6.572]}
          rotation={[1.566, 0, 0]}
          scale={[0.954, 0.366, 0.954]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle005.geometry}
          material={materials['color azul']}
          position={[0.066, 53.413, 2.848]}
          rotation={[1.12, 0, 0]}
          scale={[1, 0.992, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle006.geometry}
          material={materials['imagen circulo-1']}
          position={[0.066, 53.291, 2.596]}
          rotation={[1.12, 0, 0]}
          scale={[1, 0.521, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle007.geometry}
          material={materials['imagen circulo-2']}
          position={[5.8, 53.291, 2.596]}
          rotation={[1.12, 0, 0]}
          scale={[1, 0.521, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle008.geometry}
          material={materials['imagen circulo-3']}
          position={[17.011, 53.291, 2.596]}
          rotation={[1.12, 0, 0]}
          scale={[1, 0.521, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle009.geometry}
          material={materials['imagen circulo-4']}
          position={[22.761, 53.291, 2.596]}
          rotation={[1.12, 0, 0]}
          scale={[1, 0.521, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle011.geometry}
          material={materials['color negro']}
          position={[-0.87, 108.904, -17.754]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.975, 1.154, 0.937]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle012.geometry}
          material={materials['color rojo']}
          position={[-0.87, 108.904, -18.534]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.975, 1.651, 0.937]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape1.geometry}
          material={materials['LOGO COLORES']}
          position={[-14.874, 103.065, -14.395]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.645, 0.642, 1.645]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('./models/sensorama-01.glb')
