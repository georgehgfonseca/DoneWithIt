import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import colors from "../config/colors";

interface AppTextInputProps {
  icon: string;
}

export default function AppTextInput({ icon }: AppTextInputProps) {
  return (
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons name={icon}></MaterialCommunityIcons>}
      <TextInput style={styles.textInput}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 12,
    marginVertical: 12,
  },
  textInput: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});