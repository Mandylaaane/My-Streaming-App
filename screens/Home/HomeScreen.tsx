import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../themes/colors";
import icons from "../../assets/icons/icons";
import Button from "../../components/Common/Button";
import SpecialButton from "../../components/Common/SpecialButton";
import Navbar from "../../components/Navbar/Navbar";
import ContentCardVertical from "../../components/Cards/ContentCardVertical";
import { typography } from "../../themes/typography";
import { useNavigation } from "@react-navigation/native";

const screenHeight = Dimensions.get("window").height;

const contentCardData = [{ id: "1" }, { id: "2" }, { id: "3" }];

const browseCardData = [
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

// FIX navbar being sticky.

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <ImageBackground
          source={require("../../assets/images/homePageElsbeth.png")}
          style={styles.bannerBackground}
          resizeMode="cover"
        >
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Image source={icons.profileIcon} style={styles.icon} />
            </TouchableOpacity>
          </View>

          <View style={styles.bannerContent}>
            <Text style={styles.elsbethTitle}>Elsbeth</Text>
            <Text style={styles.elsbethDescription}>
              The odd but very intelligent lawyer solves crimes.
            </Text>
            <View style={styles.btnsContainer}>
              <SpecialButton
                title="WATCH NOW"
                style={styles.watchNowBtn}
              ></SpecialButton>
              <View style={styles.blueBtnsContainer}>
                <Button title="Read more" style={styles.blueBtn}></Button>
                <Button
                  title="Add to watch list"
                  style={styles.blueBtn}
                ></Button>
              </View>
            </View>
          </View>
        </ImageBackground>
        <Text style={typography.mediumTitle}>Trending now</Text>
        <FlatList
          style={styles.trendCards}
          data={contentCardData}
          keyExtractor={(item) => item.id}
          numColumns={3}
          renderItem={({ item }) => <ContentCardVertical title="" />}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        />
        {/* <FlatList
          style={styles.browseCards}
          data={browseCardData}
          keyExtractor={(item) => item.id}
          numColumns={3}
          renderItem={({ item }) => <ContentCardVertical />}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        /> */}
        <Navbar></Navbar>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.background,
  },
  bannerBackground: {
    flex: 1,
    width: "100%",
    minHeight: 500,
    paddingBottom: 5,
  },
  iconContainer: {
    width: "100%",
    paddingTop: 5,
    paddingRight: 5,
    alignItems: "flex-end",
  },
  icon: {
    width: 35,
    height: 35,
    margin: 15,
    resizeMode: "contain",
  },
  bannerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200,
    marginBottom: 12,
  },
  elsbethTitle: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 6,
  },
  elsbethDescription: {
    color: colors.secondaryTextColor,
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 18,
    textAlign: "center",
  },
  btnsContainer: {
    justifyContent: "center", // Vertical centering inside this container
    alignItems: "center", // Horizontal centering
    marginVertical: 20,
  },
  watchNowBtn: {
    alignSelf: "center",
    marginBottom: 10,
  },
  blueBtnsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 2,
  },
  blueBtn: {
    marginHorizontal: 5,
  },

  trendCards: {},
  browseCards: {},
});
