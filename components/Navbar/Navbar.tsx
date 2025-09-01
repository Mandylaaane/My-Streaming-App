import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../themes/colors";
import { typography } from "../../themes/typography";
import icons from "../../assets/icons/icons";

export default function Navbar() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <View style={styles.iconContainer}>
          <Image source={icons.homeIcon} style={styles.icon} />
          <Text style={styles.text}>Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Search")}>
        <View style={styles.iconContainer}>
          <Image source={icons.searchIcon} style={styles.icon} />
          <Text style={styles.text}>Search</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("WatchList")}>
        <View style={styles.iconContainer}>
          <Image source={icons.watchlistIcon} style={styles.icon} />
          <Text style={styles.text}>Watchlist</Text>
        </View>
      </TouchableOpacity>
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
    position: "sticky",
  },
  iconContainer: {
    flexDirection: "column", // Icon and text stacked vertically
    alignItems: "center",
  },
  icon: {
    width: 28,
    height: 28,
    marginBottom: 3,
    resizeMode: "contain",
  },
  text: typography.navBarText,
});
