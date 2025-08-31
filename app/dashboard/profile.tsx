import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="white" />
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Profile Avatar */}
        <View style={styles.avatarContainer}>
          <Ionicons name="person-outline" size={60} color="gray" />
          <TouchableOpacity style={styles.editIcon}>
            <Ionicons name="pencil" size={16} color="white" />
          </TouchableOpacity>
        </View>

        {/* Profile Info */}
        <View style={styles.infoCard}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.value}>John Doe</Text>

          <Text style={styles.label}>Phone Number</Text>
          <Text style={styles.value}>+1 234 567 890</Text>

          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>john.doe@example.com</Text>

          <Text style={styles.label}>Occupation</Text>
          <Text style={styles.value}>Software Engineer</Text>

          <Text style={styles.label}>Company</Text>
          <Text style={styles.value}>Tech Solutions Inc.</Text>

          <Text style={styles.label}>Socials</Text>
          <View style={styles.socialRow}>
            <Ionicons name="logo-instagram" size={20} color="#A65DFF" />
            <Text style={styles.proTag}>PRO</Text>
          </View>
        </View>

        {/* QR Code Card */}
        <View style={styles.qrCard}>
          <Image
            source={{ uri: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=JohnDoe" }}
            style={styles.qrImage}
          />
        </View>

        {/* Buttons */}
        <View style={styles.btnRow}>
          <TouchableOpacity style={styles.editBtn}>
            <Ionicons name="pencil" size={16} color="white" />
            <Text style={styles.btnText}>Edit</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.shareBtn}>
            <Ionicons name="share-social-outline" size={16} color="white" />
            <Text style={styles.btnText}>Share</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Ionicons name="apps-outline" size={24} color="gray" />
        <Ionicons name="qr-code-outline" size={24} color="gray" />
        <Ionicons name="person" size={24} color="#A65DFF" />
        <Ionicons name="mail-outline" size={24} color="gray" />
        <Ionicons name="settings-outline" size={24} color="gray" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0C12",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 10,
  },
  avatarContainer: {
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  editIcon: {
    backgroundColor: "#A65DFF",
    padding: 6,
    borderRadius: 20,
    position: "absolute",
    right: -5,
    bottom: 0,
  },
  infoCard: {
    backgroundColor: "#1A1822",
    marginHorizontal: 20,
    borderRadius: 12,
    padding: 16,
  },
  label: {
    color: "gray",
    fontSize: 12,
    marginTop: 10,
  },
  value: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  socialRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  proTag: {
    backgroundColor: "gold",
    color: "black",
    fontWeight: "700",
    paddingHorizontal: 8,
    borderRadius: 6,
    marginLeft: 6,
  },
  qrCard: {
    backgroundColor: "#1A1822",
    margin: 20,
    borderRadius: 12,
    alignItems: "center",
    padding: 20,
  },
  qrImage: {
    width: 150,
    height: 150,
  },
  btnRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 20,
  },
  editBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#A65DFF",
    padding: 12,
    borderRadius: 10,
    flex: 1,
    justifyContent: "center",
    marginRight: 10,
  },
  shareBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2C2C2E",
    padding: 12,
    borderRadius: 10,
    flex: 1,
    justifyContent: "center",
  },
  btnText: {
    color: "white",
    fontWeight: "600",
    marginLeft: 6,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#1A1822",
    paddingVertical: 14,
    borderTopWidth: 0.3,
    borderTopColor: "#333",
  },
});
