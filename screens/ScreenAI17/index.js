import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
const routes = [{
  name: 'Route 1',
  length: '5 miles',
  stars: 4
}, {
  name: 'Route 2',
  length: '3 miles',
  stars: 3
}, {
  name: 'Route 3',
  length: '2 miles',
  stars: 5
}, {
  name: 'Route 4',
  length: '4 miles',
  stars: 2
}];

const RouteScreen = () => {
  const renderRouteItem = route => {
    return <View style={styles.routeItem}>
        <View style={styles.routeInfo}>
          <Text style={styles.routeName}>{route.name}</Text>
          <Text style={styles.routeLength}>{route.length}</Text>
          <Text style={styles.routeStars}>{`Stars: ${route.stars}`}</Text>
        </View>
        <TouchableOpacity style={styles.goButton}>
          <Text style={styles.goButtonText}>Go</Text>
        </TouchableOpacity>
      </View>;
  };

  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Available Routes</Text>
      {routes.map((route, index) => <View key={index}>{renderRouteItem(route)}</View>)}
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
  routeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16
  },
  routeInfo: {
    flex: 1
  },
  routeName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4
  },
  routeLength: {
    fontSize: 16,
    marginBottom: 4
  },
  routeStars: {
    fontSize: 16
  },
  goButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8
  },
  goButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default RouteScreen;