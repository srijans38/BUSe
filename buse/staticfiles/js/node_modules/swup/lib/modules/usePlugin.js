'use strict';

module.exports = function(plugin, options) {
	var _this = this;

	options = Object.assign({}, plugin.options, options);

	plugin.options = options;

	var getCurrentPageHtml = function getCurrentPageHtml() {
		var page = _this.Cache.getPage(window.location.pathname + window.location.search);
		var html = document.createElement('html');
		html.innerHTML = page.originalContent;
		return html;
	};

	this.plugins.push(plugin);
	plugin.exec(options, this, getCurrentPageHtml);
	return this.plugins;
};
