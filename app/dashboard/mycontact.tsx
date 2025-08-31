import { Href, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// 🔹 Contact type
type Contact = {
  id: string;
  name: string;
  role: string;
  avatar: string;
  status: "received" | "saved";
};

// 🔹 Dummy Data
const data: Contact[] = [
  {
    id: "1",
    name: "Ethan Harper",
    role: "Software Engineer",
    avatar: "https://i.pravatar.cc/150?img=1",
    status: "received",
  },
  {
    id: "2",
    name: "Olivia Bennett",
    role: "Product Manager",
    avatar: "https://i.pravatar.cc/150?img=2",
    status: "saved",
  },
  {
    id: "3",
    name: "Noah Carter",
    role: "Marketing Specialist",
    avatar: "https://i.pravatar.cc/150?img=3",
    status: "received",
  },
  {
    id: "4",
    name: "Ava Mitchell",
    role: "UX Designer",
    avatar: "https://i.pravatar.cc/150?img=4",
    status: "saved",
  },
  {
    id: "5",
    name: "Liam Foster",
    role: "Data Analyst",
    avatar: "https://i.pravatar.cc/150?img=5",
    status: "received",
  },
];

export default function MyContactScreen() {
  const [filter, setFilter] = useState<"All" | "Received" | "Saved">("All");
  const router = useRouter();
  const tabs: ("All" | "Received" | "Saved")[] = ["All", "Received", "Saved"];

  // 🔹 Filter contacts
  const filteredData =
    filter === "All"
      ? data
      : data.filter((item) => item.status === filter.toLowerCase());

  // 🔹 Render a contact item
  const renderItem = ({ item }: { item: Contact }) => (
    <TouchableOpacity
      onPress={() => router.push(`/mycontact/${item.id}` as Href)}
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#2A2340",
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
      }}
    >
      <Image
        source={{ uri: item.avatar }}
        style={{ width: 50, height: 50, borderRadius: 25, marginRight: 14 }}
      />
      <View>
        <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
          {item.name}
        </Text>
        <Text style={{ color: "#9CA3AF", fontSize: 14 }}>{item.role}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#120F1D", padding: 16 }}>
      {/* Header */}
      <Text
        style={{
          color: "white",
          fontSize: 20,
          fontWeight: "700",
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        My Contacts
      </Text>

      {/* Filter Tabs */}
      <View
        style={{ flexDirection: "row", justifyContent: "center", marginBottom: 20 }}
      >
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setFilter(tab)}
            style={{
              backgroundColor: filter === tab ? "#8B5CF6" : "#2A2340",
              paddingVertical: 8,
              paddingHorizontal: 18,
              borderRadius: 20,
              marginHorizontal: 6,
            }}
          >
            <Text style={{ color: "white", fontWeight: "600" }}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Contacts List */}
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}
