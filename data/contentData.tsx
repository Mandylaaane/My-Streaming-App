export type ContentItem = {
  id: string;
  title: string;
  banner: any;
  imageVert: any;
  imageHori: any;
  imageEp?: any;
  description?: string;
  year?: string;
  genre?: string;
  country?: string;
  seasons?: number;
};

export const contentData: ContentItem[] = [
  {
    id: "1",
    title: "Elsbeth",
    banner: require("./dataAssets/contentDetailsElsbeth.png"),
    imageVert: require("./dataAssets/ElsbethVert.png"),
    imageHori: require("./dataAssets/ElsbethHori.png"),
    imageEp: require("./dataAssets/ElsbethEp1.png"),
    description:
      "Elsbeth Tascioni, the astute but unconventional attorney, works with the NYPD to catch New York's most well-heeled murderers utilizing her unique point of view.",
    year: "2025",
    genre: "Series",
    country: "England",
    seasons: 1,
  },
  {
    id: "2",
    title: "Happy Gilmore",
    banner: require("./dataAssets/contentDetailsHappy.png"),
    imageVert: require("./dataAssets/HappyGilVert.png"),
    imageHori: require("./dataAssets/HappyGilHori.png"),
    imageEp: null,
    description:
      "Happy Gilmore is a sports comedy about an unsuccessful hockey player turned golfer.",
    year: "1996",
    genre: "Comedy",
    country: "USA",
    seasons: 1,
  },
  {
    id: "3",
    title: "Idol",
    banner: require("./dataAssets/contentDetailsIdol.png"),
    imageVert: require("./dataAssets/IdolVert.png"),
    imageHori: require("./dataAssets/IdolHori.png"),
    imageEp: null,
    description:
      "A gripping reality competition series searching for the next great singing sensation.",
    year: "2025",
    genre: "Reality TV",
    country: "Sweden",
    seasons: 5,
  },
  {
    id: "4",
    title: "Pets",
    banner: require("./dataAssets/contentDetailsPets.png"),
    imageVert: require("./dataAssets/PetsVert.png"),
    imageHori: require("./dataAssets/PetsHori.png"),
    imageEp: null,
    description:
      "Max, a pet dog, is not very pleased when his master brings home another dog named Duke. However, they set aside their differences after they learn their owner is in danger.",
    year: "2016",
    genre: "Family",
    country: "USA",
    seasons: 1,
  },
  {
    id: "5",
    title: "Survivor",
    banner: require("./dataAssets/contentDetailsSurvivor.png"),
    imageVert: require("./dataAssets/SurvivorVert.png"),
    imageHori: require("./dataAssets/SurvivorHori.png"),
    imageEp: null,
    description:
      "A competitive reality show where contestants battle survival challenges in remote locations.",
    year: "2000",
    genre: "Reality TV",
    country: "USA",
    seasons: 40,
  },
  {
    id: "6",
    title: "The Pitt",
    banner: require("./dataAssets/contentDetailsThePitt.png"),
    imageVert: require("./dataAssets/ThePittVert.png"),
    imageHori: require("./dataAssets/ThePittHori.png"),
    imageEp: null,
    description:
      "A realistic examination of the challenges facing healthcare workers in America as seen through the lens of the frontline heroes working in a modern-day hospital in Pittsburgh, Pennsylvania.",
    year: "2025",
    genre: "Drama",
    country: "USA",
    seasons: 2,
  },
  {
    id: "7",
    title: "The Tonight Show",
    banner: require("./dataAssets/contentDetailsTonight.png"),
    imageVert: require("./dataAssets/TonightShowVert.png"),
    imageHori: require("./dataAssets/TonightShowHori.png"),
    imageEp: null,
    description:
      "The iconic late-night talk show featuring celebrity interviews, comedy, and musical performances.",
    year: "1954",
    genre: "Talk Show",
    country: "USA",
    seasons: 70,
  },
  {
    id: "8",
    title: "True Detective",
    banner: require("./dataAssets/contentDetailsTrueDet.png"),
    imageVert: require("./dataAssets/TrueDetVert.png"),
    imageHori: require("./dataAssets/TrueDetHori.png"),
    imageEp: null,
    description:
      "An anthology crime drama series with complex mysteries and dark atmospheric storytelling.",
    year: "2014",
    genre: "Crime Drama",
    country: "USA",
    seasons: 4,
  },
];
