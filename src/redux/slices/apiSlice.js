// for  "let modules=[{module_name:"",categories:[{category_name:"",sections:[{section_name:""}]}]}]"



import { createSlice } from '@reduxjs/toolkit';

// Initial structure of modules
const initialState = {
  modules: [
    {
      module_name: 'Module 1',
      categories: [
        {
          category_name: 'Category 1',
          sections: [
            { section_name: 'Section 1' },
            { section_name: 'Section 2' }
          ]
        },
        {
          category_name: 'Category 2',
          sections: [
            { section_name: 'Section 3' },
          ]
        }
      ]
    }
  ]
};

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    addModule: (state, action) => {
      state.modules.push(action.payload);
    },
    editModule: (state, action) => {
      const { index, newName } = action.payload;
      state.modules[index].module_name = newName;
    },
    deleteModule: (state, action) => {
      state.modules.splice(action.payload, 1);
    },
    addCategory: (state, action) => {
      const { moduleIndex, newCategory } = action.payload;
      state.modules[moduleIndex].categories.push(newCategory);
    },
    editCategory: (state, action) => {
      const { moduleIndex, categoryIndex, newName } = action.payload;
      state.modules[moduleIndex].categories[categoryIndex].category_name = newName;
    },
    deleteCategory: (state, action) => {
      const { moduleIndex, categoryIndex } = action.payload;
      state.modules[moduleIndex].categories.splice(categoryIndex, 1);
    },
    addSection: (state, action) => {
      const { moduleIndex, categoryIndex, newSection } = action.payload;
      state.modules[moduleIndex].categories[categoryIndex].sections.push(newSection);
    },
    editSection: (state, action) => {
      const { moduleIndex, categoryIndex, sectionIndex, newName } = action.payload;
      state.modules[moduleIndex].categories[categoryIndex].sections[sectionIndex].section_name = newName;
    },
    deleteSection: (state, action) => {
      const { moduleIndex, categoryIndex, sectionIndex } = action.payload;
      state.modules[moduleIndex].categories[categoryIndex].sections.splice(sectionIndex, 1);
    },
  },
});

export const {
  addModule,
  editModule,
  deleteModule,
  addCategory,
  editCategory,
  deleteCategory,
  addSection,
  editSection,
  deleteSection
} = apiSlice.actions;

export default apiSlice.reducer;




















// for API_URL = 'https://api.restful-api.dev/objects';
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const API_URL = 'https://api.restful-api.dev/objects';

// // Thunk for fetching users (now objects)
// export const fetchUsers = createAsyncThunk('api/fetchUsers', async () => {
//   const response = await axios.get(API_URL);
//   return response.data;
// });

// // Thunk for adding a new user (now object)
// export const addUser = createAsyncThunk('api/addUser', async (newUser) => {
//   const response = await axios.post(API_URL, newUser, {
//     headers: { 'Content-Type': 'application/json' },
//   });
//   return response.data;
// });

// // Thunk for updating a user (now object)
// export const updateUser = createAsyncThunk('api/updateUser', async (updatedUser) => {
//   const { id, ...userData } = updatedUser;
//   const response = await axios.put(`${API_URL}/${id}`, userData, {
//     headers: { 'Content-Type': 'application/json' },
//   });
//   return response.data;
// });

// // Thunk for deleting a user (now object)
// export const deleteUser = createAsyncThunk('api/deleteUser', async (id) => {
//   await axios.delete(`${API_URL}/${id}`);
//   return id;
// });

// const apiSlice = createSlice({
//   name: 'api',
//   initialState: {
//     users: [], // 'users' now represent objects from the new API
//     status: 'idle',
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUsers.fulfilled, (state, action) => {
//         state.users = action.payload;
//       })
//       .addCase(addUser.fulfilled, (state, action) => {
//         state.users.push(action.payload);
//       })
//       .addCase(updateUser.fulfilled, (state, action) => {
//         const index = state.users.findIndex((user) => user.id === action.payload.id);
//         if (index !== -1) {
//           state.users[index] = action.payload;
//         }
//       })
//       .addCase(deleteUser.fulfilled, (state, action) => {
//         state.users = state.users.filter((user) => user.id !== action.payload);
//       });
//   },
// });

// export default apiSlice.reducer;








// for API_URL = 'https://jsonplaceholder.typicode.com/users';


// src/slices/apiSlice.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const API_URL = 'https://jsonplaceholder.typicode.com/users';

// // Thunk for fetching users
// export const fetchUsers = createAsyncThunk('api/fetchUsers', async () => {
//   const response = await axios.get(API_URL);
//   return response.data;
// });

// // Thunk for adding a new user
// export const addUser = createAsyncThunk('api/addUser', async (newUser) => {
//   const response = await axios.post(API_URL, newUser, {
//     headers: { 'Content-Type': 'application/json' },
//   });
//   return response.data;
// });

// // Thunk for updating a user
// export const updateUser = createAsyncThunk('api/updateUser', async (updatedUser) => {
//   const { id, ...userData } = updatedUser;
//   const response = await axios.put(`${API_URL}/${id}`, userData, {
//     headers: { 'Content-Type': 'application/json' },
//   });
//   return response.data;
// });

// // Thunk for deleting a user
// export const deleteUser = createAsyncThunk('api/deleteUser', async (id) => {
//   await axios.delete(`${API_URL}/${id}`);
//   return id;
// });

// const apiSlice = createSlice({
//   name: 'api',
//   initialState: {
//     users: [],
//     status: 'idle',
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUsers.fulfilled, (state, action) => {
//         state.users = action.payload;
//       })
//       .addCase(addUser.fulfilled, (state, action) => {
//         state.users.push(action.payload);
//       })
//       .addCase(updateUser.fulfilled, (state, action) => {
//         const index = state.users.findIndex((user) => user.id === action.payload.id);
//         if (index !== -1) {
//           state.users[index] = action.payload;
//         }
//       })
//       .addCase(deleteUser.fulfilled, (state, action) => {
//         state.users = state.users.filter((user) => user.id !== action.payload);
//       });
//   },
// });

// export default apiSlice.reducer;




// // src/features/apiSlice.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Async thunk to fetch data from API
// export const fetchData = createAsyncThunk(
//   'api/fetchData',
//   async () => {
//     const response = await axios.get('https://api.restful-api.dev/objects');
//     return response.data;
//   }
// );

// const apiSlice = createSlice({
//   name: 'api',
//   initialState: {
//     data: [],
//     status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchData.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchData.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.data = action.payload;
//       })
//       .addCase(fetchData.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export default apiSlice.reducer;

//My API Slice code

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const API_URL = 'https://api.restful-api.dev/objects';

// // Async thunk to fetch data from API
// export const fetchData = createAsyncThunk('api/fetchData', async () => {
//   const response = await axios.get(API_URL);
//   return response.data;
// });

// // Async thunk to add new data to API
// export const addData = createAsyncThunk('api/addData', async (newData) => {
//   const response = await axios.post(API_URL, newData);
//   console.log("Add data response:", response.data); // Log the API response
//   return response.data;
// });

// export const deleteData = createAsyncThunk('api/deleteData', async (id) => {
//   console.log("API Call: Deleting item with ID:", id); // Debugging line
//   const response = await axios.delete(`${API_URL}/${id}`);
//   console.log("Delete API Response:", response.status); // Check response status
//   return id; // Return the deleted item's ID
// });

// const apiSlice = createSlice({
//   name: 'api',
//   initialState: {
//     data: [],
//     status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchData.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchData.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.data = action.payload;
//       })
//       .addCase(fetchData.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       })
//       .addCase(addData.fulfilled, (state, action) => {
//         state.data.push(action.payload); // Update the state with the newly added data
//       })
//       .addCase(deleteData.fulfilled, (state, action) => {
//         //console.log("Item deleted from Redux state:", action.payload); // Debugging line
//         state.data = state.data.filter((item) => item.id !== action.payload); // Remove deleted item from state
//       });
//   },
// });

// export default apiSlice.reducer;

