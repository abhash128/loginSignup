import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice';
//import apiReducer from './slices/apiSlice';
//import moduleReducer from './slices/ModuleSlice';

const store = configureStore({
  reducer: {
    //modules: moduleReducer
    user: userReducer,
    //api: apiReducer
  }
});

export default store;