import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Module = () => {
    const [modules, setModules] = useState([
        { categories: [{ sections: [{}] }] },  // Initially one module, one category, one section
    ]);

    const addSection = (moduleIndex, categoryIndex) => {
        const newModules = [...modules];
        newModules[moduleIndex].categories[categoryIndex].sections.push({});
        setModules(newModules);
    };

    const addCategory = (moduleIndex) => {
        const newModules = [...modules];
        newModules[moduleIndex].categories.push({ sections: [{}] });
        setModules(newModules);
    };

    const addModule = () => {
        setModules([...modules, { categories: [{ sections: [{}] }] }]);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
                    <Text style={styles.heading}>Course Structure</Text>

            {modules.map((module, moduleIndex) => (
                <View key={`module-${moduleIndex}`} style={styles.box}>
                    {/* Course Structure Box */}
                    <Text style={styles.heading}>Module</Text>
                    <View style={styles.inputContainer}>
                        <Icon name="user" size={20} color="#000" />
                        <TextInput
                            placeholder="Module name"
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon name="user" size={20} color="#000" />
                        <TextInput
                            placeholder="Important Points to Remember"
                            style={styles.input}
                        />
                    </View>

                    {module.categories.map((category, categoryIndex) => (
                        <View key={`category-${moduleIndex}-${categoryIndex}`} style={styles.box}>
                            {/* Category Box */}
                            <Text style={styles.heading}>Category</Text>
                            <View style={styles.inputContainer}>
                                <Icon name="user" size={20} color="#000" />
                                <TextInput
                                    placeholder="Category name"
                                    style={styles.input}
                                />
                            </View>

                            {category.sections.map((section, sectionIndex) => (
                                <View key={`section-${moduleIndex}-${categoryIndex}-${sectionIndex}`} style={styles.box}>
                                    {/* Section Box */}
                                    <Text style={styles.heading}>Section</Text>
                                    <View style={styles.inputContainer}>
                                        <Icon name="user" size={20} color="#000" />
                                        <TextInput
                                            placeholder="Section Name"
                                            style={styles.input}
                                        />
                                    </View>
                                    <View style={styles.inputContainer}>
                                        <Icon name="user" size={20} color="#000" />
                                        <TextInput
                                            placeholder="Introduction"
                                            style={styles.input}
                                        />
                                    </View>
                                    <View style={styles.inputContainer}>
                                        <Icon name="user" size={20} color="#000" />
                                        <TextInput
                                            placeholder="Additional Benefits"
                                            style={styles.input}
                                        />
                                    </View>
                                </View>
                            ))}

                            {/* Add Section Button */}
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => addSection(moduleIndex, categoryIndex)}
                            >
                                <Text style={styles.buttonText}>ADD SECTION</Text>
                            </TouchableOpacity>
                        </View>
                    ))}

                    {/* Add Category Button */}
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => addCategory(moduleIndex)}
                    >
                        <Text style={styles.buttonText}>ADD CATEGORY</Text>
                    </TouchableOpacity>
                </View>
            ))}

            {/* Add Module Button */}
            <TouchableOpacity style={styles.button} onPress={addModule}>
                <Text style={styles.buttonText}>ADD MODULE</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default Module;

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    box: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
    },
    input: {
        flex: 1,
        marginLeft: 10,
    },
    button: {
        backgroundColor: '#4CAF50',
        padding: 15,
        marginVertical: 5,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});






























// import React from 'react';
// import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// import { addModule, addCategory, addSection, addFile  } from '../redux/slices/ModuleSlice';
// //import { addModule, addCategory, addSection, addFile } from './ModuleSlice';

// const Module = () => {

//     const dispatch = useDispatch();
//     const modules = useSelector((state) => state.modules.modules);

//     // Add a module
//     const handleAddModule = () => {
//         dispatch(addModule());
//     };

//     // Add a category inside a module
//     const handleAddCategory = (moduleId) => {
//         dispatch(addCategory({ moduleId }));
//     };

//     // Add a section inside a category
//     const handleAddSection = (moduleId, categoryId) => {
//         dispatch(addSection({ moduleId, categoryId }));
//     };

//     // Add a file inside a section
//     const handleAddFile = (moduleId, categoryId, sectionId) => {
//         dispatch(addFile({ moduleId, categoryId, sectionId }));
//     };




//     return (
//         <ScrollView style={styles.container}>
//             {modules.map((module) => (
//                 <View key={module.moduleId} style={styles.moduleBox}>
//                     <Text style={styles.heading}>Module Name: {module.moduleName}</Text>
//                     <Text>Important Points: {module.importantPoints}</Text>

//                     {module.categories.map((category) => (
//                         <View key={category.categoryId} style={styles.categoryBox}>
//                             <Text style={styles.heading}>Category Name: {category.categoryName}</Text>

//                             {category.sections.map((section) => (
//                                 <View key={section.sectionId} style={styles.sectionBox}>
//                                     <Text style={styles.heading}>Section Name: {section.sectionName}</Text>

//                                     {section.files.map((file) => (
//                                         <View key={file.fileId} style={styles.fileBox}>
//                                             <Text>File Name: {file.fileName}</Text>
//                                             <Text>Summary: {file.summary}</Text>
//                                             <Text>Key Points: {file.keyPoints}</Text>
//                                         </View>
//                                     ))}

//                                     <TouchableOpacity
//                                         style={styles.addButton}
//                                         onPress={() => handleAddFile(module.moduleId, category.categoryId, section.sectionId)}
//                                     >
//                                         <Text style={styles.buttonText}>ADD FILE</Text>
//                                     </TouchableOpacity>
//                                 </View>
//                             ))}

//                             <TouchableOpacity
//                                 style={styles.addButton}
//                                 onPress={() => handleAddSection(module.moduleId, category.categoryId)}
//                             >
//                                 <Text style={styles.buttonText}>ADD SECTION</Text>
//                             </TouchableOpacity>
//                         </View>
//                     ))}

//                     <TouchableOpacity
//                         style={styles.addButton}
//                         onPress={() => handleAddCategory(module.moduleId)}
//                     >
//                         <Text style={styles.buttonText}>ADD CATEGORY</Text>
//                     </TouchableOpacity>
//                 </View>
//             ))}

//             <TouchableOpacity style={styles.addButton} onPress={handleAddModule}>
//                 <Text style={styles.buttonText}>ADD MODULE</Text>
//             </TouchableOpacity>
//         </ScrollView>
//     );
// };

// export default Module

// const styles = StyleSheet.create({

//     container: {
//         flex: 1,
//         padding: 20,
//       },
//       moduleBox: {
//         borderWidth: 1,
//         padding: 10,
//         marginBottom: 20,
//       },
//       categoryBox: {
//         borderWidth: 1,
//         padding: 10,
//         marginBottom: 10,
//       },
//       sectionBox: {
//         borderWidth: 1,
//         padding: 10,
//         marginBottom: 10,
//       },
//       fileBox: {
//         borderWidth: 1,
//         padding: 10,
//         marginBottom: 10,
//       },
//       addButton: {
//         backgroundColor: '#28a745',
//         padding: 10,
//         marginVertical: 5,
//         alignItems: 'center',
//       },
//       buttonText: {
//         color: 'white',
//         fontWeight: 'bold',
//       },
//       heading: {
//         fontWeight: 'bold',
//         marginBottom: 5,
//       }

// })















// import React, { useState } from 'react';
// import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { useDispatch, useSelector } from 'react-redux';
// import { addModule, addCategory, addSection, addFile } from '../redux/slices/ModuleSlice';  // import actions

// const Module = () => {
//     const [moduleName, setModuleName] = useState('');
//     const [importantPoints, setImportantPoints] = useState('');
//     const [categoryName, setCategoryName] = useState('');
//     const [sectionName, setSectionName] = useState('');
//     const [fileName, setFileName] = useState('');
//     const [summary, setSummary] = useState('');
//     const [keyPoints, setKeyPoints] = useState('');

//     const modules = useSelector((state) => state.modules.modules);  // Get the modules from Redux state
//     const dispatch = useDispatch();

//     // Handlers to dispatch actions to Redux
//     const handleAddModule = () => {
//         dispatch(addModule({ moduleName, importantPoints }));

//         //dispatch(addModule());
//     };

//     const handleAddCategory = (moduleId) => {
//         dispatch(addCategory({ moduleId: 1, categoryName }));
//         //dispatch(addCategory({ moduleId }));
//     };

//     const handleAddSection = (moduleId, categoryId) => {
//         dispatch(addSection({ moduleId: 1, categoryId: 1, sectionName, introduction, additionalBenefits }));
//         //dispatch(addSection({ moduleId, categoryId }));
//     };

//     const handleAddFile = (moduleId, categoryId, sectionId) => {
//         dispatch(addFile({ moduleId: 1, categoryId: 1, sectionId: 1, fileName, summary, keyPoints }));
//         //dispatch(addFile({ moduleId, categoryId, sectionId }));
//     };

//     return (
//         <ScrollView contentContainerStyle={styles.container}>
//             {/* Course Structure Box */}
//             <View style={styles.box}>
//                 <Text style={styles.heading}>Course Structure</Text>
//                 <View style={styles.inputContainer}>
//                     <Icon name="user" size={20} color="#000" />
//                     <TextInput
//                         placeholder="Module name"
//                         style={styles.input}
//                         value={moduleName}
//                         onChangeText={setModuleName}
//                     />
//                 </View>
//                 <View style={styles.inputContainer}>
//                     <Icon name="user" size={20} color="#000" />
//                     <TextInput
//                         placeholder="Important Points to Remember"
//                         style={styles.input}
//                         value={importantPoints}
//                         onChangeText={setImportantPoints}
//                     />
//                 </View>
//                 {/* Add Module Button */}
//                 <TouchableOpacity style={styles.button} onPress={handleAddModule}>
//                     <Text style={styles.buttonText}>ADD MODULE</Text>
//                 </TouchableOpacity>

//                 {/* Iterate over modules */}
//                 {modules.map((module) => (
//                     <View key={module.moduleId} style={styles.box}>
//                         <Text style={styles.heading}>Module Name: {module.moduleName}</Text>

//                         {/* Category Box */}
//                         {module.categories.map((category) => (
//                             <View key={category.categoryId} style={styles.box}>
//                                 <Text style={styles.heading}>Category Name: {category.categoryName}</Text>

//                                 {/* Section Box */}
//                                 {category.sections.map((section) => (
//                                     <View key={section.sectionId} style={styles.box}>
//                                         <Text style={styles.heading}>Section Name: {section.sectionName}</Text>

//                                         {/* Files in Section */}
//                                         {section.files.map((file) => (
//                                             <View key={file.fileId} style={styles.fileBox}>
//                                                 <Text>File Name: {file.fileName}</Text>
//                                                 <Text>Summary: {file.summary}</Text>
//                                                 <Text>Key Points: {file.keyPoints}</Text>
//                                             </View>
//                                         ))}

//                                         {/* Add File Button */}
//                                         <TouchableOpacity
//                                             style={styles.button}
//                                             onPress={() => handleAddFile(module.moduleId, category.categoryId, section.sectionId)}
//                                         >
//                                             <Text style={styles.buttonText}>ADD FILE</Text>
//                                         </TouchableOpacity>
//                                     </View>
//                                 ))}

//                                 {/* Add Section Button */}
//                                 <TouchableOpacity
//                                     style={styles.button}
//                                     onPress={() => handleAddSection(module.moduleId, category.categoryId)}
//                                 >
//                                     <Text style={styles.buttonText}>ADD SECTION</Text>
//                                 </TouchableOpacity>
//                             </View>
//                         ))}

//                         {/* Add Category Button */}
//                         <TouchableOpacity
//                             style={styles.button}
//                             onPress={() => handleAddCategory(module.moduleId)}
//                         >
//                             <Text style={styles.buttonText}>ADD CATEGORY</Text>
//                         </TouchableOpacity>
//                     </View>
//                 ))}
//             </View>
//         </ScrollView>
//     );
// };

// export default Module;

// const styles = StyleSheet.create({
//     container: {
//         padding: 20,
//     },
//     box: {
//         borderWidth: 1,
//         borderColor: '#ddd',
//         borderRadius: 8,
//         padding: 10,
//         marginBottom: 10,
//     },
//     heading: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginVertical: 10,
//     },
//     inputContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         borderWidth: 1,
//         borderColor: '#ddd',
//         borderRadius: 8,
//         padding: 10,
//         marginBottom: 10,
//     },
//     input: {
//         flex: 1,
//         marginLeft: 10,
//     },
//     button: {
//         backgroundColor: '#4CAF50',
//         padding: 15,
//         marginVertical: 5,
//         borderRadius: 5,
//         alignItems: 'center',
//     },
//     buttonText: {
//         color: '#fff',
//         fontSize: 16,
//     },
//     fileBox: {
//         padding: 10,
//         marginVertical: 5,
//         borderWidth: 1,
//         borderColor: '#ccc',
//     },
// });























// Original Code//

// import React, { useState } from 'react';
// import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const Module = () => {
//     const [moduleName, setModuleName] = useState('');
//     const [importantPoints, setImportantPoints] = useState('');
//     const [categoryName, setCategoryName] = useState('');
//     const [sectionName, setSectionName] = useState('');
//     const [fileName, setFileName] = useState('');
//     const [summary, setSummary] = useState('');
//     const [keyPoints, setKeyPoints] = useState('');



//     return (
//         <ScrollView contentContainerStyle={styles.container}>
//         {/* Course Structure Box */}
//         <View style={styles.box}>
//           <Text style={styles.heading}>Course Structure</Text>
//           <View style={styles.inputContainer}>
//             <Icon name="user" size={20} color="#000" />
//             <TextInput
//               placeholder="Module name"
//               style={styles.input}
//               value={moduleName}
//               onChangeText={setModuleName}
//             />
//           </View>
//           <View style={styles.inputContainer}>
//             <Icon name="user" size={20} color="#000" />
//             <TextInput
//               placeholder="Important Points to Remember"
//               style={styles.input}
//               value={importantPoints}
//               onChangeText={setImportantPoints}
//             />
//           </View>
//           {/* Add Module Button */}
//           {/* <TouchableOpacity style={styles.button}>
//             <Text style={styles.buttonText}>ADD MODULE</Text>
//           </TouchableOpacity> */}
  
//           {/* Category Box */}
//           <View style={styles.box}>
//             <Text style={styles.heading}>Category</Text>
//             <View style={styles.inputContainer}>
//               <Icon name="user" size={20} color="#000" />
//               <TextInput
//                 placeholder="Category name"
//                 style={styles.input}
//                 value={categoryName}
//                 onChangeText={setCategoryName}
//               />
//             </View>
//             {/* Add Category Button */}
//             {/* <TouchableOpacity style={styles.button}>
//               <Text style={styles.buttonText}>ADD CATEGORY</Text>
//             </TouchableOpacity> */}
  
//             {/* Section Box */}
//             <View style={styles.box}>
//               <Text style={styles.heading}>Section</Text>
//               <View style={styles.inputContainer}>
//                 <Icon name="user" size={20} color="#000" />
//                 <TextInput
//                   placeholder="Section Name"
//                   style={styles.input}
//                   value={sectionName}
//                   onChangeText={setSectionName}
//                 />
//               </View>
//               <View style={styles.inputContainer}>
//                 <Icon name="user" size={20} color="#000" />
//                 <TextInput
//                   placeholder="Introduction"
//                   style={styles.input}
//                 />
//               </View>
//               <View style={styles.inputContainer}>
//                 <Icon name="user" size={20} color="#000" />
//                 <TextInput
//                   placeholder="Additional Benefits"
//                   style={styles.input}
//                 />
//               </View>
//               {/* Add Section Button */}
//               {/* <TouchableOpacity style={styles.button}>
//                 <Text style={styles.buttonText}>ADD SECTION</Text>
//               </TouchableOpacity> */}
  
//               {/* Upload File Box inside Section */}
//               <View style={styles.box}>
//                 <Text style={styles.heading}>Upload File</Text>
//                 <View style={styles.inputContainer}>
//                   <Icon name="file" size={20} color="#000" />
//                   <TextInput
//                     placeholder="File name"
//                     style={styles.input}
//                     value={fileName}
//                     onChangeText={setFileName}
//                   />
//                 </View>
//                 <View style={styles.inputContainer}>
//                   <Icon name="book" size={20} color="#000" />
//                   <TextInput
//                     placeholder="Summary"
//                     style={styles.input}
//                     value={summary}
//                     onChangeText={setSummary}
//                   />
//                 </View>
//                 <View style={styles.inputContainer}>
//                   <Icon name="list" size={20} color="#000" />
//                   <TextInput
//                     placeholder="Key points"
//                     style={styles.input}
//                     value={keyPoints}
//                     onChangeText={setKeyPoints}
//                   />
//                 </View>
                
//                 {/* Add File Button */}
//                 <TouchableOpacity style={styles.button}>
//                   <Text style={styles.buttonText}>ADD FILES</Text>
//                 </TouchableOpacity>
//               </View>

//               {/* Add Section Button */}
//               <TouchableOpacity style={styles.button}>
//                 <Text style={styles.buttonText}>ADD SECTION</Text>
//               </TouchableOpacity>
//             </View>

//             {/* Add Category Button */}
//             <TouchableOpacity style={styles.button}>
//               <Text style={styles.buttonText}>ADD CATEGORY</Text>
//             </TouchableOpacity>
//           </View>

//           {/* Add Module Button */}
//           <TouchableOpacity style={styles.button}>
//             <Text style={styles.buttonText}>ADD MODULE</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     );
//   };

// export default Module

// const styles = StyleSheet.create({

//     container: {
//         padding: 20,
//       },
//       box: {
//         borderWidth: 1,
//         borderColor: '#ddd',
//         borderRadius: 8,
//         padding: 10,
//         marginBottom: 10,
//       },
//       heading: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginVertical: 10,
//       },
//       inputContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         borderWidth: 1,
//         borderColor: '#ddd',
//         borderRadius: 8,
//         padding: 10,
//         marginBottom: 10,
//       },
//       input: {
//         flex: 1,
//         marginLeft: 10,
//       },
//       button: {
//         backgroundColor: '#4CAF50',
//         padding: 15,
//         marginVertical: 5,
//         borderRadius: 5,
//         alignItems: 'center',
//       },
//       buttonText: {
//         color: '#fff',
//         fontSize: 16,
//       },

// })































//import { StyleSheet, Text, View } from 'react-native'
//import React from 'react'
// import React, { useState } from 'react';
// import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const Module = () => {
//     const [moduleName, setModuleName] = useState('');
//   const [importantPoints, setImportantPoints] = useState('');
//   const [categoryName, setCategoryName] = useState('');
//   const [sectionName, setSectionName] = useState('');
//   const [fileName, setFileName] = useState('');
//   const [summary, setSummary] = useState('');
//   const [keyPoints, setKeyPoints] = useState('');
//     return (
//         <ScrollView contentContainerStyle={styles.container}>
//         {/* Course Structure Box */}
//         <View style={styles.box}>
//           <Text style={styles.heading}>Course Structure</Text>
//           <View style={styles.inputContainer}>
//             <Icon name="user" size={20} color="#000" />
//             <TextInput
//               placeholder="Module name"
//               style={styles.input}
//               value={moduleName}
//               onChangeText={setModuleName}
//             />
//           </View>
//           <View style={styles.inputContainer}>
//             <Icon name="user" size={20} color="#000" />
//             <TextInput
//               placeholder="Important Points to Remember"
//               style={styles.input}
//               value={importantPoints}
//               onChangeText={setImportantPoints}
//             />
//           </View>
//           {/* Add Module Button */}
//           <TouchableOpacity style={styles.button}>
//             <Text style={styles.buttonText}>ADD MODULE</Text>
//           </TouchableOpacity>
  
//           {/* Category Box */}
//           <View style={styles.box}>
//             <Text style={styles.heading}>Category</Text>
//             <View style={styles.inputContainer}>
//               <Icon name="user" size={20} color="#000" />
//               <TextInput
//                 placeholder="Category name"
//                 style={styles.input}
//                 value={categoryName}
//                 onChangeText={setCategoryName}
//               />
//             </View>
//             {/* Add Category Button */}
//             <TouchableOpacity style={styles.button}>
//               <Text style={styles.buttonText}>ADD CATEGORY</Text>
//             </TouchableOpacity>
  
//             {/* Section Box */}
//             <View style={styles.box}>
//               <Text style={styles.heading}>Section</Text>
//               <View style={styles.inputContainer}>
//                 <Icon name="user" size={20} color="#000" />
//                 <TextInput
//                   placeholder="Section Name"
//                   style={styles.input}
//                   value={sectionName}
//                   onChangeText={setSectionName}
//                 />
//               </View>
//               <View style={styles.inputContainer}>
//                 <Icon name="user" size={20} color="#000" />
//                 <TextInput
//                   placeholder="Introduction"
//                   style={styles.input}
//                 />
//               </View>
//               <View style={styles.inputContainer}>
//                 <Icon name="user" size={20} color="#000" />
//                 <TextInput
//                   placeholder="Additional Benefits"
//                   style={styles.input}
//                 />
//               </View>
//               {/* Add Section Button */}
//               <TouchableOpacity style={styles.button}>
//                 <Text style={styles.buttonText}>ADD SECTION</Text>
//               </TouchableOpacity>
  
//               {/* Upload File Box inside Section */}
//               <View style={styles.box}>
//                 <Text style={styles.heading}>Upload File</Text>
//                 <View style={styles.inputContainer}>
//                   <Icon name="file" size={20} color="#000" />
//                   <TextInput
//                     placeholder="File name"
//                     style={styles.input}
//                     value={fileName}
//                     onChangeText={setFileName}
//                   />
//                 </View>
//                 <View style={styles.inputContainer}>
//                   <Icon name="book" size={20} color="#000" />
//                   <TextInput
//                     placeholder="Summary"
//                     style={styles.input}
//                     value={summary}
//                     onChangeText={setSummary}
//                   />
//                 </View>
//                 <View style={styles.inputContainer}>
//                   <Icon name="list" size={20} color="#000" />
//                   <TextInput
//                     placeholder="Key points"
//                     style={styles.input}
//                     value={keyPoints}
//                     onChangeText={setKeyPoints}
//                   />
//                 </View>
//                 {/* Add File Button */}
//                 <TouchableOpacity style={styles.button}>
//                   <Text style={styles.buttonText}>ADD FILES</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//     );
//   };

// export default Module

// const styles = StyleSheet.create({

//     container: {
//         padding: 20,
//       },
//       box: {
//         borderWidth: 1,
//         borderColor: '#ddd',
//         borderRadius: 8,
//         padding: 10,
//         marginBottom: 10,
//       },
//       heading: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginVertical: 10,
//       },
//       inputContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         borderWidth: 1,
//         borderColor: '#ddd',
//         borderRadius: 8,
//         padding: 10,
//         marginBottom: 10,
//       },
//       input: {
//         flex: 1,
//         marginLeft: 10,
//       },
//       button: {
//         backgroundColor: '#4CAF50',
//         padding: 15,
//         marginVertical: 5,
//         borderRadius: 5,
//         alignItems: 'center',
//       },
//       buttonText: {
//         color: '#fff',
//         fontSize: 16,
//       },

// })