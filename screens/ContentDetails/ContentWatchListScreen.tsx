import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { colors } from "../../themes/colors";
import ContentCardVertical from "../../components/Cards/ContentCardVertical";

const TABS = ["Details", "Episodes", "Watchlist"];

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

export default function ContentWatchListScreen() {
  const [activeTab, setActiveTab] = useState("Watchlist");

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.contentContainer}>
        {/* <View style={styles.tabsContainer}>
          {TABS.map((tab) => (
            <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab && styles.activeTabText,
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View> */}
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.background,
    width: "100%",
    minHeight: "100%",
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
