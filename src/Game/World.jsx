import React, { useState } from "react";
import _uniqueId from "lodash/uniqueId";

import { usePreload, useWindowSize } from "lingo3d-react";

import Game from "./Game";
import { Button, Stack } from "@mui/material";
import CircularStatic from "../component/CircularProgressWithLabel";
import ResponsiveDrawer from "../component/Drawer";

const World = () => {
  const [isGame, setGame] = useState(false);

  const windowSize = useWindowSize();
  const progress = usePreload(
    [
      `maps/v2/20221107_grassland.glb`,
      `3dCharacter/character.glb`,
      `3dCharacter/BreathingIdle.fbx`,
      `3dCharacter/Running.fbx`,
    ],
    "9.1mb"
  );

  const handleGame = () => {
    setGame(true);
  };

  if (progress < 100)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          textAlign: "center",
          backgroundColor: "black",
          color: "white",
          width: "100vw",
        }}
      >
        <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
          <img
            alt="metasg"
            width={"100%"}
            height={"100%"}
            src={`preloader/preloader.gif`}
          />
          <CircularStatic value={progress} />
        </Stack>
      </div>
    );

  return (
    <>
      <Button
        onClick={() => handleGame()}
        sx={{
          background: `url( ${
            windowSize.width < 700
              ? "preloader/popMobile.png"
              : "preloader/popDesktop.png"
          })`,
          width: "100%",
          height: "100vh",
          border: "0px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundColor: "black",
          zIndex: 10000,
          color: "black",
          display: isGame ? "none" : "block",
        }}
      />
      {/* <ResponsiveDrawer /> */}
      <Game />
    </>
  );
};

export default World;
