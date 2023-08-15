import React from "react";
import { Text, TouchableOpacity, Image, SafeAreaView, StyleSheet, View } from "react-native";

const Screen = () => {
  return <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.hamburgerButton}>
        <Image source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} style={styles.hamburgerIcon} />
      </TouchableOpacity>
      <View style={styles.bottomMenu}>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuButtonText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuButtonText}>Navigate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuButtonText}>Rally</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuButtonText}>Scores</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  hamburgerButton: {
    position: "absolute",
    top: 10,
    left: 10
  },
  hamburgerIcon: {
    width: 30,
    height: 30
  },
  bottomMenu: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: 60,
    backgroundColor: "#f2f2f2"
  },
  menuButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  menuButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333"
  }
});
export default Screen;