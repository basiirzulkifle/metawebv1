import {
  Cube,
  //   Dummy,
  //   Model,
  //   Setup,
  //   SvgMesh,
  //   ThirdPersonCamera,
  //   World,
  //   types,
  //   usePreload,
  //   useWindowSize,
  //   Stats,
  //   DirectionalLight,
  //   Find,
  //   HTML,
  //   useSpring,
  //   Trigger,
  //   Group,
  //   Circle,
  //   Audio,
  //   Editor,
  LingoEditor,
  //   Library,
  //   Toolbar,
  //   SceneGraph,
} from "lingo3d-react";
import { useLayoutEffect, useRef, useState } from "react";
import "./App.css";

import { Button, Stack, ThemeProvider } from "@mui/material";

import TouchAppTwoToneIcon from "@mui/icons-material/TouchAppTwoTone";

import PreLoader from "./component/PreLoader";
import ScrollDialog from "./component/ScrollDialog";
import LinearWithValueLabel from "./component/LinearWithValueLabel";
import AudioBcg from "./component/AudioBcg";
import PopInstruction from "./component/PopInstruction";

import {
  BrowserRouter,
  Routes,
  Route,
  useSearchParams,
} from "react-router-dom";

import AllBooth from "./component/World/AllBooth";
import AddToCartButton from "./component/User/AddToCartButton";

import theme from "./style/theme";
import {
  Circle,
  DirectionalLight,
  Dummy,
  Find,
  Group,
  HTML,
  Model,
  Setup,
  Stats,
  SvgMesh,
  ThirdPersonCamera,
  Trigger,
  types,
  usePreload,
  useSpring,
  useWindowSize,
  World,
} from "lingo3d-react";

const Game = () => {
  const { width } = useWindowSize();
  const dummyRef = useRef<types.Dummy>(null);
  const npcRef = useRef<types.Model>(null);
  const boothRef = useRef<types.Model>(null);

  const [isInstruction, setInstruction] = useState<any>();
  const [running, setRunning] = useState<any>(false);
  const [arrowPosition, setArrowPosition] = useState<any>({ x: 0, y: 0, z: 0 });
  const [mouseOver, setMouseOver] = useState<any>(false);
  const [modalState, setModalState] = useState<any>(false);

  const [addToCartData, setAddToCartData] = useState<any>();

  const [boothState, setboothState] = useState({ id: 0 });
  const [modal, setModal] = useState(false);
  const [htmlFor, setHtmlFor] = useState<any>();
  const [navBar, setNavBar] = useState<any>(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const [positionPlayerX, setPositionPlayerX] = useState<any>();
  const [positionPlayerZ, setPositionPlayerZ] = useState<any>();

  const x = searchParams.get("x");
  const z = searchParams.get("z");

  const camX = mouseOver ? 50 : 70;
  const camY = mouseOver ? 90 : 90;
  const camZ = mouseOver ? 200 : 150;

  const xSpring = useSpring({ to: camX, bounce: 0 });
  const ySpring = useSpring({ to: camY, bounce: 0 });
  const zSpring = useSpring({ to: camZ, bounce: 0 });

  //player movement
  const handleClick = (e: types.MouseEvent) => {
    const dummy = dummyRef.current;
    if (!dummy) return;

    setArrowPosition(e.point);
    dummy.lookTo(e.point.x, undefined, e.point.z, 0.1);
    dummy.moveTo(e.point.x, undefined, e.point.z, 14);
    setRunning(true);

    dummy.onMoveToEnd = () => {
      setRunning(false);
    };
  };

  //Modal control from child com Booth
  const sendDataToParentBooth = (index: any) => {
    if (index?.id != null) {
      setboothState(index);
    }

    if (index?.htmlFor == "navBar") {
      setboothState({ id: 0 });
      setHtmlFor("");

      setAddToCartData(index?.data);
      setNavBar(true);
    }

    setModal(true);
  };

  //modal logic
  useLayoutEffect(() => {
    if (modal && mouseOver) {
      const a = window.document.getElementById("modal");
      a?.click();

      setMouseOver(false);
    }

    if (!mouseOver) {
      setModal(false);
    }
  }, [modal, mouseOver]);

  // map player
  useLayoutEffect(() => {
    setPositionPlayerX(x);
    setPositionPlayerZ(z);
  }, [x, z]);

  console.log("boothRef", boothRef);

  return (
    <>
      <Stack
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          color: "white",
          margin: 2,
          zIndex: 1000,

          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: " center",
        }}
      >
        {/* <AudioBcg /> */}
        {/* <PopInstruction /> */}
        <AddToCartButton sendDataToParent={sendDataToParentBooth} />
      </Stack>

      <ScrollDialog
        setModalState={setModalState}
        boothState={boothState}
        dataContent={addToCartData}
        htmlFor={
          htmlFor == "video"
            ? "video"
            : boothState?.id > 0
            ? "booth"
            : navBar
            ? "navBar"
            : null
        }
      />

      <World>
        {/* <LingoEditor /> */}
        {/* <Library /> */}
        {/* <Toolbar /> */}
        {/* <Editor /> */}
        {/* <Stats /> */}
        <Setup
          //SSAA = bestquality(hit GPU)
          //SMAA = care performace
          // antiAlias="SSAA"

          defaultLightScale={1.1}
          skybox="skyBox/sky.jpg"
          pixelRatio={5}
        />
        <Model
          ref={boothRef}
          physics="map"
          width={245.36}
          depth={245.36}
          scaleX={10}
          scaleY={20}
          scaleZ={20}
          // y={2516.33}
          x={-20145.77}
          y={492.05}
          scale={10}
          src="maps/boothsample-v1.glb"
        />
        <Model
          toon
          src="sky/sky4.glb"
          x={-2956.9}
          z={1.0}
          y={14655.96}
          scale={200.0}
          physics="map"
          animations={{ idle: "sky/sky4.glb" }}
          animation="clouds2_lambert1_0Action"
        ></Model>
        <Model
          physics="map"
          width={245.36}
          depth={245.36}
          scaleX={20}
          scaleY={20}
          scaleZ={20}
          // y={2516.33}
          y={2540.87}
          scale={70}
          src="maps/cartoonlowpoly14.glb"
          animation="Object_48Action.002"
          onClick={handleClick}
        />
        <ThirdPersonCamera
          mouseControl={modal && !mouseOver ? false : "drag"}
          active={modal ? false : true}
          lockTargetRotation={false}
          fov={width < 640 ? 110 : 90}
          enableDamping
          innerY={90}
          innerZ={150}
          innerX={70}
          y={100}
          // near={0.01}
          zoom={1}
        >
          <Dummy
            id="player"
            name="player"
            ref={dummyRef}
            scale={3.8}
            src="3dCharacter/back/character.fbx"
            physics="character"
            animations={{
              idle: "3dCharacter/back/BreathingIdle.fbx",
              running: "3dCharacter/back/Running.fbx",
            }}
            animation={running ? "running" : "idle"}
            width={50}
            depth={50}
            // x={positionPlayerX ? positionPlayerX : 0}
            // z={positionPlayerZ ? positionPlayerZ : 0}
            rotationY={69.74}
            //area booth
            x={-20420.6}
            y={221.11}
            z={3651.88}

            //area center
            // x={50}
            // y={194.31}
            // z={50}
          />
          <DirectionalLight intensity={0.4} color="white"></DirectionalLight>
        </ThirdPersonCamera>
        {running && (
          <SvgMesh
            width={72.99}
            height={100}
            depth={100}
            scaleX={-0.82}
            scaleZ={0.19}
            src="arrow.svg"
            color="#ff4e4e"
            x={arrowPosition.x}
            y={arrowPosition.y + 50}
            z={arrowPosition.z}
            animation={{
              rotationY: [0, 45, 90, 135, 180, 225, 270, 315, 360],
            }}
          />
        )}

        <Group
          //area booth
          x={-20876.51}
          y={152.77}
          z={4501.97}

          //area sff house
          // x={-2400.25}
          // y={1.61}
          // z={5611.74}
        >
          <Circle
            x={-2400.25}
            y={1.61}
            z={5611.74}
            rotationX={270.0}
            scale={2.0}
            opacity={mouseOver ? 1 : 0}
            color={mouseOver ? "#ff0000" : "transparent"}
            normalScale={{ x: 1, y: 1 }}
            innerVisible={true}
          />
          <Trigger
            targetIds="player"
            radius={500}
            onEnter={() => {
              setMouseOver(true);
            }}
            onExit={() => {
              setMouseOver(false);
            }}
          />
        </Group>

        <Model
          ref={npcRef}
          src="npc/npc1.glb"
          physics="character"
          outline={mouseOver}
          scaleX={20}
          scaleY={20}
          scaleZ={20}
          scale={3.8}
          rotationY={180.0}
          //area booth
          x={-20876.51}
          y={152.77}
          z={4501.97}
          //center
          // x={-2462.69}
          // y={193.35}
          // z={6111.53}
          animation="Armature|mixamo.com|Layer0"
        >
          <Find
            name="Cube.001"
            onMouseOver={() => {
              setMouseOver(true);
              setboothState({ id: 0 });
              setHtmlFor("video");
            }}
            onMouseOut={() => {
              setMouseOver(false);
              setHtmlFor("");
            }}
            onClick={() => {
              setModal(true);
            }}
          >
            {mouseOver && (
              <HTML>
                <div>
                  <Button
                    sx={{
                      color: "white",
                      px: 1,
                      background: " rgba( 255, 255, 255, 0.25 )",
                      boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                      backdropFilter: "blur( 4px )",
                      borderRadius: "10px",
                      border: "1px solid rgba( 255, 255, 255, 0.18 )",
                    }}
                    variant="text"
                    size="small"
                    endIcon={<TouchAppTwoToneIcon />}
                  >
                    Click
                  </Button>
                </div>
              </HTML>
            )}
          </Find>
        </Model>

        {/* <Cube
          x={-3136.47}
          y={632.18}
          z={-1524.66}
          mass={10}
          physics={"map"}
          slippery={true}
          scale={20.0}
        /> */}

        <AllBooth sendDataToParent={sendDataToParentBooth} />
      </World>
    </>
  );
};

const Loader = () => {
  const viteBaseUrl = import.meta.env.VITE_BASE_URL;
  const [isGameWorld, setGameWorld] = useState(false);
  const mobileVersion = window.matchMedia("(max-width: 425px)");
  const progress = usePreload(
    [
      "sky/sky4.glb",

      "booth/booth1.glb",
      "booth/booth2.glb",
      "booth/booth3.glb",

      "maps/cartoonlowpoly14.glb",

      "npc/npc1.glb",

      "3dCharacter/back/character.fbx",
      "3dCharacter/back/BreathingIdle.fbx",
      "3dCharacter/back/Running.fbx",

      "skyBox/sky.jpg",
    ],
    300000
  );

  return (
    <>
      {progress < 100 && !isGameWorld && (
        <>
          <Stack
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={"preloader/aloaderMobile.png"} />
            <LinearWithValueLabel valueItem={Math.round(progress)} />
          </Stack>
        </>
      )}

      {progress == 100 && !isGameWorld && (
        <>
          <Stack sx={{ alignItems: "center" }}>
            <img
              style={{
                position: "relative",
                left: "-1%",
                maxWidth: "100%",
                cursor: "pointer",
              }}
              onClick={() => {
                setGameWorld(true);
              }}
              src={
                mobileVersion
                  ? "preloader/preNoticMobile.png"
                  : "preloader/preNotic.png"
              }
            />
            <Button
              sx={{
                mt: 1,
                fontSize: "x-large",
                width: "initial",
              }}
              variant="contained"
              size="large"
              onClick={() => {
                setGameWorld(true);
              }}
            >
              Continue
            </Button>
          </Stack>
        </>
      )}

      {isGameWorld && (
        <>
          <BrowserRouter basename={`/${viteBaseUrl}`}>
            <div className="pt-20">
              <Routes>
                <Route path={`/`} element={<Game />} />
              </Routes>
            </div>
          </BrowserRouter>
        </>
      )}
    </>
  );
};

const App = () => {
  const [isDisableVideo, setVideo] = useState(false);
  const [isDisablePreLoader, setPreLoaderVideo] = useState(true);

  const hanldeVideo = () => {
    setVideo(true);
    setPreLoaderVideo(false);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <div
          className="absolute top-0 left-0 flex items-center justify-center w-screen h-screen text-white bg-black"
          style={{ backgroundImage: `url(preloader/preloaderbg.jpg)` }}
        >
          {isDisablePreLoader ? (
            <PreLoader hanldeVideo={hanldeVideo} />
          ) : (
            isDisableVideo == true && <Loader />
          )}
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
