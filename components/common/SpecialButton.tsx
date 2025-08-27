import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { colors } from "../../themes/colors";
import icons from "../../assets/icons/icons";

type SpecialButtonProps = {
  title: string;
};

export default function SpecialButton({ title }: SpecialButtonProps) {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start", // MAKES IT STAY THE SIZE, NOT ADAPTING TO PARENT COMPONENTS
    backgroundColor: colors.specialButton,
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingVertical: 14,
    marginVertical: 12,
    marginHorizontal: 12,
  },
  buttonText: {
    color: colors.primaryTextColor,
    fontSize: 16,
    fontWeight: "500",
  },
});
