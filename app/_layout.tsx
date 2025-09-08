import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Navbar from "../components/Navbar/Navbar";
import { colors } from "../themes/colors";
import { Slot } from "expo-router";

export default function RootLayout() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.contentContainer}>
        {/* Slot renders the nested screen routes */}
        <Slot />
      </View>
      <Navbar style={styles.navbar} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.background },
  contentContainer: {
    flex: 1, // fill all space except navbar
  },
  navbar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
});
