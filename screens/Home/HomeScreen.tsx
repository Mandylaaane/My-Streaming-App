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
  TouchableOpacity,
} from "react-native";
import { colors } from "../../themes/colors";
import icons from "../../assets/icons/icons";
import Button from "../../components/Common/Button";
import SpecialButton from "../../components/Common/SpecialButton";
import ContentCardVertical from "../../components/Cards/ContentCardVertical";
import { useRouter } from "expo-router";

const browseCardData = [
  { id: "1" },
  { id: "2" },
  { id: "3" },
  { id: "4" },
  { id: "5" },
  { id: "6" },
];

export default function HomeScreen() {
  const router = useRouter();
  return (
    <ScrollView>
      <ImageBackground
        source={require("../../assets/images/homePageElsbeth.png")}
        style={styles.bannerBackground}
        resizeMode="cover"
      >
        <View style={styles.iconContainer}>
          <View style={styles.logoContainer}>
            <Image source={icons.logoWhite} style={styles.logoIcon} />
          </View>
          <TouchableOpacity onPress={() => router.push("/login")}>
            <Image source={icons.profileIcon} style={styles.profileIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.bannerContent}>
          <Text style={styles.elsbethTitle}>Elsbeth</Text>
          <Text style={styles.elsbethDescription}>
            The odd but very intelligent lawyer solves crimes.
          </Text>
          <View style={styles.btnsContainer}>
            <View>
              <SpecialButton
                title="WATCH NOW"
                style={styles.watchNowBtn}
              ></SpecialButton>
            </View>
            <View style={styles.blueBtnsContainer}>
              <Button
                title="Read more"
                style={styles.blueBtn}
                onPress={() => router.push("/contentDetails")}
              ></Button>
              <Button
                title="Add to watch list"
                style={styles.blueBtn}
                onPress={() => router.push("/watchList")}
              ></Button>
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.browseContainer}>
        <View style={styles.browseRow}>
          <View>
            <Text style={styles.cardTitle}>Trending now</Text>
          </View>
          <FlatList
            horizontal
            data={browseCardData}
            keyExtractor={(item) => item.id}
            numColumns={1}
            renderItem={({ item }) => <ContentCardVertical title="(title)" />}
            contentContainerStyle={{ paddingHorizontal: 16 }}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.browseRow}>
          <View>
            <Text style={styles.cardTitle}>New</Text>
          </View>
          <FlatList
            horizontal
            data={browseCardData}
            keyExtractor={(item) => item.id}
            numColumns={1}
            renderItem={({ item }) => <ContentCardVertical title="(title)" />}
            contentContainerStyle={{ paddingHorizontal: 16 }}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.browseRow}>
          <View>
            <Text style={styles.cardTitle}>Coming soon</Text>
          </View>
          <FlatList
            horizontal
            data={browseCardData}
            keyExtractor={(item) => item.id}
            numColumns={1}
            renderItem={({ item }) => <ContentCardVertical title="(title)" />}
            contentContainerStyle={{ paddingHorizontal: 16 }}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
    flexDirection: "row",
    alignItems: "flex-start",
  },
  logoContainer: {},
  logoIcon: {
    width: 50,
    height: 50,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 255,
    resizeMode: "contain",
  },
  profileIcon: {
    width: 35,
    height: 35,
    margin: 15,
    resizeMode: "contain",
  },
  bannerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 240,
    marginBottom: 5,
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
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
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
  browseContainer: {
    marginTop: 50,
  },
  browseRow: {
    alignItems: "center",
    marginTop: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    textTransform: "none",
    color: "#FFFFFF",
  },
});

// FIX navbar being sticky.
