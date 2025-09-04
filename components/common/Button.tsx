import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { colors } from "../../themes/colors";
import icons from "../../assets/icons/icons";

type ButtonProps = {
  title: string;
  style?: object;
  onPress?: () => void;
};

export default function Button({ title, style, onPress }: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start", // MAKES IT STAY THE SIZE, NOT ADAPTING TO PARENT COMPONENT
    backgroundColor: colors.button,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
    margin: 4,
  },
  buttonText: {
    color: colors.primaryTextColor,
    fontSize: 14,
    fontWeight: "500",
  },
});
