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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\nconst API = \"https://nextjs-test-pi-hazel-56.vercel.app/data/games.json\";\n\nconst Container = (param)=>{\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8\",\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\WORK 2.0\\\\test-task\\\\task-3\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 16,\n        columnNumber: 3\n    }, undefined);\n};\n_c = Container;\nconst GameList = (param)=>{\n    let { games } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8\",\n            children: games.map((game)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"group\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"https://d2norla3tyc4cn.cloudfront.net/i/s3/\".concat(game.identifier, \".webp\"),\n                                alt: game.identifier,\n                                className: \"h-full w-full object-cover object-center group-hover:opacity-75\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\WORK 2.0\\\\test-task\\\\task-3\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\WORK 2.0\\\\test-task\\\\task-3\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"mt-4 text-sm text-gray-700\",\n                            children: game.title\n                        }, void 0, false, {\n                            fileName: \"D:\\\\WORK 2.0\\\\test-task\\\\task-3\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mt-1 text-lg font-medium text-gray-900\",\n                            children: game.provider\n                        }, void 0, false, {\n                            fileName: \"D:\\\\WORK 2.0\\\\test-task\\\\task-3\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, game.identifier, true, {\n                    fileName: \"D:\\\\WORK 2.0\\\\test-task\\\\task-3\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"D:\\\\WORK 2.0\\\\test-task\\\\task-3\\\\src\\\\app\\\\page.tsx\",\n            lineNumber: 23,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\WORK 2.0\\\\test-task\\\\task-3\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 22,\n        columnNumber: 3\n    }, undefined);\n};\n_c1 = GameList;\nfunction Page() {\n    _s();\n    const [games, setGames] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(API).then((res)=>res.json()).then((data)=>{\n            setGames(data);\n            setLoading(false);\n        });\n    }, []);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-3xl text-center text-gray-500 center hover:text-gray-600\",\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\WORK 2.0\\\\test-task\\\\task-3\\\\src\\\\app\\\\page.tsx\",\n            lineNumber: 52,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\WORK 2.0\\\\test-task\\\\task-3\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n    if (!games) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-3xl text-center text-gray-500 center hover:text-gray-600\",\n            children: \"No games\"\n        }, void 0, false, {\n            fileName: \"D:\\\\WORK 2.0\\\\test-task\\\\task-3\\\\src\\\\app\\\\page.tsx\",\n            lineNumber: 57,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\WORK 2.0\\\\test-task\\\\task-3\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameList, {\n        games: games\n    }, void 0, false, {\n        fileName: \"D:\\\\WORK 2.0\\\\test-task\\\\task-3\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 61,\n        columnNumber: 10\n    }, this);\n}\n_s(Page, \"jQvV+zcAnG7wIEweCdaJmD2AbRA=\");\n_c2 = Page;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c1, \"GameList\");\n$RefreshReg$(_c2, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUEsTUFBTUEsTUFBTTtBQUMyQztBQVd2RCxNQUFNRyxZQUFZO1FBQUMsRUFBRUMsUUFBUSxFQUEyQjt5QkFDdEQsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1pGOzs7Ozs7O0tBRkNEO0FBTU4sTUFBTUksV0FBVztRQUFDLEVBQUNDLEtBQUssRUFBaUI7eUJBQ3ZDLDhEQUFDTDtrQkFDQyw0RUFBQ0U7WUFBSUMsV0FBVTtzQkFDWkUsTUFBTUMsR0FBRyxDQUFDLENBQUNDLHFCQUNWLDhEQUFDTDtvQkFBMEJDLFdBQVU7O3NDQUNuQyw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNLO2dDQUFJQyxLQUFLLDhDQUE4RCxPQUFoQkYsS0FBS0csVUFBVSxFQUFDO2dDQUFRQyxLQUFLSixLQUFLRyxVQUFVO2dDQUFFUCxXQUFVOzs7Ozs7Ozs7OztzQ0FFbEgsOERBQUNTOzRCQUFHVCxXQUFVO3NDQUE4QkksS0FBS00sS0FBSzs7Ozs7O3NDQUN0RCw4REFBQ0M7NEJBQUVYLFdBQVU7c0NBQTBDSSxLQUFLUSxRQUFROzs7Ozs7O21CQUw1RFIsS0FBS0csVUFBVTs7Ozs7Ozs7Ozs7Ozs7OztNQUozQk47QUFnQlMsU0FBU1k7O0lBQ3RCLE1BQU0sQ0FBQ1gsT0FBT1ksU0FBUyxHQUFHbEIsK0NBQVFBLENBQVEsRUFBRTtJQUM1QyxNQUFNLENBQUNtQixXQUFXQyxXQUFXLEdBQUdwQiwrQ0FBUUEsQ0FBQztJQUV6Q0QsZ0RBQVNBLENBQUM7UUFDUnNCLE1BQU12QixLQUNId0IsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUksSUFDdEJGLElBQUksQ0FBQyxDQUFDRztZQUNMUCxTQUFTTztZQUNUTCxXQUFXO1FBQ2I7SUFDSixHQUFHLEVBQUU7SUFFTCxJQUFJRCxXQUFXLHFCQUNiLDhEQUFDbEI7a0JBQ0MsNEVBQUNFO1lBQUlDLFdBQVU7c0JBQWdFOzs7Ozs7Ozs7OztJQUduRixJQUFJLENBQUNFLE9BQU8scUJBQ1YsOERBQUNMO2tCQUNDLDRFQUFDRTtZQUFJQyxXQUFVO3NCQUFnRTs7Ozs7Ozs7Ozs7SUFJbkYscUJBQU8sOERBQUNDO1FBQVNDLE9BQU9BOzs7Ozs7QUFDMUI7R0F6QndCVztNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmNvbnN0IEFQSSA9ICdodHRwczovL25leHRqcy10ZXN0LXBpLWhhemVsLTU2LnZlcmNlbC5hcHAvZGF0YS9nYW1lcy5qc29uJztcbmltcG9ydCB7IFJlYWN0Tm9kZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxudHlwZSBHYW1lcyA9IHtcbiAgaWRlbnRpZmllcjogc3RyaW5nOyAvLyDRg9C90LjQutCw0LvRjNC90YvQuSDQuNC00LXQvdGC0LjRhNC40LrQsNGC0L7RgCDQuNCz0YDRi1xuICBzZW9fdGl0bGU6IHN0cmluZzsgLy8g0YPQvdC40LrQsNC70YzQvdGL0LkgU0VPLdC60LvRjtGHINC40LPRgNGLXG4gIHRpdGxlOiBzdHJpbmc7IC8vINCi0LXQutGB0YLQvtCy0L7QtSDQvdCw0LfQstCw0L3QuNC1INC40LPRgNGLXG4gIHByb3ZpZGVyOiBzdHJpbmc7IC8vIElEINC/0YDQvtCy0LDQudC00LXRgNCwINC40LPRgNGLXG4gIGNhdGVnb3JpZXM6IHN0cmluZ1tdOyAvLyDQodC/0LjRgdC+0LogSUQg0LrQsNGC0LXQs9C+0YDQuNC5LCDQsiDQutC+0YLQvtGA0YvQtSDQstGF0L7QtNC40YIg0LjQs9GA0LBcbn1bXTtcblxuXG5jb25zdCBDb250YWluZXIgPSAoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdE5vZGUgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctMnhsIHB4LTQgcHktMTYgc206cHgtNiBzbTpweS0yNCBsZzptYXgtdy03eGwgbGc6cHgtOFwiPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBHYW1lTGlzdCA9ICh7Z2FtZXN9OiB7Z2FtZXM6IEdhbWVzfSkgPT4gKFxuICA8Q29udGFpbmVyPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBnYXAteC02IGdhcC15LTEwIHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIHhsOmdyaWQtY29scy00IHhsOmdhcC14LThcIj5cbiAgICAgIHtnYW1lcy5tYXAoKGdhbWUpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2dhbWUuaWRlbnRpZmllcn0gY2xhc3NOYW1lPVwiZ3JvdXBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFzcGVjdC1oLTEgYXNwZWN0LXctMSB3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbGcgYmctZ3JheS0yMDAgeGw6YXNwZWN0LWgtOCB4bDphc3BlY3Qtdy03XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vZDJub3JsYTN0eWM0Y24uY2xvdWRmcm9udC5uZXQvaS9zMy8ke2dhbWUuaWRlbnRpZmllcn0ud2VicGB9IGFsdD17Z2FtZS5pZGVudGlmaWVyfSBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyIGdyb3VwLWhvdmVyOm9wYWNpdHktNzVcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtdC00IHRleHQtc20gdGV4dC1ncmF5LTcwMFwiPntnYW1lLnRpdGxlfTwvaDM+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMSB0ZXh0LWxnIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj57Z2FtZS5wcm92aWRlcn08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gIDwvQ29udGFpbmVyPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xuICBjb25zdCBbZ2FtZXMsIHNldEdhbWVzXSA9IHVzZVN0YXRlPEdhbWVzPihbXSk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaChBUEkpXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgc2V0R2FtZXMoZGF0YSlcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgIH0pXG4gIH0sIFtdKVxuXG4gIGlmIChpc0xvYWRpbmcpIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0zeGwgdGV4dC1jZW50ZXIgdGV4dC1ncmF5LTUwMCBjZW50ZXIgaG92ZXI6dGV4dC1ncmF5LTYwMFwiPkxvYWRpbmcuLi48L2Rpdj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbiAgaWYgKCFnYW1lcykgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCB0ZXh0LWNlbnRlciB0ZXh0LWdyYXktNTAwIGNlbnRlciBob3Zlcjp0ZXh0LWdyYXktNjAwXCI+Tm8gZ2FtZXM8L2Rpdj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbiAgXG4gIHJldHVybiA8R2FtZUxpc3QgZ2FtZXM9e2dhbWVzfS8+XG59XG4iXSwibmFtZXMiOlsiQVBJIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb250YWluZXIiLCJjaGlsZHJlbiIsImRpdiIsImNsYXNzTmFtZSIsIkdhbWVMaXN0IiwiZ2FtZXMiLCJtYXAiLCJnYW1lIiwiaW1nIiwic3JjIiwiaWRlbnRpZmllciIsImFsdCIsImgzIiwidGl0bGUiLCJwIiwicHJvdmlkZXIiLCJQYWdlIiwic2V0R2FtZXMiLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});