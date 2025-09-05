import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
} from "react-native";
import { colors } from "../../themes/colors";
import icons from "../../assets/icons/icons";
import Button from "../../components/Common/Button";
import SpecialButton from "../../components/Common/SpecialButton";
import Navbar from "../../components/Navbar/Navbar";

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.loginContent}>
        <View style={styles.iconContainer}>
          <Image source={icons.logoWhite} style={styles.icon} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.loginTitle}>Welcome!</Text>
          <Text style={styles.loginDescript}>
            Log in to discover your next binge watch! StreamLine delivers first
            class entertainment.
          </Text>
        </View>
        <View style={styles.btnsContainer}>
          <View>
            <SpecialButton
              title="LOG IN"
              style={styles.loginBtn}
            ></SpecialButton>
          </View>
          <View>
            <Button title="Create account" style={styles.blueBtn}></Button>
          </View>
          <View>
            <Button title="Support" style={styles.blueBtn}></Button>
          </View>
        </View>
      </View>
      <Navbar
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10, // make sure navbar stays above content
        }}
      />
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
  },
  iconContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 5,
  },
  icon: {
    width: 150,
    height: 120,
    marginBottom: 50,
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
  },
  loginBtn: {},
  blueBtn: {},
});
