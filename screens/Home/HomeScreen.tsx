import React, { useContext } from "react";
import {
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
import { contentData } from "../../data/contentData";
import { ContentItem } from "../../data/contentData";
import { useRouter } from "expo-router";
import { WatchListContext } from "../../screens/WatchList/WatchListContext";
import Toast from "react-native-toast-message";

export default function HomeScreen() {
  const router = useRouter();
  const { toggleWatchListItem, watchList } = useContext(WatchListContext);

  const handleAddToWatchList = (item: ContentItem) => {
    toggleWatchListItem(item);
    Toast.show({
      type: "success",
      text1: "Successfully added",
      position: "top",
      visibilityTime: 2000,
    });
  };

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
          <View style={styles.bannerTextContainer}>
            <Text style={styles.elsbethTitle}>Elsbeth</Text>
            <Text style={styles.elsbethDescription}>
              The odd but very intelligent lawyer solves crimes.
            </Text>
          </View>
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
                onPress={() =>
                  router.push({
                    pathname: "/contentDetails",
                    params: { id: "1" },
                  })
                }
              ></Button>
              <Button
                title="Add to watchlist"
                style={styles.blueBtn}
                onPress={() =>
                  handleAddToWatchList(contentData.find((c) => c.id === "1")!)
                }
              ></Button>
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.browseContainer}>
        <View style={styles.browseRow}>
          <View style={styles.titleRow}>
            <Text style={styles.cardTitle}>Trending now</Text>
          </View>
          <FlatList
            horizontal
            data={contentData}
            keyExtractor={(item) => item.id}
            numColumns={1}
            renderItem={({ item }) => (
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
            )}
            contentContainerStyle={{ paddingHorizontal: 16 }}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.browseRow}>
          <View style={styles.titleRow}>
            <Text style={styles.cardTitle}>New</Text>
          </View>
          <FlatList
            horizontal
            data={contentData}
            keyExtractor={(item) => item.id}
            numColumns={1}
            renderItem={({ item }) => (
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
            )}
            contentContainerStyle={{ paddingHorizontal: 16 }}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.browseRow}>
          <View style={styles.titleRow}>
            <Text style={styles.cardTitle}>Coming soon</Text>
          </View>
          <FlatList
            horizontal
            data={contentData}
            keyExtractor={(item) => item.id}
            numColumns={1}
            renderItem={({ item }) => (
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
            )}
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
    width: "100%",
    maxHeight: 530,
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
    justifyContent: "center",
    alignItems: "center",
    marginTop: 280,
    marginBottom: 5,
  },
  bannerTextContainer: {
    alignItems: "center",
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
    marginTop: 20,
    marginBottom: 20,
  },
  browseRow: {
    alignItems: "center",
    marginTop: 10,
  },
  titleRow: {
    width: "100%",
    alignItems: "flex-start",
    paddingLeft: 20,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    textTransform: "none",
    color: "#FFFFFF",
  },
});
