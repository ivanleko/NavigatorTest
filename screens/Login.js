import React, { useContext } from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Layout,
  Text,
  height,
  Modal,
  Button, 
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import LoginScreen from "react-native-login-screen";
import { styles } from "./Styles.jsx";
import { useNavigation } from "@react-navigation/native";

const Gumb = ({ title }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Home")}
      style={styles.appButtonContainer}
    >
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};





function DetailsScreen() {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView behavior={Platform.select({android: "undefined", ios: "padding"})} style={styles.tvoamama}>
      <LoginScreen
        style={styles.tvoamama}
        logoImageSource={require("./pictures/luckauprava.png")}
        logoImageStyle={styles.LuckaUpravaLogo}
        onLoginPress={() => navigation.navigate("Home")}
        onEmailChange={(email: string) => {}}
        onPasswordChange={(password: string) => {}}
        loginButtonText={"Login / Prijava"}
        loginTextStyle={styles.appButtonText}
        loginButtonStyle={styles.novi}
        disableSocialButtons
        disableDivider
        disableSignup
      ></LoginScreen>
    </KeyboardAvoidingView>
  );
}

export { DetailsScreen };
