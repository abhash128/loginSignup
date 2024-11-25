// for  "let modules=[{module_name:"",categories:[{category_name:"",sections:[{section_name:""}]}]}]"


import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
  ScrollView,
} from 'react-native';
import {
  addModule,
  editModule,
  deleteModule,
  addCategory,
  editCategory,
  deleteCategory,
  addSection,
  editSection,
  deleteSection,
} from '../redux/slices/apiSlice';

function App() {
  const dispatch = useDispatch();
  const modules = useSelector((state) => state.api.modules);

  const [expandedModuleIndex, setExpandedModuleIndex] = useState(null);
  const [newModuleName, setNewModuleName] = useState('');
  const [showInput, setShowInput] = useState(null); // To control input fields for editing
  const [editingValues, setEditingValues] = useState({}); // To handle the current text input values

  // Handle Local Input Changes
  const handleInputChange = (key, value) => {
    setEditingValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // Add New Module
  const handleAddModule = () => {
    if (newModuleName.trim()) {
      const newModule = {
        module_name: newModuleName.trim(),
        categories: [],
      };
      dispatch(addModule(newModule));
      setNewModuleName(''); // Reset the input field after adding the module
    }
  };
  // const handleAddModule = () => {
  //   const newModule = {
  //     module_name: newModuleName,
  //     categories: [],
  //   };
  //   dispatch(addModule(newModule));
  //   setNewModuleName('');
  // };

  // Toggle the module to show categories and sections
  const toggleModuleExpand = (index) => {
    setExpandedModuleIndex(expandedModuleIndex === index ? null : index);
  };

  // // UI for editing module name
  // const handleEditModule = (index, newName) => {
  //   dispatch(editModule({ index, newName }));
  //   setShowInput(null); // Reset input field
  // };

  // Edit Module and Dispatch Change on Blur
  const handleEditModule = (index) => {
    const newName = editingValues[`module-${index}`];
    if (newName) {
      dispatch(editModule({ index, newName }));
    }
    setEditingValues((prev) => ({ ...prev, [`module-${index}`]: undefined }));
  };


  // // Edit Category
  // const handleEditCategory = (moduleIndex, categoryIndex, newName) => {
  //   dispatch(editCategory({ moduleIndex, categoryIndex, newName }));
  //   setShowInput(null); // Reset input field
  // };

  // Edit Category and Dispatch Change on Blur
  const handleEditCategory = (moduleIndex, categoryIndex) => {
    const newName = editingValues[`category-${moduleIndex}-${categoryIndex}`];
    if (newName) {
      dispatch(editCategory({ moduleIndex, categoryIndex, newName }));
    }
    setEditingValues((prev) => ({ ...prev, [`category-${moduleIndex}-${categoryIndex}`]: undefined }));
  };

  // // Edit Section
  // const handleEditSection = (moduleIndex, categoryIndex, sectionIndex, newName) => {
  //   dispatch(editSection({ moduleIndex, categoryIndex, sectionIndex, newName }));
  //   setShowInput(null); // Reset input field
  // };

  // Edit Section and Dispatch Change on Blur
  const handleEditSection = (moduleIndex, categoryIndex, sectionIndex) => {
    const newName = editingValues[`section-${moduleIndex}-${categoryIndex}-${sectionIndex}`];
    if (newName) {
      dispatch(editSection({ moduleIndex, categoryIndex, sectionIndex, newName }));
    }
    setEditingValues((prev) => ({ ...prev, [`section-${moduleIndex}-${categoryIndex}-${sectionIndex}`]: undefined }));
  };

  return (
    <ScrollView>
    <View style={styles.container}>
    <ScrollView horizontal={true}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <FlatList
          data={modules}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index: moduleIndex }) => (
            <View style={styles.moduleContainer}>

              {/* Module Name */}

              {showInput === `module-${moduleIndex}` ? (
                <TextInput
                  style={styles.input}
                  //value={item.module_name}
                  value={editingValues[`module-${moduleIndex}`] ?? item.module_name}
                  onChangeText={(text) => handleInputChange(`module-${moduleIndex}`, text)}
                  onBlur={() => handleEditModule(moduleIndex)}
                  //onChangeText={(newName) => handleEditModule(moduleIndex, newName)}
                  //onBlur={() => setShowInput(null)}
                />
              ) : (
                <>
                  <Text style={styles.moduleText}>{item.module_name}</Text>
                  <TouchableOpacity onPress={() => toggleModuleExpand(moduleIndex)}>
                    <Text style={styles.showMore}>Show more</Text>
                  </TouchableOpacity>
                </>
              )}

              {/* Module Actions */}

              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={[styles.button, styles.buttonPrimary]}
                  onPress={() => setShowInput(`module-${moduleIndex}`)}
                >
                  <Text style={styles.buttonText}>Edit Module</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.buttonDanger]}
                  onPress={() => dispatch(deleteModule(moduleIndex))}
                >
                  <Text style={styles.buttonText}>Delete Module</Text>
                </TouchableOpacity>
              </View>

              {/* Show Categories and Sections if expanded */}

              {expandedModuleIndex === moduleIndex && (
                <>
                  <FlatList
                    data={item.categories}
                    keyExtractor={(category, categoryIndex) => categoryIndex.toString()}
                    renderItem={({ item: categoryItem, index: categoryIndex }) => (
                      <View style={styles.categoryContainer}>
                        {showInput === `category-${moduleIndex}-${categoryIndex}` ? (
                          <TextInput
                            style={styles.input}
                            value={
                              editingValues[`category-${moduleIndex}-${categoryIndex}`] ??
                              categoryItem.category_name
                            }
                            onChangeText={(text) =>
                              handleInputChange(`category-${moduleIndex}-${categoryIndex}`, text)
                            }
                            onBlur={() => handleEditCategory(moduleIndex, categoryIndex)}
                            // value={categoryItem.category_name}
                            // onChangeText={(newName) =>
                            //   handleEditCategory(moduleIndex, categoryIndex, newName)
                            // }
                            // onBlur={() => setShowInput(null)}
                          />
                        ) : (
                          <Text style={styles.categoryText}>{categoryItem.category_name}</Text>
                        )}
                        {/* <Text style={styles.categoryText}>{categoryItem.category_name}</Text> */}


                        {/* Category Actions */}

                        <View style={styles.buttonContainer}>
                          <TouchableOpacity
                            style={[styles.button, styles.buttonPrimary]}
                            onPress={() => setShowInput(`category-${moduleIndex}-${categoryIndex}`)}
                          >
                            <Text style={styles.buttonText}>Edit Category</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={[styles.button, styles.buttonDanger]}
                            onPress={() =>
                              dispatch(deleteCategory({ moduleIndex, categoryIndex }))
                            }
                          >
                            <Text style={styles.buttonText}>Delete Category</Text>
                          </TouchableOpacity>
                        </View>

                        {/* Sections */}
                        <FlatList
                          data={categoryItem.sections}
                          keyExtractor={(section, sectionIndex) => sectionIndex.toString()}
                          renderItem={({ item: sectionItem, index: sectionIndex }) => (
                            <View style={styles.sectionContainer}>
                              {showInput ===
                              `section-${moduleIndex}-${categoryIndex}-${sectionIndex}` ? (
                                <TextInput
                                  style={styles.input}
                                  value={
                                    editingValues[
                                      `section-${moduleIndex}-${categoryIndex}-${sectionIndex}`
                                    ] ?? sectionItem.section_name
                                  }
                                  onChangeText={(text) =>
                                    handleInputChange(
                                      `section-${moduleIndex}-${categoryIndex}-${sectionIndex}`,
                                      text
                                    )
                                  }
                                  onBlur={() =>
                                    handleEditSection(
                                      moduleIndex,
                                      categoryIndex,
                                      sectionIndex
                                    )
                                  }
                                  // value={sectionItem.section_name}
                                  // onChangeText={(newName) =>
                                  //   handleEditSection(
                                  //     moduleIndex,
                                  //     categoryIndex,
                                  //     sectionIndex,
                                  //     newName
                                  //   )
                                  // }
                                  // onBlur={() => setShowInput(null)}
                                />
                              ) : (
                                <Text style={styles.sectionText}>
                                  {sectionItem.section_name}
                                </Text>
                              )}
                              {/* <Text style={styles.sectionText}>{sectionItem.section_name}</Text> */}

                              {/* Section Actions */}
                              <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                  style={[styles.button, styles.buttonPrimary]}
                                  onPress={() =>
                                    setShowInput(
                                      `section-${moduleIndex}-${categoryIndex}-${sectionIndex}`
                                    )
                                  }
                                >
                                  <Text style={styles.buttonText}>Edit Section</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                  style={[styles.button, styles.buttonDanger]}
                                  onPress={() =>
                                    dispatch(deleteSection({ moduleIndex, categoryIndex, sectionIndex }))
                                  }
                                >
                                  <Text style={styles.buttonText}>Delete Section</Text>
                                </TouchableOpacity>
                              </View>
                            </View>
                          )}
                        />

                        {/* Add New Section */}
                        <TouchableOpacity
                          style={[styles.button, styles.buttonSuccess]}
                          onPress={() =>
                            dispatch(
                              addSection({
                                moduleIndex,
                                categoryIndex,
                                newSection: { section_name: 'New Section' },
                              })
                            )
                          }
                        >
                          <Text style={styles.buttonText}>Add Section</Text>
                        </TouchableOpacity>
                      </View>
                    )}
                  />

                  {/* Add New Category */}
                  <TouchableOpacity
                    style={[styles.button, styles.buttonSuccess]}
                    onPress={() =>
                      dispatch(
                        addCategory({
                          moduleIndex,
                          newCategory: {
                            category_name: 'New Category',
                            sections: [],
                          },
                        })
                      )
                    }
                  >
                    <Text style={styles.buttonText}>Add Category</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          )}
          // ListFooterComponent={() => (
          //   <View style={styles.footer}>
          //     <TextInput
          //       style={styles.input}
          //       value={newModuleName}
          //       placeholder="Add module name"
          //       onChangeText={setNewModuleName}
          //     />
          //     <TouchableOpacity style={[styles.button, styles.buttonSuccess]} onPress={handleAddModule}>
          //       <Text style={styles.buttonText}>Add Module</Text>
          //     </TouchableOpacity>
          //   </View>
          // )}
        />
      </ScrollView>
    </ScrollView>

    {/* Add new module input and button (outside the FlatList to prevent re-render issues) */}
    <View style={styles.footer}>
        <TextInput
          style={styles.input}
          value={newModuleName}
          placeholder="Add module name"
          onChangeText={setNewModuleName} // Use local state to handle text input
        />
        <TouchableOpacity style={[styles.button, styles.buttonSuccess]} onPress={handleAddModule}>
          <Text style={styles.buttonText}>Add Module</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 50,
  },
  moduleContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 16,
  },
  moduleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  categoryContainer: {
    paddingLeft: 16,
    marginTop: 10,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionContainer: {
    paddingLeft: 32,
    marginTop: 5,
  },
  sectionText: {
    fontSize: 14,
  },
  showMore: {
    color: 'blue',
    marginVertical: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 10,
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonPrimary: {
    backgroundColor: '#4CAF50',
  },
  buttonDanger: {
    backgroundColor: '#f44336',
  },
  buttonSuccess: {
    backgroundColor: '#008CBA',
    margin: 5

  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
});






























//for API_URL = 'https://api.restful-api.dev/objects';


// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { View, Text, TextInput, Button, StyleSheet, Alert, FlatList, TouchableOpacity } from 'react-native';
// import { fetchUsers, addUser, updateUser, deleteUser } from '../redux/slices/apiSlice';

// const AppData = () => {
//   const dispatch = useDispatch();
//   const users = useSelector((state) => state.api.users);
//   const [newName, setNewName] = useState('');

//   useEffect(() => {
//     dispatch(fetchUsers());
//   }, [dispatch]);

//   const handleAddUser = () => {
//     const name = newName.trim();
//     if (name) {
//       const newUser = {
//         name,
//         data: {},  // The data object can remain empty if you don't need to include any other fields
//       };

//       dispatch(addUser(newUser))
//         .unwrap()
//         .then(() => {
//           setNewName('');
//           Alert.alert('Object added successfully');
//         })
//         .catch(() => {
//           Alert.alert('Failed to add object');
//         });
//     } else {
//       Alert.alert('Validation Error', 'Name is required.');
//     }
//   };

//   const handleUpdateUser = (id) => {
//     const user = users.find((user) => user.id === id);
//     if (user) {
//       dispatch(updateUser(user))
//         .unwrap()
//         .then(() => {
//           Alert.alert('Object updated successfully');
//         })
//         .catch(() => {
//           Alert.alert('Failed to update object');
//         });
//     }
//   };

//   const handleDeleteUser = (id) => {
//     dispatch(deleteUser(id))
//       .unwrap()
//       .then(() => {
//         Alert.alert('Object deleted successfully');
//       })
//       .catch(() => {
//         Alert.alert('Failed to delete object');
//       });
//   };

//   const onNameChange = (id, value) => {
//     const user = users.find((user) => user.id === id);
//     if (user) {
//       dispatch(updateUser({ ...user, name: value }));
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={users}
//         keyExtractor={(item) => item.id.toString()}
//         ListHeaderComponent={() => (
//           <View style={styles.headerRow}>
//             <Text style={styles.headerCell}>Id</Text>
//             <Text style={styles.headerCell}>Name</Text>
//             <Text style={styles.headerCell}>Action</Text>
//           </View>
//         )}
//         renderItem={({ item }) => (
//           <View style={styles.row}>
//             <Text style={styles.cell}>{item.id}</Text>
//             <TextInput
//               style={styles.input}
//               value={item.name}
//               onChangeText={(value) => onNameChange(item.id, value)}
//             />
//             <View style={styles.buttonContainer}>
//               <TouchableOpacity
//                 style={[styles.button, styles.buttonPrimary]}
//                 onPress={() => handleUpdateUser(item.id)}
//               >
//                 <Text style={styles.buttonText}>Update</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={[styles.button, styles.buttonDanger]}
//                 onPress={() => handleDeleteUser(item.id)}
//               >
//                 <Text style={styles.buttonText}>Delete</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         )}
//         ListFooterComponent={() => (
//           <View style={styles.row}>
//             <TextInput
//               style={styles.input}
//               value={newName}
//               placeholder="Add name here..."
//               onChangeText={setNewName}
//             />
//             <TouchableOpacity
//               style={[styles.button, styles.buttonSuccess]}
//               onPress={handleAddUser}
//             >
//               <Text style={styles.buttonText}>Add object</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       />
//     </View>
//   );
// }


// export default AppData

// const styles = StyleSheet.create({

//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#fff',
//   },
//   headerRow: {
//     flexDirection: 'row',
//     marginBottom: 10,
//     paddingVertical: 8,
//     backgroundColor: '#f2f2f2',
//   },
//   row: {
//     flexDirection: 'row',
//     marginBottom: 10,
//   },
//   headerCell: {
//     flex: 1,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   cell: {
//     flex: 1,
//     textAlign: 'center',
//     paddingVertical: 8,
//   },
//   input: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 4,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     flex: 2,
//   },
//   button: {
//     flex: 1,
//     marginHorizontal: 2,
//     paddingVertical: 8,
//     alignItems: 'center',
//     borderRadius: 4,
//   },
//   buttonText: {
//     color: '#fff',
//   },
//   buttonPrimary: {
//     backgroundColor: '#4CAF50',
//   },
//   buttonDanger: {
//     backgroundColor: '#f44336',
//   },
//   buttonSuccess: {
//     backgroundColor: '#008CBA',
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 8,
//     borderRadius: 4,
//   },


// })















// for API_URL = 'https://jsonplaceholder.typicode.com/users';

//import { StyleSheet, Text, View } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { View, Text, TextInput, Button, StyleSheet, Alert, FlatList, TouchableOpacity, ScrollView } from 'react-native';
// import { fetchUsers, addUser, updateUser, deleteUser } from '../redux/slices/apiSlice';

// const AppData = () => {
//     const dispatch = useDispatch();
//     const users = useSelector((state) => state.api.users);
//     const [newName, setNewName] = useState('');
//     const [newEmail, setNewEmail] = useState('');
//     const [newWebsite, setNewWebsite] = useState('');
  
//     useEffect(() => {
//       dispatch(fetchUsers());
//     }, [dispatch]);
  
//     const handleAddUser = () => {
//       const name = newName.trim();
//       const email = newEmail.trim();
//       const website = newWebsite.trim();
//       if (name && email && website) {
//         dispatch(addUser({ name, email, website }))
//           .unwrap()
//           .then(() => {
//             setNewName('');
//             setNewEmail('');
//             setNewWebsite('');
//             Alert.alert('User added successfully');
//           })
//           .catch(() => {
//             Alert.alert('Failed to add user');
//           });
//       }
//     };
  
//     const handleUpdateUser = (id) => {
//       const user = users.find((user) => user.id === id);
//       if (user) {
//         dispatch(updateUser(user))
//           .unwrap()
//           .then(() => {
//             Alert.alert('User updated successfully');
//           })
//           .catch(() => {
//             Alert.alert('Failed to update user');
//           });
//       }
//     };
  
//     const handleDeleteUser = (id) => {
//       dispatch(deleteUser(id))
//         .unwrap()
//         .then(() => {
//           Alert.alert('User deleted successfully');
//         })
//         .catch(() => {
//           Alert.alert('Failed to delete user');
//         });
//     };
  
//     const onChangeHandler = (id, key, value) => {
//       const user = users.find((user) => user.id === id);
//       if (user) {
//         dispatch(updateUser({ ...user, [key]: value }));
//       }
//     };
  
//     return (
//         //<ScrollView contentContainerStyle= {styles.scrollContainer}>
//       <View style={styles.container}>
//         <FlatList
//           data={users}
//           keyExtractor={(item) => item.id.toString()}
//           ListHeaderComponent={() => (
//             <View style={styles.headerRow}>
//               <Text style={styles.headerCell}>Id</Text>
//               <Text style={styles.headerCell}>Name</Text>
//               <Text style={styles.headerCell}>Email</Text>
//               <Text style={styles.headerCell}>Website</Text>
//               <Text style={styles.headerCell}>Action</Text>
//             </View>
//           )}
//           renderItem={({ item }) => (
//             <View style={styles.row}>
//               <Text style={styles.cell}>{item.id}</Text>
//               <Text style={styles.cell}>{item.name}</Text>
//               <TextInput
//                 style={styles.input}
//                 value={item.email}
//                 onChangeText={(value) => onChangeHandler(item.id, 'email', value)}
//               />
//               <TextInput
//                 style={styles.input}
//                 value={item.website}
//                 onChangeText={(value) => onChangeHandler(item.id, 'website', value)}
//               />
//               <View style={styles.buttonContainer}>
//                 <TouchableOpacity
//                   style={[styles.button, styles.buttonPrimary]}
//                   onPress={() => handleUpdateUser(item.id)}
//                 >
//                   <Text style={styles.buttonText}>Update</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   style={[styles.button, styles.buttonDanger]}
//                   onPress={() => handleDeleteUser(item.id)}
//                 >
//                   <Text style={styles.buttonText}>Delete</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           )}
//           ListFooterComponent={() => (
//             <View style={styles.row}>
//               <Text style={styles.cell}></Text>
//               <TextInput
//                 style={styles.input}
//                 value={newName}
//                 placeholder="Add name here..."
//                 onChangeText={setNewName}
//               />
//               <TextInput
//                 style={styles.input}
//                 value={newEmail}
//                 placeholder="Add email here..."
//                 onChangeText={setNewEmail}
//               />
//               <TextInput
//                 style={styles.input}
//                 value={newWebsite}
//                 placeholder="Add website here..."
//                 onChangeText={setNewWebsite}
//               />
//               <TouchableOpacity
//                 style={[styles.button, styles.buttonSuccess]}
//                 onPress={handleAddUser}
//               >
//                 <Text style={styles.buttonText}>Add user</Text>
//               </TouchableOpacity>
//             </View>
//           )}
//         />
//       </View>
//       //</ScrollView>
//     );
//   }


// export default AppData

// const styles = StyleSheet.create({

//     scrollContainer:{
//         flexGrow: 1,
//       },

//     container: {
//         flex: 1,
//         padding: 16,
//         backgroundColor: '#fff',
//       },
//       headerRow: {
//         flexDirection: 'row',
//         marginBottom: 10,
//         paddingVertical: 8,
//         backgroundColor: '#f2f2f2',
//       },
//       row: {
//         flexDirection: 'row',
//         marginBottom: 10,
//       },
//       headerCell: {
//         flex: 1,
//         fontWeight: 'bold',
//         textAlign: 'center',
//       },
//       cell: {
//         flex: 1,
//         textAlign: 'center',
//         paddingVertical: 8,
//       },
//       input: {
//         flex: 1,
//         borderWidth: 1,
//         borderColor: '#ccc',
//         paddingHorizontal: 8,
//         paddingVertical: 4,
//         borderRadius: 4,
//       },
//       buttonContainer: {
//         flexDirection: 'row',
//         flex: 2,
//       },
//       button: {
//         flex: 1,
//         marginHorizontal: 2,
//         paddingVertical: 8,
//         alignItems: 'center',
//         borderRadius: 4,
//       },
//       buttonText: {
//         color: '#fff',
//       },
//       buttonPrimary: {
//         backgroundColor: '#4CAF50',
//       },
//       buttonDanger: {
//         backgroundColor: '#f44336',
//       },
//       buttonSuccess: {
//         backgroundColor: '#008CBA',
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         paddingVertical: 8,
//         borderRadius: 4,
//       },
// })






// import { StyleSheet, Text, View } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchUsers, addUser, updateUser, deleteUser } from '../redux/slices/apiSlice';
// //import { fetchUsers, addUser, updateUser, deleteUser } from './slices/apiSlice';

// const AppData = () => {
//     const dispatch = useDispatch();
//     const users = useSelector((state) => state.api.users);
//     const [newName, setNewName] = useState('');
//     const [newEmail, setNewEmail] = useState('');
//     const [newWebsite, setNewWebsite] = useState('');
  
//     useEffect(() => {
//       dispatch(fetchUsers());
//     }, [dispatch]);
  
//     const handleAddUser = () => {
//       const name = newName.trim();
//       const email = newEmail.trim();
//       const website = newWebsite.trim();
//       if (name && email && website) {
//         dispatch(addUser({ name, email, website }))
//           .unwrap()
//           .then(() => {
//             setNewName('');
//             setNewEmail('');
//             setNewWebsite('');
//             alert('User added successfully');
//           })
//           .catch(() => {
//             alert('Failed to add user');
//           });
//       }
//     };
  
//     const handleUpdateUser = (id) => {
//       const user = users.find((user) => user.id === id);
//       if (user) {
//         dispatch(updateUser(user))
//           .unwrap()
//           .then(() => {
//             alert('User updated successfully');
//           })
//           .catch(() => {
//             alert('Failed to update user');
//           });
//       }
//     };
  
//     const handleDeleteUser = (id) => {
//       dispatch(deleteUser(id))
//         .unwrap()
//         .then(() => {
//           alert('User deleted successfully');
//         })
//         .catch(() => {
//           alert('Failed to delete user');
//         });
//     };
  
//     const onChangeHandler = (id, key, value) => {
//         // Find the user to update
//         const user = users.find((user) => user.id === id);

//         if (user) {
//             // Dispatch the updateUser action with the modified user object
//             dispatch(updateUser({ ...user, [key]: value }));
//         }
//     //   const updatedUsers = users.map((user) =>
//     //     user.id === id ? { ...user, [key]: value } : user
//     //   );
//     //   dispatch(updateUser({ id, [key]: value }));
//     };
  
//     return (
//       <div className="App" style={{ padding: '20px' }}>
//         <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//           <thead>
//             <tr>
//               <th style={styles.th}>Id</th>
//               <th style={styles.th}>Name</th>
//               <th style={styles.th}>Email</th>
//               <th style={styles.th}>Website</th>
//               <th style={styles.th}>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user.id} style={styles.tr}>
//                 <td style={styles.td}>{user.id}</td>
//                 <td style={styles.td}>{user.name}</td>
//                 <td style={styles.td}>
//                   <input
//                     type="text"
//                     value={user.email}
//                     onChange={(e) => onChangeHandler(user.id, 'email', e.target.value)}
//                     style={styles.input}
//                   />
//                 </td>
//                 <td style={styles.td}>
//                   <input
//                     type="text"
//                     value={user.website}
//                     onChange={(e) => onChangeHandler(user.id, 'website', e.target.value)}
//                     style={styles.input}
//                   />
//                 </td>
//                 <td style={styles.td}>
//                   <button onClick={() => handleUpdateUser(user.id)} style={styles.buttonPrimary}>
//                     Update
//                   </button>
//                   &nbsp;
//                   <button onClick={() => handleDeleteUser(user.id)} style={styles.buttonDanger}>
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//           <tfoot>
//             <tr>
//               <td style={styles.td}></td>
//               <td style={styles.td}>
//                 <input
//                   type="text"
//                   value={newName}
//                   onChange={(e) => setNewName(e.target.value)}
//                   placeholder="Add name here..."
//                   style={styles.input}
//                 />
//               </td>
//               <td style={styles.td}>
//                 <input
//                   type="text"
//                   value={newEmail}
//                   onChange={(e) => setNewEmail(e.target.value)}
//                   placeholder="Add email here..."
//                   style={styles.input}
//                 />
//               </td>
//               <td style={styles.td}>
//                 <input
//                   type="text"
//                   value={newWebsite}
//                   onChange={(e) => setNewWebsite(e.target.value)}
//                   placeholder="Add website here..."
//                   style={styles.input}
//                 />
//               </td>
//               <td style={styles.td}>
//                 <button onClick={handleAddUser} style={styles.buttonSuccess}>
//                   Add user
//                 </button>
//               </td>
//             </tr>
//           </tfoot>
//         </table>
//       </div>
//     );
//   }


// export default AppData

// const styles = StyleSheet.create({

//     th: {
//         border: '1px solid #ddd',
//         padding: '8px',
//         textAlign: 'left',
//         backgroundColor: '#f2f2f2',
//       },
//       td: {
//         border: '1px solid #ddd',
//         padding: '8px',
//       },
//       tr: {
//         '&:nth-child(even)': {
//           backgroundColor: '#f2f2f2',
//         },
//       },
//       input: {
//         width: '100%',
//         padding: '8px',
//         boxSizing: 'border-box',
//       },
//       buttonPrimary: {
//         backgroundColor: '#4CAF50',
//         color: 'white',
//         padding: '10px 20px',
//         border: 'none',
//         cursor: 'pointer',
//       },
//       buttonDanger: {
//         backgroundColor: '#f44336',
//         color: 'white',
//         padding: '10px 20px',
//         border: 'none',
//         cursor: 'pointer',
//       },
//       buttonSuccess: {
//         backgroundColor: '#008CBA',
//         color: 'white',
//         padding: '10px 20px',
//         border: 'none',
//         cursor: 'pointer',
//       },
// })