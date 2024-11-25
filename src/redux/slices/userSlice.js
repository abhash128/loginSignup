// src/redux/slices/authSlice.js
// src/redux/userSlice.js

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';



// const initialState = {
//   users: [], // Store multiple users
//   currentUser: null, // Store the currently logged-in user

  // userInfo: null, // Holds user data
  // isAuthenticated: false, // Indicates if the user is authenticated
//};

// export const addObject = createAsyncThunk(
//   'user/addObject',
//   async (newObject, { rejectWithValue }) => {
//     try {
//       const response = await axios.post('https://api.restful-api.dev/objects', newObject);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// const API_URL = 'https://api.restful-api.dev/objects';

// export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
//   const response = await axios.get(API_URL);
//   return response.data;
// });



const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    objects: [], // Add a new array to store the objects
    error: null,
  },
  reducers: {
    // setData: (state, action) => {
    //   return action.payload;
    //  },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },

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

    // extraReducers: (builder) => {
    //   builder
    //     // .addCase(addObject.fulfilled, (state, action) => {
    //     //   state.objects.push(action.payload); // Add the new object to the state
    //     // })
    //     // .addCase(addObject.rejected, (state, action) => {
    //     //   state.error = action.payload;
    //     // });

    //     .addCase(fetchUsers.pending, (state) => {
    //       state.loading = true;
    //       state.error = null;
    //     })
    //     .addCase(fetchUsers.fulfilled, (state, action) => {
    //       state.loading = false;
    //       state.users = action.payload;
    //     })
    //     .addCase(fetchUsers.rejected, (state, action) => {
    //       state.loading = false;
    //       state.error = action.error.message;
    //     });
    // },
  },
});

export const { signUpSuccess, loginSuccess, logout /*, updateUserProfile*/ } = userSlice.actions;
export default userSlice.reducer;




