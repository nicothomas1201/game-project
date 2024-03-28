import { useThree } from '@react-three/fiber'
import {
  RigidBody,
  BallCollider,
  RapierRigidBody,
  CuboidCollider,
} from '@react-three/rapier'
import { createRef, useCallback } from 'react'

export function Ball({ ...props }) {
  const ball = createRef<RapierRigidBody>()

  const { viewport } = useThree()

  const onCollisionEnter = useCallback(() => {
    if (!ball.current) return

    console.log('ball exist')
    ball.current.setTranslation({ x: 0, y: 5, z: 0 }, false)
    ball.current.setLinvel({ x: 0, y: 5, z: 0 }, false)
  }, [])

  return (
    <group {...props}>
      <RigidBody
        ref={ball}
        ccd
        angularDamping={0.8}
        restitution={1}
        canSleep={false}
        colliders={false}
        enabledTranslations={[true, true, false]}
      >
        <BallCollider args={[0.5]}></BallCollider>
        <mesh castShadow receiveShadow>
          <sphereGeometry args={[0.5, 64, 64]} />
          <meshStandardMaterial color="white" />
        </mesh>
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders={false}
        position={[0, -viewport.height * 2, 0]}
        restitution={2.1}
        onCollisionEnter={onCollisionEnter}
      >
        <CuboidCollider args={[1000, 2, 1000]} />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders={false}
        position={[0, viewport.height * 4, 0]}
        restitution={2.1}
        onCollisionEnter={onCollisionEnter}
      >
        <CuboidCollider args={[1000, 2, 1000]} />
      </RigidBody>
    </group>
  )
}
