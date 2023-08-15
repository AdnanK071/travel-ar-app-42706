import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const PrivacyPolicyScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Privacy Policy</Text>
        <Text style={styles.subtitle}>Last Updated: September 1, 2022</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          justo nec nunc tincidunt, id aliquam nunc tincidunt. Sed auctor
          tincidunt nisl, id lacinia nunc. Nulla facilisi. Sed auctor, nunc
          vitae aliquet tincidunt, nunc nunc tincidunt mauris, nec tincidunt
          mauris nunc id nunc. Sed auctor, nunc vitae aliquet tincidunt, nunc
          nunc tincidunt mauris, nec tincidunt mauris nunc id nunc.
        </Text>
        <Text style={styles.paragraph}>
          Sed auctor, nunc vitae aliquet tincidunt, nunc nunc tincidunt mauris,
          nec tincidunt mauris nunc id nunc. Sed auctor, nunc vitae aliquet
          tincidunt, nunc nunc tincidunt mauris, nec tincidunt mauris nunc id
          nunc.
        </Text>
        <Text style={styles.paragraph}>
          Sed auctor, nunc vitae aliquet tincidunt, nunc nunc tincidunt mauris,
          nec tincidunt mauris nunc id nunc. Sed auctor, nunc vitae aliquet
          tincidunt, nunc nunc tincidunt mauris, nec tincidunt mauris nunc id
          nunc.
        </Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 16
  },
  paragraph: {
    fontSize: 14,
    marginBottom: 16
  }
});
export default PrivacyPolicyScreen;