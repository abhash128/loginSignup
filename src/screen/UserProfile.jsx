// src/screens/UserProfile.jsx
// import React from 'react';
// import { useSelector } from 'react-redux';
//import { Text, View } from 'react-native';

// const UserProfile = () => {
//   const user = useSelector((state) => state.auth.user);

//   return (
//     <View>
//       <Text>Welcome, {user?.name}</Text>
//     </View>
//   );
// };

// export default UserProfile;


// import { useSelector } from 'react-redux';

// const UserProfile = () => {
//   const userInfo = useSelector((state) => state.user.userInfo);

//   return (
//     <View>
//       <Text>{userInfo.name}</Text>
//       <Text>{userInfo.email}</Text>
//     </View>
//   );
// };

// export default UserProfile;


import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/slices/userSlice';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';

const UserProfile = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.currentUser);

  const handleLogout = () => {
    dispatch(logout());
    navigation.navigate('LogIn');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      <View>

      <Text>Name: {user.name}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Phone: {user.phone}</Text>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
      </View>
      
      {/* {user ? (
        <View style={styles.userInfoContainer}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{user.name}</Text>
          
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{user.email}</Text>

          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.value}>{user.phone}</Text>

          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text style={styles.errorText}>No user data found.</Text>
      )} */}
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.Bold,
    color: colors.primary,
    marginBottom: 20,
  },
  userInfoContainer: {
    width: '100%',
  },
  label: {
    fontSize: 16,
    fontFamily: fonts.Regular,
    color: colors.secondary,
    marginTop: 10,
  },
  value: {
    fontSize: 18,
    fontFamily: fonts.SemiBold,
    color: colors.primary,
    marginBottom: 10,
  },
  logoutButton: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  logoutText: {
    color: colors.white,
    fontFamily: fonts.SemiBold,
    fontSize: 16,
    textAlign: 'center',
  },
  errorText: {
    fontSize: 18,
    fontFamily: fonts.SemiBold,
    color: 'red',
  },
});

