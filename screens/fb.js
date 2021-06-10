import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Facebook() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Facebook</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#151a21",
  },
  text: {
    color: "#3B82F6",
    fontWeight: 700,
    fontSize: 40,
  },
});
