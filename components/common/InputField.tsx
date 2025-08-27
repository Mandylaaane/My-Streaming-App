import React from "react";
import { StyleSheet, View, TextInput, Image } from "react-native";
import { colors } from "../../themes/colors";
import icons from "../../assets/icons/icons";

type InputFieldProps = {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  style?: object;
};

export default function InputField({
  placeholder = "Search",
  value,
  onChangeText,
  style = {},
}: InputFieldProps) {
  return (
    <View>
      <View style={[styles.inputContainer, style]}>
        <Image source={icons.searchIcon} style={styles.icon} />
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          placeholderTextColor={colors.secondaryTextColor}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.inputField,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginVertical: 12,
    marginHorizontal: 12,
    width: 360,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
    resizeMode: "contain",
  },
  textInput: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 18,
    borderWidth: 0,
    backgroundColor: "transparent",
  },
});
