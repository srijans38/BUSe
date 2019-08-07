'use strict';

var _utils = require('./utils');

module.exports = function (html, request) {
    var _this = this;

    var content = html.replace('<body', '<div id="swupBody"').replace('</body>', '</div>');
    var fakeDom = document.createElement('div');
    fakeDom.innerHTML = content;
    var blocks = [];

    for (var i = 0; i < this.options.elements.length; i++) {
        if (fakeDom.querySelector(this.options.elements[i]) == null) {
            console.warn('Element ' + this.options.elements[i] + ' is not found in cached page.');
            return null;
        } else {
            (0, _utils.queryAll)(this.options.elements[i]).forEach(function (item, index) {
                (0, _utils.queryAll)(_this.options.elements[i], fakeDom)[index].dataset.swup = blocks.length;
                blocks.push((0, _utils.queryAll)(_this.options.elements[i], fakeDom)[index].outerHTML);
            });
        }
    }

    var json = {
        title: fakeDom.querySelector('title').innerText,
        pageClass: fakeDom.querySelector('#swupBody').className,
        originalContent: html,
        blocks: blocks,
        responseURL: request != null ? request.responseURL : window.location.href
    };
    return json;
};