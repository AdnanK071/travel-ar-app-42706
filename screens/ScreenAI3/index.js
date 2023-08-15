import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const LoginScreen = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.logo} />
        <Text style={styles.logoText}>My App</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate("ScreenAI2");
      }}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate("ScreenAI4");
      }}>
          <Text style={styles.buttonText}>Forgot Password</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.faceRecognitionButton}>
        <Text style={styles.faceRecognitionText}>Login with Facial Recognition</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10
  },
  buttonContainer: {
    marginBottom: 30
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  socialContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  socialButton: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 10,
    marginRight: 10
  },
  socialIcon: {
    width: 20,
    height: 20
  },
  faceRecognitionButton: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  faceRecognitionText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
export default LoginScreen;