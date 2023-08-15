import React, { useState } from 'react';
import { View, SafeAreaView, TextInput, Button, Image, StyleSheet } from 'react-native';

const AvatarScreen = () => {
  const [avatarImage, setAvatarImage] = useState('');

  const handleImageChange = text => {
    setAvatarImage(text);
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Enter Image URL" onChangeText={handleImageChange} />
        <Button title="Generate Avatar" onPress={() => {}} />
      </View>
      <View style={styles.avatarContainer}>
        <Image style={styles.avatarImage} source={{
        uri: avatarImage || 'https://tinyurl.com/42evm3m3'
      }} />
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10
  },
  avatarContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden'
  },
  avatarImage: {
    width: '100%',
    height: '100%'
  }
});
export default AvatarScreen;