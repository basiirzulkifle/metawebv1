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
  PointLight,
  Water,
  SpawnPoint,
  Reticle,
  Joystick,
} from "lingo3d-react";

import { Button, Stack, Zoom } from "@mui/material";
import { panelObj, panelObjHouse } from "../dummy/dummy";

import ResponsiveDrawer from "../component/Drawer";
import CircularStatic from "../component/CircularProgressWithLabel";
import LightWall from "./LightWall";

const Game = () => {
  const progress = usePreload(
    [
      `maps/v2/new/new/Grassland.glb`,
      `3dCharacter/new/character.gltf`,
      `3dCharacter/new/BreathingIdle.fbx`,
      `3dCharacter/new/Running.fbx`,
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

          {progress == 100 && (
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
          )}

        </Stack>

      </div>


      {isGame && <>
        <ResponsiveDrawer />
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

          <Suspense fallback={null}>
            <LightWall />
          </Suspense>

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
              src={`maps/v2/new/new/Grassland.glb`}
            >
            </Model>
          </Suspense>

          {panelObjHouse?.map((item, key) => {
            return (
              <>
                <Plane
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

                  lightMap={'img/test.png'}
                  lightMapIntensity={3}
                  texture={item?.texture}

                  videoTexture={isVisible?.state == true && isVisible?.name == item?.name ? `${item?.videoTexture}` : null}

                  onClick={(e) => {
                    movePlayer(e, item?.name);
                  }}
                />

              </>
            );
          })}


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
                src={`3dCharacter/new/character.gltf`}
                animation={running ? "running" : "idle"}
                animations={{
                  idle: `3dCharacter/new/BreathingIdle.fbx`,
                  running: `3dCharacter/new/Running.fbx`,
                }}
              />
            </Suspense>

          </ThirdPersonCamera>

          {
            running && (
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

          {/* <Reticle />
          <Joystick
            onMove={(e) => {
              const dummy = dummyRef.current;
              if (!dummy) return;

              dummy.strideForward = -e.y * 5;
              dummy.strideRight = -e.x * 5;
            }}
            onMoveEnd={() => {
              const dummy = dummyRef.current;
              if (!dummy) return;

              dummy.strideForward = 0;
              dummy.strideRight = 0;
            }}
          /> */}

          <SpawnPoint x={110.32} y={-251.26} z={-1479.18} scale={5} />

          <PointLight name="fireLamp" x={-54.54} y={-230.87} z={-2877.70} intensity={3} />
          <PointLight name="lampStreet1" x={31.53} y={-97.85} z={-829.20} intensity={3} />
          <PointLight name="lampStreet2" x={283.20} y={-233.84} z={-1669.20} intensity={3} />
          <PointLight name="lampStreet3" x={995.55} y={98.09} z={-2184.01} intensity={3.00} />
          <PointLight name="lampMan" x={470.85} y={95.59} z={-311.03} intensity={3} />
          {/* <Water name="water" x={-1687.26} y={-390.14} z={-2294.46} scale={25.00} scaleX={30.00} scaleZ={25.00} scaleY={77.94} speed={0.1} resolution={2048} rotationX={270.00} /> */}

        </World>
      </>}

    </>
  );
};

export default Game;
