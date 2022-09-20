import React, { useContext } from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Layout,
  Text,
  Modal,
  Button
} from "react-native";
import LoginScreen from "react-native-login-screen";
import { styles } from "./Styles.jsx";

function HomeScreen() {
  return (
    <View style={styles.tvoamama}>
      <Text style={styles.appButtonText}>tvojamama</Text>
    </View>
  );
}

export { HomeScreen };
