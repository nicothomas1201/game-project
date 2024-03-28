export type Coords3D = [x: number, y: number, z: number]

export interface ModelProps {
  position?: Coords3D
  rotation?: Coords3D
}

export type SphereArgs = [
  radius?: number | undefined,
  widthSegments?: number | undefined,
  heightSegments?: number | undefined,
  phiStart?: number | undefined,
  phiLength?: number | undefined,
  thetaStart?: number | undefined,
  thetaLength?: number | undefined,
]

export interface ElementsProps {
  color?: string
  castShadow?: boolean
  receiveShadow?: boolean
}

export interface SphereProps extends ElementsProps {
  args?: SphereArgs
}

// export interface RigidBodyProps extends ModelProps {
//   onCollision: (ref) => void
// }
