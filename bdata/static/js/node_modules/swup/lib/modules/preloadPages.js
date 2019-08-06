'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.preloadPages = undefined;

var _utils = require('../utils');

var _preloadPage = require('./preloadPage');

var _preloadPage2 = _interopRequireDefault(_preloadPage);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

var preloadPages = (exports.preloadPages = function preloadPages() {
	var _this = this;

	if (this.options.preload) {
		(0, _utils.queryAll)('[data-swup-preload]').forEach(function(element) {
			_this.preloadPage(element.href);
		});
	}
});

exports.default = preloadPages;
