import { OrbitControls, ScrollControls } from "@react-three/drei"
import { BoxGeometry, MeshNormalMaterial } from "three"
import { Office } from "./Office";
import { Face } from "three/examples/jsm/Addons.js";

export const Experience = () => {
  return (
    <>
      //添加环境光 @intensity: 强度
      <ambientLight intensity={1} />
      //添加相机控制器 @enableZoom: 是否允许缩放
      <OrbitControls enableZoom={false} />
      //添加滚动控制器 @pages: 页面数量 @damping: 阻尼
      <ScrollControls pages={3} damping={0.25} >
        <Office />
      </ScrollControls>
        
    </>
  );
}