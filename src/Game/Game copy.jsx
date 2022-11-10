import {
  Dummy,
  Model,
  Reflector,
  SvgMesh,
  ThirdPersonCamera,
  World,
  usePreload,
  Audio,
  Environment,
  Plane,
  LingoEditor
} from "lingo3d-react"
import { useState } from "react"

// Game world component
// 场景组件
const Game = () => {
  // When user clicks on map model, set arrow position to clicked position
  // 点击地图模型时，设置箭头位置为点击位置
  const [arrowPosition, setArrowPosition] = useState({ x: 0, y: 0, z: 0 })

  // When user clicks on map model, set running to true
  // 点击地图模型时，设置跑步为true
  const [running, setRunning] = useState(false)

  console.log("progress")

  return (
    // World has white fog, environment image based lighting, and bloom effect
    // 场景有基于图片的环境光照，并且有泛光效果
    <World defaultLight="env.jpg" bloomStrength={1} bloomThreshold={0.5}>
      {/* Map model; when clicked, set arrow position and running state */}
      {/* 地图模型，点击时设置箭头位置以及跑步状态 */}
      <Environment />
      <LingoEditor />
      <Model
        visible={true}
        physics="map"
        bloom={true}
        scale={50}
        src={`maps/v2/stadium-v1.glb`}
        y={5783.65}
        onClick={(e) => {
          setArrowPosition(e.point)
          setRunning(true)
        }}
      />
      <Model
        visible={true}
        physics="map"
        bloom={true}
        scale={200}
        src={`maps/v2/Grassland.glb`}
        onClick={(e) => {
          setArrowPosition(e.point)
          setRunning(true)
        }}
      />
      {/* 
      <Plane onClick={(e) => {
        setArrowPosition(e.point)
        setRunning(true)
      }} physics="map" y={-38.16} rotationX={-90} scale={50.00} /> */}

      {/* Ground reflection */}
      {/* 地面反射 */}
      {/* <Reflector y={-39.38} scale={113.2} /> */}

      {/* Character dummy, and the camera that follows it */}
      {/* 角色假人，以及跟随它的相机 */}
      <ThirdPersonCamera
        active
        mouseControl="drag"
        lockTargetRotation={false}
        enableDamping
      >
        <Dummy
          physics="character"
          metalnessFactor={-2}
          roughnessFactor={0}
          y={44.58}
          // 4 arguments of lookTo are: x, y, z, and alpha. Smaller alpha means slower speed.
          // lookTo 的4个参数：x, y, z, 和 alpha。alpha 越小，速度越慢。
          lookTo={[arrowPosition.x, undefined, arrowPosition.z, 0.1]}
          // 4 arguments of moveTo: x, y, z, and speed.
          // moveTo 的4个参数：x, y, z, 和速度。
          moveTo={[arrowPosition.x, undefined, arrowPosition.z, 10]}
          // When moveTo is finished, set running to false
          // moveTo 完成后，设置跑步为false
          onMoveToEnd={() => setRunning(false)}
          // animation depends on running state
          // 跑步状态决定动画
          animation={running ? "running" : "idle"}
          src={`3dCharacter/character.glb`}
        >
          {/* sound of footsteps that follows the dummy */}
          {/* 跟随角色的脚步声 */}
          {/* <Audio
            src="footsteps.wav"
            autoplay
            loop
            stopped={!running}
            playbackRate={2.5}
          /> */}
        </Dummy>
      </ThirdPersonCamera>

      {/* When running, render an SVG arrow mesh */}
      {/* 当跑步时，渲染一个SVG箭头模型 */}
      {running && (
        <SvgMesh
          src="arrow.svg"
          bloom
          metalnessFactor={1}
          roughnessFactor={0.4}
          roughness={0.4}
          scaleZ={0.19}
          color="#ff4e4e"
          emissiveColor="#223056"
          x={arrowPosition.x}
          y={arrowPosition.y + 50}
          z={arrowPosition.z}
          animation={{ rotationY: [0, 45, 90, 135, 180, 225, 270, 315, 360] }}
        />
      )}
    </World>
  )
}


export default Game
