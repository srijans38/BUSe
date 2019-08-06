(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SwupTheme"] = factory();
	else
		root["SwupTheme"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(1);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _index2.default; // this is here for webpack to expose SwupPlugin as window.SwupPlugin

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Theme = function () {
	function Theme() {
		var _this = this;

		_classCallCheck(this, Theme);

		this._addedStyleElements = [];
		this._addedHTMLContent = [];
		this._classNameAddedToElements = [];

		this._addClassNameToElement = function () {
			_this._classNameAddedToElements.forEach(function (item) {
				var elements = Array.prototype.slice.call(document.querySelectorAll(item.selector));
				elements.forEach(function (element) {
					element.classList.add('swup-transition-' + item.name);
				});
			});
		};

		this.isSwupPlugin = true;
	}

	_createClass(Theme, [{
		key: '_beforeMount',
		value: function _beforeMount() {
			// save original and replace animationSelector option
			this._originalAnimationSelectorOption = String(this.swup.options.animationSelector);
			this.swup.options.animationSelector = '[class*="swup-transition-"]';

			// add classes after each content replace
			this.swup.on('contentReplaced', this._addClassNameToElement);
		}
	}, {
		key: '_afterUnmount',
		value: function _afterUnmount() {
			// reset animationSelector option
			this.swup.options.animationSelector = this._originalAnimationSelectorOption;

			// remove added styles
			this._addedStyleElements.forEach(function (element) {
				element.outerHTML = '';
				element = null;
			});

			// remove added HTML
			this._addedHTMLContent.forEach(function (element) {
				element.outerHTML = '';
				element = null;
			});

			// remove added classnames
			this._classNameAddedToElements.forEach(function (item) {
				var elements = Array.prototype.slice.call(document.querySelectorAll(item.selector));
				elements.forEach(function (element) {
					element.className.split(' ').forEach(function (classItem) {
						if (new RegExp('^swup-transition-').test(classItem)) {
							element.classList.remove(classItem);
						}
					});
				});
			});

			this.swup.off('contentReplaced', this._addClassNameToElement);
		}
	}, {
		key: 'mount',
		value: function mount() {
			// this is mount method rewritten by class extending
			// and is executed when swup is enabled with theme
		}
	}, {
		key: 'unmount',
		value: function unmount() {
			// this is unmount method rewritten by class extending
			// and is executed when swup with theme is disabled
		}
	}, {
		key: 'applyStyles',
		value: function applyStyles(styles) {
			var head = document.head;
			var style = document.createElement('style');

			style.setAttribute('data-swup-theme', '');
			style.appendChild(document.createTextNode(styles));

			this._addedStyleElements.push(style);
			head.prepend(style);
		}
	}, {
		key: 'applyHTML',
		value: function applyHTML(content) {
			var element = document.createElement('div');
			element.innerHTML = content;
			this._addedHTMLContent.push(element);
			document.body.appendChild(element);
		}
	}, {
		key: 'addClassName',
		value: function addClassName(selector, name) {
			// save so it can be later removed
			this._classNameAddedToElements.push({ selector: selector, name: name });

			// add class the first time
			this._addClassNameToElement();
		}

		// this is here so we can tell if plugin was created by extending this class

	}]);

	return Theme;
}();

exports.default = Theme;

/***/ })
/******/ ]);
});