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

/***/ "./components/organisms/Header.tsx":
/*!*****************************************!*\
  !*** ./components/organisms/Header.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hook_useNowDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hook/useNowDate */ \"./hook/useNowDate.tsx\");\n/* harmony import */ var components_organisms_Header_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/organisms/Header.module.scss */ \"./components/organisms/Header.module.scss\");\n/* harmony import */ var components_organisms_Header_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(components_organisms_Header_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var ress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ress */ \"./node_modules/ress/dist/ress.min.css\");\n/* harmony import */ var ress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ress__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst Header = ()=>{\n    _s();\n    const nowDate = (0,_hook_useNowDate__WEBPACK_IMPORTED_MODULE_1__.useNowDate)();\n    const onReset = ()=>{\n        const taskList = [\n            [\n                \"Procttl00\",\n                {\n                    \"title\": \"task00\",\n                    \"date\": \"\".concat(nowDate),\n                    \"comment\": \"txtxtxtxtxtxtxtxtxtxtxt\"\n                },\n                {\n                    \"title\": \"task01\",\n                    \"date\": \"\".concat(nowDate),\n                    \"comment\": \"txtxtxtxtxtxtxtxtxtxtxt\"\n                },\n                {\n                    \"title\": \"task02\",\n                    \"date\": \"\".concat(nowDate),\n                    \"comment\": \"txtxtxtxtxtxtxtxtxtxtxt\"\n                }\n            ],\n            [\n                \"Procttl01\",\n                {\n                    \"title\": \"task03\",\n                    \"date\": \"\".concat(nowDate),\n                    \"comment\": \"txtxtxtxtxtxtxtxtxtxtxt\"\n                },\n                {\n                    \"title\": \"task04\",\n                    \"date\": \"\".concat(nowDate),\n                    \"comment\": \"txtxtxtxtxtxtxtxtxtxtxt\"\n                }\n            ],\n            [\n                \"Procttl02\",\n                {\n                    \"title\": \"task05\",\n                    \"date\": \"\".concat(nowDate),\n                    \"comment\": \"txtxtxtxtxtxtxtxtxtxtxt\"\n                }\n            ]\n        ];\n        let result = confirm(\"初期化します。よろしいですか？\");\n        if (result) {\n            let taskListJson = JSON.stringify(taskList, undefined, 1);\n            localStorage.setItem(\"taskList\", taskListJson);\n            location.reload();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: (components_organisms_Header_module_scss__WEBPACK_IMPORTED_MODULE_3___default().header),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"S\"\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/react+nextjs+typescript/nextjs/tasktool-app/components/organisms/Header.tsx\",\n                lineNumber: 57,\n                columnNumber: 45\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                onClick: ()=>{\n                    onReset();\n                },\n                children: \"初期化する\"\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/react+nextjs+typescript/nextjs/tasktool-app/components/organisms/Header.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Applications/MAMP/htdocs/react+nextjs+typescript/nextjs/tasktool-app/components/organisms/Header.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"pRp4OQxy15Jgo3CVHtQZA7Ge1zs=\", false, function() {\n    return [\n        _hook_useNowDate__WEBPACK_IMPORTED_MODULE_1__.useNowDate\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL29yZ2FuaXNtcy9IZWFkZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFDb0I7QUFDckQ7QUFFTixNQUFNRSxTQUFTLElBQU07O0lBRTFCLE1BQU1DLFVBQVVILDREQUFVQTtJQUUxQixNQUFNSSxVQUFVLElBQU07UUFDcEIsTUFBTUMsV0FBVztZQUNmO2dCQUFDO2dCQUNDO29CQUNFLFNBQVM7b0JBQ1QsUUFBUSxHQUFXLE9BQVJGO29CQUNYLFdBQVc7Z0JBQ2I7Z0JBQ0E7b0JBQ0UsU0FBUztvQkFDVCxRQUFRLEdBQVcsT0FBUkE7b0JBQ1gsV0FBVztnQkFDYjtnQkFDQTtvQkFDRSxTQUFTO29CQUNULFFBQVEsR0FBVyxPQUFSQTtvQkFDWCxXQUFXO2dCQUNiO2FBQUU7WUFFSjtnQkFBQztnQkFDQztvQkFDRSxTQUFTO29CQUNULFFBQVEsR0FBVyxPQUFSQTtvQkFDWCxXQUFXO2dCQUNiO2dCQUNBO29CQUNFLFNBQVM7b0JBQ1QsUUFBUSxHQUFXLE9BQVJBO29CQUNYLFdBQVc7Z0JBQ2I7YUFBRTtZQUVKO2dCQUFDO2dCQUNDO29CQUNFLFNBQVM7b0JBQ1QsUUFBUSxHQUFXLE9BQVJBO29CQUNYLFdBQVc7Z0JBQ2I7YUFBRTtTQUNMO1FBRUQsSUFBSUcsU0FBU0MsUUFBUTtRQUNyQixJQUFJRCxRQUFRO1lBQ1YsSUFBSUUsZUFBZUMsS0FBS0MsU0FBUyxDQUFDTCxVQUFVTSxXQUFXO1lBQ3ZEQyxhQUFhQyxPQUFPLENBQUMsWUFBWUw7WUFDakNNLFNBQVNDLE1BQU07UUFDakIsQ0FBQztJQUNIO0lBRUEscUJBQ0UsOERBQUNDO1FBQU9DLFdBQVdoQix1RkFBbUI7OzBCQUFFLDhEQUFDaUI7MEJBQUc7Ozs7OzswQkFDMUMsOERBQUNDO2dCQUFFQyxTQUFTLElBQU07b0JBQUVoQjtnQkFBVTswQkFBRzs7Ozs7Ozs7Ozs7O0FBRXZDLEVBQUM7R0F2RFlGOztRQUVLRix3REFBVUE7OztLQUZmRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL29yZ2FuaXNtcy9IZWFkZXIudHN4P2NkOWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTm93RGF0ZSB9IGZyb20gXCJAL2hvb2svdXNlTm93RGF0ZVwiXG5pbXBvcnQgc3R5bGVfaGVhZGVyIGZyb20gXCJjb21wb25lbnRzL29yZ2FuaXNtcy9IZWFkZXIubW9kdWxlLnNjc3NcIlxuaW1wb3J0ICdyZXNzJ1xuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuXG4gIGNvbnN0IG5vd0RhdGUgPSB1c2VOb3dEYXRlKCk7XG5cbiAgY29uc3Qgb25SZXNldCA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrTGlzdCA9IFtcbiAgICAgIFsnUHJvY3R0bDAwJyxcbiAgICAgICAge1xuICAgICAgICAgICd0aXRsZSc6ICd0YXNrMDAnLFxuICAgICAgICAgICdkYXRlJzogYCR7bm93RGF0ZX1gLFxuICAgICAgICAgICdjb21tZW50JzogJ3R4dHh0eHR4dHh0eHR4dHh0eHR4dHh0J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ3RpdGxlJzogJ3Rhc2swMScsXG4gICAgICAgICAgJ2RhdGUnOiBgJHtub3dEYXRlfWAsXG4gICAgICAgICAgJ2NvbW1lbnQnOiAndHh0eHR4dHh0eHR4dHh0eHR4dHh0eHQnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAndGl0bGUnOiAndGFzazAyJyxcbiAgICAgICAgICAnZGF0ZSc6IGAke25vd0RhdGV9YCxcbiAgICAgICAgICAnY29tbWVudCc6ICd0eHR4dHh0eHR4dHh0eHR4dHh0eHR4dCdcbiAgICAgICAgfV0sXG5cbiAgICAgIFsnUHJvY3R0bDAxJyxcbiAgICAgICAge1xuICAgICAgICAgICd0aXRsZSc6ICd0YXNrMDMnLFxuICAgICAgICAgICdkYXRlJzogYCR7bm93RGF0ZX1gLFxuICAgICAgICAgICdjb21tZW50JzogJ3R4dHh0eHR4dHh0eHR4dHh0eHR4dHh0J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ3RpdGxlJzogJ3Rhc2swNCcsXG4gICAgICAgICAgJ2RhdGUnOiBgJHtub3dEYXRlfWAsXG4gICAgICAgICAgJ2NvbW1lbnQnOiAndHh0eHR4dHh0eHR4dHh0eHR4dHh0eHQnXG4gICAgICAgIH1dLFxuXG4gICAgICBbJ1Byb2N0dGwwMicsXG4gICAgICAgIHtcbiAgICAgICAgICAndGl0bGUnOiAndGFzazA1JyxcbiAgICAgICAgICAnZGF0ZSc6IGAke25vd0RhdGV9YCxcbiAgICAgICAgICAnY29tbWVudCc6ICd0eHR4dHh0eHR4dHh0eHR4dHh0eHR4dCdcbiAgICAgICAgfV1cbiAgICBdXG5cbiAgICBsZXQgcmVzdWx0ID0gY29uZmlybSgn5Yid5pyf5YyW44GX44G+44GZ44CC44KI44KN44GX44GE44Gn44GZ44GL77yfJyk7XG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgbGV0IHRhc2tMaXN0SnNvbiA9IEpTT04uc3RyaW5naWZ5KHRhc2tMaXN0LCB1bmRlZmluZWQsIDEpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tMaXN0JywgdGFza0xpc3RKc29uKTtcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVfaGVhZGVyLmhlYWRlcn0+PGgxPlM8L2gxPlxuICAgICAgPHAgb25DbGljaz17KCkgPT4geyBvblJlc2V0KCkgfX0+5Yid5pyf5YyW44GZ44KLPC9wPjwvaGVhZGVyPlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlTm93RGF0ZSIsInN0eWxlX2hlYWRlciIsIkhlYWRlciIsIm5vd0RhdGUiLCJvblJlc2V0IiwidGFza0xpc3QiLCJyZXN1bHQiLCJjb25maXJtIiwidGFza0xpc3RKc29uIiwiSlNPTiIsInN0cmluZ2lmeSIsInVuZGVmaW5lZCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJsb2NhdGlvbiIsInJlbG9hZCIsImhlYWRlciIsImNsYXNzTmFtZSIsImgxIiwicCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/organisms/Header.tsx\n"));

/***/ })

});