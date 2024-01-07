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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../const */ \"(app-pages-browser)/./src/app/const.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction findGame(games, game) {\n    const filters = [\n        {\n            seo_title: game.seo_title,\n            provider: game.provider\n        },\n        {\n            seo_title: game.seo_title,\n            categories: game.provider\n        }\n    ];\n    for (const filter of filters){\n        const result = games.find((g)=>{\n            return Object.entries(filter).every((param)=>{\n                let [key, value] = param;\n                return key === \"categories\" ? value !== undefined && Array.isArray(g[key]) && g[key].includes(value) : g[key] === value;\n            });\n        });\n        if (result !== undefined) return result;\n    }\n    return undefined;\n}\nfunction Page() {\n    _s();\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useParams)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [game, setGame] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(_const__WEBPACK_IMPORTED_MODULE_2__.API).then((res)=>res.json()).then((data)=>{\n            const concreteGame = findGame(data, params);\n            setGame(concreteGame);\n            setLoading(false);\n        });\n    }, []);\n    if (loading) return \"Loading!\";\n    if (!game) return \"No game found!\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mx-auto mt-6 max-autol sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"https://d2norla3tyc4cn.cloudfront.net/i/s3/\".concat(game.identifier, \".webp\"),\n                alt: game.seo_title,\n                className: \"h-full w-full object-cover object-center\"\n            }, void 0, false, {\n                fileName: \"D:\\\\WORK 2.0\\\\test-task\\\\task-3\\\\src\\\\app\\\\games\\\\[provider]\\\\[seo_title]\\\\page.tsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl font-bold tracking-tight text-white-900 sm:text-3xl\",\n                        children: [\n                            \"Title: \",\n                            game.title\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\WORK 2.0\\\\test-task\\\\task-3\\\\src\\\\app\\\\games\\\\[provider]\\\\[seo_title]\\\\page.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-xl font-bold tracking-tight text-white-900 sm:text-2xl\",\n                        children: [\n                            \"Provider: \",\n                            game.provider\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\WORK 2.0\\\\test-task\\\\task-3\\\\src\\\\app\\\\games\\\\[provider]\\\\[seo_title]\\\\page.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-xl font-bold tracking-tight text-white-900 sm:text-2xl\",\n                        children: [\n                            \"Categories: \",\n                            game.categories.map((category, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: [\n                                        category,\n                                        index < game.categories.length - 1 && \", \",\n                                        \" \"\n                                    ]\n                                }, category, true, {\n                                    fileName: \"D:\\\\WORK 2.0\\\\test-task\\\\task-3\\\\src\\\\app\\\\games\\\\[provider]\\\\[seo_title]\\\\page.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 147\n                                }, this))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\WORK 2.0\\\\test-task\\\\task-3\\\\src\\\\app\\\\games\\\\[provider]\\\\[seo_title]\\\\page.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\WORK 2.0\\\\test-task\\\\task-3\\\\src\\\\app\\\\games\\\\[provider]\\\\[seo_title]\\\\page.tsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\WORK 2.0\\\\test-task\\\\task-3\\\\src\\\\app\\\\games\\\\[provider]\\\\[seo_title]\\\\page.tsx\",\n        lineNumber: 49,\n        columnNumber: 9\n    }, this);\n}\n_s(Page, \"1wiji/1Q/gSFIOLtv8PMVCWTfdk=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useParams\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2FtZXMvW3Byb3ZpZGVyXS9bc2VvX3RpdGxlXS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDMkM7QUFDTztBQUNQO0FBTzNDLFNBQVNJLFNBQVNDLEtBQWEsRUFBRUMsSUFBWTtJQUN6QyxNQUFNQyxVQUFvQztRQUN0QztZQUFFQyxXQUFXRixLQUFLRSxTQUFTO1lBQUVDLFVBQVVILEtBQUtHLFFBQVE7UUFBQztRQUNyRDtZQUFFRCxXQUFXRixLQUFLRSxTQUFTO1lBQUVFLFlBQVlKLEtBQUtHLFFBQVE7UUFBQztLQUMxRDtJQUVELEtBQUssTUFBTUUsVUFBVUosUUFBUztRQUMxQixNQUFNSyxTQUFTUCxNQUFNUSxJQUFJLENBQUMsQ0FBQ0M7WUFDdkIsT0FBT0MsT0FBT0MsT0FBTyxDQUFDTCxRQUFRTSxLQUFLLENBQUM7b0JBQUMsQ0FBQ0MsS0FBS0MsTUFBTTt1QkFDN0NELFFBQVEsZUFDRkMsVUFBVUMsYUFBYUMsTUFBTUMsT0FBTyxDQUFDUixDQUFDLENBQUNJLElBQWtCLEtBQUtKLENBQUMsQ0FBQ0ksSUFBa0IsQ0FBQ0ssUUFBUSxDQUFDSixTQUM1RkwsQ0FBQyxDQUFDSSxJQUFrQixLQUFLQzs7UUFFdkM7UUFFQSxJQUFJUCxXQUFXUSxXQUFXLE9BQU9SO0lBQ3JDO0lBRUEsT0FBT1E7QUFDWDtBQUVlLFNBQVNJOztJQUNwQixNQUFNQyxTQUFTdEIsMERBQVNBO0lBQ3hCLE1BQU0sQ0FBQ3VCLFNBQVNDLFdBQVcsR0FBRzFCLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ0ssTUFBTXNCLFFBQVEsR0FBRzNCLCtDQUFRQSxDQUFtQm1CO0lBQ25EcEIsZ0RBQVNBLENBQUM7UUFDTjZCLE1BQU0zQix1Q0FBR0EsRUFDSjRCLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJLElBQ3RCRixJQUFJLENBQUMsQ0FBQ0c7WUFDSCxNQUFNQyxlQUFlOUIsU0FBUzZCLE1BQU1SO1lBQ3BDRyxRQUFRTTtZQUNSUCxXQUFXO1FBQ2Y7SUFDUixHQUFHLEVBQUU7SUFFTCxJQUFJRCxTQUFTLE9BQU87SUFDcEIsSUFBSSxDQUFDcEIsTUFBTSxPQUFPO0lBQ2xCLHFCQUNJLDhEQUFDNkI7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNDO2dCQUFJQyxLQUFLLDhDQUE4RCxPQUFoQmhDLEtBQUtpQyxVQUFVLEVBQUM7Z0JBQVFDLEtBQUtsQyxLQUFLRSxTQUFTO2dCQUFFNEIsV0FBVTs7Ozs7OzBCQUMvRyw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDSzt3QkFBR0wsV0FBVTs7NEJBQStEOzRCQUFROUIsS0FBS29DLEtBQUs7Ozs7Ozs7a0NBQy9GLDhEQUFDQzt3QkFBR1AsV0FBVTs7NEJBQThEOzRCQUFXOUIsS0FBS0csUUFBUTs7Ozs7OztrQ0FDcEcsOERBQUNrQzt3QkFBR1AsV0FBVTs7NEJBQThEOzRCQUFhOUIsS0FBS0ksVUFBVSxDQUFDa0MsR0FBRyxDQUFDLENBQUNDLFVBQVVDLHNCQUFVLDhEQUFDQzs7d0NBQXFCRjt3Q0FBVUMsUUFBUXhDLEtBQUtJLFVBQVUsQ0FBQ3NDLE1BQU0sR0FBRyxLQUFLO3dDQUFLOzttQ0FBaEVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs3SjtHQTNCd0JyQjs7UUFDTHJCLHNEQUFTQTs7O0tBREpxQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2dhbWVzL1twcm92aWRlcl0vW3Nlb190aXRsZV0vcGFnZS50c3g/NjJiYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEFQSSwgR2FtZSwgR2FtZXMgfSBmcm9tICcuLi8uLi8uLi9jb25zdCc7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcclxuXHJcbmludGVyZmFjZSBTdHJpbmdJbmRleGVkIHtcclxuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG59XHJcbnR5cGUgUGFyYW1zID0geyBwcm92aWRlcjogc3RyaW5nLCBzZW9fdGl0bGU6IHN0cmluZyB9O1xyXG5cclxuZnVuY3Rpb24gZmluZEdhbWUoZ2FtZXM6IEdhbWVbXSwgZ2FtZTogUGFyYW1zKTogR2FtZSB8IHVuZGVmaW5lZCB7XHJcbiAgICBjb25zdCBmaWx0ZXJzOiBQYXJ0aWFsPFN0cmluZ0luZGV4ZWQ+W10gPSBbXHJcbiAgICAgICAgeyBzZW9fdGl0bGU6IGdhbWUuc2VvX3RpdGxlLCBwcm92aWRlcjogZ2FtZS5wcm92aWRlciB9LFxyXG4gICAgICAgIHsgc2VvX3RpdGxlOiBnYW1lLnNlb190aXRsZSwgY2F0ZWdvcmllczogZ2FtZS5wcm92aWRlciB9LFxyXG4gICAgXTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGZpbHRlciBvZiBmaWx0ZXJzKSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZ2FtZXMuZmluZCgoZykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMoZmlsdGVyKS5ldmVyeSgoW2tleSwgdmFsdWVdKSA9PlxyXG4gICAgICAgICAgICAgICAga2V5ID09PSAnY2F0ZWdvcmllcydcclxuICAgICAgICAgICAgICAgICAgICA/IHZhbHVlICE9PSB1bmRlZmluZWQgJiYgQXJyYXkuaXNBcnJheShnW2tleSBhcyBrZXlvZiBHYW1lXSkgJiYgZ1trZXkgYXMga2V5b2YgR2FtZV0uaW5jbHVkZXModmFsdWUgYXMgc3RyaW5nKVxyXG4gICAgICAgICAgICAgICAgICAgIDogZ1trZXkgYXMga2V5b2YgR2FtZV0gPT09IHZhbHVlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xyXG4gICAgY29uc3QgcGFyYW1zID0gdXNlUGFyYW1zPFBhcmFtcz4oKVxyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbZ2FtZSwgc2V0R2FtZV0gPSB1c2VTdGF0ZTxHYW1lIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaChBUEkpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb25jcmV0ZUdhbWUgPSBmaW5kR2FtZShkYXRhLCBwYXJhbXMpXHJcbiAgICAgICAgICAgICAgICBzZXRHYW1lKGNvbmNyZXRlR2FtZSlcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBpZiAobG9hZGluZykgcmV0dXJuICdMb2FkaW5nISc7XHJcbiAgICBpZiAoIWdhbWUpIHJldHVybiAnTm8gZ2FtZSBmb3VuZCEnO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbXQtNiBtYXgtYXV0b2wgc206cHgtNiBsZzpncmlkIGxnOm1heC13LTd4bCBsZzpncmlkLWNvbHMtMyBsZzpnYXAteC04IGxnOnB4LThcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL2Qybm9ybGEzdHljNGNuLmNsb3VkZnJvbnQubmV0L2kvczMvJHtnYW1lLmlkZW50aWZpZXJ9LndlYnBgfSBhbHQ9e2dhbWUuc2VvX3RpdGxlfSBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpjb2wtc3Bhbi0yIGxnOmJvcmRlci1yIGxnOmJvcmRlci1ncmF5LTIwMCBsZzpwci04XCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtd2hpdGUtOTAwIHNtOnRleHQtM3hsXCI+VGl0bGU6IHtnYW1lLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC13aGl0ZS05MDAgc206dGV4dC0yeGxcIj5Qcm92aWRlcjoge2dhbWUucHJvdmlkZXJ9PC9oMj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LXdoaXRlLTkwMCBzbTp0ZXh0LTJ4bFwiPkNhdGVnb3JpZXM6IHtnYW1lLmNhdGVnb3JpZXMubWFwKChjYXRlZ29yeSwgaW5kZXgpID0+IDxzcGFuIGtleT17Y2F0ZWdvcnl9PntjYXRlZ29yeX17aW5kZXggPCBnYW1lLmNhdGVnb3JpZXMubGVuZ3RoIC0gMSAmJiAnLCAnfSA8L3NwYW4+KX08L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcbn0gICAiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBUEkiLCJ1c2VQYXJhbXMiLCJmaW5kR2FtZSIsImdhbWVzIiwiZ2FtZSIsImZpbHRlcnMiLCJzZW9fdGl0bGUiLCJwcm92aWRlciIsImNhdGVnb3JpZXMiLCJmaWx0ZXIiLCJyZXN1bHQiLCJmaW5kIiwiZyIsIk9iamVjdCIsImVudHJpZXMiLCJldmVyeSIsImtleSIsInZhbHVlIiwidW5kZWZpbmVkIiwiQXJyYXkiLCJpc0FycmF5IiwiaW5jbHVkZXMiLCJQYWdlIiwicGFyYW1zIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzZXRHYW1lIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJjb25jcmV0ZUdhbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJpZGVudGlmaWVyIiwiYWx0IiwiaDEiLCJ0aXRsZSIsImgyIiwibWFwIiwiY2F0ZWdvcnkiLCJpbmRleCIsInNwYW4iLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/games/[provider]/[seo_title]/page.tsx\n"));

/***/ })

});