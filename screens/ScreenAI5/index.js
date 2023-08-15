import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, StyleSheet } from 'react-native';

const UserProfileScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');

  const handleNextButton = () => {// Handle next button logic here
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI7");
      }}><Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.profileImage} /></Pressable>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
        <TextInput style={styles.input} placeholder="Address" value={address} onChangeText={setAddress} />
        <TextInput style={styles.input} placeholder="Country" value={country} onChangeText={setCountry} />
        <TouchableOpacity style={styles.button} onPress={handleNextButton}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default UserProfileScreen;