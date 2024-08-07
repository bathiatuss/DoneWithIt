import { Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

import colors from "../config/colors";

//FIXME: Check out the backgroundColor parameter.
// Change it to color(./config/colors) and fix the related bugs
function AppButton({ title, backgroundColor = "primary", onPress }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[backgroundColor] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
