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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.factory = factory;\n\nvar _components = __webpack_require__(2);\n\nvar XPage = _interopRequireWildcard(_components);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction factory(componentName, config) {\n  var cname = Object.keys(XPage).find(function (key) {\n    return key.toLowerCase() === componentName.toLowerCase();\n  });\n  if (cname) {\n    return new XPage[cname](config);\n  }\n  return new XPage.Component(config);\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/ParserFactory.js\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/ParserFactory.js?");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/styles.scss\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/styles.scss?");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: SyntaxError: Missing class properties transform.\\n\\n\\u001b[0m \\u001b[90m 4 | \\u001b[39m\\n \\u001b[90m 5 | \\u001b[39m\\u001b[36mexport\\u001b[39m \\u001b[36mclass\\u001b[39m \\u001b[33mComponent\\u001b[39m {\\n\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 6 | \\u001b[39m  defaults \\u001b[33m=\\u001b[39m { }\\u001b[33m;\\u001b[39m\\n \\u001b[90m   | \\u001b[39m  \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\n \\u001b[90m 7 | \\u001b[39m\\n \\u001b[90m 8 | \\u001b[39m  constructor(config) {\\n \\u001b[90m 9 | \\u001b[39m    \\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mname \\u001b[33m=\\u001b[39m config\\u001b[33m.\\u001b[39mname\\u001b[33m;\\u001b[39m\\u001b[0m\\n\");\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/components.js\n// module id = 2\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/components.js?");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.parse = parse;\n\nvar _ParserFactory = __webpack_require__(0);\n\nvar ParserFactory = _interopRequireWildcard(_ParserFactory);\n\n__webpack_require__(1);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction parse(config) {\n  var elements = config.elements;\n  var output = [];\n\n  elements.forEach(function (component) {\n    var parser = ParserFactory.factory(component.component, component);\n    output.push(parser.getHtml());\n  });\n\n  return output.join('');\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/index.js\n// module id = 3\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })
/******/ ]);
});