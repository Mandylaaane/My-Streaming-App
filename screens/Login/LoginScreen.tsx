import React from "react";
import { SafeAreaView, StyleSheet, View, Text, Image } from "react-native";
import { colors } from "../../themes/colors";
import icons from "../../assets/icons/icons";
import Button from "../../components/Common/Button";
import SpecialButton from "../../components/Common/SpecialButton";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../../navigation/routes";

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.loginContent}>
        <View style={styles.iconContainer}>
          <Image source={icons.logoIcon} style={styles.icon} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.loginTitle}>Welcome!</Text>
          <Text style={styles.loginDescript}>
            Log in to discover your next binge watch! StreamLine delivers first
            class entertainment.
          </Text>
        </View>
        <View style={styles.btnsContainer}>
          <SpecialButton title="LOG IN" style={styles.loginBtn}></SpecialButton>
          <Button title="Create account" style={styles.blueBtn}></Button>
          <Button title="Support" style={styles.blueBtn}></Button>
        </View>
      </View>
      <Navbar></Navbar>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.background,
    width: "100%",
    minHeight: "100%",
  },
  loginContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  iconContainer: {
    width: "100%",
    paddingTop: 5,
    paddingRight: 5,
    alignItems: "center",
    marginTop: 50,
  },
  icon: {
    width: 120,
    height: 120,
    margin: 15,
  },
  textContainer: {},
  loginTitle: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 6,
    textAlign: "center",
  },
  loginDescript: {
    color: colors.secondaryTextColor,
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 18,
    textAlign: "center",
    width: 320,
  },
  btnsContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  loginBtn: {},
  blueBtn: {},
  navbarContainer: {
    position: "sticky",
  },
});
