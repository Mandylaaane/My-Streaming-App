import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../themes/colors";

const TABS = ["Details", "Episodes", "Watchlist"];

export default function ContentDetailsScreen() {
  const [activeTab, setActiveTab] = useState("Details");

  return (
    <SafeAreaView style={styles.safeArea}>
      <Image
        source={require("../../assets/images/contentDetailsElsbeth.png")}
        style={styles.bannerImg}
        resizeMode="cover"
      ></Image>
      <View style={styles.contentContainer}>
        {/* Tabs */}
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

        {/* Description */}
        <View style={styles.descriptContent}>
          <Text style={styles.description}>
            Elsbeth Tascioni, the astute but unconventional attorney, works with
            the NYPD to catch New York's most well-heeled murderers utilizing
            her unique point of view. "Elsbeth" is based on the character
            featured in "The Good Wife" and "The Good Fight."
          </Text>
        </View>
        {/* Details */}
        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Genre</Text>
            <Text style={styles.detailValue}>Series</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Year</Text>
            <Text style={styles.detailValue}>2025</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Country</Text>
            <Text style={styles.detailValue}>England</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Seasons</Text>
            <Text style={styles.detailValue}>1</Text>
          </View>
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
  bannerImg: {
    width: "100%",
    height: 280,
    justifyContent: "center",
  },
  contentContainer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
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
  descriptContent: {
    borderBottomWidth: 1,
    borderBottomColor: colors.secondaryTextColor,
  },
  description: {
    color: colors.secondaryTextColor,
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 24,
  },
  detailsContainer: {
    marginTop: 30,
  },
  detailRow: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  detailLabel: {
    color: "#e28e16",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
  },
  detailValue: {
    color: colors.secondaryTextColor,
    fontSize: 13,
  },
});
