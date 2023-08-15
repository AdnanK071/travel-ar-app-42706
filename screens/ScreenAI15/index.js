import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet } from 'react-native';

const TravelScreen = () => {
  const travelSites = [{
    id: 1,
    name: 'Eiffel Tower',
    image: 'https://tinyurl.com/42evm3m3'
  }, {
    id: 2,
    name: 'Great Wall of China',
    image: 'https://tinyurl.com/42evm3m3'
  }, {
    id: 3,
    name: 'Machu Picchu',
    image: 'https://tinyurl.com/42evm3m3'
  }, {
    id: 4,
    name: 'Taj Mahal',
    image: 'https://tinyurl.com/42evm3m3'
  }, {
    id: 5,
    name: 'Pyramids of Giza',
    image: 'https://tinyurl.com/42evm3m3'
  }];

  const handleSiteClick = site => {
    console.log(`Clicked on ${site.name}`);
  };

  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Travel Sites</Text>
      {travelSites.map(site => <View key={site.id} style={styles.siteContainer}>
          <Image source={{
        uri: site.image
      }} style={styles.siteImage} />
          <Text style={styles.siteName}>{site.name}</Text>
          <TouchableOpacity style={styles.goButton} onPress={() => handleSiteClick(site)}>
            <Text style={styles.goButtonText}>Go</Text>
          </TouchableOpacity>
        </View>)}
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 16
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16
  },
  siteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16
  },
  siteImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16
  },
  siteName: {
    fontSize: 18,
    flex: 1
  },
  goButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8
  },
  goButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
export default TravelScreen;