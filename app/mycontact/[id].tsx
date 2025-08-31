import { useLocalSearchParams } from "expo-router";
import { Image, SafeAreaView, Text, View } from "react-native";

const data = [
  { id: "1", name: "Ethan Harper", role: "Software Engineer", avatar: "https://i.pravatar.cc/150?img=1", email: "ethan@example.com", phone: "+1234567890" },
  { id: "2", name: "Olivia Bennett", role: "Product Manager", avatar: "https://i.pravatar.cc/150?img=2", email: "olivia@example.com", phone: "+1987654321" },
  { id: "3", name: "Noah Carter", role: "Marketing Specialist", avatar: "https://i.pravatar.cc/150?img=3", email: "noah@example.com", phone: "+1212555234" },
  { id: "4", name: "Ava Mitchell", role: "UX Designer", avatar: "https://i.pravatar.cc/150?img=4", email: "ava@example.com", phone: "+447700900123" },
  { id: "5", name: "Liam Foster", role: "Data Analyst", avatar: "https://i.pravatar.cc/150?img=5", email: "liam@example.com", phone: "+33123456789" },
];

export default function CardDetail() {
  const { id } = useLocalSearchParams(); // ✅ correct hook
  const card = data.find((item) => item.id === id);

  if (!card) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#120F1D" }}>
        <Text style={{ color: "white" }}>Card not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#120F1D", padding: 20 }}>
      <View style={{ alignItems: "center", marginBottom: 20 }}>
        <Image
          source={{ uri: card.avatar }}
          style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 12 }}
        />
        <Text style={{ color: "white", fontSize: 22, fontWeight: "700" }}>{card.name}</Text>
        <Text style={{ color: "#9CA3AF", fontSize: 16 }}>{card.role}</Text>
      </View>

      <View style={{ backgroundColor: "#2A2340", borderRadius: 12, padding: 16, marginBottom: 12 }}>
        <Text style={{ color: "#9CA3AF", marginBottom: 6 }}>Email</Text>
        <Text style={{ color: "white", fontSize: 16 }}>{card.email}</Text>
      </View>

      <View style={{ backgroundColor: "#2A2340", borderRadius: 12, padding: 16 }}>
        <Text style={{ color: "#9CA3AF", marginBottom: 6 }}>Phone</Text>
        <Text style={{ color: "white", fontSize: 16 }}>{card.phone}</Text>
      </View>
    </SafeAreaView>
  );
}
