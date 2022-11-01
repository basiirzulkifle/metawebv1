import React, { useState, useRef, Suspense } from "react";

import {
  Cylinder,
  Torus,
  Dummy,
  Group,
  Model,
  Setup,
  ThirdPersonCamera,
  usePreload,
  World,
  LingoEditor,
  UI,
  Find,
  Stats,
  useWindowSize,
  Plane,
  Cube,
} from "lingo3d-react";

import { Button, Stack, Zoom } from "@mui/material";
import { panelObj, panelObjHouse } from "../dummy/dummy";

import ResponsiveDrawer from "../component/Drawer";
import CircularStatic from "../component/CircularProgressWithLabel";
import LightWall from "./LightWall";

const Game = () => {
  const progress = usePreload(
    [
      `maps/v2/Grassland.glb`,
      `3dCharacter/character.glb`,
      `3dCharacter/BreathingIdle.fbx`,
      `3dCharacter/Running.fbx`,
    ],
    '2mb'
  );

  //Basiir
  const [isGame, setGame] = useState(false);
  const [running, setRunning] = useState(false);
  const [arrowPosition, setArrowPosition] = useState({ x: 0, y: 0, z: 0 });
  const [isVisible, setVisible] = useState({ state: false, name: "" });
  const [strideMode, setStrideMode] = useState("aim")

  //PLAYER
  const dummyRef = useRef(null);
  const boothRef = useRef(null);
  const windowSize = useWindowSize();

  const fov = windowSize.width < windowSize.height ? 90 : 90;

  const handleClick = (ev) => {
    const dummy = dummyRef.current;

    if (!dummy) return;

    setArrowPosition(ev.point);

    dummy?.lookTo(ev.point.x, undefined, ev.point.z, 0.1);
    dummy?.moveTo(ev.point.x, undefined, ev.point.z, 5);

    setRunning(true);

    dummy.onMoveToEnd = () => {
      setRunning(false);
    };
  };

  const movePlayer = (ev, id) => {
    const dummy = dummyRef.current;

    if (!dummy) return;

    dummy?.lookTo(ev.point.x + 10, undefined, ev.point.z + 10, 0.1);
    dummy?.moveTo(ev.point.x + 10, undefined, ev.point.z + 10, 8);

    setArrowPosition(ev.point);
    setRunning(true);

    dummy.onMoveToEnd = () => {
      setVisible({ state: true, name: id })
      setRunning(false);
    };
  };

  const handleGame = () => {
    setGame(true)
  }


  return (
    <>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          textAlign: "center",
          backgroundColor: "black",
          color: "white",
          width: "100vw"
        }}
      >

        <Stack sx={{ justifyContent: 'center', alignItems: 'center' }}>
          {progress < 100 && (
            <>
              <img alt="metasg" width={"100%"} height={"100%"} src={`preloader/preloader.gif`} />
              <CircularStatic value={progress} />
            </>
          )}

          {/* {progress == 100 && (
            <>
              <Zoom in={true}>
                <Button onClick={() => handleGame()} sx={{
                  background: `url( ${windowSize.width < 700 ? "preloader/popMobile.png" : "preloader/popDesktop.png"})`,
                  width: "100vw",
                  height: "100vh",
                  border: '0px',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                }} />

              </Zoom>
            </>
          )} */}

        </Stack>

      </div>


      {progress == 100 && <>

        <World
          repulsion={5}
          // defaultLight={false} 
          skybox="sky.jpg"
        >
          {/* <Stats /> */}
          {/* <LingoEditor /> */}

          <Setup
            pbr
            defaultLight={false}
            pixelRatio={5}
            exposure={1}
          />

          <Cube visible={false} physics="map" x={87.91} y={-258.86} z={-1496.74} scale={-2.68} scaleX={5.56} scaleY={0.04} scaleZ={5.58} rotationX={-5.69} rotationZ={-179.00} />

          <Suspense fallback={null}>
            <Model
              name="worldmap"
              physics="map"
              ref={boothRef}
              width={245.36}
              depth={245.36}
              x={414.07}
              y={240.75}
              z={-2448.68}
              scale={150}
              onClick={(ev) => {
                handleClick(ev);
              }}
              src={`maps/v2/Grassland.glb`}
            >
            </Model>
          </Suspense>

          {panelObjHouse?.map((item, key) => {
            return (
              <>
                <Plane
                  // physics="map"
                  // bloom
                  key={key}
                  name={item?.name}

                  x={item?.x}
                  y={item?.y}
                  z={item?.z}

                  rotationY={item?.rotationY}
                  rotationX={item?.rotationX}

                  scale={item?.scale}
                  scaleX={item?.scaleX}
                  scaleY={item?.scaleY}

                  aoMapIntensity={2.5}

                  videoTexture={isVisible?.state == true && isVisible?.name == item?.name ? `${item?.videoTexture}` : null}
                  texture={isVisible?.state == false && isVisible?.name == item?.name ? `${item?.texture}` : `${item?.texture}`}

                  lightMapIntensity={4}
                  lightMap={isVisible?.state == false && isVisible?.name == item?.name ? `${item?.texture}` : `${item?.texture}`}


                  onClick={(e) => {
                    movePlayer(e, item?.name);
                  }}
                />

              </>
            );
          })}

          {isGame ? (<>

            <Suspense fallback={null}>
              <LightWall />
            </Suspense>

            <ThirdPersonCamera
              enableDamping
              active={true}
              mouseControl={"drag"}
              lockTargetRotation={false}
              fov={fov}
              y={50}
              innerY={20.00}
              zoom={1}
              // transition
              azimuthAngle={100}
              polarAngle={130}
              minPolarAngle={100}
              maxPolarAngle={130}
            >

              <Suspense fallback={null}>
                <Dummy
                  reflection
                  ref={dummyRef}
                  // strideMove
                  // strideMode={strideMode}
                  id="player"
                  name="player"
                  physics="character"
                  width={50}
                  depth={50}
                  scale={1}
                  x={112.02}
                  y={-195.86}
                  z={-1479.61}
                  rotationX={180}
                  rotationY={-22.37}
                  rotationZ={180}
                  src={`3dCharacter/character.glb`}
                  animation={running ? "running" : "idle"}
                  animations={{
                    idle: `3dCharacter/BreathingIdle.fbx`,
                    running: `3dCharacter/Running.fbx`,
                  }}
                />
              </Suspense>

            </ThirdPersonCamera>

            {running && (
              <>
                <Group>
                  <Torus
                    bloom
                    x={arrowPosition.x}
                    y={arrowPosition.y + 10}
                    z={arrowPosition.z}
                    height={100}
                    depth={100}
                    width={72.99}
                    emissiveColor="#ff0000"
                    color="#ff4e4e"
                    rotationX={90}
                    animation={{
                      scale: [0, 1, 1, 0],
                    }}
                    scaleX={0.21}
                    scaleY={0.24}
                    scaleZ={0.13}
                    normalScale={{ x: 1, y: 1 }}
                  />
                  <Torus
                    bloom
                    x={arrowPosition.x}
                    y={arrowPosition.y + 10}
                    z={arrowPosition.z}
                    height={100}
                    depth={100}
                    width={72.99}
                    emissiveColor="#ff0000"
                    color="#ff4e4e"
                    rotationX={90}
                    animation={{
                      scale: [0, 1, 1, 0],
                    }}
                    scaleX={0.5}
                    scaleY={0.5}
                    scaleZ={1.64}
                    normalScale={{ x: 1, y: 1 }}
                  />
                  <Cylinder
                    bloom
                    x={arrowPosition.x}
                    y={arrowPosition.y + 10}
                    z={arrowPosition.z}
                    height={200}
                    width={72.99}
                    depth={100}
                    emissiveColor="#ff0000"
                    color="#ff4e4e"
                    animation={{
                      scale: [0, 0.09, 0.05, 0],
                    }}
                    scaleX={0.02}
                    scaleY={0.46}
                    scaleZ={0.03}
                    normalScale={{ x: 1, y: 1 }}
                  />
                </Group>
              </>
            )
            }



          </>) : (<>
            <UI>
              <Button onClick={() => handleGame()} sx={{
                background: `url( ${windowSize.width < 700 ? "preloader/popMobile.png" : "preloader/popDesktop.png"})`,
                width: "100vw",
                height: "100vh",
                border: '0px',
                backgroundRepeat: 'no-repeat',
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundColor: "black",
                zIndex: 10000
              }} />
            </UI>
          </>)}

          <UI>
            <ResponsiveDrawer />
          </UI>

        </World>
      </>}

    </>
  );
};

export default Game;
