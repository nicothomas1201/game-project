import type { SphereProps } from '../dto'

export function Sphere({
  args,
  color,
  castShadow,
  receiveShadow,
}: SphereProps) {
  return (
    <mesh castShadow={castShadow} receiveShadow={receiveShadow}>
      <sphereGeometry args={args} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}
