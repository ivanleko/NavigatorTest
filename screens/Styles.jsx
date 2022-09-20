import React, { Component } from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Layout,
  Text,
  Modal,
  Button,
  Platform
} from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  tvoamama: {
    backgroundColor: "#8BAEDC",
    flex: 1
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#705BA7",
    borderRadius: 10,
    paddingVertical: 25
  },
  appButtonText: {
    fontSize: 19,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  LuckaUpravaLogo: {
    flex: 1,
    width: "100%",
    resizeMode: "contain"
  },
  novi: {
    backgroundColor: "#705BA7",
    height: 57
  }
});
