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

/***/ "./components/molecules/ProcFrame.tsx":
/*!********************************************!*\
  !*** ./components/molecules/ProcFrame.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProcFrame\": function() { return /* binding */ ProcFrame; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_molecules_ProcFrame_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/molecules/ProcFrame.module.scss */ \"./components/molecules/ProcFrame.module.scss\");\n/* harmony import */ var components_molecules_ProcFrame_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(components_molecules_ProcFrame_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ress */ \"./node_modules/ress/dist/ress.min.css\");\n/* harmony import */ var ress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ress__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst ProcFrame = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: (components_molecules_ProcFrame_module_scss__WEBPACK_IMPORTED_MODULE_2___default().list_bg),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (components_molecules_ProcFrame_module_scss__WEBPACK_IMPORTED_MODULE_2___default().list_frame),\n            id: \"List__\".concat(props.index),\n            style: props.grabProcNo == props.index ? props.trans : undefined,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (components_molecules_ProcFrame_module_scss__WEBPACK_IMPORTED_MODULE_2___default().grab_area),\n                    onPointerDown: props.procMouseDown,\n                    id: \"grabArea__\".concat(props.index)\n                }, void 0, false, {\n                    fileName: \"/Applications/MAMP/htdocs/react+nextjs+typescript/nextjs/tasktool-app/components/molecules/ProcFrame.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, undefined),\n                props.children\n            ]\n        }, void 0, true, {\n            fileName: \"/Applications/MAMP/htdocs/react+nextjs+typescript/nextjs/tasktool-app/components/molecules/ProcFrame.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Applications/MAMP/htdocs/react+nextjs+typescript/nextjs/tasktool-app/components/molecules/ProcFrame.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ProcFrame;\nvar _c;\n$RefreshReg$(_c, \"ProcFrame\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21vbGVjdWxlcy9Qcm9jRnJhbWUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ3dFO0FBQzNEO0FBV04sTUFBTUMsWUFBdUIsQ0FBQ0MsUUFBVTtJQUU3QyxxQkFDRSw4REFBQ0M7UUFBR0MsV0FBV0osMkZBQXVCO2tCQUNwQyw0RUFBQ007WUFBSUYsV0FBV0osOEZBQTBCO1lBQUVRLElBQUksU0FBcUIsT0FBWk4sTUFBTU8sS0FBSztZQUNsRUMsT0FBT1IsTUFBTVMsVUFBVSxJQUFJVCxNQUFNTyxLQUFLLEdBQUdQLE1BQU1VLEtBQUssR0FBb0JDLFNBQVM7OzhCQUNqRiw4REFBQ1A7b0JBQ0NGLFdBQVdKLDZGQUF5QjtvQkFDcENlLGVBQWViLE1BQU1jLGFBQWE7b0JBQUVSLElBQUksYUFBeUIsT0FBWk4sTUFBTU8sS0FBSzs7Ozs7O2dCQUdqRVAsTUFBTWUsUUFBUTs7Ozs7Ozs7Ozs7O0FBS3ZCLEVBQUM7S0FoQlloQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21vbGVjdWxlcy9Qcm9jRnJhbWUudHN4PzM5M2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRkMsIENTU1Byb3BlcnRpZXMsIFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgc3R5bGVfcHJvY0ZyYW1lIGZyb20gXCJjb21wb25lbnRzL21vbGVjdWxlcy9Qcm9jRnJhbWUubW9kdWxlLnNjc3NcIlxuaW1wb3J0ICdyZXNzJ1xuXG50eXBlIFByb3BzID0ge1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgaW5kZXg6IG51bWJlcjtcbiAgZ3JhYlByb2NObzogbnVtYmVyIHwgbnVsbDtcbiAgZ3JhYlRhc2tObzogbnVtYmVyIHwgbnVsbDtcbiAgcHJvY01vdXNlRG93bjogKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4gdm9pZDtcbiAgdHJhbnM6IGFueTtcbn1cblxuZXhwb3J0IGNvbnN0IFByb2NGcmFtZTogRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZV9wcm9jRnJhbWUubGlzdF9iZ30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVfcHJvY0ZyYW1lLmxpc3RfZnJhbWV9IGlkPXtgTGlzdF9fJHtwcm9wcy5pbmRleH1gfVxuICAgICAgICBzdHlsZT17cHJvcHMuZ3JhYlByb2NObyA9PSBwcm9wcy5pbmRleCA/IHByb3BzLnRyYW5zIGFzIENTU1Byb3BlcnRpZXMgOiB1bmRlZmluZWR9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZV9wcm9jRnJhbWUuZ3JhYl9hcmVhfVxuICAgICAgICAgIG9uUG9pbnRlckRvd249e3Byb3BzLnByb2NNb3VzZURvd259IGlkPXtgZ3JhYkFyZWFfXyR7cHJvcHMuaW5kZXh9YH0+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cblxuICAgICAgPC9kaXY+XG4gICAgPC9saT5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInN0eWxlX3Byb2NGcmFtZSIsIlByb2NGcmFtZSIsInByb3BzIiwibGkiLCJjbGFzc05hbWUiLCJsaXN0X2JnIiwiZGl2IiwibGlzdF9mcmFtZSIsImlkIiwiaW5kZXgiLCJzdHlsZSIsImdyYWJQcm9jTm8iLCJ0cmFucyIsInVuZGVmaW5lZCIsImdyYWJfYXJlYSIsIm9uUG9pbnRlckRvd24iLCJwcm9jTW91c2VEb3duIiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/molecules/ProcFrame.tsx\n"));

/***/ })

});