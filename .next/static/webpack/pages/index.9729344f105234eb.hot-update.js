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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useNowDate\": function() { return /* binding */ useNowDate; }\n/* harmony export */ });\nconst useNowDate = ()=>{\n    let d = utcToZonedTime(new Date(), \"Asia/Tokyo\");\n    let year = Number(d.getFullYear().toString().slice(-2));\n    let month = d.getMonth() + 1;\n    let day = d.getDate();\n    let dayofweek = d.getDay();\n    const dayname = [\n        \"日\",\n        \"月\",\n        \"火\",\n        \"水\",\n        \"木\",\n        \"金\",\n        \"土\"\n    ];\n    let hour = d.getHours().toString().padStart(2, \"0\");\n    let minute = d.getMinutes().toString().padStart(2, \"0\");\n    return \"0000\";\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rL3VzZU5vd0RhdGUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFFTyxNQUFNQSxhQUFhLElBQU07SUFDOUIsSUFBSUMsSUFBS0MsZUFBZSxJQUFJQyxRQUFRO0lBQ3BDLElBQUlDLE9BQU9DLE9BQU9KLEVBQUVLLFdBQVcsR0FBR0MsUUFBUSxHQUFHQyxLQUFLLENBQUMsQ0FBQztJQUNwRCxJQUFJQyxRQUFRUixFQUFFUyxRQUFRLEtBQUs7SUFDM0IsSUFBSUMsTUFBTVYsRUFBRVcsT0FBTztJQUNuQixJQUFJQyxZQUFZWixFQUFFYSxNQUFNO0lBRXhCLE1BQU1DLFVBQVU7UUFBQztRQUFLO1FBQUs7UUFBSztRQUFLO1FBQUs7UUFBSztLQUFJO0lBRW5ELElBQUlDLE9BQU9mLEVBQUVnQixRQUFRLEdBQUdWLFFBQVEsR0FBR1csUUFBUSxDQUFDLEdBQUc7SUFDL0MsSUFBSUMsU0FBU2xCLEVBQUVtQixVQUFVLEdBQUdiLFFBQVEsR0FBR1csUUFBUSxDQUFDLEdBQUc7SUFFbkQsT0FBUTtBQUNWLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9vay91c2VOb3dEYXRlLnRzeD9iOTdhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcm1hdEluVGltZVpvbmUgfSBmcm9tICdkYXRlLWZucy10eic7XG5cbmV4cG9ydCBjb25zdCB1c2VOb3dEYXRlID0gKCkgPT4ge1xuICBsZXQgZCA9ICh1dGNUb1pvbmVkVGltZShuZXcgRGF0ZSgpLCAnQXNpYS9Ub2t5bycpKTtcbiAgbGV0IHllYXIgPSBOdW1iZXIoZC5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkuc2xpY2UoLTIpKTtcbiAgbGV0IG1vbnRoID0gZC5nZXRNb250aCgpICsgMTtcbiAgbGV0IGRheSA9IGQuZ2V0RGF0ZSgpO1xuICBsZXQgZGF5b2Z3ZWVrID0gZC5nZXREYXkoKTtcblxuICBjb25zdCBkYXluYW1lID0gWyfml6UnLCAn5pyIJywgJ+eBqycsICfmsLQnLCAn5pyoJywgJ+mHkScsICflnJ8nXTtcblxuICBsZXQgaG91ciA9IGQuZ2V0SG91cnMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gIGxldCBtaW51dGUgPSBkLmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG5cbiAgcmV0dXJuIChcIjAwMDBcIilcbn1cblxuIl0sIm5hbWVzIjpbInVzZU5vd0RhdGUiLCJkIiwidXRjVG9ab25lZFRpbWUiLCJEYXRlIiwieWVhciIsIk51bWJlciIsImdldEZ1bGxZZWFyIiwidG9TdHJpbmciLCJzbGljZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXkiLCJnZXREYXRlIiwiZGF5b2Z3ZWVrIiwiZ2V0RGF5IiwiZGF5bmFtZSIsImhvdXIiLCJnZXRIb3VycyIsInBhZFN0YXJ0IiwibWludXRlIiwiZ2V0TWludXRlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hook/useNowDate.tsx\n"));

/***/ })

});