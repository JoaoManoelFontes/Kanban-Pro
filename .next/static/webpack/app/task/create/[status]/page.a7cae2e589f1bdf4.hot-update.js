"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/task/create/[status]/page",{

/***/ "(app-pages-browser)/./src/app/task/create/[status]/page.tsx":
/*!***********************************************!*\
  !*** ./src/app/task/create/[status]/page.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CreateTaskPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./src/components/ui/input.tsx\");\n/* harmony import */ var _components_ui_textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/textarea */ \"(app-pages-browser)/./src/components/ui/textarea.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _barrel_optimize_names_Plus_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Plus!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/plus.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\nfunction CreateTaskPage(param) {\n    let { params } = param;\n    //   if (!data) return <div>loading...</div>\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-4 bg-slate-300 shadow-lg rounded-lg p-5 w-3/6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-center underline\",\n                children: [\n                    \"Create \",\n                    params.status,\n                    \" Task\"\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\OneDrive\\\\Documentos\\\\Kanban Pro\\\\src\\\\app\\\\task\\\\create\\\\[status]\\\\page.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex flex-1 flex-col gap-4 rounded-lg border-opacity-10 p-4 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-2 py-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"title\",\n                                className: \"text-sm tracking-widest \",\n                                children: \"T\\xedtulo\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\OneDrive\\\\Documentos\\\\Kanban Pro\\\\src\\\\app\\\\task\\\\create\\\\[status]\\\\page.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_1__.Input, {\n                                type: \"text\",\n                                placeholder: \"Digite um t\\xedtulo para sua task...\",\n                                className: \" border-zinc-800\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\OneDrive\\\\Documentos\\\\Kanban Pro\\\\src\\\\app\\\\task\\\\create\\\\[status]\\\\page.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\OneDrive\\\\Documentos\\\\Kanban Pro\\\\src\\\\app\\\\task\\\\create\\\\[status]\\\\page.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-2 py-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"description\",\n                                className: \"text-sm tracking-widest \",\n                                children: \"Descri\\xe7\\xe3o\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\OneDrive\\\\Documentos\\\\Kanban Pro\\\\src\\\\app\\\\task\\\\create\\\\[status]\\\\page.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_textarea__WEBPACK_IMPORTED_MODULE_2__.Textarea, {\n                                placeholder: \"Digite uma descri\\xe7\\xe3o para sua task...\",\n                                className: \"border-zinc-800\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\OneDrive\\\\Documentos\\\\Kanban Pro\\\\src\\\\app\\\\task\\\\create\\\\[status]\\\\page.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\OneDrive\\\\Documentos\\\\Kanban Pro\\\\src\\\\app\\\\task\\\\create\\\\[status]\\\\page.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-center gap-2 py-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            variant: \"outline\",\n                            type: \"submit\",\n                            className: \"flex w-32\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Plus_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    size: 16\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\OneDrive\\\\Documentos\\\\Kanban Pro\\\\src\\\\app\\\\task\\\\create\\\\[status]\\\\page.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, this),\n                                \" Cadastrar\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\OneDrive\\\\Documentos\\\\Kanban Pro\\\\src\\\\app\\\\task\\\\create\\\\[status]\\\\page.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\OneDrive\\\\Documentos\\\\Kanban Pro\\\\src\\\\app\\\\task\\\\create\\\\[status]\\\\page.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\OneDrive\\\\Documentos\\\\Kanban Pro\\\\src\\\\app\\\\task\\\\create\\\\[status]\\\\page.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\OneDrive\\\\Documentos\\\\Kanban Pro\\\\src\\\\app\\\\task\\\\create\\\\[status]\\\\page.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_c = CreateTaskPage;\nvar _c;\n$RefreshReg$(_c, \"CreateTaskPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdGFzay9jcmVhdGUvW3N0YXR1c10vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUU2QztBQUNNO0FBQ0o7QUFDWjtBQVFwQixTQUFTSSxlQUFlLEtBQWtCO1FBQWxCLEVBQUVDLE1BQU0sRUFBVSxHQUFsQjtJQUNyQyw0Q0FBNEM7SUFFNUMscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTs7b0JBQXdCO29CQUFRRixPQUFPSSxNQUFNO29CQUFDOzs7Ozs7OzBCQUM1RCw4REFBQ0M7Z0JBQUtILFdBQVU7O2tDQUNkLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNJO2dDQUFNQyxTQUFRO2dDQUFRTCxXQUFVOzBDQUEyQjs7Ozs7OzBDQUc1RCw4REFBQ1AsdURBQUtBO2dDQUNKYSxNQUFLO2dDQUNMQyxhQUFZO2dDQUNaUCxXQUFVOzs7Ozs7Ozs7Ozs7a0NBR2QsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0k7Z0NBQU1DLFNBQVE7Z0NBQWNMLFdBQVU7MENBQTJCOzs7Ozs7MENBR2xFLDhEQUFDTiw2REFBUUE7Z0NBQ1BhLGFBQVk7Z0NBQ1pQLFdBQVU7Ozs7Ozs7Ozs7OztrQ0FHZCw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNMLHlEQUFNQTs0QkFBQ2EsU0FBUTs0QkFBVUYsTUFBSzs0QkFBU04sV0FBVTs7OENBQ2hELDhEQUFDSixnRkFBSUE7b0NBQUNhLE1BQU07Ozs7OztnQ0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTlCO0tBbEN3QloiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC90YXNrL2NyZWF0ZS9bc3RhdHVzXS9wYWdlLnRzeD9lMjY4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5cclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvaW5wdXQnXHJcbmltcG9ydCB7IFRleHRhcmVhIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL3RleHRhcmVhJ1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvYnV0dG9uJ1xyXG5pbXBvcnQgeyBQbHVzIH0gZnJvbSAnbHVjaWRlLXJlYWN0J1xyXG5cclxudHlwZSBQYXJhbXMgPSB7XHJcbiAgcGFyYW1zOiB7XHJcbiAgICBzdGF0dXM6ICd0b2RvJyB8ICdpbi1wcm9ncmVzcycgfCAnZG9uZSdcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZVRhc2tQYWdlKHsgcGFyYW1zIH06IFBhcmFtcykge1xyXG4gIC8vICAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdj5sb2FkaW5nLi4uPC9kaXY+XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTQgYmctc2xhdGUtMzAwIHNoYWRvdy1sZyByb3VuZGVkLWxnIHAtNSB3LTMvNlwiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdW5kZXJsaW5lXCI+Q3JlYXRlIHtwYXJhbXMuc3RhdHVzfSBUYXNrPC9oMT5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LTEgZmxleC1jb2wgZ2FwLTQgcm91bmRlZC1sZyBib3JkZXItb3BhY2l0eS0xMCBwLTQgXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0yIHB5LTJcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGl0bGVcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRyYWNraW5nLXdpZGVzdCBcIj5cclxuICAgICAgICAgICAgVMOtdHVsb1xyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGlnaXRlIHVtIHTDrXR1bG8gcGFyYSBzdWEgdGFzay4uLlwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBib3JkZXItemluYy04MDBcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTIgcHktMlwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiIGNsYXNzTmFtZT1cInRleHQtc20gdHJhY2tpbmctd2lkZXN0IFwiPlxyXG4gICAgICAgICAgICBEZXNjcmnDp8Ojb1xyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxUZXh0YXJlYVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSB1bWEgZGVzY3Jpw6fDo28gcGFyYSBzdWEgdGFzay4uLlwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci16aW5jLTgwMFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTIgcHktMlwiPlxyXG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZVwiIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJmbGV4IHctMzJcIj5cclxuICAgICAgICAgICAgPFBsdXMgc2l6ZT17MTZ9IC8+IENhZGFzdHJhclxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiSW5wdXQiLCJUZXh0YXJlYSIsIkJ1dHRvbiIsIlBsdXMiLCJDcmVhdGVUYXNrUGFnZSIsInBhcmFtcyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwic3RhdHVzIiwiZm9ybSIsImxhYmVsIiwiaHRtbEZvciIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhcmlhbnQiLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/task/create/[status]/page.tsx\n"));

/***/ })

});