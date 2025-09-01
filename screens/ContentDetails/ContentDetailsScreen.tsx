import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ImageBackground,
} from "react-native";
import { colors } from "../../themes/colors";
import icons from "../../assets/icons/icons";

export default function ContentDetailsScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={require("../../assets/images/contentDetailsElsbeth.png")}
        style={styles.bannerBackground}
        resizeMode="cover"
      ></ImageBackground>
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
    minHeight: 300,
    paddingBottom: 5,
  },
});
