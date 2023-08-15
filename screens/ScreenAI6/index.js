import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CameraScreen = () => {
  const [imageUri, setImageUri] = useState('');

  const handleChooseImage = () => {// Logic to choose image from local storage
  };

  const handleCaptureImage = () => {// Logic to capture image with phone camera
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        {imageUri ? <Image source={{
        uri: imageUri
      }} style={styles.image} /> : <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.placeholderImage} />}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleChooseImage}>
          <Text style={styles.buttonText}>Choose Image</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleCaptureImage}>
          <Text style={styles.buttonText}>Capture Image</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  imageContainer: {
    width: '80%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 20
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10
  },
  placeholderImage: {
    width: '80%',
    height: '60%',
    resizeMode: 'contain'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '80%'
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default CameraScreen;