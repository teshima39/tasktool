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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ress */ \"./node_modules/ress/dist/ress.min.css\");\n/* harmony import */ var ress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ress__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_organisms_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/organisms/Header */ \"./components/organisms/Header.tsx\");\n/* harmony import */ var _components_organisms_ProcList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/organisms/ProcList */ \"./components/organisms/ProcList.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    var _s1 = $RefreshSig$();\n    /* errors (425, 418, 423)回避のため  */ const [nowDate, setNowDate] = useState(\"\");\n    useEffect(_s1(()=>{\n        _s1();\n        setNowDate(useNowDate());\n    }, \"ZUjhf/wDGWJawoKWG3bJvmUTZ0s=\", true), []);\n    ï;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_organisms_Header__WEBPACK_IMPORTED_MODULE_2__.Header, {}, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/react+nextjs+typescript/nextjs/tasktool-app/pages/index.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                id: \"main\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_organisms_ProcList__WEBPACK_IMPORTED_MODULE_3__.ProcList, {}, void 0, false, {\n                    fileName: \"/Applications/MAMP/htdocs/react+nextjs+typescript/nextjs/tasktool-app/pages/index.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/react+nextjs+typescript/nextjs/tasktool-app/pages/index.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"cYFP0LJyuX9y+kjyiLu4758iyrQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWE7QUFDMEM7QUFDSztBQUU3QyxTQUFTRSxPQUFPOzs7SUFDN0IsZ0NBQWdDLEdBQ2hDLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHQyxTQUFpQjtJQUMvQ0MsY0FBVSxJQUFNOztRQUNkRixXQUFXRztJQUNiLDBDQUFHLEVBQUU7SUFBR0M7SUFFUixxQkFDRTs7MEJBQ0UsOERBQUNSLGdFQUFNQTs7Ozs7MEJBQ1AsOERBQUNTO2dCQUFLQyxJQUFHOzBCQUNQLDRFQUFDVCxvRUFBUUE7Ozs7Ozs7Ozs7OztBQUlqQixDQUFDO0dBZnVCQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3Jlc3MnXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL29yZ2FuaXNtcy9IZWFkZXJcIjtcbmltcG9ydCB7IFByb2NMaXN0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvb3JnYW5pc21zL1Byb2NMaXN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIC8qIGVycm9ycyAoNDI1LCA0MTgsIDQyMynlm57pgb/jga7jgZ/jgoEgICovXG4gIGNvbnN0IFtub3dEYXRlLCBzZXROb3dEYXRlXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldE5vd0RhdGUodXNlTm93RGF0ZSgpKTtcbiAgfSwgW10pOyDDr1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkZXI+PC9IZWFkZXI+XG4gICAgICA8bWFpbiBpZD0nbWFpbic+XG4gICAgICAgIDxQcm9jTGlzdD48L1Byb2NMaXN0PlxuICAgICAgPC9tYWluID5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJQcm9jTGlzdCIsIkhvbWUiLCJub3dEYXRlIiwic2V0Tm93RGF0ZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlTm93RGF0ZSIsIsOvIiwibWFpbiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});