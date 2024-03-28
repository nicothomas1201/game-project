import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import { Ball } from '../components'
import { Paddle } from '../components/Paddle'

export function Home() {
  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      gl={{ antialias: false }}
      camera={{ position: [0, 5, 12], fov: 45 }}
    >
      <ambientLight intensity={0.5 * Math.PI} />
      <color attach="background" args={['pink']} />
      <spotLight
        decay={0}
        position={[-10, 15, -5]}
        angle={1}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
        shadow-bias={-0.0001}
      />
      <Physics gravity={[0, -40, 0]}>
        <Ball position={[0, 5, 0]} />
        <Paddle />
      </Physics>
    </Canvas>
  )
}
