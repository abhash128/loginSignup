import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors' ;
import {fonts} from '../utils/fonts';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleLogIn = () => {
    navigation.navigate("LogIn");
  };

  const handleSignUp = () => {
    navigation.navigate("SignUp");
  };

  const handleSignatureScreen = () => {
    navigation.navigate("SignatureScreen");
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Image source={require("../assets/Image.png")} style={styles.bannerImage} />
      <Text style={styles.title}>Welcome to the App</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.LoginButtonWrapper, 
          {backgroundColor: colors.primary},]}
          onPress={handleLogIn}
          >
            
          <Text style={styles.LoginButtonText}>
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.LoginButtonWrapper]} onPress={handleSignUp}>
          <Text style={styles.SignUpButtonText}>
            Sign-Up
          </Text>
        </TouchableOpacity>

      </View>

      <View style={styles.footerContainer}>
          
          <TouchableOpacity onPress={handleSignatureScreen}>
            <Text style={styles.signupText}>Signature</Text>
          </TouchableOpacity>

      </View>

      
      
    </View>
       );
    };

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center"
  },

  logo: {
    height: 30,
    width: 120,
    marginVertical: 20,
  },

  bannerImage:{
    marginVertical: 20,
    height: 240,
    width: 220,
  },

  title:{
    fontSize: 30,
    fontFamily: fonts.Regular ,
    paddingHorizontal: 30,
    textAlign: "center",
    color: colors.primary,
    marginTop: 40,
  },

  buttonContainer:{
    marginTop:20,
    flexDirection:"row",
    borderWidth: 2,
    borderColor: colors.primary,
    width: "90%",
    height: 50,
    borderRadius: 100,
  },

  LoginButtonWrapper:{
    justifyContent: "center",
    alignItems: "center",
    width: "50%" ,
    borderRadius: 98,
    
  },

  LoginButtonText:{
    color: colors.white,
    fontFamily: fonts.SemiBold,
    fontSize: 18,
  },

  SignUpButtonText:{
    fontFamily: fonts.SemiBold,
    fontSize: 18,
  },

  footerContainer:{
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    gap: 5,
  },


});