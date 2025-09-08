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

const CARD_WIDTH = 160;
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
