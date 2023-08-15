import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React, { useState } from "react";
import { View, SafeAreaView, Button, Image, StyleSheet } from "react-native";

const AvatarScreen = () => {
  const navigation = useNavigation();
  const [avatarImage, setAvatarImage] = useState("");

  const handleImageUpload = () => {// Logic to handle image upload
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Upload Image" onPress={handleImageUpload} />
      </View>
      <View style={styles.avatarContainer}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI6");
      }}><Image style={styles.avatarImage} source={{
          uri: avatarImage || "https://tinyurl.com/42evm3m3"
        }} /></Pressable>
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
  buttonContainer: {
    marginBottom: 20
  },
  avatarContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden"
  },
  avatarImage: {
    width: "100%",
    height: "100%"
  }
});
export default AvatarScreen;