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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TaskTitle\": function() { return /* binding */ TaskTitle; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_atoms_TaskTitle_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/atoms/TaskTitle.module.scss */ \"./components/atoms/TaskTitle.module.scss\");\n/* harmony import */ var components_atoms_TaskTitle_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(components_atoms_TaskTitle_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/Edit */ \"./node_modules/@mui/icons-material/Edit.js\");\n\n\n\nconst TaskTitle = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onMouseDown: props.taskMouseDown,\n        style: props.altGrabListNo == props.listNo && props.grabTaskNo == props.taskNo ? props.trans : undefined,\n        className: (components_atoms_TaskTitle_module_scss__WEBPACK_IMPORTED_MODULE_1___default().task_frame),\n        id: \"task__\".concat(props.listNo).concat(props.taskNo),\n        children: [\n            props.taskElement.title,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                className: (components_atoms_TaskTitle_module_scss__WEBPACK_IMPORTED_MODULE_1___default().edit_icon),\n                onClick: ()=>props.openModal(props.listNo, props.taskNo)\n            }, void 0, false, {\n                fileName: \"/Applications/MAMP/htdocs/react+nextjs+typescript/nextjs/tasktool-app/components/atoms/TaskTitle.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Applications/MAMP/htdocs/react+nextjs+typescript/nextjs/tasktool-app/components/atoms/TaskTitle.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_c = TaskTitle;\nvar _c;\n$RefreshReg$(_c, \"TaskTitle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2F0b21zL1Rhc2tUaXRsZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNvRTtBQUNwQjtBQWN6QyxNQUFNRSxZQUF1QixDQUFDQyxRQUFVO0lBQzdDLHFCQUNFLDhEQUFDQztRQUFJQyxhQUFhRixNQUFNRyxhQUFhO1FBQ25DQyxPQUFPSixNQUFNSyxhQUFhLElBQUlMLE1BQU1NLE1BQU0sSUFBSU4sTUFBTU8sVUFBVSxJQUFJUCxNQUFNUSxNQUFNLEdBQUdSLE1BQU1TLEtBQUssR0FBb0JDLFNBQVM7UUFDekhDLFdBQVdkLDBGQUEwQjtRQUNyQ2dCLElBQUksU0FBd0JiLE9BQWZBLE1BQU1NLE1BQU0sRUFBZ0IsT0FBYk4sTUFBTVEsTUFBTTs7WUFDdkNSLE1BQU1jLFdBQVcsQ0FBQ0MsS0FBSzswQkFDeEIsOERBQUNqQixnRUFBUUE7Z0JBQUNhLFdBQVdkLHlGQUF5QjtnQkFBRW9CLFNBQVMsSUFBTWpCLE1BQU1rQixTQUFTLENBQUNsQixNQUFNTSxNQUFNLEVBQUVOLE1BQU1RLE1BQU07Ozs7Ozs7Ozs7OztBQUcvRyxFQUFDO0tBVllUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYXRvbXMvVGFza1RpdGxlLnRzeD9jMTZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZDLCBDU1NQcm9wZXJ0aWVzLCBNb3VzZUV2ZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVfdGFza1RpdGxlIGZyb20gXCJjb21wb25lbnRzL2F0b21zL1Rhc2tUaXRsZS5tb2R1bGUuc2Nzc1wiXG5pbXBvcnQgRWRpdEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9FZGl0JztcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi4vLi4vdHlwZXMvdGFza1wiO1xuXG50eXBlIFByb3BzID0ge1xuICB0YXNrTm86IG51bWJlclxuICBsaXN0Tm86IG51bWJlclxuICBncmFiVGFza05vOiBudW1iZXIgfCBudWxsXG4gIGFsdEdyYWJMaXN0Tm86IG51bWJlciB8IG51bGxcbiAgdHJhbnM6IGFueVxuICB0YXNrTW91c2VEb3duOiAoZXZlbnQ6IE1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB2b2lkO1xuICB0YXNrRWxlbWVudDogVGFzaztcbiAgb3Blbk1vZGFsOihsaXN0Tm86IG51bWJlcix0YXNrTm86IG51bWJlcikgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IFRhc2tUaXRsZTogRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBvbk1vdXNlRG93bj17cHJvcHMudGFza01vdXNlRG93bn1cbiAgICAgIHN0eWxlPXtwcm9wcy5hbHRHcmFiTGlzdE5vID09IHByb3BzLmxpc3RObyAmJiBwcm9wcy5ncmFiVGFza05vID09IHByb3BzLnRhc2tObyA/IHByb3BzLnRyYW5zIGFzIENTU1Byb3BlcnRpZXMgOiB1bmRlZmluZWR9XG4gICAgICBjbGFzc05hbWU9e3N0eWxlX3Rhc2tUaXRsZS50YXNrX2ZyYW1lfVxuICAgICAgaWQ9e2B0YXNrX18ke3Byb3BzLmxpc3ROb30ke3Byb3BzLnRhc2tOb31gfT5cbiAgICAgIHtwcm9wcy50YXNrRWxlbWVudC50aXRsZX1cbiAgICAgIDxFZGl0SWNvbiBjbGFzc05hbWU9e3N0eWxlX3Rhc2tUaXRsZS5lZGl0X2ljb259IG9uQ2xpY2s9eygpID0+IHByb3BzLm9wZW5Nb2RhbChwcm9wcy5saXN0Tm8sIHByb3BzLnRhc2tObyl9PjwvRWRpdEljb24+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZV90YXNrVGl0bGUiLCJFZGl0SWNvbiIsIlRhc2tUaXRsZSIsInByb3BzIiwiZGl2Iiwib25Nb3VzZURvd24iLCJ0YXNrTW91c2VEb3duIiwic3R5bGUiLCJhbHRHcmFiTGlzdE5vIiwibGlzdE5vIiwiZ3JhYlRhc2tObyIsInRhc2tObyIsInRyYW5zIiwidW5kZWZpbmVkIiwiY2xhc3NOYW1lIiwidGFza19mcmFtZSIsImlkIiwidGFza0VsZW1lbnQiLCJ0aXRsZSIsImVkaXRfaWNvbiIsIm9uQ2xpY2siLCJvcGVuTW9kYWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/atoms/TaskTitle.tsx\n"));

/***/ })

});