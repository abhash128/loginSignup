// App.js
// import React, { useState } from 'react';
// import { Text, View, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/Ionicons';

// const Tab = createBottomTabNavigator();

// // Sample food data
// const foodItems = [
//   { id: '1', name: 'Pizza', price: 12 },
//   { id: '2', name: 'Burger', price: 8 },
//   { id: '3', name: 'Sushi', price: 15 },
// ];

// // Home Screen - Food Listing
// function HomeScreen({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Food Menu</Text>
//       <FlatList
//         data={foodItems}
//         keyExtractor={item => item.id}
//         renderItem={({ item }) => (
//           <TouchableOpacity onPress={() => navigation.navigate('Cart', { item })} style={styles.item}>
//             <Text>{item.name} - ${item.price}</Text>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// }

// // Cart Screen - Adding food to cart
// function CartScreen({ route }) {
//   const [cart, setCart] = useState([]);

//   const addItemToCart = (item) => {
//     setCart([...cart, item]);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Your Cart</Text>
//       {route.params?.item && (
//         <Button
//           title={`Add ${route.params.item.name} to cart`}
//           onPress={() => addItemToCart(route.params.item)}
//         />
//       )}
//       <FlatList
//         data={cart}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.item}>
//             <Text>{item.name} - ${item.price}</Text>
//           </View>
//         )}
//       />
//       {cart.length > 0 && (
//         <Button title="Proceed to Payment" onPress={() => alert('Payment Successful')} />
//       )}
//     </View>
//   );
// }

// // Profile Screen
// function ProfileScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Profile</Text>
//       <Text>Manage your account here.</Text>
//     </View>
//   );
// }

// // Main App with Bottom Tab Navigation
// export default function Gallery() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ color, size }) => {
//             let iconName;
//             if (route.name === 'Home') {
//               iconName = 'home';
//             } else if (route.name === 'Cart') {
//               iconName = 'cart';
//             } else if (route.name === 'Profile') {
//               iconName = 'person';
//             }
//             return <Icon name={iconName} size={size} color={color} />;
//           },
//         })}
//       >
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Cart" component={CartScreen} />
//         <Tab.Screen name="Profile" component={ProfileScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// // Styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 10,
//   },
//   item: {
//     padding: 10,
//     backgroundColor: '#f9f9f9',
//     marginVertical: 5,
//     borderRadius: 5,
//   },
// });
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Gallery = () => {
  return (
    <View>
      <Text>Gallery</Text>
    </View>
  )
}

export default Gallery

const styles = StyleSheet.create({})