import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../themes/colors";
import icons from "../../assets/icons/icons";
import InputField from "../../components/Common/InputField";
import ContentCardHorizontal from "../../components/Cards/ContentCardHorizontal";
import { contentData } from "../../data/contentData";
import { useRouter } from "expo-router";

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [filteredData, setFilteredData] = React.useState(contentData);
  const router = useRouter();

  const handleSearch = (text: string) => {
    setSearchQuery(text);

    const filtered = contentData.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );

    setFilteredData(filtered);
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.iconContainer}>
        {/* <Image source={icons.profileIcon} style={styles.icon} /> */}
        <TouchableOpacity onPress={() => router.push("/login")}>
          <Image source={icons.profileIcon} style={styles.profileIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.discoverContent}>
        <View style={styles.inputContainer}>
          <Text style={styles.discoverTitle}>Discover</Text>
          <InputField
            placeholder="Search"
            style={styles.inputField}
            value={searchQuery}
            onChangeText={handleSearch}
          ></InputField>
        </View>

        <FlatList
          style={styles.searchCards}
          data={filteredData}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => (
            <ContentCardHorizontal image={item.imageHori} />
          )}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        />
      </View>
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
  profileIcon: {
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
    marginBottom: 20,
  },
  searchCards: {},
  cardContainer: {},
});
