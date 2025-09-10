import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ListRenderItemInfo,
} from "react-native";
import { colors } from "../../themes/colors";
import ContentCardVertical from "../../components/Cards/ContentCardVertical";
import { WatchListContext } from "./WatchListContext";
import { ContentItem } from "../../data/contentData";

export default function WatchListScreen() {
  // Use global context for watchlist and toggle function
  const { watchList, toggleWatchListItem } = useContext(WatchListContext);

  const renderCard = ({ item }: ListRenderItemInfo<ContentItem>) => (
    <ContentCardVertical
      title={item.title}
      image={item.imageVert}
      onPress={() => toggleWatchListItem(item)}
    />
  );

  return (
    <View style={styles.viewContainer}>
      <View style={styles.contentContainer}>
        <Text style={styles.watchListTitle}>
          Your saved content, for your next watch.
        </Text>

        {watchList.length === 0 ? (
          <Text style={styles.emptyText}>Your watchlist is empty.</Text>
        ) : (
          <FlatList
            data={watchList}
            keyExtractor={(item) => item.id}
            numColumns={3}
            renderItem={renderCard}
            contentContainerStyle={styles.watchListCards}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 20,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  watchListTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
    color: colors.primaryTextColor,
  },
  emptyText: {
    fontStyle: "italic",
    color: colors.secondaryTextColor,
    textAlign: "center",
    marginBottom: 20,
  },
  watchListCards: {
    marginBottom: 24,
  },
});

// SECOND VERSION; (may use, trying new)

// import React, { useState, useEffect, } from "react";
// import { StyleSheet, View, Text, FlatList } from "react-native";
// import { colors } from "../../themes/colors";
// import ContentCardVertical from "../../components/Cards/ContentCardVertical";
// import { contentData, ContentItem } from "../../data/contentData";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const WATCHLIST_KEY = "@watchlist";

// export default function WatchListScreen() {
//   const [watchList, setWatchList] = useState<ContentItem[]>([]);

//   useEffect(() => {
//     (async () => {
//       const storedList = await loadWatchList();
//       setWatchList(storedList);
//     })();
//   }, []);

//   useEffect(() => {
//     saveWatchList(watchList);
//   }, [watchList]);

//   const saveWatchList = async (list: ContentItem[]) => {
//     try {
//       await AsyncStorage.setItem(WATCHLIST_KEY, JSON.stringify(list));
//     } catch (e) {
//       console.error("Save error", e);
//     }
//   };

// const loadWatchList = async (): Promise<ContentItem[]> => {
//   try {
//     const json = await AsyncStorage.getItem(WATCHLIST_KEY);
//     return json ? JSON.parse(json) : [];
//   } catch (e) {
//     console.error("Load error", e);
//     return [];
//   }
// };

// Add or remove item by id
// const toggleWatchListItem = (item: ContentItem) => {
//   const exists = watchList.find((w) => w.id === item.id);
//   if (exists) {
//     setWatchList(watchList.filter((w) => w.id !== item.id)); // remove
//   } else {
//     setWatchList([...watchList, item]); // add
//   }
// };

// const renderCard = ({ item }: { item: ContentItem }) => (
//   <ContentCardVertical
//     title={item.title}
//     image={item.imageVert}
//     onPress={() => toggleWatchListItem(item)}
//   />
// );

// return (
//   <View style={styles.viewContainer}>
//     <View style={styles.contentContainer}>
//       <Text style={styles.watchListTitle}>
//         Your saved content, for your next watch.
//       </Text>

//       {watchList.length === 0 ? (
//         <Text style={styles.emptyText}>Your watchlist is empty.</Text>
//       ) : (
//         <FlatList
//           data={watchList}
//           keyExtractor={(item) => item.id}
//           numColumns={3}
//           renderItem={renderCard}
//           contentContainerStyle={styles.watchListCards}
//         />
//       )}

{
  /* Optionally: show browse list to add items to watchlist */
}
{
  /* <Text style={styles.browseTitle}>Browse content</Text>
        <FlatList
          data={contentData}
          keyExtractor={(item) => item.id}
          numColumns={3}
          renderItem={({ item }) => (
            <ContentCardVertical
              title={item.title}
              image={item.imageVert}
              onPress={() => toggleWatchListItem(item)}
            />
          )}
        /> */
}
{
  /* </View>
    </View>
  );
} */
}

// const styles = StyleSheet.create({
//   viewContainer: {
//     flex: 1,
//     backgroundColor: colors.background,
//     paddingTop: 20,
//   },
//   contentContainer: {
//     flex: 1,
//     paddingHorizontal: 16,
//   },
//   watchListTitle: {
//     fontSize: 18,
//     fontWeight: "600",
//     marginBottom: 12,
//     color: colors.primaryTextColor,
//   },
//   emptyText: {
//     fontStyle: "italic",
//     color: colors.secondaryTextColor,
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   watchListCards: {
//     marginBottom: 24,
//   },
//   browseTitle: {
//     fontSize: 16,
//     fontWeight: "600",
//     marginVertical: 12,
//     color: colors.primaryTextColor,
//   },
// });

// FIRST STATIC VERSION _ PROBABLY NOT USING

// const watchListCardData = [
//   { id: "1" },
//   { id: "2" },
//   { id: "3" },
//   { id: "4" },
//   { id: "5" },
//   { id: "6" },
//   { id: "7" },
//   { id: "8" },
//   { id: "9" },
// ];

// export default function WatchListScreen() {
//   const [activeTab, setActiveTab] = useState("Watchlist");

//   return (
//     <View style={styles.viewContainer}>
//       <View style={styles.contentContainer}>
//         <View style={styles.textContainer}>
//           <Text style={styles.watchListTitle}>
//             Your saved content, for your next watch.
//           </Text>
//         </View>
//         <View>
//           <FlatList
//             data={watchListCardData}
//             keyExtractor={(item) => item.id}
//             numColumns={3}
//             renderItem={({ item }) => <ContentCardVertical title="" />}
//             contentContainerStyle={styles.watchListCards}
//           />
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   viewContainer: {
//     backgroundColor: colors.background,
//   },
//   contentContainer: {
//     flexDirection: "column",
//     paddingHorizontal: 2,
//     paddingBottom: 24,
//     paddingTop: 20,
//   },
//   tabsContainer: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     marginBottom: 20,
//     marginTop: 14,
//   },
//   tabText: {
//     color: colors.primaryTextColor,
//     fontWeight: "600",
//     fontSize: 16,
//     paddingBottom: 6,
//   },
//   activeTabText: {
//     color: "#dd7e25",
//     borderBottomWidth: 2,
//     borderBottomColor: "#dd7e25",
//   },
//   textContainer: {
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   watchListTitle: {
//     color: colors.secondaryTextColor,
//     fontSize: 16,
//   },
//   watchListCards: {
//     alignItems: "center",
//     marginTop: 30,
//   },
// });
