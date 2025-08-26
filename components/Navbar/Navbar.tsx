import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { colors } from "../../themes/colors";
import icons from "../../assets/icons/icons";

export default function Navbar() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image source={icons.homeIcon} style={styles.icon} />
        <Text style={styles.text}>Home</Text>
      </View>
      <View style={styles.iconContainer}>
        <Image source={icons.searchIcon} style={styles.icon} />
        <Text style={styles.text}>Search</Text>
      </View>
      <View style={styles.iconContainer}>
        <Image source={icons.watchlistIcon} style={styles.icon} />
        <Text style={styles.text}>Watchlist</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Icons arranged horizontally
    backgroundColor: colors.background,
    padding: 10,
    justifyContent: "space-around",
    alignItems: "center",
  },
  iconContainer: {
    flexDirection: "column", // Icon and text stacked vertically
    alignItems: "center",
  },
  icon: {
    width: 28,
    height: 28,
    resizeMode: "contain",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 6,
  },
});
