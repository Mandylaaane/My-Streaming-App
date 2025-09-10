import React from "react";
import HomeScreen from "../screens/Home/HomeScreen";
import { WatchListProvider } from "../screens/WatchList/WatchListContext";

export default function App() {
  return (
    <WatchListProvider>
      <HomeScreen></HomeScreen>
    </WatchListProvider>
  );
}
