import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.profileImage} />
        <Text style={styles.name}>John Doe</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Sites Visited</Text>
          <Text style={styles.infoValue}>10</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Points</Text>
          <Text style={styles.infoValue}>500</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Rank</Text>
          <Text style={styles.infoValue}>#25</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Rallies Entered</Text>
          <Text style={styles.infoValue}>5</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => {
      navigation.navigate("ScreenAI9");
    }}>
        <Text style={styles.buttonText}>My AR adventures</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    justifyContent: 'center'
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  infoItem: {
    alignItems: 'center'
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  infoValue: {
    fontSize: 18
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default ProfileScreen;