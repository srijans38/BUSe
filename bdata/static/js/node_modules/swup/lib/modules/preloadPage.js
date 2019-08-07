'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _helpers = require('../helpers');

var preloadPage = function preloadPage(pathname) {
	var _this = this;

	var link = new _helpers.Link(pathname);
	return new Promise(function(resolve, reject) {
		if (
			link.getAddress() != (0, _helpers.getCurrentUrl)() &&
			!_this.cache.exists(link.getAddress())
		) {
			(0, _helpers.fetch)({ url: link.getAddress() }, function(response, request) {
				if (request.status === 500) {
					_this.triggerEvent('serverError');
					reject();
				} else {
					// get json data
					var page = (0, _helpers.getDataFromHTML)(
						response,
						request,
						_this.options.elements
					);
					if (page != null) {
						page.url = link.getAddress();
						_this.cache.cacheUrl(page, _this.options.debugMode);
						_this.triggerEvent('pagePreloaded');
					}
					resolve(_this.cache.getPage(link.getAddress()));
				}
			});
		} else {
			resolve(_this.cache.getPage(link.getAddress()));
		}
	});
};

exports.default = preloadPage;
