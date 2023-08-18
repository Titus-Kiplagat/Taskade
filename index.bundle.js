"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktaskade"] = self["webpackChunktaskade"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lumanosimo&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --body-font: \"Lumanosimo\", sans-serif;\n  --color-body: #e8f3f8;\n  --color-header: #061b25;\n  --color-text: var(--color-header);\n  --color-text-muted: #a4d0e3;\n  --color-input: #082937;\n  --color-input-lighter: #0b374a;\n  --color-secondary: #ff8c42;\n  --color-secondary-darker: #cc7035;\n  --color-secondary-lighter: #ffa368;\n  --color-tertiary: #1c89b8;\n  --color-text-badge: #e8f3f8;\n  --color-disabled: #d2e7f1;\n  --color-text-disabled: #77b8d4;\n  --global-border-radius: 6px;\n  --global-transition: all 0.2s ease-in-out;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-size: 1.125rem;\n}\n\nbody {\n  font-family: var(--body-font);\n  background-color: var(--color-body);\n  color: var(--color-text);\n  display: grid;\n  place-content: center;\n}\n\nbutton,\ninput[type=\"checkbox\"] {\n  cursor: pointer;\n}\n\nul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\nh1 {\n  color: white;\n}\n\na {\n  color: var(--color-text);\n  transition: var(--global-transition);\n}\n\na:hover {\n  color: var(--color-secondary);\n}\n\n.container {\n  padding: 0 1.5rem;\n  max-height: 100vh;\n}\n\n.container,\n.wrapper {\n  margin-top: 3rem;\n}\n\n#main-header {\n  background-color: var(--color-header);\n  padding: 2rem 1rem;\n  border-radius: var(--global-border-radius);\n  margin-bottom: 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nbutton.refresh {\n  border: none;\n  border-radius: var(--global-border-radius);\n  font-weight: 700;\n  color: white;\n  background-color: var(--color-secondary);\n}\n\n.refresh svg {\n  height: 1.5rem;\n  width: 1.5rem;\n}\n\n#todo-form {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n\n#todo-form input {\n  flex-grow: 1;\n  color: var(--color-text-muted);\n  font-size: 1rem;\n  padding-left: 1rem;\n  font-family: var(--body-font);\n  transition: var(--global-transition);\n}\n\n#todo-form input::placeholder {\n  color: var(--color-text-muted);\n  font-family: var(--body-font);\n}\n\n#todo-form input:hover,\n#todo-form input:focus {\n  background-color: var(--color-input-lighter);\n}\n\n#todo-form button {\n  border: none;\n  padding: 1rem;\n  border-radius: var(--global-border-radius);\n  font-weight: 700;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  color: white;\n  background-color: var(--color-secondary);\n  transition: var(--global-transition);\n}\n\n#todos li button {\n  border: none;\n  padding: 0.25rem;\n  font-size: 1rem;\n  display: grid;\n  place-content: center;\n  background-color: transparent;\n}\n\n#todo-form button:hover {\n  background-color: var(--color-secondary-darker);\n}\n\n#todo-form button:active {\n  background-color: var(--color-secondary-darker);\n}\n\n#todos {\n  margin-bottom: 1rem;\n  max-height: 40vh;\n  overflow-y: auto;\n}\n\n#todos::-webkit-scrollbar {\n  display: none;\n}\n\n#todos li {\n  background-color: white;\n  border-radius: var(--global-border-radius);\n  padding: 1rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid var(--color-header);\n}\n\n#todos li div {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n\n#todos li div input[type=\"checkbox\"] {\n  height: 1.5rem;\n  width: 1.5rem;\n}\n\n.completed {\n  background-color: var(--color-disabled);\n  text-decoration: line-through;\n  color: var(--color-text-disabled);\n}\n\n#todos li div span {\n  padding: 0.2rem 1rem;\n  border-radius: var(--global-border-radius);\n  transition: var(--global-transition);\n}\n\n#todos li div span:focus {\n  background-color: var(--color-body);\n  outline: none;\n}\n\n#todos li div span[contenteditable]:hover {\n  background-color: var(--color-body);\n}\n\n#todos li button svg path {\n  transition: var(--global-transition);\n}\n\n#todos li button:hover svg path {\n  color: var(--color-text);\n}\n\n#todos li button:active svg {\n  transition: var(--global-transition);\n}\n\n#delete-all-btn {\n  font-size: 1rem;\n  width: 100%;\n  padding: 1rem;\n  border: none;\n  background-color: var(--color-secondary);\n  color: white;\n  border-radius: var(--global-border-radius);\n  font-family: var(--body-font);\n}\n\n@media screen and (width >= 768px) {\n  .container {\n    width: 30rem;\n  }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://taskade/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://taskade/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://taskade/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://taskade/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://taskade/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://taskade/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://taskade/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://taskade/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://taskade/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://taskade/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_domContentLoaded_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/domContentLoaded.js */ \"./src/modules/domContentLoaded.js\");\n\n\n\n(0,_modules_domContentLoaded_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://taskade/./src/index.js?");

/***/ }),

/***/ "./src/modules/addTask.js":
/*!********************************!*\
  !*** ./src/modules/addTask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTask.js */ \"./src/modules/createTask.js\");\n/* harmony import */ var _getTasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getTasks.js */ \"./src/modules/getTasks.js\");\n/* harmony import */ var _renderList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderList.js */ \"./src/modules/renderList.js\");\n/* harmony import */ var _saveTasks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saveTasks.js */ \"./src/modules/saveTasks.js\");\n/* harmony import */ var _updateTaskIndexes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./updateTaskIndexes.js */ \"./src/modules/updateTaskIndexes.js\");\n\n\n\n\n\n\nconst addTaskToList = (description) => {\n  const task = new _createTask_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](description);\n  _getTasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].unshift(task);\n\n  (0,_updateTaskIndexes_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  (0,_saveTasks_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  (0,_renderList_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTaskToList);\n\n//# sourceURL=webpack://taskade/./src/modules/addTask.js?");

/***/ }),

/***/ "./src/modules/createListMarkup.js":
/*!*****************************************!*\
  !*** ./src/modules/createListMarkup.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createListMarkup = (task) => `\n    <li class=\"${task.complete ? 'completed' : ''}\">\n      <div>\n        <input class=\"checkbox\" type=\"checkbox\" name=\"tasks\" ${task.complete ? 'checked' : ''\n} id=\"${task.index}\" />\n        <span ${!task.complete ? 'contenteditable' : ''}>${task.description}</span>\n      </div>\n      <button title=\"Remove task\" class=\"remove-task\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"1em\" viewBox=\"0 0 128 512\"><path d=\"M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z\"/></svg>\n      </button>\n    </li>\n  `;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createListMarkup);\n\n//# sourceURL=webpack://taskade/./src/modules/createListMarkup.js?");

/***/ }),

/***/ "./src/modules/createTask.js":
/*!***********************************!*\
  !*** ./src/modules/createTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getTasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTasks.js */ \"./src/modules/getTasks.js\");\n\n\nclass Task {\n  constructor(description) {\n    this.index = _getTasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length;\n    this.description = description;\n    this.complete = false;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n//# sourceURL=webpack://taskade/./src/modules/createTask.js?");

/***/ }),

/***/ "./src/modules/domContentLoaded.js":
/*!*****************************************!*\
  !*** ./src/modules/domContentLoaded.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _handleDeleteAllBtnClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleDeleteAllBtnClick.js */ \"./src/modules/handleDeleteAllBtnClick.js\");\n/* harmony import */ var _handleFormSubmit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handleFormSubmit.js */ \"./src/modules/handleFormSubmit.js\");\n/* harmony import */ var _renderList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderList.js */ \"./src/modules/renderList.js\");\n\n\n\n\nconst domContentLoaded = () => {\n  document.addEventListener('DOMContentLoaded', () => {\n    (0,_handleFormSubmit_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    (0,_handleDeleteAllBtnClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    (0,_renderList_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domContentLoaded);\n\n//# sourceURL=webpack://taskade/./src/modules/domContentLoaded.js?");

/***/ }),

/***/ "./src/modules/getTasks.js":
/*!*********************************!*\
  !*** ./src/modules/getTasks.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getTasksFromLocalStorage = () => {\n  const tasks = localStorage.getItem('Tasks');\n  return tasks ? JSON.parse(tasks) : [];\n};\n\nconst tasks = getTasksFromLocalStorage();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tasks);\n\n//# sourceURL=webpack://taskade/./src/modules/getTasks.js?");

/***/ }),

/***/ "./src/modules/handleDeleteAllBtnClick.js":
/*!************************************************!*\
  !*** ./src/modules/handleDeleteAllBtnClick.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _removeCompletedTasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeCompletedTasks.js */ \"./src/modules/removeCompletedTasks.js\");\n\n\nconst handleDeleteAllBtnClick = () => {\n  document.getElementById('delete-all-btn').addEventListener('click', _removeCompletedTasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleDeleteAllBtnClick);\n\n//# sourceURL=webpack://taskade/./src/modules/handleDeleteAllBtnClick.js?");

/***/ }),

/***/ "./src/modules/handleFormSubmit.js":
/*!*****************************************!*\
  !*** ./src/modules/handleFormSubmit.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _addTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTask.js */ \"./src/modules/addTask.js\");\n\n\nconst handleFormSubmit = () => {\n  const form = document.getElementById('todo-form');\n  const taskInput = document.getElementById('task-input');\n\n  form.addEventListener('submit', (event) => {\n    event.preventDefault();\n\n    (0,_addTask_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(taskInput.value.trim());\n\n    taskInput.value = '';\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleFormSubmit);\n\n//# sourceURL=webpack://taskade/./src/modules/handleFormSubmit.js?");

/***/ }),

/***/ "./src/modules/removeCompletedTasks.js":
/*!*********************************************!*\
  !*** ./src/modules/removeCompletedTasks.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getTasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTasks.js */ \"./src/modules/getTasks.js\");\n/* harmony import */ var _renderList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderList.js */ \"./src/modules/renderList.js\");\n/* harmony import */ var _saveTasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./saveTasks.js */ \"./src/modules/saveTasks.js\");\n/* harmony import */ var _updateTaskIndexes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateTaskIndexes.js */ \"./src/modules/updateTaskIndexes.js\");\n\n\n\n\n\nconst removeCompletedTasks = () => {\n  const filteredTasks = _getTasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].filter((task) => !task.complete);\n  _getTasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length = 0;\n  _getTasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].push(...filteredTasks);\n\n  (0,_updateTaskIndexes_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  (0,_saveTasks_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  (0,_renderList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeCompletedTasks);\n\n//# sourceURL=webpack://taskade/./src/modules/removeCompletedTasks.js?");

/***/ }),

/***/ "./src/modules/removeTask.js":
/*!***********************************!*\
  !*** ./src/modules/removeTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getTasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTasks.js */ \"./src/modules/getTasks.js\");\n/* harmony import */ var _saveTasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saveTasks.js */ \"./src/modules/saveTasks.js\");\n/* harmony import */ var _updateTaskIndexes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateTaskIndexes.js */ \"./src/modules/updateTaskIndexes.js\");\n\n\n\n\nconst removeTask = (index) => {\n  _getTasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].splice(index, 1);\n\n  (0,_updateTaskIndexes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  (0,_saveTasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeTask);\n\n//# sourceURL=webpack://taskade/./src/modules/removeTask.js?");

/***/ }),

/***/ "./src/modules/renderList.js":
/*!***********************************!*\
  !*** ./src/modules/renderList.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createListMarkup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createListMarkup.js */ \"./src/modules/createListMarkup.js\");\n/* harmony import */ var _getTasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getTasks.js */ \"./src/modules/getTasks.js\");\n/* harmony import */ var _removeTask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./removeTask.js */ \"./src/modules/removeTask.js\");\n/* harmony import */ var _toggleTaskCompletion_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toggleTaskCompletion.js */ \"./src/modules/toggleTaskCompletion.js\");\n/* harmony import */ var _updateTask_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./updateTask.js */ \"./src/modules/updateTask.js\");\n\n\n\n\n\n\nconst renderList = () => {\n  const todosListItems = document.getElementById('todos');\n  todosListItems.innerHTML = _getTasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].map(_createListMarkup_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]).join('');\n\n  const deleteButtons = document.querySelectorAll('.remove-task');\n  deleteButtons.forEach((button, index) => {\n    button.addEventListener('click', () => {\n      (0,_removeTask_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(index);\n      renderList();\n    });\n  });\n\n  const descriptionSpans = document.querySelectorAll('span');\n  descriptionSpans.forEach((description, index) => {\n    description.addEventListener('input', () => {\n      (0,_updateTask_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(index, description.textContent);\n    });\n  });\n\n  const checkboxes = document.querySelectorAll('.checkbox');\n  checkboxes.forEach((checkbox, index) => {\n    checkbox.addEventListener('change', () => {\n      (0,_toggleTaskCompletion_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(index);\n      renderList();\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderList);\n\n//# sourceURL=webpack://taskade/./src/modules/renderList.js?");

/***/ }),

/***/ "./src/modules/saveTasks.js":
/*!**********************************!*\
  !*** ./src/modules/saveTasks.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getTasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTasks.js */ \"./src/modules/getTasks.js\");\n\n\nconst saveTasksToLocalStorage = () => {\n  localStorage.setItem('Tasks', JSON.stringify(_getTasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (saveTasksToLocalStorage);\n\n//# sourceURL=webpack://taskade/./src/modules/saveTasks.js?");

/***/ }),

/***/ "./src/modules/toggleTaskCompletion.js":
/*!*********************************************!*\
  !*** ./src/modules/toggleTaskCompletion.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getTasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTasks.js */ \"./src/modules/getTasks.js\");\n/* harmony import */ var _saveTasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saveTasks.js */ \"./src/modules/saveTasks.js\");\n\n\n\nconst toggleTaskCompletion = (checkboxId) => {\n  _getTasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach((task) => {\n    if (task.index === checkboxId) {\n      task.complete = !task.complete;\n    }\n  });\n  (0,_saveTasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleTaskCompletion);\n\n//# sourceURL=webpack://taskade/./src/modules/toggleTaskCompletion.js?");

/***/ }),

/***/ "./src/modules/updateTask.js":
/*!***********************************!*\
  !*** ./src/modules/updateTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getTasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTasks.js */ \"./src/modules/getTasks.js\");\n/* harmony import */ var _saveTasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saveTasks.js */ \"./src/modules/saveTasks.js\");\n\n\n\nconst updateTaskDescription = (index, newDescription) => {\n  _getTasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][index].description = newDescription;\n  (0,_saveTasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateTaskDescription);\n\n//# sourceURL=webpack://taskade/./src/modules/updateTask.js?");

/***/ }),

/***/ "./src/modules/updateTaskIndexes.js":
/*!******************************************!*\
  !*** ./src/modules/updateTaskIndexes.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getTasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTasks.js */ \"./src/modules/getTasks.js\");\n\n\nconst updateTaskIndexes = () => {\n  _getTasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach((task, index) => {\n    task.index = index;\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateTaskIndexes);\n\n//# sourceURL=webpack://taskade/./src/modules/updateTaskIndexes.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);