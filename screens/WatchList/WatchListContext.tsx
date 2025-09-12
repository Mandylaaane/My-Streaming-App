import React, { createContext, useState, useEffect, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ContentItem } from "../../data/contentData";

const WATCHLIST_KEY = "@watchlist";

type WatchListContextType = {
  watchList: ContentItem[];
  toggleWatchListItem: (item: ContentItem) => void;
};

export const WatchListContext = createContext<WatchListContextType>({
  watchList: [],
  toggleWatchListItem: () => {},
});

export const WatchListProvider = ({ children }: { children: ReactNode }) => {
  const [watchList, setWatchList] = useState<ContentItem[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const json = await AsyncStorage.getItem(WATCHLIST_KEY);
        if (json) {
          const savedList = JSON.parse(json);
          console.log("Loaded watchlist from AsyncStorage:", savedList);
          setWatchList(savedList);
        } else {
          console.log("No watchlist found in AsyncStorage.");
        }
      } catch (e) {
        console.error("Failed to load watchlist from AsyncStorage:", e);
      }
    })();
  }, []);

  useEffect(() => {
    console.log("Saving watchlist to AsyncStorage:", watchList);
    AsyncStorage.setItem(WATCHLIST_KEY, JSON.stringify(watchList)).catch(
      (e) => {
        console.error("Failed to save watchlist to AsyncStorage:", e);
      }
    );
  }, [watchList]);

  const toggleWatchListItem = (item: ContentItem) => {
    console.log("Toggling watchlist item:", item);
    const exists = watchList.find((w) => w.id === item.id);
    if (exists) {
      setWatchList(watchList.filter((w) => w.id !== item.id));
    } else {
      setWatchList([...watchList, item]);
    }
  };

  return (
    <WatchListContext.Provider value={{ watchList, toggleWatchListItem }}>
      {children}
    </WatchListContext.Provider>
  );
};
