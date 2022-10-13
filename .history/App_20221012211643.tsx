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
      <ImageBackground
        style={styles.background}
        source={require("./assets/background.jpg")}
      ></ImageBackground>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
      <Image
        style={styles.logo}
        source={require("./assets/logo-red.png")}
      ></Image>
      <Text style={styles.text}>Sell what you don't need</Text>
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
    height: 80,
    width: 80,
    bottom: 640,
    alignSelf: "center",
    position: "absolute",
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
  text: {
    bottom: 640,
    alignSelf: "center",
    position: "absolute",
  },
});
