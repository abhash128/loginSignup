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






const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnboardingScreen"
        screenOptions={{headerShown: false,}}>

        <Stack.Screen name={"OnboardingScreen"} component= {OnboardingScreen} />
        <Stack.Screen name={"Home"} component= {HomeScreen} />
        <Stack.Screen name={"LogIn"} component= {LogInScreen} />
        <Stack.Screen name={"SignUp"} component= {SignUpScreen} />
        <Stack.Screen name={"SignatureScreen"} component= {SignatureScreen} />



        


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});