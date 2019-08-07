'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.query = query;
exports.queryAll = queryAll;
function query(selector) {
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

    if (typeof selector !== 'string') {
        return selector;
    }

    return context.querySelector(selector);
}

function queryAll(selector) {
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

    if (typeof selector !== 'string') {
        return selector;
    }

    return Array.prototype.slice.call(context.querySelectorAll(selector));
}