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
      const json = await AsyncStorage.getItem(WATCHLIST_KEY);
      if (json) {
        setWatchList(JSON.parse(json));
      }
    })();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(WATCHLIST_KEY, JSON.stringify(watchList));
  }, [watchList]);

  const toggleWatchListItem = (item: ContentItem) => {
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
