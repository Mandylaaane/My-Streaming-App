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
import { typography } from "../../themes/typography";
import ContentCardHorizontal from "../../components/Cards/ContentCardHorizontal";

const TABS = ["Details", "Episodes", "Watchlist"];

const seasonCardData = [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }];

export default function ContentEpisodeScreen() {
  const [activeTab, setActiveTab] = useState("Episodes");

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.contentContainer}>
        <View style={styles.tabsContainer}>
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
        </View>
        <View style={styles.latestEpContainer}>
          <View>
            <Text style={styles.cardTitle}>Latest episode</Text>
            <ContentCardHorizontal title="" />
          </View>
          <View style={styles.allEpInfo}>
            <Text style={styles.episodeInfo}>Episode 3</Text>
            <Text style={styles.timeInfo}>45 min</Text>
            <Text style={styles.dateInfo}>14 August 2025</Text>
          </View>
        </View>
        <Text style={styles.cardTitle}>Season 1</Text>
        <FlatList
          style={styles.seasonCard}
          data={seasonCardData}
          keyExtractor={(item) => item.id}
          numColumns={1}
          renderItem={({ item }) => <ContentCardHorizontal title="" />}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        />
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
    paddingHorizontal: 24,
    paddingBottom: 24,
    paddingTop: 80,
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
  latestEpContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  allEpInfo: {},
  cardTitle: {
    fontSize: 16,
    fontWeight: "600" as const,
    textTransform: "none" as const,
    color: "#FFFFFF",
    marginLeft: 10,
  },
  latestEpCard: {},
  episodeInfo: {
    color: colors.specialTextColor,
    fontWeight: "600",
  },
  timeInfo: {
    color: colors.secondaryTextColor,
  },
  dateInfo: {
    color: colors.secondaryTextColor,
  },
  seasonCard: {
    flexDirection: "row",
  },
});
