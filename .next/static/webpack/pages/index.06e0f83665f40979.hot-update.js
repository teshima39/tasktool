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

/***/ "./hook/useNowDate.tsx":
/*!*****************************!*\
  !*** ./hook/useNowDate.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useNowDate\": function() { return /* binding */ useNowDate; }\n/* harmony export */ });\n/* harmony import */ var date_fns_tz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns-tz */ \"./node_modules/date-fns-tz/esm/index.js\");\n\nconst useNowDate = ()=>{\n    let d = (0,date_fns_tz__WEBPACK_IMPORTED_MODULE_0__.utcToZonedTime)(new Date(), \"Asia/Tokyo\");\n    return \"\".concat(d);\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rL3VzZU5vd0RhdGUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQzRDO0FBRXJDLE1BQU1DLGFBQWEsSUFBTTtJQUM5QixJQUFJQyxJQUFJRiwyREFBY0EsQ0FBQyxJQUFJRyxRQUFRO0lBR25DLE9BQVEsR0FBSyxPQUFGRDtBQUNiLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9vay91c2VOb3dEYXRlLnRzeD9iOTdhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ICBnZXREYXRlLCBnZXRNb250aCwgZ2V0WWVhciB9IGZyb20gJ2RhdGUtZm5zJ1xuaW1wb3J0IHsgdXRjVG9ab25lZFRpbWUgfSBmcm9tICdkYXRlLWZucy10eidcblxuZXhwb3J0IGNvbnN0IHVzZU5vd0RhdGUgPSAoKSA9PiB7XG4gIGxldCBkID0gdXRjVG9ab25lZFRpbWUobmV3IERhdGUoKSwgJ0FzaWEvVG9reW8nKTtcblxuXG4gIHJldHVybiAoYCR7ZH1gKVxufVxuXG4iXSwibmFtZXMiOlsidXRjVG9ab25lZFRpbWUiLCJ1c2VOb3dEYXRlIiwiZCIsIkRhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hook/useNowDate.tsx\n"));

/***/ })

});