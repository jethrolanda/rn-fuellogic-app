import { StyleSheet, View, Platform } from "react-native";
import Constants from "expo-constants";
import { WebView } from "react-native-webview";
import { useEffect } from "react";
import * as Location from "expo-location";
import { StatusBar } from "expo-status-bar";

export default function Index() {
  useEffect(() => {
    const getLocation = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== "granted") {
          // setLocationError("Location permission denied");
          return;
        }
      } catch (error) {
        console.error("Error requesting location permission:", error);
      }
    };

    getLocation();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#575b4c"
        style={Platform.OS === "android" ? "light" : "dark"}
      />
      <WebView source={{ uri: "https://app.fuellogic.net/" }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  }
});
