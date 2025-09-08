import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { colors } from "../../themes/colors";
import ContentCardVertical from "../../components/Cards/ContentCardVertical";

const watchListCardData = [
  { id: "1" },
  { id: "2" },
  { id: "3" },
  { id: "4" },
  { id: "5" },
  { id: "6" },
  { id: "7" },
  { id: "8" },
  { id: "9" },
];

export default function WatchListScreen() {
  const [activeTab, setActiveTab] = useState("Watchlist");

  return (
    <View style={styles.viewContainer}>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.watchListTitle}>
            Your saved content, for your next watch.
          </Text>
        </View>
        <View>
          <FlatList
            data={watchListCardData}
            keyExtractor={(item) => item.id}
            numColumns={3}
            renderItem={({ item }) => <ContentCardVertical title="" />}
            contentContainerStyle={styles.watchListCards}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: colors.background,
  },
  contentContainer: {
    flexDirection: "column",
    paddingHorizontal: 2,
    paddingBottom: 24,
    paddingTop: 20,
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    marginTop: 14,
  },
  tabText: {
    color: colors.primaryTextColor,
    fontWeight: "600",
    fontSize: 16,
    paddingBottom: 6,
  },
  activeTabText: {
    color: "#dd7e25",
    borderBottomWidth: 2,
    borderBottomColor: "#dd7e25",
  },
  textContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  watchListTitle: {
    color: colors.secondaryTextColor,
    fontSize: 16,
  },
  watchListCards: {
    alignItems: "center",
    marginTop: 30,
  },
});
