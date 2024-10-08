import { OrbitControls } from "@react-three/drei"
import { BoxGeometry, MeshNormalMaterial } from "three"

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
}