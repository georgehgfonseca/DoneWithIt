import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  SafeAreaView,
  TouchableHighlight,
  Button,
  Alert,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

import colors from "../config/colors";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      ></Image>
    </View>
    // <SafeAreaView style={styles.statusBarContainer}>
    //   <View style={styles.topContainer}>
    //     <TouchableHighlight>
    //       <View style={styles.closeButton}></View>
    //     </TouchableHighlight>
    //     <TouchableHighlight>
    //       <View style={styles.deleteButton}></View>
    //     </TouchableHighlight>
    //   </View>
    //   <View style={styles.imageContainer}>
    //     <Image
    //       style={styles.image}
    //       source={require("./assets/chair.jpg")}
    //     ></Image>
    //   </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  closeIcon: {
    height: 48,
    width: 48,
    backgroundColor: "#fc5c65",
    position: "absolute",
    top: 40,
    left: 28,
  },
  deleteIcon: {
    height: 48,
    width: 48,
    backgroundColor: "#4ecdc4",
    position: "absolute",
    top: 40,
    right: 28,
  },
  statusBarContainer: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  imageContainer: {
    backgroundColor: "blue",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    alignSelf: "stretch",
    width: "100%",
  },
  topContainer: {
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 16,
    height: 48,
    alignItems: "center",
  },
  deleteButton: {
    height: 48,
    width: 48,
    backgroundColor: "#4ecdc4",
  },
});
