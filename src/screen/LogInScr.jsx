import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, } from 'react-native'
import React, { useState } from 'react'
import CheckBox from '@react-native-community/checkbox';


const LogInScr = () => {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Log in</Text>
      <Text style={styles.subtitle}>
        Need a Mailchimp account?{' '}
        <Text style={styles.link}>Create an account</Text>
      </Text>

      {/* Username or Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Username or Email"
        value={username}
        onChangeText={setUsername}
      />

      {/* Password Input */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.input, styles.passwordInput]}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Text style={styles.showText}>Show</Text>
      </View>

      {/* Keep Me Logged In */}
      <View style={styles.checkboxContainer}>
        <CheckBox>
          value={isLogged}
          onValueChange={setIsLogged}
          boxType="square"
          tintColors={{ true: '#0073b1', false: '#ddd' }}
          </CheckBox>
        <Text style={styles.checkboxText}>Keep me logged in</Text>

      </View>

      {/* Log In Button */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>

      {/* Links */}
      <View style={styles.linksContainer}>
        <Text style={styles.link}>Forgot username?</Text>
        <Text style={styles.link}>Forgot password?</Text>
        <Text style={styles.link}>Can't log in?</Text>
      </View>
    </SafeAreaView>
  )
}

export default LogInScr

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f6f6f1',
      },
      title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      subtitle: {
        fontSize: 14,
        marginBottom: 20,
      },
      link: {
        color: '#0073b1',
        textDecorationLine: 'underline',
      },
      input: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
        marginBottom: 15,
      },
      passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
      },
      passwordInput: {
        flex: 1,
      },
      showText: {
        position: 'absolute',
        right: 10,
        color: '#0073b1',
      },
      checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
      },
      checkboxText: {
        marginLeft: 10,
        fontSize: 14,
      },
      loginButton: {
        backgroundColor: '#0073b1',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 20,
      },
      loginButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
      linksContainer: {
        alignItems: 'center',
      },
})