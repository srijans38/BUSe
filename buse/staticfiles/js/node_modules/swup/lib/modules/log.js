'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var log = function log(str) {
	if (this.options.debugMode) {
		console.log(str + '%c', 'color: #009ACD');
	}
};

exports.default = log;
