import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ListRenderItemInfo,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../themes/colors";
import ContentCardVertical from "../../components/Cards/ContentCardVertical";
import { WatchListContext } from "./WatchListContext";
import { ContentItem } from "../../data/contentData";
import { useRouter } from "expo-router";

export default function WatchListScreen() {
  // Use global context for watchlist and toggle function
  const { watchList, toggleWatchListItem } = useContext(WatchListContext);
  const router = useRouter();

  console.log("WatchListScreen watchList:", watchList);

  const renderCard = ({ item }: ListRenderItemInfo<ContentItem>) => (
    <View>
      <ContentCardVertical
        title={item.title}
        image={item.imageVert}
        onPress={() =>
          router.push({
            pathname: "/contentDetails",
            params: { id: item.id },
          })
        }
      />
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => toggleWatchListItem(item)}
      >
        <Text style={styles.removeButtonText}>Remove?</Text>
      </TouchableOpacity>
    </View>
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
            extraData={watchList}
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
  removeButton: {
    backgroundColor: colors.specialButton,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginTop: 8,
    borderRadius: 4,
    alignSelf: "center",
  },
  removeButtonText: {
    color: "white",
    fontWeight: "600",
  },
});

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
