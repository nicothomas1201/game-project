import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import { Ball, Enemy, Paddle } from '../components/arkanoid'

export function Arkanoid() {
  return (
    <Canvas camera={{ position: [0, 5, 24], fov: 50 }}>
      {/* <color attach="background" args={['pink']} /> */}
      <ambientLight intensity={1} />
      <pointLight position={[0, 0, 0]} />
      <Physics gravity={[0, -50, 0]}>
        <Ball />
        <Paddle />
        <Enemy color="orange" position={[2.75, 1.5, 0]} />
        <Enemy color="hotpink" position={[-2.75, 3.5, 0]} />
      </Physics>
    </Canvas>
  )
}
