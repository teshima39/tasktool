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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useNowDate\": function() { return /* binding */ useNowDate; }\n/* harmony export */ });\nconst useNowDate = ()=>{\n    let d = new Date();\n    let year = Number(d.getFullYear().toString().slice(-2));\n    let month = d.getMonth() + 1;\n    let day = d.getDate();\n    let dayofweek = d.getDay();\n    const dayname = [\n        \"日\",\n        \"月\",\n        \"火\",\n        \"水\",\n        \"木\",\n        \"金\",\n        \"土\"\n    ];\n    let hour = d.getHours().toString().padStart(2, \"0\");\n    let minute = d.getMinutes().toString().padStart(2, \"0\");\n    return \"0000\";\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rL3VzZU5vd0RhdGUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFFTyxNQUFNQSxhQUFhLElBQU07SUFDOUIsSUFBSUMsSUFBSSxJQUFJQztJQUNaLElBQUlDLE9BQU9DLE9BQU9ILEVBQUVJLFdBQVcsR0FBR0MsUUFBUSxHQUFHQyxLQUFLLENBQUMsQ0FBQztJQUNwRCxJQUFJQyxRQUFRUCxFQUFFUSxRQUFRLEtBQUs7SUFDM0IsSUFBSUMsTUFBTVQsRUFBRVUsT0FBTztJQUNuQixJQUFJQyxZQUFZWCxFQUFFWSxNQUFNO0lBRXhCLE1BQU1DLFVBQVU7UUFBQztRQUFLO1FBQUs7UUFBSztRQUFLO1FBQUs7UUFBSztLQUFJO0lBRW5ELElBQUlDLE9BQU9kLEVBQUVlLFFBQVEsR0FBR1YsUUFBUSxHQUFHVyxRQUFRLENBQUMsR0FBRztJQUMvQyxJQUFJQyxTQUFTakIsRUFBRWtCLFVBQVUsR0FBR2IsUUFBUSxHQUFHVyxRQUFRLENBQUMsR0FBRztJQUVuRCxPQUFRO0FBQ1YsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ob29rL3VzZU5vd0RhdGUudHN4P2I5N2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9ybWF0SW5UaW1lWm9uZSB9IGZyb20gJ2RhdGUtZm5zLXR6JztcblxuZXhwb3J0IGNvbnN0IHVzZU5vd0RhdGUgPSAoKSA9PiB7XG4gIGxldCBkID0gbmV3IERhdGUoKTtcbiAgbGV0IHllYXIgPSBOdW1iZXIoZC5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkuc2xpY2UoLTIpKTtcbiAgbGV0IG1vbnRoID0gZC5nZXRNb250aCgpICsgMTtcbiAgbGV0IGRheSA9IGQuZ2V0RGF0ZSgpO1xuICBsZXQgZGF5b2Z3ZWVrID0gZC5nZXREYXkoKTtcblxuICBjb25zdCBkYXluYW1lID0gWyfml6UnLCAn5pyIJywgJ+eBqycsICfmsLQnLCAn5pyoJywgJ+mHkScsICflnJ8nXTtcblxuICBsZXQgaG91ciA9IGQuZ2V0SG91cnMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gIGxldCBtaW51dGUgPSBkLmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG5cbiAgcmV0dXJuIChcIjAwMDBcIilcbn1cblxuIl0sIm5hbWVzIjpbInVzZU5vd0RhdGUiLCJkIiwiRGF0ZSIsInllYXIiLCJOdW1iZXIiLCJnZXRGdWxsWWVhciIsInRvU3RyaW5nIiwic2xpY2UiLCJtb250aCIsImdldE1vbnRoIiwiZGF5IiwiZ2V0RGF0ZSIsImRheW9md2VlayIsImdldERheSIsImRheW5hbWUiLCJob3VyIiwiZ2V0SG91cnMiLCJwYWRTdGFydCIsIm1pbnV0ZSIsImdldE1pbnV0ZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hook/useNowDate.tsx\n"));

/***/ })

});