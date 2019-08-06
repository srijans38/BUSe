'use strict';

var _utils = require('../helpers/utils');

module.exports = function(element) {
	var _this = this;

	var blocks = 0;

	var _loop = function _loop(i) {
		if (element.querySelector(_this.options.elements[i]) == null) {
			console.warn('Element ' + _this.options.elements[i] + ' is not in current page.');
		} else {
			(0, _utils.queryAll)(_this.options.elements[i]).forEach(function(item, index) {
				(0, _utils.queryAll)(_this.options.elements[i], element)[
					index
				].dataset.swup = blocks;
				blocks++;
			});
		}
	};

	for (var i = 0; i < this.options.elements.length; i++) {
		_loop(i);
	}
};
