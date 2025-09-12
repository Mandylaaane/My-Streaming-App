import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { useRouter } from "expo-router";
import { typography } from "../../themes/typography";
import icons from "../../assets/icons/icons";
import { LinearGradient } from "expo-linear-gradient";

interface NavbarProps {
  style?: ViewStyle | ViewStyle[];
}

export default function Navbar({ style }: NavbarProps) {
  const router = useRouter();

  return (
    <LinearGradient
      colors={["#111C39", "#293E74"]}
      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: 0 }}
      style={styles.container}
    >
      <TouchableOpacity onPress={() => router.push("/")}>
        <View style={styles.iconContainer}>
          <Image source={icons.homeIcon} style={styles.icon} />
          <Text style={styles.text}>Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/search")}>
        <View style={styles.iconContainer}>
          <Image source={icons.searchIcon} style={styles.icon} />
          <Text style={styles.text}>Search</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/watchList")}>
        <View style={styles.iconContainer}>
          <Image source={icons.watchlistIcon} style={styles.icon} />
          <Text style={styles.text}>Watchlist</Text>
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-around",
    alignItems: "center",
    position: "sticky",
  },
  iconContainer: {
    flexDirection: "column",
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
