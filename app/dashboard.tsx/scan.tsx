import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ScanScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Scan Screen
        <MaterialIcons name="qr-code-scanner" size={24} color="black" />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0B0C2A", justifyContent: "center", alignItems: "center" },
  text: { color: "#fff", fontSize: 18, fontFamily: "Nunito-Bold" },
});
