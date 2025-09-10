import React, { useState, useContext } from "react";
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
import Button from "../../components/Common/Button";
import { useRouter, useLocalSearchParams } from "expo-router";
import { contentData } from "../../data/contentData";
import { WatchListContext } from "../WatchList/WatchListContext";

const TABS = ["Details", "Episodes"];

export default function ContentDetailsScreen() {
  const [activeTab, setActiveTab] = useState("Details");
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const content = contentData.find((item) => item.id === id);
  const { toggleWatchListItem, watchList } = useContext(WatchListContext);

  if (!content) {
    return (
      <View style={styles.viewContainer}>
        <Text style={{ color: "red", margin: 20 }}>Content not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.viewContainer}>
      <ImageBackground
        source={content.banner}
        style={styles.bannerImg}
        resizeMode="cover"
      >
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => router.push("/")}>
            <Image source={icons.crossIcon} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.bannerContent}>
          <Text style={styles.elsbethTitle}>{content.title}</Text>
          <View>
            <Button
              title={
                watchList.find((w) => w.id === content.id)
                  ? "Remove from watch list"
                  : "Add to watch list"
              }
              onPress={() => toggleWatchListItem(content)}
              style={styles.blueBtn}
            ></Button>
          </View>
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

        {activeTab === "Episodes" && <ContentEpisodeScreen content={content} />}

        {activeTab === "Details" && (
          <>
            <View style={styles.descriptContent}>
              <Text style={styles.description}>
                {content.description ?? "No description available."}
              </Text>
            </View>
            <View style={styles.detailsContainer}>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Genre</Text>
                <Text style={styles.detailValue}>
                  {content.genre ?? "Unknown"}
                </Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Year</Text>
                <Text style={styles.detailValue}>{content.year ?? "N/A"}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Country</Text>
                <Text style={styles.detailValue}>
                  {content.country ?? "Unknown"}
                </Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Seasons</Text>
                <Text style={styles.detailValue}>{content.seasons ?? "-"}</Text>
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
  bannerContent: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 170,
  },
  elsbethTitle: {
    color: "#fff",
    fontSize: 34,
    fontWeight: "bold",

    marginBottom: 2,
  },
  blueBtn: {},
  contentContainer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    marginTop: 20,
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
