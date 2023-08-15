import React from 'react';
import { SafeAreaView, ScrollView, Image, StyleSheet } from 'react-native';
const images = ['https://tinyurl.com/42evm3m3', 'https://tinyurl.com/42evm3m3', 'https://tinyurl.com/42evm3m3', 'https://tinyurl.com/42evm3m3', 'https://tinyurl.com/42evm3m3', 'https://tinyurl.com/42evm3m3', 'https://tinyurl.com/42evm3m3', 'https://tinyurl.com/42evm3m3', 'https://tinyurl.com/42evm3m3', 'https://tinyurl.com/42evm3m3'];

const ARScreen = () => {
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {images.map((image, index) => <Image key={index} source={{
        uri: image
      }} style={styles.image} />)}
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  scrollView: {
    alignItems: 'center',
    paddingVertical: 20
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
    borderRadius: 10
  }
});
export default ARScreen;