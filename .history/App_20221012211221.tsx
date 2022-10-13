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

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("./assets/logo-red.png")}
      ></Image>
      <ImageBackground
        style={styles.background}
        source={require("./assets/background.jpg")}
      ></ImageBackground>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </View>
  );
}

const containerStyle = { backgroundColor: "orange" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  background: {
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flexGrow: 1,
    width: "100%",
    // justifyContent: "center",
    // alignItems: "center",
  },
  logo: {
    height: 64,
    width: 64,
    position: "absolute",
    top: 60,
  },
  loginButton: {
    backgroundColor: "#fc5c65",
    height: 48,
    width: "100%",
  },
  registerButton: {
    backgroundColor: "#4ECDC4",
    height: 48,
    width: "100%",
  },
});