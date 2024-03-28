import { useThree } from '@react-three/fiber'
import { CuboidCollider, RapierRigidBody, RigidBody } from '@react-three/rapier'
import { Sphere } from '../elements'
import { createRef } from 'react'

export function Ball() {
  const ball = createRef<RapierRigidBody>()
  const { viewport } = useThree()

  const handleOnCollision = () => {
    if (!ball.current) return
    ball.current.setTranslation({ x: 0, y: 0, z: 0 }, false)
    ball.current.setLinvel({ x: 0, y: 10, z: 0 }, false)
  }
  return (
    <>
      <RigidBody ref={ball} colliders="ball" mass={1}>
        <Sphere args={[0.75, 32, 32]} />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders={false}
        position={[0, -viewport.height, 0]}
        restitution={2.1}
      >
        <CuboidCollider
          args={[30, 2, 30]}
          onCollisionEnter={handleOnCollision}
        />
      </RigidBody>
    </>
  )
}
