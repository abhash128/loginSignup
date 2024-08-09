import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from '../utils/colors';
import {fonts} from '../utils/fonts';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [secureEntry, setSecureEntry] = useState(true);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleLogIn = () => {
    navigation.navigate("LogIn")
  };

  return (
    <View>
      <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
        <Ionicons 
            name={"arrow-back-circle-sharp"} 
            color={colors.primary}  
            size={30} 
        />

      </TouchableOpacity>

{/* Text */}

      <View style={styles.textContainer}>
        <Text style={styles.headingText}>Let's Get</Text>
        <Text style={styles.headingText}>Started</Text>
      </View>

 {/* form */}

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Ionicons name={"mail-outline"} size={25} color={colors.secondary} />
          <TextInput 
            style={styles.textInput}
            placeholder='Enter your E-Mail' 
            placeholderTextColor={colors.secondary}
            keyboardType='email-address'
          >

          </TextInput>
        </View>

{/* phone no */}

        <View style={styles.inputContainer}>
          <Ionicons name={"phone-portrait-outline"} size={25} color={colors.secondary} />
          <TextInput 
            style={styles.textInput}
            placeholder='Enter your Phone No' 
            placeholderTextColor={colors.secondary}
            secureTextEntry={secureEntry}
            keyboardType='number-pad'
          />

          

        </View>

{/* password */}

        <View style={styles.inputContainer}>
          <Ionicons name={"lock-closed"} size={25} color={colors.secondary} />
          <TextInput 
            style={styles.textInput}
            placeholder='Enter your Password' 
            placeholderTextColor={colors.secondary}
            secureTextEntry={secureEntry}
          />

          <TouchableOpacity onPress={ () => {
            setSecureEntry((prev) => !prev);
          }}>

            <Ionicons name={"eye"} size={20} color={colors.secondary} />

          </TouchableOpacity>

        </View>

        
{/* SignUp Button */}

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={styles.continueText}>or continue with</Text>

        <TouchableOpacity style={styles.googleButton}>
        <Ionicons name={"logo-google"} size={20} color={colors.primary} />
        <Text style={styles.googleText}>Google</Text>
        </TouchableOpacity>

        <View style={styles.footerContainer}>
          <Text style={styles.accountText}>Already have an account?</Text>
          <TouchableOpacity onPress={handleLogIn}>
            <Text style={styles.signupText}>LogIn</Text>
          </TouchableOpacity>

        </View>


      </View>


    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  backButtonWrapper:{
    height: 35,
    width: 35,
    backgroundColor: colors.gray,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },

  textContainer:{
    marginVertical: 10,
    marginLeft: 20,

  },

  headingText:{
    fontSize:30,
    color: colors.primary,
    fontFamily: fonts.SemiBold,

  },

  formContainer:{
    marginTop: -10,


  },

  inputContainer:{
    borderWidth:1,
    borderColor: colors.secondary,
    borderRadius: 10,
    marginLeft: 20,
    width: "90%",
    paddingHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,


  },

  textInput:{
    flex:1,
    paddingHorizontal:10,
    fontFamily: fonts.Light,
  },

  forgetText:{
    textAlign:"right",
    color: colors.primary,
    fontFamily: fonts.SemiBold,
    marginVertical: 5,
  },

  loginButton:{
    backgroundColor: colors.primary,
    borderRadius:100,
    marginLeft: 20,
    width: "90%",
    marginTop: 10,
  },

  loginText:{
    color:colors.white,
    fontSize: 18,
    fontFamily: fonts.SemiBold,
    textAlign: "center",
    padding: 10,
  },

  continueText:{
    textAlign: "center",
    marginVertical: 10,
    fontSize: 12,
    fontFamily: fonts.Regular,
    color: colors.primary
  },

  googleText:{
    fontSize: 15,
    fontFamily: fonts.SemiBold,
    
  },

  googleButton:{
    flexDirection: "row",
    borderWidth: 2,
    borderColor: colors.primary,
    marginLeft: 20,
    width: "90%",
    borderRadius:100,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    gap: 10
  },

  footerContainer:{
    flexDirection:"row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    gap: 5,
  },

  accountText:{
    color:  colors.primary,
    fontFamily: fonts.Regular,
  },

  signupText:{
    color:  colors.primary,
    fontFamily: fonts.Bold,
  },

});