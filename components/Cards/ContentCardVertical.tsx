import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../../themes/colors";

type ContentCardVerticalProps = {
  title: string;
  onPress?: () => void;
};

export default function ContentCardVertical({
  title,
  onPress,
}: ContentCardVerticalProps) {
  return (
    <TouchableOpacity style={styles.contentCard} onPress={onPress}>
      <Text style={styles.contentCardTitle}>{title}</Text>
    </TouchableOpacity>
  );
}

const CARD_WIDTH = 100;
const CARD_HEIGHT = 150;

const styles = StyleSheet.create({
  contentCard: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: colors.contentCard,
    borderRadius: 12,
    margin: 6,
  },
  contentCardTitle: {
    color: colors.secondaryTextColor,
    fontSize: 16,
    marginTop: 120,
    marginLeft: 10,
  },
});

//TO BE PLACED IN SEARCH PAGE, IMPORT CONTENTCARDSEARCH, THEN WRITE THIS CODE TO MAKE GRID SYSTEM

// const cardCategories = [
//   { id: "1", title: "Movies" },
//   { id: "2", title: "Series" },
//   { id: "3", title: "Kids" },
//   { id: "4", title: "Comedy" },
//   { id: "5", title: "Documentary" },
//   { id: "6", title: "Sports" },
//   { id: "7", title: "Lifestyle" },
//   { id: "8", title: "Talkshows" },
// ];

// export default function CategoryGrid() {
//   return (
//     <FlatList
//       data={categories}
//       keyExtractor={(item) => item.id}
//       renderItem={({ item }) => <ContentCardVertical title={item.title} />}
//       numColumns={2}
//       contentContainerStyle={{ padding: 16 }}
//     />
//   );
// }
