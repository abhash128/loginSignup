import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
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
import AddObject from './src/screen/AddObject';

import { Provider } from 'react-redux';
import store from './src/redux/store';
//import { UserProfile } from './src/redux/slices/userSlice';
//import PhoneVerification from './src/screen/PhoneVerification';


import { GoogleSignin } from '@react-native-google-signin/google-signin';
import ApiList from './src/screen/ApiList';
import ApiDataDisplay from './src/screen/ApiDataDisplay';
import AddDataForm from './src/screen/AddDataForm';
import GetData from './src/screen/GetData';
import AppData from './src/screen/AppData';
import Module from './src/screen/Module';
import Gallery from './src/screen/Gallery';

import Order from './src/screen/Order';
import MyCart from './src/screen/MyCart';
import ProductInfo from './src/screen/ProductInfo';
import Orders from './src/screen/user/home_tabs/Orders';
import OrderDetail from './src/screen/OrderDetail';
//import { Image } from 'react-native-reanimated/lib/typescript/Animated';
//import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLOURS } from './database/Database';
import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer';
import LogInScr from './src/screen/LogInScr';



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
          <Stack.Screen name={"AddObject"} component={AddObject} />
          <Stack.Screen name={"ApiList"} component={ApiList} />
          <Stack.Screen name={"ApiDataDisplay"} component={ApiDataDisplay} />
          <Stack.Screen name={"AddDataForm"} component={AddDataForm} />
          <Stack.Screen name={"GetData"} component={GetData} />
          <Stack.Screen name={"AppData"} component={AppData} />
          <Stack.Screen name={"Module"} component={Module} />
          <Stack.Screen name={"Gallery"} component={Gallery} />
          <Stack.Screen name="Order" component={Order} />
          <Stack.Screen name="MyCart" component={MyCart} />
          <Stack.Screen name="ProductInfo" component={ProductInfo} />
          <Stack.Screen name="Orders" component={Orders} />
          <Stack.Screen name="OrderDetail" component={OrderDetail} />
          <Stack.Screen name="LogInScr" component={LogInScr} />




        </Stack.Navigator>
      </NavigationContainer>

    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});







// import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native'
// import React from 'react'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { NavigationContainer } from '@react-navigation/native';
// import HomeScreen from './src/screen/HomeScreen';
// import { Header } from 'react-native/Libraries/NewAppScreen';
// import LogInScreen from './src/screen/LogInScreen';
// import SignUpScreen from './src/screen/SignUpScreen';
// import SignatureScreen from './src/screen/SignatureScreen';
// import OnboardingScreen from './src/screen/OnboardingScreen';
// import PhoneAuthWebView from './src/screen/PhoneAuthWebView';
// import EmailScreen from './src/screen/EmailScreen';
// import LogInPhone from './src/screen/LogInPhone';
// import UserProfile from './src/screen/UserProfile';
// import AddObject from './src/screen/AddObject';

// import { Provider } from 'react-redux';
// import store from './src/redux/store';
// //import { UserProfile } from './src/redux/slices/userSlice';
// //import PhoneVerification from './src/screen/PhoneVerification';


// import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import ApiList from './src/screen/ApiList';
// import ApiDataDisplay from './src/screen/ApiDataDisplay';
// import AddDataForm from './src/screen/AddDataForm';
// import GetData from './src/screen/GetData';
// import AppData from './src/screen/AppData';
// import Module from './src/screen/Module';
// import Gallery from './src/screen/Gallery';

// import Order from './src/screen/Order';
// import MyCart from './src/screen/MyCart';
// import ProductInfo from './src/screen/ProductInfo';
// import Orders from './src/screen/user/home_tabs/Orders';
// import OrderDetail from './src/screen/OrderDetail';
// //import { Image } from 'react-native-reanimated/lib/typescript/Animated';
// //import { TouchableOpacity } from 'react-native-gesture-handler';
// import { COLOURS } from './database/Database';
// import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer';
// //import 'react-native-reanimated';



// // Initialize Google Sign-In
// GoogleSignin.configure({
//   webClientId: "1093604866230-70g5jaaavt65nkljpsp39vuvtmlspv1q.apps.googleusercontent.com", // Replace with your Firebase project's web client ID
// });


// // Create the Drawer Navigator
// const Drawer = createDrawerNavigator();
// const Stack = createNativeStackNavigator();

// // Custom Drawer Content
// const CustomDrawerContent = (props: DrawerContentComponentProps) => {
//   const userName = "John Doe"; // You can dynamically fetch user data
//   const randomImage = 'https://unsplash.com/s/photos/random-people'; // Placeholder image

//   return (
//     <View style={{ flex: 1 }}>
//       <View style={{ padding: 20, backgroundColor: COLOURS.backgroundLight }}>
//       <Image
//           source={{ uri: randomImage }}
//           style={{ width: 80, height: 80, borderRadius: 10, marginBottom: 10 }}
//           resizeMode="cover" // Ensure the image fits nicely within the space
//         />
//         <Text style={{ fontSize: 18, color: COLOURS.black }}>{userName}</Text>
//       </View>
//       <TouchableOpacity onPress={() => props.navigation.navigate('Order')}>
//         <Text style={{ fontSize: 16, padding: 20 }}>Home</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => props.navigation.navigate('Orders')}>
//         <Text style={{ fontSize: 16, padding: 20 }}>Orders</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => props.navigation.navigate('MyCart')}>
//         <Text style={{ fontSize: 16, padding: 20 }}>Cart</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => props.navigation.navigate('UserGuidelines')}>
//         <Text style={{ fontSize: 16, padding: 20 }}>User Guidelines</Text>
//       </TouchableOpacity>
//       {/* Logout Button */}
//       <TouchableOpacity onPress={() => props.navigation.navigate('Home')} style={{ marginTop: 150, padding: 20, backgroundColor: COLOURS.black, width:100, marginLeft:60 }}>
//         <Text style={{ fontSize: 16, color: COLOURS.white }}>Logout</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };






// //const Stack = createNativeStackNavigator();

// //const App = () => {
// // Stack Navigator for Screens
// const StackNavigator = () => {
//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="OnboardingScreen"
//           screenOptions={{ headerShown: false, }}>

//           <Stack.Screen name={"OnboardingScreen"} component={OnboardingScreen} />
//           <Stack.Screen name={"Home"} component={HomeScreen} />
//           <Stack.Screen name={"LogIn"} component={LogInScreen} />
//           <Stack.Screen name={"SignUp"} component={SignUpScreen} />
//           <Stack.Screen name={"SignatureScreen"} component={SignatureScreen} />
//           <Stack.Screen name="PhoneAuthWebView" component={PhoneAuthWebView} />
//           <Stack.Screen name="Email" component={EmailScreen} />
//           <Stack.Screen name={"LogInPhone"} component={LogInPhone} />
//           <Stack.Screen name={"UserProfile"} component={UserProfile} />
//           <Stack.Screen name={"AddObject"} component={AddObject} />
//           <Stack.Screen name={"ApiList"} component={ApiList} />
//           <Stack.Screen name={"ApiDataDisplay"} component={ApiDataDisplay} />
//           <Stack.Screen name={"AddDataForm"} component={AddDataForm} />
//           <Stack.Screen name={"GetData"} component={GetData} />
//           <Stack.Screen name={"AppData"} component={AppData} />
//           <Stack.Screen name={"Module"} component={Module} />
//           <Stack.Screen name={"Gallery"} component={Gallery} />
//           <Stack.Screen name="Order" component={Order} />
//           <Stack.Screen name="MyCart" component={MyCart} />
//           <Stack.Screen name="ProductInfo" component={ProductInfo} />
//           <Stack.Screen name="Orders" component={Orders} />
//           <Stack.Screen name="OrderDetail" component={OrderDetail} />



//         </Stack.Navigator>
//       </NavigationContainer>

//     </Provider>
//   );
// };

// const App = () => {
//   return (
//     <Provider store={store}>
//     <NavigationContainer>
//     <Drawer.Navigator
//           drawerContent={(props) => <CustomDrawerContent {...props} />}
//           screenOptions={{ headerShown: false }}
//         >
//           {/* Embedding Stack Navigator inside the Drawer */}
//           <Drawer.Screen name="MainStack" component={StackNavigator} />
//         </Drawer.Navigator>
      
//       {/* <Stack.Navigator screenOptions={{headerShown: false,}}>

//         <Stack.Screen name={"Home"} component= {HomeScreen} />
//         <Stack.Screen name={"LogIn"} component= {LogInScreen} />
//         <Stack.Screen name={"SignUp"} component= {SignUpScreen} />
//         <Stack.Screen name={"GetData"} component= {GetData} />
//         <Stack.Screen name={"AddObject"} component= {AddObject} />
//         <Stack.Screen name={"Gallery"} component= {Gallery} />
//         <Stack.Screen name={"Pinch"} component= {Pinch} />
//         <Stack.Screen name={"GalleryPinch"} component= {GalleryPinch} />
//         <Stack.Screen name={"GallerPin"} component= {GallerPin} />
//         <Stack.Screen name={"Order"} component= {Order} />
//         <Stack.Screen name={"MyCart"} component= {MyCart} />
//         <Stack.Screen name={"ProductInfo"} component= {ProductInfo} />
//         <Stack.Screen name={"Orders"} component= {Orders} />
//         <Stack.Screen name={"OrderDetail"} component= {OrderDetail} />

        


//       </Stack.Navigator> */}
//     </NavigationContainer>
//     </Provider>
//   );
// };

// export default App;

// const styles = StyleSheet.create({});















// import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
// import React from 'react'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { NavigationContainer } from '@react-navigation/native';
// import { Provider } from 'react-redux';
// import store from './src/redux/store';
// import { COLOURS } from './database/Database';
// import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer';

// // Screens
// import HomeScreen from './src/screen/HomeScreen';
// import LogInScreen from './src/screen/LogInScreen';
// import SignUpScreen from './src/screen/SignUpScreen';
// import SignatureScreen from './src/screen/SignatureScreen';
// import OnboardingScreen from './src/screen/OnboardingScreen';
// import PhoneAuthWebView from './src/screen/PhoneAuthWebView';
// import EmailScreen from './src/screen/EmailScreen';
// import LogInPhone from './src/screen/LogInPhone';
// import UserProfile from './src/screen/UserProfile';
// import AddObject from './src/screen/AddObject';
// import ApiList from './src/screen/ApiList';
// import ApiDataDisplay from './src/screen/ApiDataDisplay';
// import AddDataForm from './src/screen/AddDataForm';
// import GetData from './src/screen/GetData';
// import AppData from './src/screen/AppData';
// import Module from './src/screen/Module';
// import Gallery from './src/screen/Gallery';
// import Order from './src/screen/Order';
// import MyCart from './src/screen/MyCart';
// import ProductInfo from './src/screen/ProductInfo';
// import Orders from './src/screen/user/home_tabs/Orders';
// import OrderDetail from './src/screen/OrderDetail';
// import 'react-native-reanimated';


// // Initialize Google Sign-In
// import { GoogleSignin } from '@react-native-google-signin/google-signin';

// GoogleSignin.configure({
//   webClientId: "1093604866230-70g5jaaavt65nkljpsp39vuvtmlspv1q.apps.googleusercontent.com", // Replace with your Firebase project's web client ID
// });

// // Create the Drawer Navigator
// const Drawer = createDrawerNavigator();
// const Stack = createNativeStackNavigator();

// // Custom Drawer Content
// const CustomDrawerContent = (props: DrawerContentComponentProps) => {
//   const userName = "John Doe"; // You can dynamically fetch user data
//   const randomImage = 'https://source.unsplash.com/random/200x200'; // Placeholder image

//   return (
//     <View style={{ flex: 1 }}>
//       <View style={{ padding: 20, backgroundColor: COLOURS.backgroundLight }}>
//         <Image
//           source={{ uri: randomImage }}
//           style={{ width: 80, height: 80, borderRadius: 10, marginBottom: 10 }}
//           resizeMode="cover" // Ensure the image fits nicely within the space
//         />
//         <Text style={{ fontSize: 18, color: COLOURS.black }}>{userName}</Text>
//       </View>
//       <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
//         <Text style={{ fontSize: 16, padding: 20 }}>Home</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => props.navigation.navigate('Orders')}>
//         <Text style={{ fontSize: 16, padding: 20 }}>Orders</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => props.navigation.navigate('MyCart')}>
//         <Text style={{ fontSize: 16, padding: 20 }}>Cart</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => props.navigation.navigate('UserGuidelines')}>
//         <Text style={{ fontSize: 16, padding: 20 }}>User Guidelines</Text>
//       </TouchableOpacity>
//       {/* Logout Button */}
//       <TouchableOpacity onPress={() => console.log('Logout pressed')} style={{ marginTop: 150, padding: 20, backgroundColor: COLOURS.black, width: 100, marginLeft: 60 }}>
//         <Text style={{ fontSize: 16, color: COLOURS.white }}>Logout</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// // Stack Navigator for screens that are not part of the Drawer
// const StackNavigator = () => {
//   return (
//     <Stack.Navigator initialRouteName="OnboardingScreen" screenOptions={{ headerShown: false }}>
//       <Stack.Screen name={"OnboardingScreen"} component={OnboardingScreen} />
//       <Stack.Screen name={"LogIn"} component={LogInScreen} />
//       <Stack.Screen name={"SignUp"} component={SignUpScreen} />
//       <Stack.Screen name={"SignatureScreen"} component={SignatureScreen} />
//       <Stack.Screen name="PhoneAuthWebView" component={PhoneAuthWebView} />
//       <Stack.Screen name="Email" component={EmailScreen} />
//       <Stack.Screen name={"LogInPhone"} component={LogInPhone} />
//       <Stack.Screen name={"UserProfile"} component={UserProfile} />
//       <Stack.Screen name={"AddObject"} component={AddObject} />
//       <Stack.Screen name={"ApiList"} component={ApiList} />
//       <Stack.Screen name={"ApiDataDisplay"} component={ApiDataDisplay} />
//       <Stack.Screen name={"AddDataForm"} component={AddDataForm} />
//       <Stack.Screen name={"GetData"} component={GetData} />
//       <Stack.Screen name={"AppData"} component={AppData} />
//       <Stack.Screen name={"Module"} component={Module} />
//       <Stack.Screen name={"Gallery"} component={Gallery} />
//     </Stack.Navigator>
//   );
// };

// const App = () => {
//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//         {/* Drawer Navigator wraps the Stack Navigator */}
//         <Drawer.Navigator
//           drawerContent={(props) => <CustomDrawerContent {...props} />}
//           screenOptions={{ headerShown: false }}
//         >
//           {/* Drawer-specific screens */}
//           <Drawer.Screen name="Home" component={HomeScreen} />
//           <Drawer.Screen name="Orders" component={Orders} />
//           <Drawer.Screen name="MyCart" component={MyCart} />
          
//           {/* Embed the stack navigator inside the drawer for onboarding/login flow */}
//           <Drawer.Screen name="MainStack" component={StackNavigator} />

//           {/* Screens that should be accessible from drawer (within stack) */}
//           <Drawer.Screen name="Order" component={Order} />
//           <Drawer.Screen name="ProductInfo" component={ProductInfo} />
//           <Drawer.Screen name="OrderDetail" component={OrderDetail} />
//         </Drawer.Navigator>
//       </NavigationContainer>
//     </Provider>
//   );
// };

// export default App;

// const styles = StyleSheet.create({});
