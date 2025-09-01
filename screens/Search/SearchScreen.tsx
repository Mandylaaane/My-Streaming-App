import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
} from "react-native";
import { colors } from "../../themes/colors";
import icons from "../../assets/icons/icons";
import InputField from "../../components/Common/InputField";
import ContentCardHorizontal from "../../components/Cards/ContentCardHorizontal";
import Navbar from "../../components/Navbar/Navbar";

const searchCardData = [
  { id: "1" },
  { id: "2" },
  { id: "3" },
  { id: "4" },
  { id: "5" },
  { id: "6" },
  { id: "7" },
  { id: "8" },
];

export default function SearchScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.iconContainer}>
        <Image source={icons.profileIcon} style={styles.icon} />
      </View>
      <View style={styles.discoverContent}>
        <View style={styles.inputContainer}>
          <Text style={styles.discoverTitle}>Discover</Text>
          <InputField
            placeholder="Search"
            style={styles.inputField}
          ></InputField>
        </View>

        <FlatList
          style={styles.searchCards}
          data={searchCardData}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => <ContentCardHorizontal title="" />}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        />
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
  iconContainer: {
    width: "100%",
    paddingTop: 5,
    paddingRight: 5,
    alignItems: "flex-end",
  },
  icon: {
    width: 35,
    height: 35,
    margin: 15,
    resizeMode: "contain",
  },
  discoverContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  inputContainer: {},
  discoverTitle: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 2,
    marginLeft: 12,
    marginTop: 45,
    textAlign: "left",
  },
  inputField: {
    width: 340,
  },
  searchCards: {},
  cardContainer: {},
});
