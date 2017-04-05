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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["a"] = factory;


function factory(componentName, config) {
  switch (componentName) {
    case 'form':
      return new __WEBPACK_IMPORTED_MODULE_0__components__[componentName](config);
    default:
      return new __WEBPACK_IMPORTED_MODULE_0__components__["Component"](config);
  }
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ParserFactory__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HBox", function() { return HBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VBox", function() { return VBox; });


class Component {
  constructor(config) {
    this.name = config.name;
    this.config = config;
    this.children = config.children;
  }
  getHtml() {
    return '<div></div>';
  }
  // merge当前config到子config中，子config可继承父config
  mergeConfig(childConfig) {
    return Object.assign({ parent: this }, this.config, childConfig);
  }
  getChildrenHtmls() {
    let arr = [];
    if (this.children) {
      this.children.forEach(childConfig => {
        arr.push(this.getChildHtml(childConfig));
      });
    }
    return arr;
  }
  getChildHtml(childConfig) {
    let config = this.mergeConfig(childConfig);
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ParserFactory__["a" /* factory */])(config.name, config).getHtml();
  }
}

class Form extends Component {
  getHtml() {
    return `<div class="x-page-form">${this.getChildrenHtmls()}</div>`;
  }
}

class HBox extends Component {
  getHtml() {
    return `<div class="x-page-hbox">${this.getChildrenHtmls()}</div>`;
  }
}

class VBox extends Component {
  getHtml() {
    return `<div class="x-page-vbox">${this.getChildrenHtmls()}</div>`;
  }
}




/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ParserFactory__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["parse"] = parse;


function parse(config) {
  let elements = config.elements;
  let output = [];

  elements.forEach(component => {
    let parser = __WEBPACK_IMPORTED_MODULE_0__ParserFactory__["a" /* factory */](component.name, component);
    output.push(parser.getHtml());
  });

  return output.join('');
}


/***/ })
/******/ ]);
});