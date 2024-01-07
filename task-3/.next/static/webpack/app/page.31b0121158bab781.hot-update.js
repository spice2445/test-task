"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\nconst API = \"https://nextjs-test-pi-hazel-56.vercel.app/data/games.json\";\n\nconst Container = (param)=>{\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8\",\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\WORK 2.0\\\\test-task\\\\task-3\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 16,\n        columnNumber: 3\n    }, undefined);\n};\n_c = Container;\nfunction Page() {\n    _s();\n    const [games, setGames] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(API).then((res)=>res.json()).then((data)=>{\n            setGames(data);\n            setLoading(false);\n        });\n    }, []);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-3xl text-center text-gray-500 center hover:text-gray-600\",\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\WORK 2.0\\\\test-task\\\\task-3\\\\src\\\\app\\\\page.tsx\",\n            lineNumber: 36,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\WORK 2.0\\\\test-task\\\\task-3\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 35,\n        columnNumber: 3\n    }, this);\n    if (!games) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-3xl text-center text-gray-500 center hover:text-gray-600\",\n            children: \"No games\"\n        }, void 0, false, {\n            fileName: \"D:\\\\WORK 2.0\\\\test-task\\\\task-3\\\\src\\\\app\\\\page.tsx\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\WORK 2.0\\\\test-task\\\\task-3\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8\",\n            children: games.map((game)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"group\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"https://d2norla3tyc4cn.cloudfront.net/i/s3/\".concat(game.identifier, \".webp\"),\n                                alt: game.identifier,\n                                className: \"h-full w-full object-cover object-center group-hover:opacity-75\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\WORK 2.0\\\\test-task\\\\task-3\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\WORK 2.0\\\\test-task\\\\task-3\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"mt-4 text-sm text-gray-700\",\n                            children: game.title\n                        }, void 0, false, {\n                            fileName: \"D:\\\\WORK 2.0\\\\test-task\\\\task-3\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mt-1 text-lg font-medium text-gray-900\",\n                            children: game.provider\n                        }, void 0, false, {\n                            fileName: \"D:\\\\WORK 2.0\\\\test-task\\\\task-3\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, game.identifier, true, {\n                    fileName: \"D:\\\\WORK 2.0\\\\test-task\\\\task-3\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 11\n                }, this))\n        }, void 0, false, {\n            fileName: \"D:\\\\WORK 2.0\\\\test-task\\\\task-3\\\\src\\\\app\\\\page.tsx\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\WORK 2.0\\\\test-task\\\\task-3\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"jQvV+zcAnG7wIEweCdaJmD2AbRA=\");\n_c1 = Page;\nvar _c, _c1;\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c1, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUEsTUFBTUEsTUFBTTtBQUMyQztBQVd2RCxNQUFNRyxZQUFZO1FBQUMsRUFBRUMsUUFBUSxFQUEyQjt5QkFDdEQsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1pGOzs7Ozs7O0tBRkNEO0FBTVMsU0FBU0k7O0lBQ3RCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBUSxFQUFFO0lBQzVDLE1BQU0sQ0FBQ1EsV0FBV0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUV6Q0QsZ0RBQVNBLENBQUM7UUFDUlcsTUFBTVosS0FDSGEsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUksSUFDdEJGLElBQUksQ0FBQyxDQUFDRztZQUNMUCxTQUFTTztZQUNUTCxXQUFXO1FBQ2I7SUFDSixHQUFHLEVBQUU7SUFFTCxJQUFJRCxXQUFXLHFCQUNmLDhEQUFDUDtrQkFDQyw0RUFBQ0U7WUFBSUMsV0FBVTtzQkFBZ0U7Ozs7Ozs7Ozs7O0lBR2pGLElBQUksQ0FBQ0UsT0FBTyxxQkFDViw4REFBQ0w7a0JBQ0MsNEVBQUNFO1lBQUlDLFdBQVU7c0JBQWdFOzs7Ozs7Ozs7OztJQUduRixxQkFDRSw4REFBQ0g7a0JBQ0MsNEVBQUNFO1lBQUlDLFdBQVU7c0JBQ1pFLE1BQU1TLEdBQUcsQ0FBQyxDQUFDQyxxQkFDViw4REFBQ2I7b0JBQTBCQyxXQUFVOztzQ0FDbkMsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDYTtnQ0FBSUMsS0FBSyw4Q0FBOEQsT0FBaEJGLEtBQUtHLFVBQVUsRUFBQztnQ0FBUUMsS0FBS0osS0FBS0csVUFBVTtnQ0FBRWYsV0FBVTs7Ozs7Ozs7Ozs7c0NBRWxILDhEQUFDaUI7NEJBQUdqQixXQUFVO3NDQUE4QlksS0FBS00sS0FBSzs7Ozs7O3NDQUN0RCw4REFBQ0M7NEJBQUVuQixXQUFVO3NDQUEwQ1ksS0FBS1EsUUFBUTs7Ozs7OzttQkFMNURSLEtBQUtHLFVBQVU7Ozs7Ozs7Ozs7Ozs7OztBQVduQztHQXRDd0JkO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuY29uc3QgQVBJID0gJ2h0dHBzOi8vbmV4dGpzLXRlc3QtcGktaGF6ZWwtNTYudmVyY2VsLmFwcC9kYXRhL2dhbWVzLmpzb24nO1xuaW1wb3J0IHsgUmVhY3ROb2RlLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG50eXBlIEdhbWVzID0ge1xuICBpZGVudGlmaWVyOiBzdHJpbmc7IC8vINGD0L3QuNC60LDQu9GM0L3Ri9C5INC40LTQtdC90YLQuNGE0LjQutCw0YLQvtGAINC40LPRgNGLXG4gIHNlb190aXRsZTogc3RyaW5nOyAvLyDRg9C90LjQutCw0LvRjNC90YvQuSBTRU8t0LrQu9GO0Ycg0LjQs9GA0YtcbiAgdGl0bGU6IHN0cmluZzsgLy8g0KLQtdC60YHRgtC+0LLQvtC1INC90LDQt9Cy0LDQvdC40LUg0LjQs9GA0YtcbiAgcHJvdmlkZXI6IHN0cmluZzsgLy8gSUQg0L/RgNC+0LLQsNC50LTQtdGA0LAg0LjQs9GA0YtcbiAgY2F0ZWdvcmllczogc3RyaW5nW107IC8vINCh0L/QuNGB0L7QuiBJRCDQutCw0YLQtdCz0L7RgNC40LksINCyINC60L7RgtC+0YDRi9C1INCy0YXQvtC00LjRgiDQuNCz0YDQsFxufVtdO1xuXG5cbmNvbnN0IENvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0Tm9kZSB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy0yeGwgcHgtNCBweS0xNiBzbTpweC02IHNtOnB5LTI0IGxnOm1heC13LTd4bCBsZzpweC04XCI+XG4gICAge2NoaWxkcmVufVxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XG4gIGNvbnN0IFtnYW1lcywgc2V0R2FtZXNdID0gdXNlU3RhdGU8R2FtZXM+KFtdKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKEFQSSlcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBzZXRHYW1lcyhkYXRhKVxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgfSlcbiAgfSwgW10pXG5cbiAgaWYgKGlzTG9hZGluZykgcmV0dXJuIChcbiAgPENvbnRhaW5lcj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtM3hsIHRleHQtY2VudGVyIHRleHQtZ3JheS01MDAgY2VudGVyIGhvdmVyOnRleHQtZ3JheS02MDBcIj5Mb2FkaW5nLi4uPC9kaXY+XG4gIDwvQ29udGFpbmVyPlxuICApO1xuICBpZiAoIWdhbWVzKSByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtM3hsIHRleHQtY2VudGVyIHRleHQtZ3JheS01MDAgY2VudGVyIGhvdmVyOnRleHQtZ3JheS02MDBcIj5ObyBnYW1lczwvZGl2PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgZ2FwLXgtNiBnYXAteS0xMCBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyB4bDpncmlkLWNvbHMtNCB4bDpnYXAteC04XCI+XG4gICAgICAgIHtnYW1lcy5tYXAoKGdhbWUpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17Z2FtZS5pZGVudGlmaWVyfSBjbGFzc05hbWU9XCJncm91cFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc3BlY3QtaC0xIGFzcGVjdC13LTEgdy1mdWxsIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLWxnIGJnLWdyYXktMjAwIHhsOmFzcGVjdC1oLTggeGw6YXNwZWN0LXctN1wiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vZDJub3JsYTN0eWM0Y24uY2xvdWRmcm9udC5uZXQvaS9zMy8ke2dhbWUuaWRlbnRpZmllcn0ud2VicGB9IGFsdD17Z2FtZS5pZGVudGlmaWVyfSBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyIGdyb3VwLWhvdmVyOm9wYWNpdHktNzVcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibXQtNCB0ZXh0LXNtIHRleHQtZ3JheS03MDBcIj57Z2FtZS50aXRsZX08L2gzPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMSB0ZXh0LWxnIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj57Z2FtZS5wcm92aWRlcn08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJBUEkiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvbnRhaW5lciIsImNoaWxkcmVuIiwiZGl2IiwiY2xhc3NOYW1lIiwiUGFnZSIsImdhbWVzIiwic2V0R2FtZXMiLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJtYXAiLCJnYW1lIiwiaW1nIiwic3JjIiwiaWRlbnRpZmllciIsImFsdCIsImgzIiwidGl0bGUiLCJwIiwicHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});