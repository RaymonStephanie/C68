import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Instagram() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Instagram</Text>
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
    color: "#EC4899",
    fontWeight: 700,
    fontSize: 40
  },
});
