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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useNowDate\": function() { return /* binding */ useNowDate; }\n/* harmony export */ });\n/* harmony import */ var date_fns_tz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns-tz */ \"./node_modules/date-fns-tz/esm/index.js\");\n\nconst useNowDate = ()=>{\n    let d = (0,date_fns_tz__WEBPACK_IMPORTED_MODULE_0__.utcToZonedTime)(new Date(), \"Asia/Tokyo\");\n    let year = Number(d.getFullYear().toString().slice(-2));\n    let month = d.getMonth() + 1;\n    let day = d.getDate;\n    let hour = d.getHours().toString().padStart(2, \"0\");\n    let minute = d.getMinutes().toString().padStart(2, \"0\");\n    return \"\".concat(year + \"年\" + month + \"月\" + day + \"日\" + hour + \":\" + minute);\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rL3VzZU5vd0RhdGUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQzRDO0FBRXJDLE1BQU1DLGFBQWEsSUFBTTtJQUM5QixJQUFJQyxJQUFJRiwyREFBY0EsQ0FBQyxJQUFJRyxRQUFRO0lBQ25DLElBQUlDLE9BQU9DLE9BQU9ILEVBQUVJLFdBQVcsR0FBR0MsUUFBUSxHQUFHQyxLQUFLLENBQUMsQ0FBQztJQUNwRCxJQUFJQyxRQUFRUCxFQUFFUSxRQUFRLEtBQUs7SUFDM0IsSUFBSUMsTUFBTVQsRUFBRVUsT0FBTztJQUVuQixJQUFJQyxPQUFPWCxFQUFFWSxRQUFRLEdBQUdQLFFBQVEsR0FBR1EsUUFBUSxDQUFDLEdBQUc7SUFDL0MsSUFBSUMsU0FBU2QsRUFBRWUsVUFBVSxHQUFHVixRQUFRLEdBQUdRLFFBQVEsQ0FBQyxHQUFHO0lBRW5ELE9BQVEsR0FBK0QsT0FBNURYLE9BQU8sTUFBTUssUUFBUSxNQUFNRSxNQUFNLE1BQU9FLE9BQU8sTUFBTUc7QUFDbEUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ob29rL3VzZU5vd0RhdGUudHN4P2I5N2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgIGdldERhdGUsIGdldE1vbnRoLCBnZXRZZWFyIH0gZnJvbSAnZGF0ZS1mbnMnXG5pbXBvcnQgeyB1dGNUb1pvbmVkVGltZSB9IGZyb20gJ2RhdGUtZm5zLXR6J1xuXG5leHBvcnQgY29uc3QgdXNlTm93RGF0ZSA9ICgpID0+IHtcbiAgbGV0IGQgPSB1dGNUb1pvbmVkVGltZShuZXcgRGF0ZSgpLCAnQXNpYS9Ub2t5bycpO1xuICBsZXQgeWVhciA9IE51bWJlcihkLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKS5zbGljZSgtMikpO1xuICBsZXQgbW9udGggPSBkLmdldE1vbnRoKCkgKyAxO1xuICBsZXQgZGF5ID0gZC5nZXREYXRlO1xuXG4gIGxldCBob3VyID0gZC5nZXRIb3VycygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgbGV0IG1pbnV0ZSA9IGQuZ2V0TWludXRlcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcblxuICByZXR1cm4gKGAke3llYXIgKyAn5bm0JyArIG1vbnRoICsgJ+aciCcgKyBkYXkgKyAn5pelJyAgKyBob3VyICsgJzonICsgbWludXRlfWApXG59XG5cbiJdLCJuYW1lcyI6WyJ1dGNUb1pvbmVkVGltZSIsInVzZU5vd0RhdGUiLCJkIiwiRGF0ZSIsInllYXIiLCJOdW1iZXIiLCJnZXRGdWxsWWVhciIsInRvU3RyaW5nIiwic2xpY2UiLCJtb250aCIsImdldE1vbnRoIiwiZGF5IiwiZ2V0RGF0ZSIsImhvdXIiLCJnZXRIb3VycyIsInBhZFN0YXJ0IiwibWludXRlIiwiZ2V0TWludXRlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hook/useNowDate.tsx\n"));

/***/ })

});