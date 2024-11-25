// //src/screens/UserProfile.jsx
// // import React from 'react';
// // import { useSelector } from 'react-redux';
// // import { Text, View } from 'react-native';

// // const UserProfile = () => {
// //   const user = useSelector((state) => state.auth.user);

// //   return (
// //     <View>
// //       <Text>Welcome, {user?.name}</Text>
// //     </View>
// //   );
// // };

// // export default UserProfile;


// //import { useSelector } from 'react-redux';

// // const UserProfile = () => {
// //   const userInfo = useSelector((state) => state.user.userInfo);

// //   return (
// //     <View>
// //       <Text>{userInfo.name}</Text>
// //       <Text>{userInfo.email}</Text>
// //     </View>
// //   );
// // };

// // export default UserProfile;


// import React, { useState } from 'react';
// import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Button, Alert } from 'react-native';
// import { useSelector, useDispatch } from 'react-redux';
// import { logout } from '../redux/slices/userSlice';
// import { useNavigation } from '@react-navigation/native';
// import { colors } from '../utils/colors';
// import { fonts } from '../utils/fonts';

// const UserProfile = () => {
//   const navigation = useNavigation();
//   const dispatch = useDispatch();
//   const user = useSelector(state => state.user.currentUser);
//   // for flat card
//   //const [showContent, setShowContent] = useState(false);

//   //API
//   // const [apiData, setApiData] = useState(null);
//   // const [loading, setLoading] = useState(false);
//   // const [error, setError] = useState(null); // State for error handling

//   // const toggleContent = () => {
//   //   setShowContent(prev => !prev);

//   //   // Fetch API data when showing content
//   //   if (!showContent) {
//   //     fetchData();
//   //   }
//   // };

 

//   // const fetchData = () => {
//   //   setLoading(true);
//   //   setError(null); // Reset error state before making a request
//   //   const xhr = new XMLHttpRequest();
//   //   const requestUrl = "https://api.restful-api.dev/objects"; // Change as needed

//   //   xhr.open("GET", requestUrl, true);
//   //   xhr.onload = function() {
//   //     if (xhr.status >= 200 && xhr.status < 300) {
//   //       try {
//   //         const data = JSON.parse(xhr.responseText);
//   //         setApiData(data); // Store the fetched data
//   //       } catch (parseError) {
//   //         console.error('JSON parsing error:', parseError);
//   //         setError('Failed to parse response');
//   //       }
//   //     } else {
//   //       console.error('Error fetching data:', xhr.statusText);
//   //       setError('Error fetching data: ' + xhr.statusText);
//   //     }
//   //     setLoading(false);
//   //   };
//   //   xhr.onerror = function() {
//   //     console.error('Request failed');
//   //     setError('Request failed');
//   //     setLoading(false);
//   //   };
//   //   xhr.send();
//   // };

//   // const handleView = () => {
//   //   navigation.navigate("ApiList");
//   // };

//   // const handleApiDisplay = () => {
//   //   navigation.navigate("ApiDataDisplay");
//   // };


//   const handleLogout = () => {
//     dispatch(logout());
//     navigation.navigate('LogIn');
//   };

//   // const handleAddObject = () => {
//   //   navigation.navigate("AddDataForm");
//   // };

//   // button add object
 

//   return (
//     <ScrollView contentContainerStyle= {styles.scrollContainer}>
//     <View style={styles.container}>
//       <Text style={styles.title}>User Profile</Text>
//       <View>

//       {/* <Text>Name: {user.name}</Text> */}
//       <Text>Email: {user.email}</Text>
//       <Text>Phone: {user.phone}</Text>

//       {/* <View style={styles.card}>
//         <Text style={styles.cardText}>API</Text>
//       </View>

//       <View style={styles.button}>

//         <Button 
//           title="View"
//           onPress={handleView}
//         />

//         <Button
//           title="Add"
//           onPress={handleAddObject}
//         />

//         <Button
//           title="Delete"
//           onPress={() => Alert.alert('Right button pressed')}
//         />
//       </View>

// // for flat card 
//         <TouchableOpacity style={styles.card} onPress={handleApiDisplay}>
//           <Text style={styles.cardText}>View</Text>
//         </TouchableOpacity>

//         {showContent && (
//           <View style={styles.contentContainer}>
//             {loading ? (
//               <Text style={styles.contentText}>Loading...</Text>
//             ) : error ? (
//               <Text style={styles.contentText}>{error}</Text> // Show error message
//             ) : apiData ? (
//               <Text style={styles.contentText}>{JSON.stringify(apiData)}</Text>
//             ) : (
//               <Text style={styles.contentText}>No data available.</Text>
//             )}
//           </View>
//         )} */}

//         {/* {showContent && (
//           <View style={styles.contentContainer}>
//             {loading ? (
//               <Text style={styles.contentText}>Loading...</Text>
//             ) : apiData ? (
//               <Text style={styles.contentText}>{JSON.stringify(apiData)}</Text>
//             ) : (
//               <Text style={styles.contentText}>No data available.</Text>
//             )} */}
//             {/* <Text style={styles.contentText}>Additional user information...</Text> */}
        
//             {/* {apiData ? (
//               apiData.map((item, index) => (
//                 <Text key={index} style={styles.contentText}>
//                   {JSON.stringify(item)} Displaying each item as a string */}
//                 {/* </Text>
//               ))
//             ) : (
//               <Text style={styles.contentText}>Loading...</Text>
//             )} */}
//           {/* </View>
//         )} */}

//       <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
//             <Text style={styles.logoutText}>Logout</Text>
//       </TouchableOpacity>
//       </View>
      
//       {/* {user ? (
//         <View style={styles.userInfoContainer}>
//           <Text style={styles.label}>Name:</Text>
//           <Text style={styles.value}>{user.name}</Text>
          
//           <Text style={styles.label}>Email:</Text>
//           <Text style={styles.value}>{user.email}</Text>

//           <Text style={styles.label}>Phone:</Text>
//           <Text style={styles.value}>{user.phone}</Text>

//           <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
//             <Text style={styles.logoutText}>Logout</Text>
//           </TouchableOpacity>
//         </View>
//       ) : (
//         <Text style={styles.errorText}>No user data found.</Text>
//       )} */}
//     </View>
//     </ScrollView>
//   );
// };

// export default UserProfile;

// const styles = StyleSheet.create({
//   scrollContainer:{
//     flexGrow: 1,
//   },
//   container: {
//     flex: 1,
//     //justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: colors.white,
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontFamily: fonts.Bold,
//     color: colors.primary,
//     marginBottom: 20,
//   },
//   userInfoContainer: {
//     width: '100%',
//   },
//   label: {
//     fontSize: 16,
//     fontFamily: fonts.Regular,
//     color: colors.secondary,
//     marginTop: 10,
//   },
//   value: {
//     fontSize: 18,
//     fontFamily: fonts.SemiBold,
//     color: colors.primary,
//     marginBottom: 10,
//   },
//   logoutButton: {
//     backgroundColor: colors.primary,
//     padding: 10,
//     borderRadius: 10,
//     marginTop: 20,
//   },
//   logoutText: {
//     color: colors.white,
//     fontFamily: fonts.SemiBold,
//     fontSize: 16,
//     textAlign: 'center',
//   },
//   errorText: {
//     fontSize: 18,
//     fontFamily: fonts.SemiBold,
//     color: 'red',
//   },
// // for card
// card: {
//   marginVertical: 20,
//   backgroundColor: 'pink',
//   padding: 15,
//   borderRadius: 10,
//   shadowColor: '#000',
//   shadowOffset: { width: 0, height: 2 },
//   shadowOpacity: 0.3,
//   shadowRadius: 5,
//   width: 300,
//   height: 80,
//   alignItems: 'center',
//   justifyContent: 'center',
// },
// cardText: {
//   fontSize: 16,
//   fontWeight: 'bold',
// },
// contentContainer: {
//   marginTop: 10,
//   padding: 15,
//   backgroundColor: '#f0f0f0',
//   borderRadius: 10,
// },
// contentText: {
//   fontSize: 14,
// },
// button:{
//   flexDirection: 'row',
//   justifyContent: 'space-between',
// },
// });



import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slices/userSlice';  // Import the logout action
import { COLOURS } from '../../database/Database';
//import { COLOURS } from '../database/Database'; // Assuming you have a COLOURS file for styling
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from '../utils/colors';



const UserProfile = ({ navigation }) => {
  const dispatch = useDispatch();

  // Get the current user from the Redux store
  const currentUser = useSelector((state) => state.user.currentUser);

  // Handle logout
  const handleLogout = () => {
    dispatch(logout());
    navigation.navigate('LogIn');  // Redirect to the login screen after logout
  };

  const handleGoBack = () => {
    navigation.navigate("Order")
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
        <Ionicons
            name={"arrow-back-circle-sharp"} 
            color={colors.primary}  
            size={30} 
        />
      </TouchableOpacity>
      {/* User information section */}
      <Text style={styles.welcomeText}>Welcome, {currentUser ? currentUser.name : 'Guest'}</Text>
      <Text style={styles.userDetailText}>Email: {currentUser ? currentUser.email : 'Not available'}</Text>
      <Text style={styles.userDetailText}>Phone: {currentUser ? currentUser.phone : 'Not available'}</Text>
      <Text style={styles.userDetailText}>Gender: {currentUser ? currentUser.gender : 'Not available'}</Text>


      {/* Navigation options */}
      <View style={styles.navOptions}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Order')}>
          <Text style={styles.navButtonText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Orders')}>
          <Text style={styles.navButtonText}>Orders</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('MyCart')}>
          <Text style={styles.navButtonText}>Cart</Text>
        </TouchableOpacity>
      </View>

      {/* Logout button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLOURS.backgroundLight,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLOURS.black,
    marginBottom: 10,
  },
  userDetailText: {
    fontSize: 16,
    color: COLOURS.black,
    marginBottom: 20,
  },
  navOptions: {
    marginTop: 20,
  },
  navButton: {
    backgroundColor: COLOURS.backgroundDark,
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  navButtonText: {
    fontSize: 18,
    color: COLOURS.white,
    textAlign: 'center',
  },
  logoutButton: {
    marginTop: 30,
    backgroundColor: COLOURS.red,
    padding: 15,
    borderRadius: 10,
    alignSelf: 'center',
  },
  logoutButtonText: {
    fontSize: 18,
    color: COLOURS.white,
    textAlign: 'center',
  },
});
