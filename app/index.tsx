import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
} from "react-native";
import { colors } from "../themes/colors";
import icons from "../assets/icons/icons";
import Navbar from "../components/Navbar/Navbar";
import InputField from "../components/Common/InputField";
import Button from "../components/Common/Button";
import SpecialButton from "../components/Common/SpecialButton";
import ContentCardSearch from "../components/Cards/ContentCardSearch";

export default function Page() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.iconContainer}>
        <Image source={icons.profileIcon} style={styles.icon} />
      </View>
      <View style={styles.container}>
        <InputField></InputField>
        <ContentCardSearch></ContentCardSearch>
        <Navbar></Navbar>
        {/* PROFILE ICON
            HOME: img, title, descript.
            BUTTONS
            TRENDING NOW
            NAVBAR
         */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  icon: {
    width: 35,
    height: 35,
    margin: 20,
    resizeMode: "contain",
  },
  container: {},
});
