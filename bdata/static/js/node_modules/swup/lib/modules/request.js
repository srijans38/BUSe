"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

module.exports = function (options) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var defaults = {
        url: window.location.pathname + window.location.search,
        method: "GET",
        data: null
    };

    var data = _extends({}, defaults, options);

    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status !== 500) {
                callback(request.responseText, request);
            } else {
                callback(null, request);
            }
        }
    };

    request.open(data.method, data.url, true);
    request.setRequestHeader("X-Requested-With", "swup");
    request.send(data.data);
    return request;
};