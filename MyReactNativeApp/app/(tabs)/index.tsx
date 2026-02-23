import React from "react";
import {
  Alert,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const images = [
  require("../../assets/images/react-logo.png"),
  require("../../assets/images/partial-react-logo.png"),
  require("../../assets/images/icon.png"),
  require("../../assets/images/favicon.png"),
  require("../../assets/images/android-icon-background.png"),
  require("../../assets/images/splash-icon.png"),
];

const Index = () => {
  const handleTabPress = (tab: number) => {
    Alert.alert("Tab", `Button ${tab} pressed`);
  };

  const handleBottomButtonPress = () => {
    Alert.alert("Bottom Button", "Bottom button pressed!");
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.profileSection}>
          <Image
            source={require("../../assets/images/react-logo.png")}
            style={styles.profileImage}
          />
          <Text style={styles.profileText}>Anonymous</Text>
        </View>

        <View style={styles.tabSection}>
          <TouchableOpacity
            style={[styles.tabButton, styles.tabButton1]}
            onPress={() => handleTabPress(1)}
          >
            <Text style={styles.tabButtonText}>Button 1</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tabButton, styles.tabButton2]}
            onPress={() => handleTabPress(2)}
          >
            <Text style={styles.tabButtonText}>Button 2</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cyanMargin} />

        <View style={styles.contentSection}>
          {images.map((image, index) => (
            <View key={index} style={styles.imageWrapper}>
              <Image source={image} style={styles.gridImage} />
            </View>
          ))}
        </View>

        <TouchableOpacity
          style={styles.bottomButton}
          onPress={handleBottomButtonPress}
        >
          <Text style={styles.bottomButtonText}>Press Me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const screenWidth = Dimensions.get("window").width;
const imageSize = (screenWidth - 120) / 3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#03e2ff",
    paddingTop: 50,
  },

  contentWrapper: {
    backgroundColor: "#fff",
    marginVertical: 15,
  },

  profileSection: {
    alignItems: "center",
    marginBottom: 40,
  },

  profileImage: {
    width: 120,
    height: 120,
    marginBottom: 25,
    marginTop: 103,
  },

  profileText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#FFC107",
    marginBottom: 20,
  },

  tabSection: {
    flexDirection: "row",
  },

  tabButton: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 35,
    alignItems: "center",
    justifyContent: "center",
  },

  tabButton1: {
    backgroundColor: "#9C27B0",
  },

  tabButton2: {
    backgroundColor: "#1E90FF",
  },

  tabButtonText: {
    color: "#fff",
    fontWeight: "600",
  },

  cyanMargin: {
    height: 15,
    backgroundColor: "#03e2ff",
  },

  contentSection: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 9,
    marginBottom: 30,
    justifyContent: "center",
  },

  imageWrapper: {
    width: imageSize,
    height: imageSize,
    margin: 17,
  },

  gridImage: {
    width: "100%",
    height: "100%",
    borderRadius: 22,
    resizeMode: "cover",
  },

  bottomButton: {
    backgroundColor: "#1E90FF",
    marginBottom: 90,
    paddingVertical: 20,
    alignItems: "center",
  },

  bottomButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Index;
