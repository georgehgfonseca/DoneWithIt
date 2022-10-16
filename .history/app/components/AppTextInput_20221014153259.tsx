import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import colors from "../config/colors";

export default function AppTextInput({ icon }: any) {
  return (
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons name={icon}></MaterialCommunityIcons>}
      <TextInput></TextInput>
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
});
