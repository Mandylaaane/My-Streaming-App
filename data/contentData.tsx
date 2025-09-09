export type ContentItem = {
  id: string;
  title: string;
  imageVert: any;
  imageHori: any;
  imageEp?: any;
};

export const contentData: ContentItem[] = [
  {
    id: "1",
    title: "Elsbeth",
    imageVert: require("./dataAssets/ElsbethVert.png"),
    imageHori: require("./dataAssets/ElsbethHori.png"),
    imageEp: require("./dataAssets/ElsbethEp1.png"),
  },
  {
    id: "2",
    title: "Happy Gilmore",
    imageVert: require("./dataAssets/HappyGilVert.png"),
    imageHori: require("./dataAssets/HappyGilHori.png"),
    imageEp: null,
  },
  {
    id: "3",
    title: "Idol",
    imageVert: require("./dataAssets/IdolVert.png"),
    imageHori: require("./dataAssets/IdolHori.png"),
    imageEp: null,
  },
  {
    id: "4",
    title: "Pets",
    imageVert: require("./dataAssets/PetsVert.png"),
    imageHori: require("./dataAssets/PetsHori.png"),
    imageEp: null,
  },
  {
    id: "5",
    title: "Survivor",
    imageVert: require("./dataAssets/SurvivorVert.png"),
    imageHori: require("./dataAssets/SurvivorHori.png"),
    imageEp: null,
  },
  {
    id: "6",
    title: "The Pitt",
    imageVert: require("./dataAssets/ThePittVert.png"),
    imageHori: require("./dataAssets/ThePittHori.png"),
    imageEp: null,
  },
  {
    id: "7",
    title: "The Tonight Show",
    imageVert: require("./dataAssets/TonightShowVert.png"),
    imageHori: require("./dataAssets/TonightShowHori.png"),
    imageEp: null,
  },
  {
    id: "8",
    title: "True Detective",
    imageVert: require("./dataAssets/TrueDetVert.png"),
    imageHori: require("./dataAssets/TrueDetHori.png"),
    imageEp: null,
  },
];
