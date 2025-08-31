// app/login.tsx
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";

export default function LoginScreen() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [contact, setContact] = useState("");

  const handleLogin = () => {
    if (!firstName.trim()) {
      Alert.alert("Required", "Please enter your first name");
      return;
    }
    if (!contact.trim()) {
      Alert.alert("Required", "Please enter your email or phone number");
      return;
    }
    // ✅ Success → go to dashboard
    router.replace("/dashboard.tsx/profile");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Log In</Text>

      <TextInput
        placeholder="First Name"
        placeholderTextColor="#999"
        value={firstName}
        onChangeText={setFirstName}
        style={styles.input}
      />

      <TextInput
        placeholder="Email or Phone"
        placeholderTextColor="#999"
        value={contact}
        onChangeText={setContact}
        style={styles.input}
        keyboardType="email-address"
      />

      <TouchableOpacity style={styles.primaryButton} onPress={handleLogin}>
        <Text style={styles.primaryButtonText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0B0C2A", padding: 20, justifyContent: "center" },
  title: { fontSize: 26, color: "#fff", textAlign: "center", marginBottom: 40, fontFamily: "Nunito-Bold" },
  input: {
    backgroundColor: "#1C1D3D",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    fontSize: 16,
    color: "#fff",
    fontFamily: "Nunito-Regular",
  },
  primaryButton: { backgroundColor: "#A259FF", padding: 16, borderRadius: 12, alignItems: "center", marginTop: 10 },
  primaryButtonText: { color: "#fff", fontSize: 16, fontFamily: "Nunito-Bold" },
});
