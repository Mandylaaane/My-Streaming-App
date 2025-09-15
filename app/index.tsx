import React from "react";
import HomeScreen from "../screens/Home/HomeScreen";
import { WatchListProvider } from "../screens/WatchList/WatchListContext";
// import { MenuProvider } from "react-native-popup-menu";
// TEST: add </MenuProvider> wrapped around HomeScreen for watchList popup options menu. If you want.

export default function App() {
  return (
    <WatchListProvider>
      <HomeScreen></HomeScreen>
    </WatchListProvider>
  );
}
