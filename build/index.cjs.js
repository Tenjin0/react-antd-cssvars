'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var antd = require('antd');
var table = require('antd/lib/table/');
var checkbox = require('antd/lib/checkbox/');
var radio = require('antd/lib/radio/');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var table__default = /*#__PURE__*/_interopDefaultLegacy(table);
var checkbox__default = /*#__PURE__*/_interopDefaultLegacy(checkbox);
var radio__default = /*#__PURE__*/_interopDefaultLegacy(radio);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

var classnames = createCommonjsModule(function (module) {
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

var ButtonComponent = function (props) {
    var convertLegacyProps = function () {
        var type = props.type || undefined;
        var danger = props.type === "danger";
        if (props.type === "danger") {
            type = undefined;
        }
        if (props.type === "secondary") {
            type = undefined;
        }
        return {
            type: type,
            danger: danger,
            className: classnames(props.className, { "btn-secondary": props.type === "secondary", "btn-uppercase": props.uppercase })
        };
    };
    var convertedProps = __assign(__assign(__assign({}, props), { uppercase: undefined }), convertLegacyProps());
    return (React__default['default'].createElement(antd.Button, __assign({}, convertedProps), props.children));
};

var ThemeColorKeys = ["primary-color", "secondary-color", "danger-color", "primary-color-hover", "secondary-color-hover", "danger-color-hover"];
var Theme = /** @class */ (function () {
    function Theme(theme, computed) {
        this.theme = new Map();
        for (var i = 0; i < Theme.ThemeColorKeys.length; i++) {
            var themecolorKey = Theme.ThemeColorKeys[i];
            var cssvar = this.keyToProperty(themecolorKey);
            if (theme && theme.has(themecolorKey)) {
                var color = theme.get(themecolorKey);
                this.set(themecolorKey, color);
            }
            else {
                var color = getComputedStyle(document.body).getPropertyValue(cssvar).trim();
                this.theme.set(themecolorKey, color);
            }
        }
        if (computed) {
            this.computed = computed;
        }
    }
    Theme.prototype.keyToProperty = function (key) {
        return "--" + key;
    };
    Theme.prototype.set = function (key, value) {
        this.theme.set(key, value);
        var cssvar = this.keyToProperty(key);
        document.body.style.setProperty(cssvar, value);
        if (this.computed) {
            this.computed(key, value);
        }
    };
    Theme.prototype.has = function (key) {
        return this.theme.has(key);
    };
    Theme.prototype.get = function (key) {
        return this.theme.get(key);
    };
    Theme.ColorLuminance = function (hex, lum) {
        // validate hex string
        hex = String(hex).replace(/[^0-9a-f]/gi, '');
        if (hex.length < 6) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        lum = lum || 0;
        // convert to decimal and change luminosity
        var rgb = "#", c, i;
        for (i = 0; i < 3; i++) {
            c = parseInt(hex.substr(i * 2, 2), 16);
            c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
            rgb += ("00" + c).substr(c.length);
        }
        return rgb;
    };
    Theme.ThemeColorKeys = ThemeColorKeys;
    return Theme;
}());
// document.documentElement.style.setProperty("--primary-color", "#23b696");

var ThemeContext = React__default['default'].createContext(null);
ThemeContext.Provider;
ThemeContext.Consumer;

Object.defineProperty(exports, 'Table', {
    enumerable: true,
    get: function () {
        return table__default['default'];
    }
});
Object.defineProperty(exports, 'CheckBox', {
    enumerable: true,
    get: function () {
        return checkbox__default['default'];
    }
});
Object.defineProperty(exports, 'Radio', {
    enumerable: true,
    get: function () {
        return radio__default['default'];
    }
});
exports.Button = ButtonComponent;
exports.Theme = Theme;
exports.ThemeContext = ThemeContext;
//# sourceMappingURL=index.cjs.js.map
