import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { colors } from "../../themes/colors";
import icons from "../../assets/icons/icons";

type ButtonProps = {
  title: string;
  style: {};
};

export default function Button({ title }: ButtonProps) {
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
    alignSelf: "flex-start", // MAKES IT STAY THE SIZE, NOT ADAPTING TO PARENT COMPONENT
    backgroundColor: colors.button,
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
