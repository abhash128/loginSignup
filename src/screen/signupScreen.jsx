import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import { Formik } from 'formik';
import * as Yup from 'yup';
import {CountryPicker} from "react-native-country-codes-picker";
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';


const SignUpScreen = () => {
  const navigation = useNavigation();
  const [secureEntry, setSecureEntry] = useState(true);
  const [countryCode, setCountryCode] = useState('+1'); // Default country code
  const [isPickerVisible, setPickerVisible] = useState(false); // Visibility of country picker


  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleLogIn = () => {
    navigation.navigate("LogIn");
  };

  // Define validation schema using Yup
  
  // Validation schema
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required'),
    gender: Yup.string()
      .oneOf(['Male', 'Female', 'Others'], 'Invalid gender selection')
      .required('Gender is required'),
    phone: Yup.string()
      .matches(/^\d{10}$/, 'Phone number is not valid')
      .required('Phone number is required'),
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
    <ScrollView contentContainerStyle= {styles.scrollContainer}>
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
        <Ionicons 
            name={"arrow-back-circle-sharp"} 
            color={colors.primary}  
            size={30} 
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.headingText}>Let's Get</Text>
        <Text style={styles.headingText}>Started</Text>
      </View>

      <Formik
        initialValues={{ name: '', gender: '', phone: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // Handle sign up logic here
          console.log(values);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Ionicons name={"person-outline"} size={25} color={colors.secondary} />
              <TextInput
                style={styles.textInput}
                placeholder="Enter your Name"
                placeholderTextColor={colors.secondary}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
              />
            </View>
            {touched.name && errors.name && (
              <Text style={styles.errorText}>{errors.name}</Text>
            )}

            <View style={styles.inputContainer}>
              <Ionicons name={"transgender-outline"} size={25} color={colors.secondary} />
              <Picker
                selectedValue={values.gender}
                style={styles.textInput}
                onValueChange={handleChange('gender')}
              >
                <Picker.Item label="Select Gender" value="" color={colors.secondary} />
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female"  />
                <Picker.Item label="Others" value="Others"  />
              </Picker>
            </View>
            {touched.gender && errors.gender && (
              <Text style={styles.errorText}>{errors.gender}</Text>
            )}

{/* Phone Input with Country Code Picker */}

            <View style={styles.phoneInputContainer}>

              <Ionicons name={"phone-portrait-outline"} size={25} color={colors.secondary} />
              
              <TouchableOpacity
                style={styles.countryCodeContainer}
                onPress={() => setPickerVisible(true)}
              >
                <Text style={styles.countryCodeText}>{countryCode}</Text>
              </TouchableOpacity>
             
              <TextInput
                style={styles.textInput}
                placeholder="Enter your Phone No"
                placeholderTextColor={colors.secondary}
                keyboardType="number-pad"
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
                value={values.phone}
              />
            </View>
            {touched.phone && errors.phone && (
              <Text style={styles.errorText}>{errors.phone}</Text>
            )}

            <CountryPicker
              show={isPickerVisible}
              pickerButtonOnPress={(item) => {
                setCountryCode(item.dial_code);
                setPickerVisible(false);
              }}
            />

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

            <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
              <Text style={styles.loginText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>

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
    </ScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  scrollContainer:{
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  backButtonWrapper: {
    height: 35,
    width: 35,
    backgroundColor: colors.gray,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    marginVertical: 10,
    marginLeft: 20,
  },
  headingText: {
    fontSize: 30,
    color: colors.primary,
    fontFamily: fonts.SemiBold,
  },
  formContainer: {
    marginTop: -10,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 10,
    marginLeft: 20,
    width: "90%",
    paddingHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontFamily: fonts.Light,
  },

  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 10,
    marginLeft: 20,
    width: "90%",
    paddingHorizontal: 5,
    marginVertical: 5,
  },
  countryCodeContainer: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.gray,
    borderRadius: 10,
    marginRight: 10,
  },
  countryCodeText: {
    color: colors.primary,
    fontFamily: fonts.Regular,
  },

  loginButton: {
    backgroundColor: colors.primary,
    borderRadius: 100,
    marginLeft: 20,
    width: "90%",
    marginTop: 10,
  },
  loginText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.SemiBold,
    textAlign: "center",
    padding: 10,
  },
  continueText: {
    textAlign: "center",
    marginVertical: 10,
    fontSize: 12,
    fontFamily: fonts.Regular,
    color: colors.primary,
  },
  googleText: {
    fontSize: 15,
    fontFamily: fonts.SemiBold,
  },
  googleButton: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: colors.primary,
    marginLeft: 20,
    width: "90%",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    gap: 10,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    gap: 5,
  },
  accountText: {
    color: colors.primary,
    fontFamily: fonts.Regular,
  },
  signupText: {
    color: colors.primary,
    fontFamily: fonts.Bold,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginLeft: 20,
  },
});