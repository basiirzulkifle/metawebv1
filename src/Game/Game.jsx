import React, { useState, useRef, Suspense } from "react";

import {
  Cylinder,
  Environment,
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
  AreaLight,
  Stats,
  useSpring,
  useWindowSize,
  Audio,
} from "lingo3d-react";

import { Button, Stack } from "@mui/material";
import { panelObj } from "../dummy/dummy";

import ResponsiveDrawer from "../component/Drawer";
import CircularStatic from "../component/CircularProgressWithLabel";
import AudioBcg from "../component/AudioBcg";

const Game = () => {
  const progress = usePreload(
    [
      `maps/v2/new/map.gltf`,
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

  //PLAYER
  const dummyRef = useRef(null);
  const boothRef = useRef(null);
  const windowSize = useWindowSize();

  const fov = windowSize.width < windowSize.height ? 100 : 90;

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

    dummy?.lookTo(ev.point.x, undefined, ev.point.z, 0.1);
    dummy?.moveTo(ev.point.x, undefined, ev.point.z, 8);

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
        }}
      >


        <Stack direction={"column"} sx={{ justifyContent: 'center', alignItems: 'center' }}>
          {progress < 100 && (
            <>
              <img src={`preloader/preloader.gif`} />
              <CircularStatic value={progress} />
            </>
          )}
          {progress == 100 && (
            <>
              <img src={`preloader/preloader.gif`} />
              <Button variant="contained" onClick={handleGame} >Enter</Button>
            </>
          )}

        </Stack>

      </div>


      {progress == 100 && isGame && <>
        <ResponsiveDrawer />
        <World
          repulsion={5}
        >
          {/* <Stats /> */}
          {/* <LingoEditor /> */}

          <Setup
            pbr
            defaultLight={true}
            pixelRatio={5}
            exposure={2}
          />

          <AreaLight
            x={-131.62}
            y={52.2}
            z={-6166.49}
            rotationX={46.66}
            rotationY={-0.71}
            rotationZ={-1.48}
            scale={94.23}
            scaleX={34.69}
            scaleY={2.76}
            scaleZ={0.0}
            // intensity={0.01}
            color="#ffbd46"
          />

          <AreaLight
            x={-1812.64}
            y={-178.63}
            z={-1473.34}
            rotationX={89.93}
            rotationY={51.55}
            rotationZ={-89.36}
            scale={94.23}
            scaleX={94.23}
            scaleY={7.74}
            scaleZ={0.0}
            // intensity={0.01}
            color="#ffbd46"
          />

          <AreaLight
            x={1605.44}
            y={-178.63}
            z={-1473.34}
            rotationX={89.93}
            rotationY={-51.55}
            rotationZ={-89.36}
            scale={94.23}
            scaleX={94.23}
            scaleY={7.74}
            scaleZ={0.0}
            // intensity={0.01}
            color="#ffbd46"
          />

          <Suspense fallback={null}>
            <Model
              name="worldmap"
              physics="map"
              ref={boothRef}
              width={245.36}
              depth={245.36}
              x={-149.17}
              y={1494.28}
              z={-1113.66}
              scale={30}
              onClick={(ev) => {
                handleClick(ev);
              }}
              src={`maps/v2/new/map.gltf`}
            >

              {/* <Find bloom={true} name="Line001" color="#ffffff" />
                <Find bloom={true} name="Box050" color="#ffffff" />
                <Find bloom={true} name="Box057" color="#ffffff" />
                <Find bloom={true} name="Box050" color="#ffffff" />
                <Find bloom={true} name="Box057" color="#ffffff" />
                <Find bloom={true} name="Object872" color="#ffffff" />
                <Find bloom={true} name="side light007" color="#ffffff" />
                <Find bloom={true} name="ceiling light.006" color="#ffffff" />
                <Find bloom={true} name="side wall lighting" color="#ffffff" /> */}

              {panelObj?.map((item, key) => {
                return (
                  <>
                    <Find
                      key={item?.name}
                      name={item?.name}

                      texture={isVisible?.state == false ? `${item?.texture}` : `${item?.texture}`}
                      textureFlipY={false}
                      videoTexture={isVisible?.state == true && isVisible?.name == item?.name ? `${item?.videoTexture}` : null}

                      receiveShadow={false}
                      metalness={-1.00}

                      color={item?.color}
                      emissiveColor="#ffffff"
                      emissiveIntensity={0.1}
                      onClick={(e) => {
                        movePlayer(e, item?.name);
                      }}
                    />

                  </>
                );
              })}


            </Model>
          </Suspense>

          <ThirdPersonCamera
            enableDamping
            active={true}
            mouseControl={"drag"}
            lockTargetRotation={false}
            fov={fov}
            y={5}
            zoom={1}
          >

            <Suspense fallback={null}>
              <Dummy

                ref={dummyRef}
                id="player"
                name="player"
                physics="character"
                width={50}
                depth={50}
                scale={1}
                x={-54.47}
                z={3250.26}
                y={50.3}
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

        </World>
      </>}

    </>
  );
};

export default Game;
