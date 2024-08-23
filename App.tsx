import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screen/HomeScreen';
import { Header } from 'react-native/Libraries/NewAppScreen';
import LogInScreen from './src/screen/LogInScreen';
import SignUpScreen from './src/screen/SignUpScreen';
import SignatureScreen from './src/screen/SignatureScreen';
import OnboardingScreen from './src/screen/OnboardingScreen';
import PhoneAuthWebView from './src/screen/PhoneAuthWebView';
import EmailScreen from './src/screen/EmailScreen';
import LogInPhone from './src/screen/LogInPhone';
import UserProfile from './src/screen/UserProfile';
import { Provider } from 'react-redux';
import store from './src/redux/store';
//import { UserProfile } from './src/redux/slices/userSlice';
//import PhoneVerification from './src/screen/PhoneVerification';


import { GoogleSignin } from '@react-native-google-signin/google-signin';


// Initialize Google Sign-In
GoogleSignin.configure({
  webClientId: "1093604866230-70g5jaaavt65nkljpsp39vuvtmlspv1q.apps.googleusercontent.com", // Replace with your Firebase project's web client ID
});



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="OnboardingScreen"
          screenOptions={{ headerShown: false, }}>

          <Stack.Screen name={"OnboardingScreen"} component={OnboardingScreen} />
          <Stack.Screen name={"Home"} component={HomeScreen} />
          <Stack.Screen name={"LogIn"} component={LogInScreen} />
          <Stack.Screen name={"SignUp"} component={SignUpScreen} />
          <Stack.Screen name={"SignatureScreen"} component={SignatureScreen} />
          <Stack.Screen name="PhoneAuthWebView" component={PhoneAuthWebView} />
          <Stack.Screen name="Email" component={EmailScreen} />
          <Stack.Screen name={"LogInPhone"} component={LogInPhone} />
          <Stack.Screen name={"UserProfile"} component={UserProfile} />




        </Stack.Navigator>
      </NavigationContainer>

    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});