import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { colors } from "../../themes/colors";
import ContentCardHorizontal from "../../components/Cards/ContentCardHorizontal";
import ContentCardHorizInfo from "../../components/Cards/ContentCardHorizInfo";

const seasonCardData = [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }];

export default function ContentEpisodeScreen() {
  return (
    <View>
      <View style={styles.contentContainer}>
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
        <ScrollView contentContainerStyle={styles.seasonCards}>
          {seasonCardData.map((item) => (
            <ContentCardHorizInfo key={item.id} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
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
    marginLeft: 8,
  },
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
  seasonCards: {
    paddingHorizontal: 16,
  },
});
