import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../../themes/colors";

type ContentCardHorizontalProps = {
  title: string;
  onPress?: () => void;
};

export default function ContentCardHorizontal({
  title,
  onPress,
}: ContentCardHorizontalProps) {
  return (
    <TouchableOpacity style={styles.contentCard} onPress={onPress}>
      <Text style={styles.contentCardTitle}>{title}</Text>
    </TouchableOpacity>
  );
}

const CARD_WIDTH = 160; // adjust to your design
const CARD_HEIGHT = 100;

const styles = StyleSheet.create({
  contentCard: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: colors.contentCard,
    borderRadius: 12,
    margin: 8,
    justifyContent: "center",
    paddingLeft: 12,
  },
  contentCardTitle: {
    color: colors.secondaryTextColor,
    fontSize: 16,
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
//       renderItem={({ item }) => <ContentCardSearch title={item.title} />}
//       numColumns={2}
//       contentContainerStyle={{ padding: 16 }}
//     />
//   );
// }
