"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/molecules/TaskList.tsx":
/*!*******************************************!*\
  !*** ./components/molecules/TaskList.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TaskList\": function() { return /* binding */ TaskList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_molecules_TaskList_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/molecules/TaskList.module.scss */ \"./components/molecules/TaskList.module.scss\");\n/* harmony import */ var components_molecules_TaskList_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(components_molecules_TaskList_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Add */ \"./node_modules/@mui/icons-material/Add.js\");\n/* harmony import */ var ress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ress */ \"./node_modules/ress/dist/ress.min.css\");\n/* harmony import */ var ress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ress__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _atoms_TaskTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../atoms/TaskTitle */ \"./components/atoms/TaskTitle.tsx\");\n/* harmony import */ var _ModalFrame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ModalFrame */ \"./components/molecules/ModalFrame.tsx\");\n\n\n\n\n\n\nconst TaskList = (props)=>{\n    const openModal = (listNo, taskNo)=>{\n        let node = document.getElementById(\"modal__\".concat(listNo).concat(taskNo));\n        if (node) {\n            node.style.display = \"block\";\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            props.listElement.map((taskElement, taskNo)=>{\n                if (taskNo != 0) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_TaskTitle__WEBPACK_IMPORTED_MODULE_2__.TaskTitle, {\n                                    taskNo: taskNo,\n                                    listNo: props.listNo,\n                                    taskMouseDown: props.taskMouseDown,\n                                    grabTaskNo: props.grabTaskNo,\n                                    altGrabListNo: props.altGrabListNo,\n                                    trans: props.trans,\n                                    taskElement: taskElement,\n                                    openModal: openModal\n                                }, void 0, false, {\n                                    fileName: \"/Applications/MAMP/htdocs/react+nextjs+typescript/nextjs/tasktool-app/components/molecules/TaskList.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ModalFrame__WEBPACK_IMPORTED_MODULE_3__.ModalFrame, {\n                                    listNo: props.listNo,\n                                    taskNo: taskNo,\n                                    onDeleteTask: props.onDeleteTask,\n                                    onChangeElement: props.onChangeElement,\n                                    taskElement: taskElement,\n                                    closeModal: props.closeModal\n                                }, void 0, false, {\n                                    fileName: \"/Applications/MAMP/htdocs/react+nextjs+typescript/nextjs/tasktool-app/components/molecules/TaskList.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Applications/MAMP/htdocs/react+nextjs+typescript/nextjs/tasktool-app/components/molecules/TaskList.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false);\n                }\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    className: (components_molecules_TaskList_module_scss__WEBPACK_IMPORTED_MODULE_5___default().addIcon),\n                    fontSize: \"large\",\n                    onClick: props.onClickAddTask,\n                    id: String(props.index)\n                }, void 0, false, {\n                    fileName: \"/Applications/MAMP/htdocs/react+nextjs+typescript/nextjs/tasktool-app/components/molecules/TaskList.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/react+nextjs+typescript/nextjs/tasktool-app/components/molecules/TaskList.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c = TaskList;\nvar _c;\n$RefreshReg$(_c, \"TaskList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21vbGVjdWxlcy9UYXNrTGlzdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDc0U7QUFDeEI7QUFDaEM7QUFDaUM7QUFDTDtBQXFCbkMsTUFBTUksV0FBc0IsQ0FBQ0MsUUFBVTtJQUU1QyxNQUFNQyxZQUFZLENBQUNDLFFBQWdCQyxTQUFtQjtRQUNwRCxJQUFJQyxPQUFPQyxTQUFTQyxjQUFjLENBQUMsVUFBbUJILE9BQVRELFFBQWdCLE9BQVBDO1FBQ3RELElBQUlDLE1BQU07WUFDUkEsS0FBS0csS0FBSyxDQUFDQyxPQUFPLEdBQUc7UUFDdkIsQ0FBQztJQUNIO0lBRUEscUJBQ0U7O1lBQ0dSLE1BQU1TLFdBQVcsQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLGFBQWtCUixTQUFtQjtnQkFDM0QsSUFBSUEsVUFBVSxHQUFHO29CQUNmLHFCQUNFO2tDQUNFLDRFQUFDUzs7OENBQ0MsOERBQUNmLHVEQUFTQTtvQ0FBQ00sUUFBUUE7b0NBQVFELFFBQVFGLE1BQU1FLE1BQU07b0NBQUVXLGVBQWViLE1BQU1hLGFBQWE7b0NBQUVDLFlBQVlkLE1BQU1jLFVBQVU7b0NBQUVDLGVBQWVmLE1BQU1lLGFBQWE7b0NBQUVDLE9BQU9oQixNQUFNZ0IsS0FBSztvQ0FBRUwsYUFBYUE7b0NBQWFWLFdBQVdBOzs7Ozs7OENBRWhOLDhEQUFDSCxtREFBVUE7b0NBQUNJLFFBQVFGLE1BQU1FLE1BQU07b0NBQUVDLFFBQVFBO29DQUFRYyxjQUFjakIsTUFBTWlCLFlBQVk7b0NBQUVDLGlCQUFpQmxCLE1BQU1rQixlQUFlO29DQUFFUCxhQUFhQTtvQ0FBYVEsWUFBWW5CLE1BQU1tQixVQUFVOzs7Ozs7Ozs7Ozs7O2dCQUkxTCxDQUFDO1lBQ0g7MEJBQ0EsOERBQUNQOzBCQUNDLDRFQUFDaEIsK0RBQU9BO29CQUNOd0IsV0FBV3pCLDBGQUFzQjtvQkFDakMyQixVQUFTO29CQUNUQyxTQUFTdkIsTUFBTXdCLGNBQWM7b0JBQzdCQyxJQUFJQyxPQUFPMUIsTUFBTTJCLEtBQUs7Ozs7Ozs7Ozs7Ozs7QUFJaEMsRUFBQztLQWpDWTVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbW9sZWN1bGVzL1Rhc2tMaXN0LnRzeD9lY2UyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TW91c2VFdmVudCwgUmVhY3ROb2RlLCBGQyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlX3Rhc2tMaXN0IGZyb20gXCJjb21wb25lbnRzL21vbGVjdWxlcy9UYXNrTGlzdC5tb2R1bGUuc2Nzc1wiXG5pbXBvcnQgQWRkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0FkZCc7XG5pbXBvcnQgJ3Jlc3MnO1xuaW1wb3J0IHsgVGFza1RpdGxlIH0gZnJvbSAnLi4vYXRvbXMvVGFza1RpdGxlJztcbmltcG9ydCB7IE1vZGFsRnJhbWUgfSBmcm9tICcuL01vZGFsRnJhbWUnO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuLi8uLi90eXBlcy90YXNrXCI7XG5cblxudHlwZSBUYXNrTGlzdCA9IFtzdHJpbmcsIC4uLlRhc2tbXV07XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICBsaXN0RWxlbWVudDpUYXNrTGlzdDtcbiAgaW5kZXg6IG51bWJlcjtcbiAgbGlzdE5vOiBudW1iZXI7XG4gIGdyYWJUYXNrTm86IG51bWJlciB8IG51bGw7XG4gIGFsdEdyYWJMaXN0Tm86IG51bWJlciB8IG51bGw7XG4gIHRyYW5zOiBhbnk7XG4gIHRhc2tNb3VzZURvd246IChldmVudDpNb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4gdm9pZDtcbiAgb25DbGlja0FkZFRhc2s6IChldmVudDogTW91c2VFdmVudDxTVkdTVkdFbGVtZW50PikgPT4gdm9pZDtcbiAgb25DaGFuZ2VFbGVtZW50OiAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50PixsaXN0Tm86IG51bWJlciwgdGFza05vOiBudW1iZXIsIHRhc2tLZXk6IHN0cmluZykgPT4gdm9pZDtcbiAgb25EZWxldGVUYXNrOihsaXN0Tm86IG51bWJlcix0YXNrTm86IG51bWJlcikgPT4gdm9pZDtcbiAgY2xvc2VNb2RhbDoobGlzdE5vOiBudW1iZXIsdGFza05vOiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBUYXNrTGlzdDogRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3Qgb3Blbk1vZGFsID0gKGxpc3RObzogbnVtYmVyLCB0YXNrTm86IG51bWJlcikgPT4ge1xuICAgIGxldCBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG1vZGFsX18ke2xpc3ROb30ke3Rhc2tOb31gKVxuICAgIGlmIChub2RlKSB7XG4gICAgICBub2RlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtwcm9wcy5saXN0RWxlbWVudC5tYXAoKHRhc2tFbGVtZW50OiBhbnksIHRhc2tObzogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmICh0YXNrTm8gIT0gMCkge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGQ+XG4gICAgICAgICAgICAgICAgPFRhc2tUaXRsZSB0YXNrTm89e3Rhc2tOb30gbGlzdE5vPXtwcm9wcy5saXN0Tm99IHRhc2tNb3VzZURvd249e3Byb3BzLnRhc2tNb3VzZURvd259IGdyYWJUYXNrTm89e3Byb3BzLmdyYWJUYXNrTm99IGFsdEdyYWJMaXN0Tm89e3Byb3BzLmFsdEdyYWJMaXN0Tm99IHRyYW5zPXtwcm9wcy50cmFuc30gdGFza0VsZW1lbnQ9e3Rhc2tFbGVtZW50fSBvcGVuTW9kYWw9e29wZW5Nb2RhbH0+PC9UYXNrVGl0bGU+XG5cbiAgICAgICAgICAgICAgICA8TW9kYWxGcmFtZSBsaXN0Tm89e3Byb3BzLmxpc3ROb30gdGFza05vPXt0YXNrTm99IG9uRGVsZXRlVGFzaz17cHJvcHMub25EZWxldGVUYXNrfSBvbkNoYW5nZUVsZW1lbnQ9e3Byb3BzLm9uQ2hhbmdlRWxlbWVudH0gdGFza0VsZW1lbnQ9e3Rhc2tFbGVtZW50fSBjbG9zZU1vZGFsPXtwcm9wcy5jbG9zZU1vZGFsfT48L01vZGFsRnJhbWU+XG4gICAgICAgICAgICAgIDwvZGQ+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pfVxuICAgICAgPGRkPlxuICAgICAgICA8QWRkSWNvblxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVfdGFza0xpc3QuYWRkSWNvbn1cbiAgICAgICAgICBmb250U2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrQWRkVGFza31cbiAgICAgICAgICBpZD17U3RyaW5nKHByb3BzLmluZGV4KX0gLz5cbiAgICAgIDwvZGQ+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZV90YXNrTGlzdCIsIkFkZEljb24iLCJUYXNrVGl0bGUiLCJNb2RhbEZyYW1lIiwiVGFza0xpc3QiLCJwcm9wcyIsIm9wZW5Nb2RhbCIsImxpc3RObyIsInRhc2tObyIsIm5vZGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJkaXNwbGF5IiwibGlzdEVsZW1lbnQiLCJtYXAiLCJ0YXNrRWxlbWVudCIsImRkIiwidGFza01vdXNlRG93biIsImdyYWJUYXNrTm8iLCJhbHRHcmFiTGlzdE5vIiwidHJhbnMiLCJvbkRlbGV0ZVRhc2siLCJvbkNoYW5nZUVsZW1lbnQiLCJjbG9zZU1vZGFsIiwiY2xhc3NOYW1lIiwiYWRkSWNvbiIsImZvbnRTaXplIiwib25DbGljayIsIm9uQ2xpY2tBZGRUYXNrIiwiaWQiLCJTdHJpbmciLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/molecules/TaskList.tsx\n"));

/***/ })

});