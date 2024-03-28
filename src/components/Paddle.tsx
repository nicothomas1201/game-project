import {
  CylinderCollider,
  RapierRigidBody,
  RigidBody,
} from '@react-three/rapier'
import { createRef, useCallback } from 'react'
import { Group, Vector3 } from 'three'
import { useGLTF } from '@react-three/drei'
import modelGlb from '../assets/models/pingpong.glb'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'

export function Paddle({ vector = new Vector3(), direction = new Vector3() }) {
  const paddle = createRef<RapierRigidBody>()
  const model = createRef<Group>()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { nodes, materials } = useGLTF(modelGlb) as any

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const contactForce = useCallback((payload: any) => {
    if (!model.current) return

    model.current.position.y = -payload.totalForceMagnitude / 10000
  }, [])

  useFrame((state, delta) => {
    vector.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera)
    direction.copy(vector).sub(state.camera.position).normalize()
    vector.add(direction.multiplyScalar(state.camera.position.length()))

    if (!paddle.current || !model.current) return

    paddle.current.setNextKinematicTranslation({
      x: vector.x,
      y: vector.y,
      z: 0,
    })
    paddle.current.setNextKinematicRotation({
      x: 0,
      y: 0,
      z: (state.pointer.x * Math.PI) / 10,
      w: 1,
    })
    easing.damp3(model.current.position, [0, 0, 0], 0.2, delta)
    easing.damp3(
      state.camera.position,
      [-state.pointer.x * 4, 2.5 + -state.pointer.y * 4, 12],
      0.3,
      delta,
    )
    state.camera.lookAt(0, 0, 0)
  })

  return (
    <RigidBody
      ref={paddle}
      canSleep={false}
      type="kinematicPosition"
      colliders={false}
      onContactForce={contactForce}
    >
      <CylinderCollider args={[0.15, 1.75]} />
      <group ref={model} position={[0, 2, 0]} scale={0.15}>
        <group rotation={[1.88, -0.35, 2.32]} scale={[2.97, 2.97, 2.97]}>
          <primitive object={nodes.Bone} />
          <primitive object={nodes.Bone003} />
          <primitive object={nodes.Bone006} />
          <primitive object={nodes.Bone010} />
          <skinnedMesh
            castShadow
            receiveShadow
            material={materials.glove}
            material-roughness={1}
            geometry={nodes.arm.geometry}
            skeleton={nodes.arm.skeleton}
          />
        </group>
        <group rotation={[0, -0.04, 0]} scale={141.94}>
          <mesh
            castShadow
            receiveShadow
            material={materials.wood}
            geometry={nodes.mesh.geometry}
          />
          <mesh
            castShadow
            receiveShadow
            material={materials.side}
            geometry={nodes.mesh_1.geometry}
          />
          <mesh
            castShadow
            receiveShadow
            material={materials.foam}
            geometry={nodes.mesh_2.geometry}
          />
          <mesh
            castShadow
            receiveShadow
            material={materials.lower}
            geometry={nodes.mesh_3.geometry}
          />
          <mesh
            castShadow
            receiveShadow
            material={materials.upper}
            geometry={nodes.mesh_4.geometry}
          />
        </group>
      </group>
    </RigidBody>
  )
}
