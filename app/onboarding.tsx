import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

export default function OnboardingScreen() {
  const router = useRouter();

  type CenterButtonProps = {
    label: string;
  } & React.ComponentProps<typeof TouchableOpacity>;

  const CenterButton: React.FC<CenterButtonProps> = ({ label, ...props }) => (
    <TouchableOpacity style={styles.button} {...props}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );


  return (
    <Onboarding
      SkipButtonComponent={(props) => <CenterButton {...props} label="Skip" />}
      NextButtonComponent={(props) => <CenterButton {...props} label="Next" />}
      DoneButtonComponent={(props) => <CenterButton {...props} label="Done" />}
      bottomBarHighlight={false}
      bottomBarColor="#0B0C2A"
      containerStyles={{ backgroundColor: "#0B0C2A" }}
      titleStyles={styles.title}
      subTitleStyles={styles.subtitle}
      onSkip={() => router.replace("/")}
      onDone={() => router.replace("/")}
      pages={[
        {
          backgroundColor: "#0B0C2A",
          image: (
            <View style={styles.iconWrapper}>
              <Ionicons name="card-outline" size={50} color="#A259FF" />
            </View>
          ),
          title: "Welcome to Zyra Digital Card",
          subtitle: "Networking, reimagined with your digital card",
        },
        {
          backgroundColor: "#0B0C2A",
          image: (
            <View style={styles.iconWrapper}>
              <Ionicons name="people-outline" size={50} color="#A259FF" />
            </View>
          ),
          title: "One tap",
          subtitle: "All your business details, instantly",
        },
        {
          backgroundColor: "#0B0C2A",
          image: (
            <View style={styles.iconWrapper}>
              <Ionicons name="cloud-outline" size={50} color="#A259FF" />
            </View>
          ),
          title: "Your contacts",
          subtitle: "Secure and always within reach.",
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",       // Fixes it relative to the screen
    bottom: 70,                 // Adjust this number → ~2-3 inches depending on device
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: "#A259FF",
    borderRadius: 25,
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Nunito-Bold",
    fontSize: 25,
  },
  iconWrapper: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#A259FF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontFamily: "Nunito-Bold",
    fontSize: 22,
    color: "#fff",
    textAlign: "center",
  },
  subtitle: {
    fontFamily: "Nunito-Regular",
    fontSize: 16,
    color: "#fff",
    opacity: 0.8,
    textAlign: "center",
    marginHorizontal: 20,
  },
});
