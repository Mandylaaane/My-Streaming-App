import React from "react";
import { Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../../themes/colors";

type ContentCardVerticalProps = {
  title: string;
  image: any;
  onPress?: () => void;
};

export default function ContentCardVertical({
  title,
  image,
  onPress,
}: ContentCardVerticalProps) {
  return (
    <TouchableOpacity style={styles.contentCard} onPress={onPress}>
      <Image source={image} style={styles.image} />
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
    overflow: "hidden",
  },
  contentCardTitle: {
    color: colors.secondaryTextColor,
    fontSize: 16,
    marginTop: 120,
    marginLeft: 10,
  },
  image: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT, // * 0.8, use ~80% height for image, to show title/other info
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    resizeMode: "cover", // cover scales and crops as needed
  },
});
