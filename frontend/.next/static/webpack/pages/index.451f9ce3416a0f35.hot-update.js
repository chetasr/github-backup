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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_JobCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/JobCard */ \"./components/JobCard.jsx\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/NavBar */ \"./components/NavBar.jsx\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var _lib_fetcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/fetcher */ \"./lib/fetcher.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const { data , _error  } = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"http://localhost:8000/jobs\", _lib_fetcher__WEBPACK_IMPORTED_MODULE_4__.fetcher);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/chetasr/Desktop/Work/Luganodes/SDE Assignment/frontend/pages/index.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            data && data.map((job)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_JobCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    ...job\n                }, job.id, false, {\n                    fileName: \"/Users/chetasr/Desktop/Work/Luganodes/SDE Assignment/frontend/pages/index.js\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true);\n}\n_s(Home, \"mpIcNpX4dk7zQDmAiRE+kIrhjtM=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMEM7QUFDRjtBQUNoQjtBQUNlO0FBRXhCLFNBQVNJLE9BQVE7O0lBQzlCLE1BQU0sRUFBRUMsS0FBSSxFQUFFQyxPQUFNLEVBQUUsR0FBR0osK0NBQU1BLENBQUMsOEJBQThCQyxpREFBT0E7SUFFckUscUJBQ0U7OzBCQUNFLDhEQUFDRiwwREFBTUE7Ozs7O1lBQ05JLFFBQVFBLEtBQUtFLEdBQUcsQ0FBQ0MsQ0FBQUEsb0JBQ2hCLDhEQUFDUiwyREFBT0E7b0JBQWUsR0FBR1EsR0FBRzttQkFBZkEsSUFBSUMsRUFBRTs7Ozs7OztBQUk1QixDQUFDO0dBWHVCTDs7UUFDR0YsMkNBQU1BOzs7S0FEVEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSm9iQ2FyZCBmcm9tICdAL2NvbXBvbmVudHMvSm9iQ2FyZCdcbmltcG9ydCBOYXZCYXIgZnJvbSAnQC9jb21wb25lbnRzL05hdkJhcidcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xuaW1wb3J0IHsgZmV0Y2hlciB9IGZyb20gJ0AvbGliL2ZldGNoZXInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUgKCkge1xuICBjb25zdCB7IGRhdGEsIF9lcnJvciB9ID0gdXNlU1dSKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvam9icycsIGZldGNoZXIpXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5hdkJhciAvPlxuICAgICAge2RhdGEgJiYgZGF0YS5tYXAoam9iID0+IChcbiAgICAgICAgPEpvYkNhcmQga2V5PXtqb2IuaWR9IHsuLi5qb2J9IC8+XG4gICAgICApKX1cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkpvYkNhcmQiLCJOYXZCYXIiLCJ1c2VTV1IiLCJmZXRjaGVyIiwiSG9tZSIsImRhdGEiLCJfZXJyb3IiLCJtYXAiLCJqb2IiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});