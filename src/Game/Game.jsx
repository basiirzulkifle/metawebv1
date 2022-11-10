import React, {
  useState,
  useRef,
  Suspense,
  useEffect,
  useLayoutEffect,
} from "react";

import _uniqueId from "lodash/uniqueId";

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
  AreaLight,
  PointLight,
  Environment,
} from "lingo3d-react";

import { Button } from "@mui/material";

// import { panelObjHouse } from "../dummy/dummy_old";
import { panelFrame, panelObj } from "../dummy/dummy";

import LightWall from "./LightWall";
import ResponsiveDrawer from "../component/Drawer";

const Game = () => {
  //Vite Base URl
  const viteBaseUrl = import.meta.env.VITE_BASE_URL;

  //Runinng and Idle
  const [running, setRunning] = useState(false);
  const [arrowPosition, setArrowPosition] = useState({ x: 0, y: 0, z: 0 });
  const [isVisible, setVisible] = useState({ state: false, name: "" });

  const [idTv] = useState(_uniqueId("tvkey-"));
  const [idpf] = useState(_uniqueId("pfkey-"));
  const [idrpf] = useState(_uniqueId("rpfkey-"));

  //const [isVisible, setVisible] = useState(false) //old

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
    console.log("id--->", id);
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
        {/* <LingoEditor />S */}
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

        {/* <LightWall /> */}
        {/* <AreaLight
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

        <PointLight
          name="lake1"
          x={-879.88}
          y={70.58}
          z={-537.7}
          intensity={3}
        />
        <PointLight
          name="lake2"
          x={-589.39}
          y={68.77}
          z={-575.11}
          intensity={3}
        />
        <PointLight
          name="fireLamp"
          x={-52.17}
          y={34.17}
          z={-1014.03}
          intensity={3}
        />
        <PointLight
          name="lampStreet1"
          x={-4.58}
          y={231.06}
          z={1107.91}
          intensity={3}
        />
        <PointLight
          name="lampStreet2"
          x={278.28}
          y={45.93}
          z={190.66}
          intensity={3}
        />
        <PointLight
          name="lampStreet3"
          x={984.2}
          y={366.57}
          z={-287.13}
          intensity={3.0}
        />
        <PointLight
          name="lampMan"
          x={495.81}
          y={360.14}
          z={1587.84}
          intensity={3}
        /> */}

        <Model
          visible={true}
          physics="map"
          name="ground"
          bloom={true}
          scale={50}
          src={`maps/v2/20221107_ground.glb`}
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
          src={`maps/v2/20221109_tunnel_baked.glb`}
        >
          {panelObj?.map((item, idTv) => {
            return (
              <>
                <Find
                  key={idTv}
                  name={item?.name}
                  // x={item?.x}
                  // y={item?.y}
                  // z={item?.z}
                  // rotationX={item?.rotationX}
                  // rotationY={item?.rotationY}
                  bloom={item?.bloom}
                  // texture={item?.texture}
                  // texture={`${viteBaseUrl}/${item?.texture}`}
                  // textureFlipY={item?.textureFlipY}
                  // textureRotation={item?.textureRotation}
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
                    // !ismobile && moveplayer(e, item?.name);
                    console.log("masukl");

                    // !ismobile && setarrowposition(e.point);
                    // !ismobile && setrunning(true);
                  }}
                />
              </>
            );
          })}

          {/* <Find bloom name="Line001" color="#ffffff" />

          <Find bloom name="Box050" color="#ffffff" />
          <Find bloom name="Box057" color="#ffffff" />

          <Find bloom name="ceilinglight" color="#ffffff" />

          <Find bloom name="Box050" color="#ffffff" />
          <Find bloom name="Box057" color="#ffffff" />
          <Find bloom name="Box058" color="#ffffff" /> */}

          {/* {panelFrame?.map((item, idpf) => {
            <Find key={idpf} bloom name={item?.name} color="#ffffff" />;
          })} */}
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
