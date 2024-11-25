// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   modules: [
//     {
//       moduleId: 1,
//       moduleName: '',
//       importantPoints: '',
//       categories: [
//         {
//           categoryId: 1,
//           categoryName: '',
//           sections: [
//             {
//               sectionId: 1,
//               sectionName: '',
//               files: [
//                 {
//                   fileId: 1,
//                   fileName: '',
//                   summary: '',
//                   keyPoints: ''
//                 }
//               ]
//             }
//           ]
//         }
//       ]
//     }
//   ]
// };

// const moduleSlice = createSlice({
//   name: 'modules',
//   initialState,
//   reducers: {
//     addFile: (state, action) => {
//       const { moduleId, categoryId, sectionId } = action.payload;
//       const module = state.modules.find(mod => mod.moduleId === moduleId);
//       const category = module.categories.find(cat => cat.categoryId === categoryId);
//       const section = category.sections.find(sec => sec.sectionId === sectionId);

//       section.files.push({
//         fileId: section.files.length + 1,
//         fileName: '',
//         summary: '',
//         keyPoints: ''
//       });
//     },
//     addSection: (state, action) => {
//       const { moduleId, categoryId } = action.payload;
//       const module = state.modules.find(mod => mod.moduleId === moduleId);
//       const category = module.categories.find(cat => cat.categoryId === categoryId);

//       category.sections.push({
//         sectionId: category.sections.length + 1,
//         sectionName: '',
//         files: [
//           {
//             fileId: 1,
//             fileName: '',
//             summary: '',
//             keyPoints: ''
//           }
//         ]
//       });
//     },
//     addCategory: (state, action) => {
//       const { moduleId } = action.payload;
//       const module = state.modules.find(mod => mod.moduleId === moduleId);

//       module.categories.push({
//         categoryId: module.categories.length + 1,
//         categoryName: '',
//         sections: [
//           {
//             sectionId: 1,
//             sectionName: '',
//             files: [
//               {
//                 fileId: 1,
//                 fileName: '',
//                 summary: '',
//                 keyPoints: ''
//               }
//             ]
//           }
//         ]
//       });
//     },
//     addModule: (state) => {
//       state.modules.push({
//         moduleId: state.modules.length + 1,
//         moduleName: '',
//         importantPoints: '',
//         categories: [
//           {
//             categoryId: 1,
//             categoryName: '',
//             sections: [
//               {
//                 sectionId: 1,
//                 sectionName: '',
//                 files: [
//                   {
//                     fileId: 1,
//                     fileName: '',
//                     summary: '',
//                     keyPoints: ''
//                   }
//                 ]
//               }
//             ]
//           }
//         ]
//       });
//     },
//     updateModule: (state, action) => {
//       const { moduleId, moduleName, importantPoints } = action.payload;
//       const module = state.modules.find(mod => mod.moduleId === moduleId);
//       module.moduleName = moduleName;
//       module.importantPoints = importantPoints;
//     },
//     updateCategory: (state, action) => {
//       const { moduleId, categoryId, categoryName } = action.payload;
//       const module = state.modules.find(mod => mod.moduleId === moduleId);
//       const category = module.categories.find(cat => cat.categoryId === categoryId);
//       category.categoryName = categoryName;
//     },
//     updateSection: (state, action) => {
//       const { moduleId, categoryId, sectionId, sectionName } = action.payload;
//       const module = state.modules.find(mod => mod.moduleId === moduleId);
//       const category = module.categories.find(cat => cat.categoryId === categoryId);
//       const section = category.sections.find(sec => sec.sectionId === sectionId);
//       section.sectionName = sectionName;
//     },
//     updateFile: (state, action) => {
//       const { moduleId, categoryId, sectionId, fileId, fileName, summary, keyPoints } = action.payload;
//       const module = state.modules.find(mod => mod.moduleId === moduleId);
//       const category = module.categories.find(cat => cat.categoryId === categoryId);
//       const section = category.sections.find(sec => sec.sectionId === sectionId);
//       const file = section.files.find(file => file.fileId === fileId);
//       file.fileName = fileName;
//       file.summary = summary;
//       file.keyPoints = keyPoints;
//     }
//   }
// });

// export const { addFile, addSection, addCategory, addModule, updateModule, updateCategory, updateSection, updateFile } = moduleSlice.actions;

// export default moduleSlice.reducer;
















import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modules: [
    {
      moduleId: 1,
      moduleName: '',
      importantPoints: '',
      categories: [
        {
          categoryId: 1,
          categoryName: '',
          sections: [
            {
              sectionId: 1,
              sectionName: '',
              introduction: '',
              additionalBenefits: '',
              files: [
                {
                  fileId: 1,
                  fileName: '',
                  summary: '',
                  keyPoints: ''
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const moduleSlice = createSlice({
  name: 'modules',
  initialState,
  reducers: {
    // Add a new module
    addModule: (state, action) => {
      state.modules.push({
        moduleId: state.modules.length + 1,
        moduleName: action.payload.moduleName,
        importantPoints: action.payload.importantPoints,
        categories: [
          {
            categoryId: 1,
            categoryName: '',
            sections: [
              {
                sectionId: 1,
                sectionName: '',
                introduction: '',
                additionalBenefits: '',
                files: [
                  {
                    fileId: 1,
                    fileName: '',
                    summary: '',
                    keyPoints: ''
                  }
                ]
              }
            ]
          }
        ]
      });
    },
    // Add a new category to a module
    addCategory: (state, action) => {
      const { moduleId, categoryName } = action.payload;
      const module = state.modules.find((mod) => mod.moduleId === moduleId);
      module.categories.push({
        categoryId: module.categories.length + 1,
        categoryName,
        sections: [
          {
            sectionId: 1,
            sectionName: '',
            introduction: '',
            additionalBenefits: '',
            files: [
              {
                fileId: 1,
                fileName: '',
                summary: '',
                keyPoints: ''
              }
            ]
          }
        ]
      });
    },
    // Add a new section to a category
    addSection: (state, action) => {
      const { moduleId, categoryId, sectionName, introduction, additionalBenefits } = action.payload;
      const module = state.modules.find((mod) => mod.moduleId === moduleId);
      const category = module.categories.find((cat) => cat.categoryId === categoryId);

      category.sections.push({
        sectionId: category.sections.length + 1,
        sectionName,
        introduction,
        additionalBenefits,
        files: [
          {
            fileId: 1,
            fileName: '',
            summary: '',
            keyPoints: ''
          }
        ]
      });
    },
    // Add a new file to a section
    addFile: (state, action) => {
      const { moduleId, categoryId, sectionId, fileName, summary, keyPoints } = action.payload;
      const module = state.modules.find((mod) => mod.moduleId === moduleId);
      const category = module.categories.find((cat) => cat.categoryId === categoryId);
      const section = category.sections.find((sec) => sec.sectionId === sectionId);

      section.files.push({
        fileId: section.files.length + 1,
        fileName,
        summary,
        keyPoints
      });
    }
  }
});

// Export the actions
export const { addModule, addCategory, addSection, addFile } = moduleSlice.actions;

export default moduleSlice.reducer;
