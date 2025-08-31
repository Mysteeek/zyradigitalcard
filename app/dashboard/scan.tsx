// ScanQRScreen.tsx
import { Ionicons } from "@expo/vector-icons";
import { BarCodeScanner } from "expo-barcode-scanner";
import * as ImagePicker from "expo-image-picker";
import React, { useEffect, useRef, useState } from "react";
import { Alert, Dimensions, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const PURPLE = "#8B5CF6";
const BG = "#191A2E";
const TEXT = "rgba(255,255,255,0.92)";
const MUTED = "rgba(255,255,255,0.72)";

export default function ScanQRScreen() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const camRef = useRef<any>(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const onScan = ({ data }: { data: string }) => {
    setScanned(true);
    Alert.alert("QR Scanned", data, [{ text: "OK", onPress: () => setScanned(false) }]);
  };

  const pickFromGallery = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission needed", "Please allow gallery access to upload an image.");
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      // NOTE: Decoding QR from a static image requires an extra lib (e.g. a native ZXing wrapper).
      // Here we just acknowledge the selection.
      Alert.alert("Image selected", "Decoding from gallery can be wired with a ZXing-based library.");
    }
  };

  if (hasPermission === null) {
    return (
      <SafeAreaView style={[styles.container, { alignItems: "center", justifyContent: "center" }]}>
        <Text style={styles.subtitle}>Requesting camera permission…</Text>
      </SafeAreaView>
    );
  }

  if (hasPermission === false) {
    return (
      <SafeAreaView style={[styles.container, { alignItems: "center", justifyContent: "center" }]}>
        <Text style={styles.subtitle}>Camera permission denied</Text>
        <Text style={[styles.helper, { marginTop: 8 }]}>Enable it in Settings to scan QR codes.</Text>
      </SafeAreaView>
    );
  }

  const boxSize = Math.min(Dimensions.get("window").width * 0.8, 320);

  return (
    <SafeAreaView style={styles.container}>
      {/* Top bar */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.iconBtn} onPress={() => Alert.alert("Close pressed")}>
          <Ionicons name="close" size={26} color={TEXT} />
        </TouchableOpacity>
        <Text style={styles.title}>Scan QR Code</Text>
        <View style={styles.iconBtn} />
      </View>

      {/* Instruction */}
      <Text style={styles.subtitle}>Align the QR code within the frame to{"\n"}scan.</Text>

      {/* Scanner area */}
      <View style={[styles.scannerWrap, { width: boxSize, height: boxSize }]}>
        <BarCodeScanner
          ref={camRef}
          onBarCodeScanned={scanned ? undefined : onScan}
          style={StyleSheet.absoluteFillObject}
          barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
        />

        {/* dim surroundings */}
        <View style={styles.overlay} pointerEvents="none" />

        {/* dashed frame */}
        <View style={[styles.frame, { borderRadius: 20 }]} pointerEvents="none" />

        {/* top accent line */}
        <View style={[styles.accentTop, { width: boxSize - 8 }]} pointerEvents="none" />
      </View>

      {/* Upload button */}
      <TouchableOpacity style={styles.galleryBtn} onPress={pickFromGallery} activeOpacity={0.9}>
        <Ionicons name="image-outline" size={22} color={TEXT} style={{ marginRight: 10 }} />
        <Text style={styles.galleryText}>Upload from Gallery</Text>
      </TouchableOpacity>

      {/* Spacer for bottom safe area on iPhone */}
      {Platform.OS === "ios" ? <View style={{ height: 8 }} /> : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 4,
    marginBottom: 8,
  },
  iconBtn: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 22,
    fontWeight: "700",
    color: TEXT,
    letterSpacing: 0.3,
  },
  subtitle: {
    textAlign: "center",
    color: TEXT,
    opacity: 0.92,
    fontSize: 18,
    lineHeight: 28,
    marginTop: 12,
  },
  helper: {
    color: MUTED,
    fontSize: 14,
  },
  scannerWrap: {
    alignSelf: "center",
    marginTop: 28,
    overflow: "hidden",
    borderRadius: 20,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.25)",
  },
  frame: {
    ...StyleSheet.absoluteFillObject,
    borderWidth: 3,
    borderStyle: "dashed",
    borderColor: "rgba(139,92,246,0.6)",
  },
  accentTop: {
    position: "absolute",
    top: 4,
    left: 4,
    right: 4,
    height: 4,
    backgroundColor: PURPLE,
    borderRadius: 4,
    alignSelf: "center",
  },
  galleryBtn: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 36,
    paddingHorizontal: 22,
    height: 60,
    borderRadius: 999,
    backgroundColor: "#2A2543",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },
  galleryText: {
    color: TEXT,
    fontSize: 18,
    fontWeight: "700",
  },
});
