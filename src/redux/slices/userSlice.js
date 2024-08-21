// src/redux/slices/authSlice.js
// src/redux/userSlice.js

import { createSlice } from '@reduxjs/toolkit';




// const initialState = {
//   users: [], // Store multiple users
//   currentUser: null, // Store the currently logged-in user

  // userInfo: null, // Holds user data
  // isAuthenticated: false, // Indicates if the user is authenticated
//};

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    allUsers: [],
  },
  reducers: {
    signUpSuccess: (state, action) => {
      // Add the new user to the users array
      // state.allUsers.push(action.payload);
      state.allUsers= action.payload;

    },
    loginSuccess(state, action) {
      state.currentUser = action.payload;
      //state.isAuthenticated = true;
    },
    logout(state) {
      state.currentUser = null;
      //state.isAuthenticated = false;
    },
    // updateUserProfile(state, action) {
    //   state.userInfo = { ...state.userInfo, ...action.payload };
    // },
  },
});

export const { signUpSuccess, loginSuccess, logout /*, updateUserProfile*/ } = userSlice.actions;
export default userSlice.reducer;

