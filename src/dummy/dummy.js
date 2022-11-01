import { StarBorder, Drafts, Send, MoveToInbox } from "@mui/icons-material";

// DRAWER.JS

const menu = [
  "1 HOME",
  "1.1 INDEX",
  "2 SERVICES",
  "2.1 SOFTWARE DEVELOPMENT",
  "2.2 ECOMMERCE",
  "2.3 WEBSITE DESIGN",
  "2.4 WEB GAME",
  "2.5 VIRTUAL EVENT",
  "2.6 ONLINE SHOWROOW",
  "2.7 3D VISUALIZATION",
  "2.8 METAVERSE",
  "3 ABOUT",
  "3.1 INTRO",
  "3.2 HOW WE DO THIS",
  "3.3 EXPERTISE AREAS",
  "3.4 OUR TEAMS",
  "3.5 CLIENTS",
  "4 CONTACT",
];

const lists = [
  {
    key: "1 HOME",
    label: "1 HOME",
    icon: MoveToInbox,
    pathname: "/",
    items: [
      {
        key: "1.1 INDEX",
        label: "1.1 INDEX",
        icon: StarBorder,
        pathname: "/",
      },
    ],
  },
  {
    key: "2 SERVICES",
    label: "2 SERVICES",
    icon: Drafts,
    pathname: "/services",
    items: [
      {
        key: "2.1   SOFTWARE DEVELOPMENT",
        label: "2.1   SOFTWARE DEVELOPMENT",
        icon: Send,
        pathname: "/services",
      },
      {
        key: "2.2 ECOMMERCE",
        label: "2.2 ECOMMERCE",
        icon: Send,
        pathname: "/services",
      },
    ],
  },
];

// GAME.JS
const panelObj = [
  {
    name: "Object002",
    bloom: true,
    textureFlipY: false,
    color: "#ffffff",
    rotationY: 19.97,
    textureRotation: 360,
    texture: "img/test.png",
    videoTexture:
      "video/1.SingaporeFoodFestival2022,bySingaporeTourismBoard.mp4",
  },
  {
    name: "Object003",
    bloom: true,
    textureFlipY: true,
    color: "#ffffff",
    rotationY: 19.97,
    textureRotation: 180,
    texture: "img/testr.png",
    videoTexture:
      "video/2.VirtualPhDOpenHouse,bySingaporeManagementUniversity.mp4",
  },
  {
    name: "Object004",
    bloom: true,
    textureFlipY: false,
    color: "#ffffff",
    rotationY: 19.97,
    textureRotation: 360,
    texture: "img/test.png",
    videoTexture:
      "video/3.IloominationVirtualShowroom,byNEAClean&GreenSingapore.mp4",
  },
  {
    name: "Object005",
    bloom: true,
    textureFlipY: true,
    color: "#ffffff",
    rotationY: 19.97,
    textureRotation: 180,
    texture: "img/testr.png",
    videoTexture: "video/4.BYDVirtualCarShowroom,bySTEngineering.mp4",
  },
  {
    name: "Object006",
    bloom: true,
    textureFlipY: false,
    color: "#ffffff",
    rotationY: 19.97,
    textureRotation: 360,
    texture: "img/test.png",
    videoTexture:
      "video/5.CuriographyVirtualExhibition,bySingaporeAssociationforMentalHealth.mp4",
  },
  {
    name: "Object007",
    bloom: true,
    textureFlipY: true,
    color: "#ffffff",
    rotationY: 19.97,
    textureRotation: 180,
    texture: "img/testr.png",
    videoTexture: "video/6.EnvironmentalAwarenessCampaign,byProcter&Gamble.mp4",
  },
  {
    name: "Object008",
    bloom: true,
    textureFlipY: false,
    color: "#ffffff",
    rotationY: 19.97,
    textureRotation: 360,
    texture: "img/test.png",
    videoTexture:
      "video/7.StarPropertyAwards2022VirtualShowcase,byStarMediaGroup.mp4",
  },
  {
    name: "Object009",
    bloom: true,
    textureFlipY: true,
    color: "#ffffff",
    rotationY: 19.97,
    textureRotation: 180,
    texture: "img/testr.png",
    videoTexture: "video/8.SabahVirtualTravelFair,bySabahTourismBoard.mp4",
  },
  {
    name: "Object010",
    bloom: true,
    textureFlipY: false,
    color: "#ffffff",
    rotationY: 19.97,
    textureRotation: 360,
    texture: "img/test.png",
    videoTexture:
      "video/9.VirtualExhibition&InternationalConference,byUniversityScienceMalaysia.mp4",
  },
  {
    name: "Object011",
    bloom: true,
    textureFlipY: true,
    color: "#ffffff",
    rotationY: 19.97,
    textureRotation: 180,
    texture: "img/testr.png",
    videoTexture: "video/10.VirtualSalesLobbybydr.MCTbyKevolve.mp4",
  },
  {
    name: "Object012",
    bloom: true,
    textureFlipY: false,
    color: "#ffffff",
    rotationY: 19.97,
    textureRotation: 360,
    texture: "img/test.png",
    videoTexture:
      "video/11.VirtualStationeryStore,byNavneetEducationLimited.mp4",
  },
  {
    name: "Object013",
    bloom: true,
    textureFlipY: true,
    color: "#ffffff",
    rotationY: 19.97,
    textureRotation: 180,
    texture: "img/testr.png",
    videoTexture: "video/12.EdenVirtualWorld,EdenlogyPteLtd.mp4",
  },
  {
    name: "Object014",
    bloom: true,
    textureFlipY: false,
    color: "#ffffff",
    rotationY: 19.97,
    textureRotation: 360,
    texture: "img/test.png",
    videoTexture:
      "video/13.KualaLumpurVirtualPhotographyFestival,byPCPPublications.mp4",
  },
  {
    name: "Object015",
    bloom: true,
    textureFlipY: true,
    color: "#ffffff",
    rotationY: 19.97,
    textureRotation: 180,
    texture: "img/testr.png",
    videoTexture: "video/14.VirtualAngelicaShowUnite-Launching,byJohorLand.mp4",
  },
  {
    name: "Object016",
    bloom: true,
    textureFlipY: false,
    color: "#ffffff",
    rotationY: 19.97,
    textureRotation: 360,
    texture: "img/test.png",
    videoTexture:
      "video/15.HorizonSquareVirtualShowcase,byTopHillsRealty(M)Sdn.Bhd..mp4",
  },
  {
    name: "Object017",
    bloom: true,
    textureFlipY: true,
    color: "#ffffff",
    rotationY: 19.97,
    textureRotation: 180,
    texture: "img/testr.png",
    videoTexture: "video/16.VirtualBazaar(Localised),ByTheRefectory.mp4",
  },
  {
    name: "Object018",
    bloom: true,
    textureFlipY: false,
    color: "#ffffff",
    rotationY: 19.97,
    textureRotation: 360,
    texture: "img/test.png",
    videoTexture: "video/17.VirtualBistroBar,byMemeBistroBar.mp4",
  },
];

// GAME.JS
const panelObjHouse = [
  {
    name: "panel1",
    bloom: true,
    x: 175.34,
    y: -179.31,
    z: -2024.63,
    rotationX: 0,
    rotationY: 270.0,
    scale: 2.17,
    scaleX: 2.17,
    scaleY: 1.5,
    texture: 'img/1SingaporeFood Festival2022,bySingaporeTourismBoard.png',
    videoTexture:
      "video/1.SingaporeFoodFestival2022,bySingaporeTourismBoard.mp4",
  },
  {
    name: "panel2",
    bloom: true,
    x: 806.76,
    y: -148.03,
    z: -1830.72,
    rotationX: -2.37,
    rotationY: -81.02,
    scale: 2.17,
    scaleX: 2.17,
    scaleY: 1.5,
    texture: 'img/7StarPropertyAwards2022VirtualShowcase,byStarMediaGroup.png',
    videoTexture:
      "video/7.StarPropertyAwards2022VirtualShowcase,byStarMediaGroup.mp4",
  },
  {
    name: "panel3",
    bloom: true,
    x: -363.26,
    y: -190.16,
    z: -2671.47,
    rotationX: 0,
    rotationY: 4.54,
    scale: 2.17,
    scaleX: 2.17,
    scaleY: 1.5,
    texture: 'img/3IloominationVirtualShowroom,by NEACleanGreen Singapore.png',
    videoTexture:
      "video/3.IloominationVirtualShowroom,byNEAClean&GreenSingapore.mp4",
  },
  {
    name: "panel4",
    bloom: true,
    x: -109.02,
    y: -152.85,
    z: -3208.29,
    rotationX: 0,
    rotationY: 2.46,
    scale: 2.17,
    scaleX: 2.17,
    scaleY: 1.5,
    texture: 'img/9VirtualExhibition&InternationalConference,byUniversityScienceMalaysia.png',
    videoTexture:
      "video/9.VirtualExhibition&InternationalConference,byUniversityScienceMalaysia.mp4",
  },
  {
    name: "panel5",
    bloom: true,
    x: 346.06,
    y: -157.94,
    z: -2923.48,
    rotationX: 0,
    rotationY: 270.0,
    scale: 2.17,
    scaleX: 2.17,
    scaleY: 1.5,
    texture: 'img/5CuriographyVirtualExhibition,bySingaporeAssociationforMentalHealth.png',
    videoTexture:
      "video/5.CuriographyVirtualExhibition,bySingaporeAssociationforMentalHealth.mp4",
  },
];

// GAME.JS
const panelFrame = [
  {
    name: "Box2131639805",
    bloom: true,
    color: "#ffffff",
  },
  {
    name: "Box2131639774",
    bloom: true,
    color: "#ffffff",
  },
  {
    name: "Box2131639774",
    bloom: true,
    color: "#ffffff",
  },
];

export { panelObj, panelFrame, lists, panelObjHouse };
