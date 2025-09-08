import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../../themes/colors";

type ContentCardHorizInfoProps = {
  onPress?: () => void;
};

export default function ContentCardHorizInfo({
  onPress,
}: ContentCardHorizInfoProps) {
  return (
    <View style={styles.latestEpContainer}>
      <TouchableOpacity
        style={styles.contentCard}
        onPress={onPress}
      ></TouchableOpacity>
      <View style={styles.textInfo}>
        <Text style={styles.episodeInfo}>Episode #</Text>
        <Text style={styles.timeInfo}>Length</Text>
        <Text style={styles.dateInfo}>Day-Month-Year</Text>
      </View>
    </View>
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
  textInfo: {},
  latestEpContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  episodeInfo: {
    color: colors.specialTextColor,
    fontWeight: "600",
  },
  timeInfo: {
    color: colors.secondaryTextColor,
  },
  dateInfo: {
    color: colors.secondaryTextColor,
  },
});
