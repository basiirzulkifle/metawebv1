import React, {
  useState,
  useRef,
  Suspense,
  useEffect,
  useLayoutEffect,
} from "react";

import {
  Cylinder,
  Torus,
  Dummy,
  Group,
  Model,
  Setup,
  ThirdPersonCamera,
  World,
  UI,
  useWindowSize,
  Plane,
  Cube,
  Joystick,
  Stats,
  Find,
  LingoEditor,
  Environment,
} from "lingo3d-react";

import { Button } from "@mui/material";

// import { panelObjHouse } from "../dummy/dummy_old";
import { panelFrame, panelObj } from "../dummy/dummy";

import LightWall from "./LightWall";
// import ResponsiveDrawer from "../component/Drawer";

const Game = () => {
  //Vite Base URl
  const viteBaseUrl = import.meta.env.VITE_BASE_URL;

  //Runinng and Idle
  const [running, setRunning] = useState(false);
  const [arrowPosition, setArrowPosition] = useState({ x: 0, y: 0, z: 0 });
  const [isVisible, setVisible] = useState({ state: false, name: "" });

  //PLAYER
  const dummyRef = useRef(null);
  const windowSize = useWindowSize();
  const fov = windowSize.width > windowSize.height ? 90 : 120;
  const isMobile = windowSize.width < windowSize.height;

  //StrideMode
  // const [strideMode, setStrideMode] = useState("aim");

  //LockTarget
  //const [lockTargetRotation, setlockTargetRotation] = useState(true);

  const movePlayer = (ev, id) => {
    setVisible({ state: true, name: id });
    // setStrideMode("free")
    // setlockTargetRotation(false)
  };

  return (
    <>
      <World
        // repulsion={5}
        skybox="sky.jpg"
      >
        {/* <Stats /> */}
        {/* sini */}
        <Environment />
        {/* <LingoEditor /> */}
        {/* <SceneGraph /> */}

        <Setup pbr defaultLight={false} pixelRatio={5} />

        {/* <Cube
          visible={true}
          physics="map"
          x={0}
          y={0}
          z={0}
          scale={-2.68}
          scaleX={5.56}
          scaleY={0.04}
          scaleZ={5.58}
          rotationX={-5.69}
          rotationZ={-179.0}
        /> */}
        <LightWall />

        <Model
          visible={true}
          physics="map"
          name="ground"
          bloom={true}
          scale={50}
          src={`maps/v2/ground.glb`}
          // Original
          // y={-2682.75}
          // Basiir
          y={-2618.82}
          onClick={(e) => {
            setArrowPosition(e.point);
            setRunning(true);
          }}
        />

        <Model
          name="worldmap"
          physics="map"
          // Original
          // width={245.36}
          // depth={245.36}
          // x={414.07}
          // y={525.17}
          // z={-584.03}
          // scale={15}
          width={245.36}
          depth={245.36}
          x={-149.17}
          y={841.36}
          z={-1113.66}
          scale={30}
          onClick={(e) => {
            !isMobile && setArrowPosition(e.point);
            !isMobile && setRunning(true);
          }}
          src={`maps/v2/tunnel2-v1.glb`}
        >
          {panelObj?.map((item, idTv) => {
            return (
              <>
                <Find
                  key={idTv}
                  name={item?.name}
                  bloom={item?.bloom}
                  // texture={item?.texture}
                  // texture={`${viteBaseUrl}/${item?.texture}`}
                  textureFlipY={item?.textureFlipY}
                  textureRotation={item?.textureRotation}
                  // videoTexture={`${viteBaseUrl}/${item?.videoTexture}`}
                  // videoTexture={`${viteBaseUrl}${item?.videoTexture}`}
                  color={item?.color}
                  emissiveColor="#626262"
                  emissiveIntensity={0.3}

                  //Video Trigger bila click
                  videoTexture={
                    isVisible?.state == true && isVisible?.name == item?.name
                      ? `${item?.videoTexture}`
                      : null
                  }
                  texture={
                    isVisible?.state == false && isVisible?.name == item?.name
                      ? `${item?.texture}`
                      : `${item?.texture}`
                  }
                  lightMapIntensity={4}
                  lightMap={
                    isVisible?.state == false && isVisible?.name == item?.name
                      ? `${item?.texture}`
                      : `${item?.texture}`
                  }
                  onClick={(e) => {
                    movePlayer(e, item?.name);
                    !isMobile && setArrowPosition(e.point);
                    !isMobile && setRunning(true);
                  }}
                ></Find>
              </>
            );
          })}
        </Model>

        <ThirdPersonCamera
          active
          mouseControl="drag"
          lockTargetRotation={isMobile ? true : false}
          enableDamping
          y={50}
          innerY={20.0}
          minPolarAngle={30}
          maxPolarAngle={115}
        >
          <Dummy
            reflection
            ref={dummyRef}
            strideMove
            strideMode="free"
            // strideMove
            // strideMode={strideMode}
            // far={1}
            id="player"
            name="player"
            physics="character"
            // width={50}
            // depth={50}
            // scale={1}
            // x={0}
            // y={224.6}
            // z={0}
            width={50}
            depth={50}
            scale={1}
            x={-93.6}
            y={717.65}
            z={1325.48}
            rotationX={180}
            rotationY={-22.37}
            rotationZ={180}
            lookTo={[arrowPosition.x, undefined, arrowPosition.z, 0.1]}
            moveTo={[arrowPosition.x, undefined, arrowPosition.z, 5]}
            onMoveToEnd={() => setRunning(false)}
            // rotationX={180}
            // rotationY={-22.37}
            // rotationZ={180}
            src={`3dCharacter/character.glb`}
            animation={running ? "running" : "idle"}
          />
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
        )}

        {/* {panelObjHouse?.map((item, key) => {
          return (
            <>
              <Plane
                bloom
                key={key}
                name={item?.name}
                // outline={isVisible?.state == true && isVisible?.name == item?.name ? true : false}
                x={item?.x}
                y={item?.y}
                z={item?.z}
                rotationY={item?.rotationY}
                rotationX={item?.rotationX}
                scale={item?.scale}
                scaleX={item?.scaleX}
                scaleY={item?.scaleY}
                aoMapIntensity={2.5}
                videoTexture={
                  isVisible?.state == true && isVisible?.name == item?.name
                    ? `${item?.videoTexture}`
                    : null
                }
                texture={
                  isVisible?.state == false && isVisible?.name == item?.name
                    ? `${item?.texture}`
                    : `${item?.texture}`
                }
                lightMapIntensity={4}
                lightMap={
                  isVisible?.state == false && isVisible?.name == item?.name
                    ? `${item?.texture}`
                    : `${item?.texture}`
                }
                onClick={(e) => {
                  movePlayer(e, item?.name);
                  !isMobile && setArrowPosition(e.point);
                  !isMobile && setRunning(true);
                }}
              />
            </>
          );
        })} */}
      </World>

      {isMobile && (
        <Joystick
          onMove={(e) => {
            const fox = dummyRef.current;
            if (!fox) return;

            fox.strideForward = -e.y * 5;
            fox.strideRight = -e.x * 5;
          }}
          onMoveEnd={() => {
            const fox = dummyRef.current;
            if (!fox) return;

            fox.strideForward = 0;
            fox.strideRight = 0;
          }}
        />
      )}
    </>
  );
};

export default Game;
