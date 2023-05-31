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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TaskList\": function() { return /* binding */ TaskList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_molecules_TaskList_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/molecules/TaskList.module.scss */ \"./components/molecules/TaskList.module.scss\");\n/* harmony import */ var components_molecules_TaskList_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(components_molecules_TaskList_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Add */ \"./node_modules/@mui/icons-material/Add.js\");\n/* harmony import */ var ress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ress */ \"./node_modules/ress/dist/ress.min.css\");\n/* harmony import */ var ress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ress__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _atoms_TaskTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../atoms/TaskTitle */ \"./components/atoms/TaskTitle.tsx\");\n/* harmony import */ var _ModalFrame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ModalFrame */ \"./components/molecules/ModalFrame.tsx\");\n\n\n\n\n\n\nconst TaskList = (props)=>{\n    const openModal = (listNo, taskNo)=>{\n        let node = document.getElementById(\"modal__\".concat(listNo).concat(taskNo));\n        if (node) {\n            node.style.display = \"block\";\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            props.listElement.map((taskElement, taskNo)=>{\n                if (taskNo != 0) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_TaskTitle__WEBPACK_IMPORTED_MODULE_2__.TaskTitle, {\n                                    taskNo: taskNo,\n                                    listNo: props.listNo,\n                                    taskMouseDown: props.taskMouseDown,\n                                    grabTaskNo: props.grabTaskNo,\n                                    altGrabListNo: props.altGrabListNo,\n                                    trans: props.trans,\n                                    taskElement: taskElement,\n                                    openModal: openModal\n                                }, taskNo, false, {\n                                    fileName: \"/Applications/MAMP/htdocs/react+nextjs+typescript/nextjs/tasktool-app/components/molecules/TaskList.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ModalFrame__WEBPACK_IMPORTED_MODULE_3__.ModalFrame, {\n                                    listNo: props.listNo,\n                                    taskNo: taskNo,\n                                    onDeleteTask: props.onDeleteTask,\n                                    onChangeElement: props.onChangeElement,\n                                    taskElement: taskElement,\n                                    closeModal: props.closeModal\n                                }, void 0, false, {\n                                    fileName: \"/Applications/MAMP/htdocs/react+nextjs+typescript/nextjs/tasktool-app/components/molecules/TaskList.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Applications/MAMP/htdocs/react+nextjs+typescript/nextjs/tasktool-app/components/molecules/TaskList.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false);\n                }\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    className: (components_molecules_TaskList_module_scss__WEBPACK_IMPORTED_MODULE_5___default().addIcon),\n                    fontSize: \"large\",\n                    onClick: props.onClickAddTask,\n                    id: String(props.index)\n                }, void 0, false, {\n                    fileName: \"/Applications/MAMP/htdocs/react+nextjs+typescript/nextjs/tasktool-app/components/molecules/TaskList.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/react+nextjs+typescript/nextjs/tasktool-app/components/molecules/TaskList.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c = TaskList;\nvar _c;\n$RefreshReg$(_c, \"TaskList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21vbGVjdWxlcy9UYXNrTGlzdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDc0U7QUFDeEI7QUFDaEM7QUFDaUM7QUFDTDtBQXFCbkMsTUFBTUksV0FBc0IsQ0FBQ0MsUUFBVTtJQUU1QyxNQUFNQyxZQUFZLENBQUNDLFFBQWdCQyxTQUFtQjtRQUNwRCxJQUFJQyxPQUFPQyxTQUFTQyxjQUFjLENBQUMsVUFBbUJILE9BQVRELFFBQWdCLE9BQVBDO1FBQ3RELElBQUlDLE1BQU07WUFDUkEsS0FBS0csS0FBSyxDQUFDQyxPQUFPLEdBQUc7UUFDdkIsQ0FBQztJQUNIO0lBRUEscUJBQ0U7O1lBQ0dSLE1BQU1TLFdBQVcsQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLGFBQWtCUixTQUFtQjtnQkFDM0QsSUFBSUEsVUFBVSxHQUFHO29CQUNmLHFCQUNFO2tDQUNFLDRFQUFDUzs7OENBQ0MsOERBQUNmLHVEQUFTQTtvQ0FBQ00sUUFBUUE7b0NBQVFELFFBQVFGLE1BQU1FLE1BQU07b0NBQUVXLGVBQWViLE1BQU1hLGFBQWE7b0NBQUVDLFlBQVlkLE1BQU1jLFVBQVU7b0NBQUVDLGVBQWVmLE1BQU1lLGFBQWE7b0NBQUVDLE9BQU9oQixNQUFNZ0IsS0FBSztvQ0FBRUwsYUFBYUE7b0NBQWFWLFdBQVdBO21DQUFnQkU7Ozs7OzhDQUVoTyw4REFBQ0wsbURBQVVBO29DQUFDSSxRQUFRRixNQUFNRSxNQUFNO29DQUFFQyxRQUFRQTtvQ0FBUWMsY0FBY2pCLE1BQU1pQixZQUFZO29DQUFFQyxpQkFBaUJsQixNQUFNa0IsZUFBZTtvQ0FBRVAsYUFBYUE7b0NBQWFRLFlBQVluQixNQUFNbUIsVUFBVTs7Ozs7Ozs7Ozs7OztnQkFJMUwsQ0FBQztZQUNIOzBCQUNBLDhEQUFDUDswQkFDQyw0RUFBQ2hCLCtEQUFPQTtvQkFDTndCLFdBQVd6QiwwRkFBc0I7b0JBQ2pDMkIsVUFBUztvQkFDVEMsU0FBU3ZCLE1BQU13QixjQUFjO29CQUM3QkMsSUFBSUMsT0FBTzFCLE1BQU0yQixLQUFLOzs7Ozs7Ozs7Ozs7O0FBSWhDLEVBQUM7S0FqQ1k1QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21vbGVjdWxlcy9UYXNrTGlzdC50c3g/ZWNlMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01vdXNlRXZlbnQsIFJlYWN0Tm9kZSwgRkMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZV90YXNrTGlzdCBmcm9tIFwiY29tcG9uZW50cy9tb2xlY3VsZXMvVGFza0xpc3QubW9kdWxlLnNjc3NcIlxuaW1wb3J0IEFkZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BZGQnO1xuaW1wb3J0ICdyZXNzJztcbmltcG9ydCB7IFRhc2tUaXRsZSB9IGZyb20gJy4uL2F0b21zL1Rhc2tUaXRsZSc7XG5pbXBvcnQgeyBNb2RhbEZyYW1lIH0gZnJvbSAnLi9Nb2RhbEZyYW1lJztcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi4vLi4vdHlwZXMvdGFza1wiO1xuXG5cbnR5cGUgVGFza0xpc3QgPSBbc3RyaW5nLCAuLi5UYXNrW11dO1xuXG50eXBlIFByb3BzID0ge1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgbGlzdEVsZW1lbnQ6VGFza0xpc3Q7XG4gIGluZGV4OiBudW1iZXI7XG4gIGxpc3RObzogbnVtYmVyO1xuICBncmFiVGFza05vOiBudW1iZXIgfCBudWxsO1xuICBhbHRHcmFiTGlzdE5vOiBudW1iZXIgfCBudWxsO1xuICB0cmFuczogYW55O1xuICB0YXNrTW91c2VEb3duOiAoZXZlbnQ6TW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHZvaWQ7XG4gIG9uQ2xpY2tBZGRUYXNrOiAoZXZlbnQ6IE1vdXNlRXZlbnQ8U1ZHU1ZHRWxlbWVudD4pID0+IHZvaWQ7XG4gIG9uQ2hhbmdlRWxlbWVudDogKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudD4sbGlzdE5vOiBudW1iZXIsIHRhc2tObzogbnVtYmVyLCB0YXNrS2V5OiBzdHJpbmcpID0+IHZvaWQ7XG4gIG9uRGVsZXRlVGFzazoobGlzdE5vOiBudW1iZXIsdGFza05vOiBudW1iZXIpID0+IHZvaWQ7XG4gIGNsb3NlTW9kYWw6KGxpc3RObzogbnVtYmVyLHRhc2tObzogbnVtYmVyKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgVGFza0xpc3Q6IEZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IG9wZW5Nb2RhbCA9IChsaXN0Tm86IG51bWJlciwgdGFza05vOiBudW1iZXIpID0+IHtcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBtb2RhbF9fJHtsaXN0Tm99JHt0YXNrTm99YClcbiAgICBpZiAobm9kZSkge1xuICAgICAgbm9kZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7cHJvcHMubGlzdEVsZW1lbnQubWFwKCh0YXNrRWxlbWVudDogYW55LCB0YXNrTm86IG51bWJlcikgPT4ge1xuICAgICAgICBpZiAodGFza05vICE9IDApIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRkID5cbiAgICAgICAgICAgICAgICA8VGFza1RpdGxlIHRhc2tObz17dGFza05vfSBsaXN0Tm89e3Byb3BzLmxpc3ROb30gdGFza01vdXNlRG93bj17cHJvcHMudGFza01vdXNlRG93bn0gZ3JhYlRhc2tObz17cHJvcHMuZ3JhYlRhc2tOb30gYWx0R3JhYkxpc3RObz17cHJvcHMuYWx0R3JhYkxpc3ROb30gdHJhbnM9e3Byb3BzLnRyYW5zfSB0YXNrRWxlbWVudD17dGFza0VsZW1lbnR9IG9wZW5Nb2RhbD17b3Blbk1vZGFsfSBrZXk9e3Rhc2tOb30+PC9UYXNrVGl0bGU+XG5cbiAgICAgICAgICAgICAgICA8TW9kYWxGcmFtZSBsaXN0Tm89e3Byb3BzLmxpc3ROb30gdGFza05vPXt0YXNrTm99IG9uRGVsZXRlVGFzaz17cHJvcHMub25EZWxldGVUYXNrfSBvbkNoYW5nZUVsZW1lbnQ9e3Byb3BzLm9uQ2hhbmdlRWxlbWVudH0gdGFza0VsZW1lbnQ9e3Rhc2tFbGVtZW50fSBjbG9zZU1vZGFsPXtwcm9wcy5jbG9zZU1vZGFsfSA+PC9Nb2RhbEZyYW1lPlxuICAgICAgICAgICAgICA8L2RkPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KX1cbiAgICAgIDxkZD5cbiAgICAgICAgPEFkZEljb25cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlX3Rhc2tMaXN0LmFkZEljb259XG4gICAgICAgICAgZm9udFNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgb25DbGljaz17cHJvcHMub25DbGlja0FkZFRhc2t9XG4gICAgICAgICAgaWQ9e1N0cmluZyhwcm9wcy5pbmRleCl9IC8+XG4gICAgICA8L2RkPlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsic3R5bGVfdGFza0xpc3QiLCJBZGRJY29uIiwiVGFza1RpdGxlIiwiTW9kYWxGcmFtZSIsIlRhc2tMaXN0IiwicHJvcHMiLCJvcGVuTW9kYWwiLCJsaXN0Tm8iLCJ0YXNrTm8iLCJub2RlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZGlzcGxheSIsImxpc3RFbGVtZW50IiwibWFwIiwidGFza0VsZW1lbnQiLCJkZCIsInRhc2tNb3VzZURvd24iLCJncmFiVGFza05vIiwiYWx0R3JhYkxpc3RObyIsInRyYW5zIiwib25EZWxldGVUYXNrIiwib25DaGFuZ2VFbGVtZW50IiwiY2xvc2VNb2RhbCIsImNsYXNzTmFtZSIsImFkZEljb24iLCJmb250U2l6ZSIsIm9uQ2xpY2siLCJvbkNsaWNrQWRkVGFzayIsImlkIiwiU3RyaW5nIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/molecules/TaskList.tsx\n"));

/***/ })

});