"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/games/[provider]/[seo_title]/page",{

/***/ "(app-pages-browser)/./src/app/games/[provider]/[seo_title]/page.tsx":
/*!*******************************************************!*\
  !*** ./src/app/games/[provider]/[seo_title]/page.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../const */ \"(app-pages-browser)/./src/app/const.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Page() {\n    _s();\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useParams)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [game, setGame] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(_const__WEBPACK_IMPORTED_MODULE_2__.API).then((res)=>res.json()).then((data)=>{\n            const concreteGame = data.find((game)=>game.seo_title == params.seo_title);\n            setGame(concreteGame);\n            setLoading(false);\n        });\n    }, []);\n    if (loading) return \"Loading!\";\n    if (!game) return \"No game found!\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: params.seo_title\n    }, void 0, false, {\n        fileName: \"D:\\\\WORK 2.0\\\\test-task\\\\task-3\\\\src\\\\app\\\\games\\\\[provider]\\\\[seo_title]\\\\page.tsx\",\n        lineNumber: 22,\n        columnNumber: 12\n    }, this);\n}\n_s(Page, \"1wiji/1Q/gSFIOLtv8PMVCWTfdk=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useParams\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2FtZXMvW3Byb3ZpZGVyXS9bc2VvX3RpdGxlXS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDMkM7QUFDQTtBQUNBO0FBRTVCLFNBQVNJOztJQUNwQixNQUFNQyxTQUFTRiwwREFBU0E7SUFDeEIsTUFBTSxDQUFDRyxTQUFTQyxXQUFXLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ08sTUFBTUMsUUFBUSxHQUFHUiwrQ0FBUUEsQ0FBbUJTO0lBQ25EVixnREFBU0EsQ0FBQztRQUNOVyxNQUFNVCx1Q0FBR0EsRUFDTlUsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUksSUFDdEJGLElBQUksQ0FBQyxDQUFDRztZQUNMLE1BQU1DLGVBQWVELEtBQUtFLElBQUksQ0FBQyxDQUFDVCxPQUFlQSxLQUFLVSxTQUFTLElBQUliLE9BQU9hLFNBQVM7WUFDakZULFFBQVFPO1lBQ1JULFdBQVc7UUFDYjtJQUNKLEdBQUcsRUFBRTtJQUVQLElBQUdELFNBQVMsT0FBTztJQUNuQixJQUFHLENBQUNFLE1BQU0sT0FBTztJQUNqQixxQkFBTyw4REFBQ1c7a0JBQUtkLE9BQU9hLFNBQVM7Ozs7OztBQUNqQztHQWpCd0JkOztRQUNMRCxzREFBU0E7OztLQURKQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2dhbWVzL1twcm92aWRlcl0vW3Nlb190aXRsZV0vcGFnZS50c3g/NjJiYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEFQSSwgR2FtZSB9IGZyb20gJy4uLy4uLy4uL2NvbnN0JztcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSgpIHtcclxuICAgIGNvbnN0IHBhcmFtcyA9IHVzZVBhcmFtczx7IHByb3ZpZGVyOiBzdHJpbmcsIHNlb190aXRsZTogc3RyaW5nfT4oKVxyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbZ2FtZSwgc2V0R2FtZV0gPSB1c2VTdGF0ZTxHYW1lIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaChBUEkpXHJcbiAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29uY3JldGVHYW1lID0gZGF0YS5maW5kKChnYW1lOiBHYW1lKSA9PiBnYW1lLnNlb190aXRsZSA9PSBwYXJhbXMuc2VvX3RpdGxlKVxyXG4gICAgICAgICAgICBzZXRHYW1lKGNvbmNyZXRlR2FtZSlcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH0sIFtdKVxyXG4gICAgXHJcbiAgICBpZihsb2FkaW5nKSByZXR1cm4gJ0xvYWRpbmchJztcclxuICAgIGlmKCFnYW1lKSByZXR1cm4gJ05vIGdhbWUgZm91bmQhJztcclxuICAgIHJldHVybiA8ZGl2PntwYXJhbXMuc2VvX3RpdGxlfTwvZGl2PlxyXG59ICAgIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQVBJIiwidXNlUGFyYW1zIiwiUGFnZSIsInBhcmFtcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZ2FtZSIsInNldEdhbWUiLCJ1bmRlZmluZWQiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImNvbmNyZXRlR2FtZSIsImZpbmQiLCJzZW9fdGl0bGUiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/games/[provider]/[seo_title]/page.tsx\n"));

/***/ })

});