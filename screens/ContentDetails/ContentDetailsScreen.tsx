import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { colors } from "../../themes/colors";
import ContentEpisodeScreen from "./ContentEpisodeScreen";
import icons from "@/assets/icons/icons";
import { useRouter } from "expo-router";

const router = useRouter();

const TABS = ["Details", "Episodes"];

export default function ContentDetailsScreen() {
  const [activeTab, setActiveTab] = useState("Details");

  return (
    <ScrollView style={styles.viewContainer}>
      <ImageBackground
        source={require("../../assets/images/contentDetailsElsbeth.png")}
        style={styles.bannerImg}
        resizeMode="cover"
      >
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => router.push("/")}>
            <Image source={icons.crossIcon} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.elsbethTitle}>Elsbeth</Text>
        </View>
      </ImageBackground>

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

        {activeTab === "Episodes" && <ContentEpisodeScreen />}

        {activeTab === "Details" && (
          <>
            <View style={styles.descriptContent}>
              <Text style={styles.description}>
                Elsbeth Tascioni, the astute but unconventional attorney, works
                with the NYPD to catch New York's most well-heeled murderers
                utilizing her unique point of view. "Elsbeth" is based on the
                character featured in "The Good Wife" and "The Good Fight."
              </Text>
            </View>
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
          </>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: colors.background,
  },
  bannerImg: {
    width: 400,
    minHeight: 320,
  },
  iconContainer: {
    width: "100%",
    paddingTop: 5,
    paddingRight: 5,
  },
  icon: {
    width: 35,
    height: 35,
    margin: 15,
    resizeMode: "contain",
  },
  textContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 175,
  },
  elsbethTitle: {
    color: "#fff",
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 2,
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
    fontSize: 18,
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
  navbar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
});
