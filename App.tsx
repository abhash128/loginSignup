import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screen/HomeScreen';
import { Header } from 'react-native/Libraries/NewAppScreen';
import LogInScreen from './src/screen/LogInScreen';






const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false,}}>

        <Stack.Screen name={"Home"} component= {HomeScreen} />
        <Stack.Screen name={"LogIn"} component= {LogInScreen} />

        


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});