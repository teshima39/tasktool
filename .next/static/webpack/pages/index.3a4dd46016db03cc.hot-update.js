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

/***/ "./components/atoms/TaskTitle.tsx":
/*!****************************************!*\
  !*** ./components/atoms/TaskTitle.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TaskTitle\": function() { return /* binding */ TaskTitle; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_atoms_TaskTitle_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/atoms/TaskTitle.module.scss */ \"./components/atoms/TaskTitle.module.scss\");\n/* harmony import */ var components_atoms_TaskTitle_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(components_atoms_TaskTitle_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/Edit */ \"./node_modules/@mui/icons-material/Edit.js\");\n\n\n\nconst TaskTitle = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onMouseDown: props.taskMouseDown,\n        style: props.altgrabProcNo == props.procNo && props.grabTaskNo == props.taskNo ? props.trans : undefined,\n        className: (components_atoms_TaskTitle_module_scss__WEBPACK_IMPORTED_MODULE_1___default().task_frame),\n        id: \"task__\".concat(props.procNo).concat(props.taskNo),\n        children: [\n            props.taskElement.title,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                className: (components_atoms_TaskTitle_module_scss__WEBPACK_IMPORTED_MODULE_1___default().edit_icon),\n                onClick: ()=>props.openModal(props.procNo, props.taskNo),\n                style: {\n                    width: \"30px\",\n                    height: \"30px\"\n                }\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/react+nextjs+typescript/nextjs/tasktool-app/components/atoms/TaskTitle.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Applications/MAMP/htdocs/react+nextjs+typescript/nextjs/tasktool-app/components/atoms/TaskTitle.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_c = TaskTitle;\nvar _c;\n$RefreshReg$(_c, \"TaskTitle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2F0b21zL1Rhc2tUaXRsZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNvRTtBQUNwQjtBQWN6QyxNQUFNRSxZQUF1QixDQUFDQyxRQUFVO0lBQzdDLHFCQUNFLDhEQUFDQztRQUFJQyxhQUFhRixNQUFNRyxhQUFhO1FBQ25DQyxPQUFPSixNQUFNSyxhQUFhLElBQUlMLE1BQU1NLE1BQU0sSUFBSU4sTUFBTU8sVUFBVSxJQUFJUCxNQUFNUSxNQUFNLEdBQUdSLE1BQU1TLEtBQUssR0FBb0JDLFNBQVM7UUFDekhDLFdBQVdkLDBGQUEwQjtRQUNyQ2dCLElBQUksU0FBd0JiLE9BQWZBLE1BQU1NLE1BQU0sRUFBZ0IsT0FBYk4sTUFBTVEsTUFBTTs7WUFFdkNSLE1BQU1jLFdBQVcsQ0FBQ0MsS0FBSzswQkFFeEIsOERBQUNqQixnRUFBUUE7Z0JBQUNhLFdBQVdkLHlGQUF5QjtnQkFBRW9CLFNBQVMsSUFBTWpCLE1BQU1rQixTQUFTLENBQUNsQixNQUFNTSxNQUFNLEVBQUVOLE1BQU1RLE1BQU07Z0JBQUdKLE9BQU87b0JBQUNlLE9BQU07b0JBQU9DLFFBQU87Z0JBQU87Ozs7Ozs7Ozs7OztBQUdySixFQUFDO0tBWllyQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2F0b21zL1Rhc2tUaXRsZS50c3g/YzE2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGQywgQ1NTUHJvcGVydGllcywgTW91c2VFdmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlX3Rhc2tUaXRsZSBmcm9tIFwiY29tcG9uZW50cy9hdG9tcy9UYXNrVGl0bGUubW9kdWxlLnNjc3NcIlxuaW1wb3J0IEVkaXRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRWRpdCc7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4uLy4uL3R5cGVzL3Rhc2tcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgdGFza05vOiBudW1iZXI7XG4gIHByb2NObzogbnVtYmVyO1xuICBncmFiVGFza05vOiBudW1iZXIgfCBudWxsO1xuICBhbHRncmFiUHJvY05vOiBudW1iZXIgfCBudWxsO1xuICB0cmFuczogYW55O1xuICB0YXNrTW91c2VEb3duOiAoZXZlbnQ6IE1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB2b2lkO1xuICB0YXNrRWxlbWVudDogVGFzaztcbiAgb3Blbk1vZGFsOiAocHJvY05vOiBudW1iZXIsIHRhc2tObzogbnVtYmVyKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgVGFza1RpdGxlOiBGQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IG9uTW91c2VEb3duPXtwcm9wcy50YXNrTW91c2VEb3dufVxuICAgICAgc3R5bGU9e3Byb3BzLmFsdGdyYWJQcm9jTm8gPT0gcHJvcHMucHJvY05vICYmIHByb3BzLmdyYWJUYXNrTm8gPT0gcHJvcHMudGFza05vID8gcHJvcHMudHJhbnMgYXMgQ1NTUHJvcGVydGllcyA6IHVuZGVmaW5lZH1cbiAgICAgIGNsYXNzTmFtZT17c3R5bGVfdGFza1RpdGxlLnRhc2tfZnJhbWV9XG4gICAgICBpZD17YHRhc2tfXyR7cHJvcHMucHJvY05vfSR7cHJvcHMudGFza05vfWB9PlxuXG4gICAgICB7cHJvcHMudGFza0VsZW1lbnQudGl0bGV9XG5cbiAgICAgIDxFZGl0SWNvbiBjbGFzc05hbWU9e3N0eWxlX3Rhc2tUaXRsZS5lZGl0X2ljb259IG9uQ2xpY2s9eygpID0+IHByb3BzLm9wZW5Nb2RhbChwcm9wcy5wcm9jTm8sIHByb3BzLnRhc2tObyl9IHN0eWxlPXt7d2lkdGg6XCIzMHB4XCIsaGVpZ2h0OlwiMzBweFwiLH19PjwvRWRpdEljb24+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZV90YXNrVGl0bGUiLCJFZGl0SWNvbiIsIlRhc2tUaXRsZSIsInByb3BzIiwiZGl2Iiwib25Nb3VzZURvd24iLCJ0YXNrTW91c2VEb3duIiwic3R5bGUiLCJhbHRncmFiUHJvY05vIiwicHJvY05vIiwiZ3JhYlRhc2tObyIsInRhc2tObyIsInRyYW5zIiwidW5kZWZpbmVkIiwiY2xhc3NOYW1lIiwidGFza19mcmFtZSIsImlkIiwidGFza0VsZW1lbnQiLCJ0aXRsZSIsImVkaXRfaWNvbiIsIm9uQ2xpY2siLCJvcGVuTW9kYWwiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/atoms/TaskTitle.tsx\n"));

/***/ })

});