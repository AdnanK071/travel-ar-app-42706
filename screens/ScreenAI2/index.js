import React from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

const SignUpScreen = () => {
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput style={styles.input} placeholder="Username" placeholderTextColor="#999" />
      <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#999" secureTextEntry />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.checkboxContainer}>
        <TouchableOpacity style={styles.checkbox}>
          {
          /* Render checkmark icon here */
        }
        </TouchableOpacity>
        <Text style={styles.checkboxText}>
          I agree to the{' '}
          <Text style={styles.linkText}>Terms and Conditions</Text> and{' '}
          <Text style={styles.linkText}>Privacy Policy</Text>
        </Text>
      </View>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          {
          /* Render social account icon here */
        }
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          {
          /* Render social account icon here */
        }
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          {
          /* Render social account icon here */
        }
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          {
          /* Render social account icon here */
        }
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          {
          /* Render social account icon here */
        }
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#007bff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 3,
    marginRight: 10
  },
  checkboxText: {
    fontSize: 14
  },
  linkText: {
    color: '#007bff',
    textDecorationLine: 'underline'
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  socialButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5
  }
};
export default SignUpScreen;