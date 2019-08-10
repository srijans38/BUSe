'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function() {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];
			descriptor.enumerable = descriptor.enumerable || false;
			descriptor.configurable = true;
			if ('value' in descriptor) descriptor.writable = true;
			Object.defineProperty(target, descriptor.key, descriptor);
		}
	}
	return function(Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);
		if (staticProps) defineProperties(Constructor, staticProps);
		return Constructor;
	};
})();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError('Cannot call a class as a function');
	}
}

var Cache = (function() {
	function Cache() {
		_classCallCheck(this, Cache);

		this.pages = {};
		this.count = 0;
		this.last = null;
	}

	_createClass(Cache, [
		{
			key: 'cacheUrl',
			value: function cacheUrl(page, displayCache) {
				this.count++;
				if (page.url in this.pages === false) {
					this.pages[page.url] = page;
				}
				this.last = this.pages[page.url];
				if (displayCache) {
					this.displayCache();
				}
			}
		},
		{
			key: 'getPage',
			value: function getPage(url) {
				return this.pages[url];
			}
		},
		{
			key: 'displayCache',
			value: function displayCache() {
				console.groupCollapsed('Cache (' + Object.keys(this.pages).length + ')');
				for (var key in this.pages) {
					console.log(this.pages[key]);
				}
				console.groupEnd();
			}
		},
		{
			key: 'exists',
			value: function exists(url) {
				return url in this.pages;
			}
		},
		{
			key: 'empty',
			value: function empty(showLog) {
				this.pages = {};
				this.count = 0;
				this.last = null;
				if (showLog) {
					console.log('Cache cleared');
				}
			}
		},
		{
			key: 'remove',
			value: function remove(url) {
				delete this.pages[url];
			}
		}
	]);

	return Cache;
})();

exports.default = Cache;
