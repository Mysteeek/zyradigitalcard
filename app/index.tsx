import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Icon */}
      <View style={styles.iconWrapper}>
        <Ionicons name="card-outline" size={60} color="#A259FF" />
      </View>

      {/* Title */}
      <Text style={styles.title}>SmartCard</Text>
      <Text style={styles.subtitle}>
        Your digital business card solution for modern networking
      </Text>

      {/* Create Card */}
      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => router.push("/create-card")}
      >
        <Text style={styles.primaryButtonText}>Create a Card</Text>
      </TouchableOpacity>

      {/* Log In */}
      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => router.push("/login")}
      >
        <Text style={styles.secondaryButtonText}>Log In</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0C2A",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  iconWrapper: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#A259FF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontFamily: "Nunito-Bold",
    color: "#FFFFFF",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "Nunito-Regular",
    color: "#FFFFFF",
    opacity: 0.7,
    textAlign: "center",
    marginBottom: 50,
  },
  primaryButton: {
    backgroundColor: "#A259FF",
    paddingVertical: 16,
    paddingHorizontal: 60,
    borderRadius: 12,
    marginBottom: 20,
    width: "80%",
    alignItems: "center",
  },
  primaryButtonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Nunito-Bold",
  },
  secondaryButton: {
    borderWidth: 2,
    borderColor: "#A259FF",
    paddingVertical: 16,
    paddingHorizontal: 60,
    borderRadius: 12,
    width: "80%",
    alignItems: "center",
  },
  secondaryButtonText: {
    color: "#A259FF",
    fontSize: 16,
    fontFamily: "Nunito-Bold",
  },
});
