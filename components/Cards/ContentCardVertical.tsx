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
