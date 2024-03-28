import { useFrame } from '@react-three/fiber'
import { RigidBody, type RapierRigidBody } from '@react-three/rapier'
import { createRef } from 'react'
import { Euler, Quaternion } from 'three'

export function Paddle() {
  const paddle = createRef<RapierRigidBody>()
  const euler = new Euler()
  const quaternion = new Quaternion()

  useFrame(({ pointer, viewport }) => {
    paddle.current?.setTranslation(
      {
        x: (pointer.x * viewport.width) / 2,
        y: -viewport.height / 3,
        z: 0,
      },
      false,
    )

    paddle.current?.setRotation(
      quaternion.setFromEuler(euler.set(0, 0, (pointer.x * Math.PI) / 10)),
      false,
    )
  })

  return (
    <RigidBody ref={paddle} colliders="cuboid" type="fixed" restitution={2.1}>
      <mesh>
        <boxGeometry args={[4, 1, 1]} />
        <meshStandardMaterial color="lightblue" />
      </mesh>
    </RigidBody>
  )
}
