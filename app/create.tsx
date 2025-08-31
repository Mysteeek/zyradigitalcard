import { Picker } from "@react-native-picker/picker"; // 👈 add picker
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import * as Progress from "react-native-progress";

// 👉 Form structure
type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  countryCode: string;
  phone: string;
  occupation: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

// 👉 List of countries and codes
const countries = [
  { name: "Nigeria", code: "+234" },
  { name: "United States", code: "+1" },
  { name: "United Kingdom", code: "+44" },
  { name: "Canada", code: "+1" },
  { name: "India", code: "+91" },
  { name: "Germany", code: "+49" },
  { name: "France", code: "+33" },
];

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    country: "Nigeria",
    countryCode: "+234",
    phone: "",
    occupation: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleNext = () => {
    let newErrors: FormErrors = {};

    if (step === 1) {
      if (!formData.firstName) newErrors.firstName = "First name is required";
      if (!formData.lastName) newErrors.lastName = "Last name is required";
    }

    if (step === 2) {
      if (!formData.country) newErrors.country = "Country is required";

      // phone validation: only digits, max 17
      if (!formData.phone) {
        newErrors.phone = "Phone number is required";
      } else if (!/^\d{0,17}$/.test(formData.phone)) {
        newErrors.phone = "Phone must be 0–17 digits only";
      }

      if (!formData.email) newErrors.email = "Email is required";
      if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Enter a valid email";
      }
    }

    if (step === 3) {
      if (!formData.occupation) newErrors.occupation = "Occupation is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      if (step < 4) {
        setStep(step + 1);
      }
    }
  };

  const handleBack = () => {
    if (step > 1 && step < 4) setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <Text style={styles.title}>Personal Information</Text>
            <Text style={styles.subtitle}>Tell us about yourself</Text>

            <TextInput
              style={[styles.input, errors.firstName && styles.inputError]}
              placeholder="First Name"
              placeholderTextColor="#ccc"
              value={formData.firstName}
              onChangeText={(text) => setFormData({ ...formData, firstName: text })}
            />
            {errors.firstName && <Text style={styles.errorText}>{errors.firstName}</Text>}

            <TextInput
              style={[styles.input, errors.lastName && styles.inputError]}
              placeholder="Last Name"
              placeholderTextColor="#ccc"
              value={formData.lastName}
              onChangeText={(text) => setFormData({ ...formData, lastName: text })}
            />
            {errors.lastName && <Text style={styles.errorText}>{errors.lastName}</Text>}
          </>
        );

      case 2:
        return (
          <>
            <Text style={styles.title}>Contact Information</Text>
            <Text style={styles.subtitle}>How can we reach you?</Text>

            {/* Country Picker */}
            <Text style={styles.label}>Select Country</Text>
            <View style={styles.pickerWrapper}>
              <Picker
                selectedValue={formData.country}
                dropdownIconColor="#fff"
                style={styles.picker}
                onValueChange={(value) => {
                  const country = countries.find((c) => c.name === value);
                  setFormData({
                    ...formData,
                    country: value,
                    countryCode: country ? country.code : "",
                  });
                }}
              >
                {countries.map((c) => (
                  <Picker.Item key={c.code} label={c.name} value={c.name} />
                ))}
              </Picker>
            </View>
            {errors.country && <Text style={styles.errorText}>{errors.country}</Text>}

            {/* Phone input */}
            <View style={styles.phoneRow}>
              <Text style={styles.countryCode}>{formData.countryCode}</Text>
              <TextInput
                style={[styles.phoneInput, errors.phone && styles.inputError]}
                placeholder="Phone Number"
                placeholderTextColor="#ccc"
                keyboardType="numeric"
                value={formData.phone}
                onChangeText={(text) => setFormData({ ...formData, phone: text })}
                maxLength={17}
              />
            </View>
            {errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}

            {/* Email input */}
            <TextInput
              style={[styles.input, errors.email && styles.inputError]}
              placeholder="Email"
              placeholderTextColor="#ccc"
              keyboardType="email-address"
              autoCapitalize="none"
              value={formData.email}
              onChangeText={(text) => setFormData({ ...formData, email: text })}
            />
            {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
          </>
        );

      case 3:
        return (
          <>
            <Text style={styles.title}>Occupation</Text>
            <Text style={styles.subtitle}>What do you do?</Text>

            <TextInput
              style={[styles.input, errors.occupation && styles.inputError]}
              placeholder="Your Occupation"
              placeholderTextColor="#ccc"
              value={formData.occupation}
              onChangeText={(text) => setFormData({ ...formData, occupation: text })}
            />
            {errors.occupation && <Text style={styles.errorText}>{errors.occupation}</Text>}
          </>
        );

      case 4:
        return (
          <>
            <Text style={styles.title}>✅ Success!</Text>
            <Text style={styles.subtitle}>Here’s what you submitted:</Text>

            <View style={styles.summaryBox}>
              <Text style={styles.summaryText}>
                <Text style={styles.bold}>Name:</Text> {formData.firstName} {formData.lastName}
              </Text>
              <Text style={styles.summaryText}>
                <Text style={styles.bold}>Country:</Text> {formData.country}
              </Text>
              <Text style={styles.summaryText}>
                <Text style={styles.bold}>Phone:</Text> {formData.countryCode} {formData.phone}
              </Text>
              <Text style={styles.summaryText}>
                <Text style={styles.bold}>Email:</Text> {formData.email}
              </Text>
              <Text style={styles.summaryText}>
                <Text style={styles.bold}>Occupation:</Text> {formData.occupation}
              </Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => router.replace("/")}>
              <Text style={styles.buttonText}>Finish</Text>
            </TouchableOpacity>
          </>
        );
    }
  };

  return (
    <View style={styles.container}>
      {/* Progress Bar */}
      {step < 4 && (
        <>
          <View style={styles.progressContainer}>
            <Text style={styles.stepText}>Step {step} of 3</Text>
            <Text style={styles.stepText}>{step === 1 ? "33%" : step === 2 ? "66%" : "100%"}</Text>
          </View>
          <Progress.Bar
            progress={step / 3}
            width={null}
            height={6}
            color="#A259FF"
            unfilledColor="#2C2D4E"
            borderWidth={0}
          />
        </>
      )}

      {/* Step content */}
      <View style={{ marginTop: 40 }}>{renderStep()}</View>

      {/* Nav buttons */}
      {step < 4 && (
        <View style={styles.buttonRow}>
          {step > 1 && (
            <TouchableOpacity style={styles.backButton} onPress={handleBack}>
              <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.buttonText}>{step === 3 ? "Submit" : "Next"}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0C2A",
    padding: 20,
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  stepText: { color: "#fff", fontFamily: "Nunito-Bold", fontSize: 14 },
  title: { fontSize: 22, color: "#fff", textAlign: "center", fontFamily: "Nunito-Bold", marginBottom: 10 },
  subtitle: { fontSize: 16, color: "#fff", textAlign: "center", marginBottom: 30, fontFamily: "Nunito-Regular" },
  label: { color: "#fff", fontSize: 14, marginBottom: 6, fontFamily: "Nunito-Regular" },
  pickerWrapper: {
    backgroundColor: "#1A1B3D",
    borderRadius: 10,
    marginBottom: 15,
  },
  picker: {
    color: "#fff",
    width: "100%",
  },
  input: {
    backgroundColor: "#1A1B3D",
    borderRadius: 10,
    padding: 15,
    color: "#fff",
    fontFamily: "Nunito-Regular",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#2C2D4E",
  },
  phoneRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  countryCode: {
    color: "#fff",
    backgroundColor: "#2C2D4E",
    padding: 12,
    borderRadius: 8,
    marginRight: 8,
    fontFamily: "Nunito-Bold",
  },
  phoneInput: {
    flex: 1,
    backgroundColor: "#1A1B3D",
    borderRadius: 10,
    padding: 15,
    color: "#fff",
    fontFamily: "Nunito-Regular",
    borderWidth: 1,
    borderColor: "#2C2D4E",
  },
  inputError: { borderColor: "red" },
  errorText: { color: "red", fontSize: 12, marginBottom: 10, fontFamily: "Nunito-Regular" },
  buttonRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 30 },
  button: { flex: 1, backgroundColor: "#A259FF", padding: 15, borderRadius: 12, alignItems: "center", marginLeft: 10 },
  backButton: { flex: 1, backgroundColor: "#2C2D4E", padding: 15, borderRadius: 12, alignItems: "center", marginRight: 10 },
  buttonText: { color: "#fff", fontSize: 16, fontFamily: "Nunito-Bold" },
  summaryBox: { backgroundColor: "#1A1B3D", padding: 20, borderRadius: 12, marginVertical: 20 },
  summaryText: { color: "#fff", fontSize: 16, marginBottom: 10, fontFamily: "Nunito-Regular" },
  bold: { fontFamily: "Nunito-Bold" },
});
