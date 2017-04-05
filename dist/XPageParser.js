(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["XPageParser"] = factory();
	else
		root["XPageParser"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components__ = __webpack_require__(1);\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = factory;\n\n\nfunction camelize(str) {\n  return str.substr(0, 1).toUpperCase() + str.substring(1);\n}\n\nfunction factory(componentName, config) {\n  switch (componentName) {\n    case 'form':\n      return new __WEBPACK_IMPORTED_MODULE_0__components__[camelize(componentName)](config);\n    default:\n      return new __WEBPACK_IMPORTED_MODULE_0__components__[\"Component\"](config);\n  }\n}\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/ParserFactory.js\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/ParserFactory.js?");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ParserFactory__ = __webpack_require__(0);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return Component; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Form\", function() { return Form; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HBox\", function() { return HBox; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VBox\", function() { return VBox; });\n\n\nclass Component {\n  constructor(config) {\n    this.name = config.name;\n    this.config = config;\n    this.children = config.children;\n  }\n  getHtml() {\n    return '<div></div>';\n  }\n  // merge当前config到子config中，子config可继承父config\n  mergeConfig(childConfig) {\n    return Object.assign({ parent: this }, this.config, childConfig);\n  }\n  getChildrenHtmls() {\n    let arr = [];\n    if (this.children) {\n      this.children.forEach(childConfig => {\n        arr.push(this.getChildHtml(childConfig));\n      });\n    }\n    return arr.join('');\n  }\n  getChildHtml(childConfig) {\n    let config = this.mergeConfig(childConfig);\n    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ParserFactory__[\"a\" /* factory */])(config.name, config).getHtml();\n  }\n}\n\nclass Form extends Component {\n  getHtml() {\n    return `<div class=\"x-page-form\">${this.getChildrenHtmls()}</div>`;\n  }\n}\n\nclass HBox extends Component {\n  getHtml() {\n    return `<div class=\"x-page-hbox\">${this.getChildrenHtmls()}</div>`;\n  }\n}\n\nclass VBox extends Component {\n  getHtml() {\n    return `<div class=\"x-page-vbox\">${this.getChildrenHtmls()}</div>`;\n  }\n}\n\n\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/components.js\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/components.js?");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ParserFactory__ = __webpack_require__(0);\n/* harmony export (immutable) */ __webpack_exports__[\"parse\"] = parse;\n\n\nfunction parse(config) {\n  let elements = config.elements;\n  let output = [];\n\n  elements.forEach(component => {\n    let parser = __WEBPACK_IMPORTED_MODULE_0__ParserFactory__[\"a\" /* factory */](component.component, component);\n    output.push(parser.getHtml());\n  });\nconsole.log(output);\n  return output.join('');\n}\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/index.js\n// module id = 2\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })
/******/ ]);
});