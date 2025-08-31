import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function SettingsScreen() {
  const settingsOptions = [
    { title: "Upgrade", icon: "rocket-outline", color: "#A855F7" },
    { title: "Notifications", icon: "notifications-outline" },
    { title: "Language", icon: "globe-outline" },
    { title: "Current Plan", icon: "ribbon-outline", rightText: "Free" },
    { title: "Pick a Color", icon: "color-palette-outline", colorCircle: "#A855F7" },
    { title: "Share App", icon: "share-social-outline" },
    { title: "Terms and Conditions", icon: "document-text-outline" },
    { title: "Version Information", icon: "information-circle-outline", rightText: "1.0.0" },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={26} color="#fff" />
        <Text style={styles.headerText}>Settings</Text>
      </View>

      {/* Settings List */}
      <ScrollView contentContainerStyle={styles.listContainer}>
        {settingsOptions.map((item, index) => (
          <TouchableOpacity key={index} style={styles.option}>
            <View style={styles.leftContent}>
              <View
                style={[
                  styles.iconCircle,
                  { backgroundColor: item.color ? item.color : "#333" },
                ]}
              >
                <Ionicons name={item.icon as any} size={20} color="#fff" />
              </View>
              <Text style={styles.optionText}>{item.title}</Text>
            </View>

            <View style={styles.rightContent}>
              {item.rightText && (
                <Text style={styles.rightText}>{item.rightText}</Text>
              )}
              {item.colorCircle && (
                <View
                  style={[
                    styles.colorCircle,
                    { backgroundColor: item.colorCircle },
                  ]}
                />
              )}
              <Ionicons
                name="chevron-forward"
                size={20}
                color="#888"
                style={{ marginLeft: 6 }}
              />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="apps-outline" size={22} color="#fff" />
          <Text style={styles.navText}>More</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="scan-outline" size={22} color="#fff" />
          <Text style={styles.navText}>Scan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={22} color="#fff" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="albums-outline" size={22} color="#fff" />
          <Text style={styles.navText}>My Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItemActive}>
          <Ionicons name="settings-outline" size={22} color="#fff" />
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0C2A",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 10,
  },
  listContainer: {
    paddingHorizontal: 12,
    paddingBottom: 80,
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1C1C2E",
    padding: 16,
    marginVertical: 6,
    borderRadius: 12,
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  optionText: {
    color: "#fff",
    fontSize: 16,
  },
  rightContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightText: {
    color: "#aaa",
    fontSize: 14,
  },
  colorCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    marginLeft: 6,
    borderWidth: 2,
    borderColor: "#fff",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#222",
    backgroundColor: "#1C1C2E",
  },
  navItem: {
    alignItems: "center",
  },
  navItemActive: {
    alignItems: "center",
    backgroundColor: "#A855F7",
    padding: 8,
    borderRadius: 30,
  },
  navText: {
    color: "#fff",
    fontSize: 12,
    marginTop: 2,
  },
});
