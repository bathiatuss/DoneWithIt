import React, { useEffect, useState } from "react";
// import { Text } from "react-native";
// import { TextInput, Switch } from "react-native";

// import Icon from "./app/components/Icon";
// import Screen from "./app/components/Screen";
// import AppText from "./app/components/AppText";
// import Card from "./app/components/Card";
// import ListItem from "./app/components/ListItem";
// import AppTextInput from "./app/components/AppTextInput";
import * as ImagePicker from "expo-image-picker";
import * as Permisions from "expo-permissions";

// import WelcomeScreen from "./app/screens/WelcomeScreen";
// import ViewImageScreen from "./app/screens/ViewImageScreen";
// import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
// import MessagesScreen from "./app/screens/MessagesScreen";
// import AccountScreen from "./app/screens/AccountScreen";
// import ListingScreen from "./app/screens/ListingScreen";

// import colors from "./app/config/colors";
// import AppPicker from "./app/components/AppPicker";
// import LoginScreen from "./app/screens/LoginScreen";
// import RegisterScreen from "./app/screens/RegisterScreen";
// import AppFormPicker from "./app/components/forms/AppFormPicker";
// import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App(props) {
  const requestPermission = async () => {
    // const result = await Permisions.askAsync(
    //   Permisions.CAMERA_ROLL,
    //   Permisions.LOCATION
    // );
    // result.granted;
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("You need to enable permission to library");
  };

  useEffect(() => {
    requestPermission;
  }, []);

  return <Screen></Screen>;
}
