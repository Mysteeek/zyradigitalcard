import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function MoreScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>App Menu</Text>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="close" size={26} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView style={{ flex: 1 }}>
          {/* Unlock Premium */}
        <TouchableOpacity style={styles.item} onPress={() => router.push("/premium")}>
          <Ionicons name="star-outline" size={22} color="#555" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Unlock Premium</Text>
            <Text style={styles.subtitle}>
              Join the Pros. Unlock the world's most advanced digital business card.
            </Text>
          </View>
        </TouchableOpacity>

         {/* Edit */}
        <TouchableOpacity style={styles.item} onPress={() => router.push("/more sub screen/edit")}>
          <Ionicons name="create-outline" size={22} color="#555" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Edit</Text>
            <Text style={styles.subtitle}>
              Custom your card and your smartPage. Add Links, videos, Social Links and much more...
            </Text>
          </View>
        </TouchableOpacity>

        {/* Share SmartPage Link */}
        <TouchableOpacity style={styles.item} onPress={() => router.push("/more sub screen/share")}>
          <Ionicons name="paper-plane-outline" size={22} color="#555" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Share SmartPage Link</Text>
            <Text style={styles.subtitle}>Share link to your SmartPage.</Text>
          </View>
        </TouchableOpacity>

        {/* Text Your Contact (Pro) */}
        <TouchableOpacity style={styles.item} onPress={() => router.push("/more sub screen/text")}>
          <Ionicons name="person-circle-outline" size={22} color="#555" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Text Your Contact</Text>
            <Text style={styles.subtitle}>Send your contact information as text</Text>
          </View>
          <Text style={styles.proBadge}>PRO</Text>
        </TouchableOpacity>

        {/* SmartWidget (Pro) */}
        <TouchableOpacity style={styles.item} onPress={() => router.push("/more sub screen/smartshare")}>
          <MaterialIcons name="widgets" size={22} color="#555" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>SmartWidget</Text>
            <Text style={styles.subtitle}>
              Share your card even faster with the widget.
            </Text>
          </View>
          <Text style={styles.proBadge}>PRO</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F7FB",
    padding: 15,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000",
  },
  item: {
    flexDirection: "row",
    backgroundColor: "#EFEAF3",
    borderRadius: 10,
    padding: 15,
    marginBottom: 12,
    alignItems: "center",
  },
  icon: {
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  subtitle: {
    fontSize: 13,
    color: "#555",
    marginTop: 2,
  },
  itemText: {
    fontSize: 15,
    color: "#000",
    flex: 1,
  },
  proBadge: {
    fontSize: 11,
    fontWeight: "700",
    color: "#fff",
    backgroundColor: "#000",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 5,
    marginLeft: 8,
  },
});
