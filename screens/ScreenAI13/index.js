import React from 'react';
import { Text, TouchableOpacity, Image, SafeAreaView, StyleSheet } from 'react-native';

const Screen = () => {
  return <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.image} />
        <Text style={styles.buttonText}>Trinidad</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.image} />
        <Text style={styles.buttonText}>Tobago</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.image} />
        <Text style={styles.buttonText}>Bermudas</Text>
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
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    width: '80%'
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 25
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  }
});
export default Screen;