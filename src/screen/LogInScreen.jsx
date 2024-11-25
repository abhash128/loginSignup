import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View, Alert } from 'react-native'
import React, { useState } from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '../redux/slices/userSlice';
import { allUsers } from '../redux/slices/userSlice';

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';



const LogInScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.user.allUsers); // Get users from the Redux store
  const [secureEntry, setSecureEntry] = useState(true);

  //const registeredUsers = useSelector(state => state.user.users);

  const handleGoBack = () => {
    navigation.navigate("Home");
  };

  const handleSignUp = () => {
    navigation.navigate("SignUp")
  };

  const handleLogInPhone = () => {
    navigation.navigate("LogInPhone")
  };


  // Function to handle Google Sign-In
  const handleGoogleSignIn = async () => {
    try {
      // Get the user's ID token
      const { idToken } = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      const userCredential = await auth().signInWithCredential(googleCredential);

      // Extract user data
      const { user } = userCredential;

      // Dispatch loginSuccess with user data
      dispatch(loginSuccess({
        name: user.displayName,
        email: user.email,
        phone: user.phoneNumber,
        uid: user.uid,
      }));

    // Navigate to UserProfile
    navigation.navigate('Order');

  } catch (error) {
    console.error('Google Sign-In error:', error);
  }
};

  // const handleLoginSuccess = () => {
  //   // Navigate to UserProfile screen
  //   navigation.navigate('UserProfile');
  // };

  // const handleLogIn = (values) => {
  //   // Simulating authentication (replace with actual authentication logic)
  //   const userData = { email: values.email, name: 'Abhash Chauhan' };
  //   dispatch(loginSuccess(userData));

  //   // Navigate to home screen or dashboard after login
  //   navigation.navigate('UserProfile');
  // };

  const handleLogIn = (values) => {
    // Validate user credentials against the single user in allUsers
    if (allUsers.email === values.email && allUsers.password === values.password) {
      dispatch(loginSuccess(allUsers)); // Log in the user
      navigation.navigate("Order"); // Navigate to UserProfile

    // const user = allUsers.find(
    //   user => user.email === values.email && user.password === values.password
    // );

    // if (user) {
    //   // Dispatch loginSuccess action if user is found
    //   dispatch(loginSuccess(user));
    //   navigation.navigate('UserProfile');
    } else {
      // Show an alert if credentials don't match
      Alert.alert("Login Failed", "Invalid Email or Password");
    }
    //navigation.navigate('UserProfile');
  };


  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/\d/, 'Password must contain at least one number')
      .matches(/[\W_]/, 'Password must contain at least one special character')
      .required('Password is required'),
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
        <Ionicons 
            name={"arrow-back-circle-sharp"} 
            color={colors.primary}  
            size={30} 
        />
      </TouchableOpacity>

      {/* Text */}
      <View style={styles.textContainer}>
        <Text style={styles.headingText}>Welcome</Text>
        <Text style={styles.headingText}>Back</Text>
      </View>

      {/* Form */}
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleLogIn} 
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Ionicons name={"mail-outline"} size={25} color={colors.secondary} />
              <TextInput
                style={styles.textInput}
                placeholder="Enter your E-Mail"
                placeholderTextColor={colors.secondary}
                keyboardType="email-address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </View>
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}

            <View style={styles.inputContainer}>
              <Ionicons name={"lock-closed"} size={25} color={colors.secondary} />
              <TextInput
                style={styles.textInput}
                placeholder="Enter your Password"
                placeholderTextColor={colors.secondary}
                secureTextEntry={secureEntry}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              <TouchableOpacity onPress={() => setSecureEntry((prev) => !prev)}>
                <Ionicons name={"eye"} size={20} color={colors.secondary} />
              </TouchableOpacity>
            </View>
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}

            <TouchableOpacity>
              <Text style={styles.forgetText}>Forget Password?</Text>
            </TouchableOpacity>

            {/* Login Button */}
            <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>

      <TouchableOpacity style={styles.logInPhoneButton} onPress={handleLogInPhone}>
        {/* <Ionicons name={"logo-google"} size={20} color={colors.primary} /> */}
        <Text style={styles.googleText}>or LogIn with Phone Number</Text>
      </TouchableOpacity>

      <Text style={styles.continueText}>or continue with</Text>

      <TouchableOpacity style={styles.googleButton} onPress={handleGoogleSignIn}>
        <Ionicons name={"logo-google"} size={20} color={colors.primary} />
        <Text style={styles.googleText}>Google</Text>
      </TouchableOpacity>

      <View style={styles.footerContainer}>
        <Text style={styles.accountText}>Don't have an account?</Text>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.signupText}>Sign-up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LogInScreen;

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

        logInPhoneButton:{
          flexDirection: "row",
          borderWidth: 2,
          borderColor: colors.primary,
          marginLeft: 20,
          marginTop: 20,
          width: "90%",
          borderRadius: 100,
          justifyContent: "center",
          alignItems: "center",
          padding: 5,
          gap: 10
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

  errorText: {
    color: 'red',
    fontSize: 12,
    marginLeft: 20,
  },

});