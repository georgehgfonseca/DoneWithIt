import React from "react";
import { StyleSheet, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons"

import colors from "../config/colors";


export default function ListItemDeleteAction() {
  return <View style={styles.container}>
    <MaterialC
  </View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 64,
  },
});
