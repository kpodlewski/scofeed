/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./style.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "* {\n  margin: 0;\n  padding: 0; }\n\nbody {\n  background-image: url(" + __webpack_require__(7) + ");\n  background-position: center;\n  background-size: cover;\n  color: #EEEEEE;\n  text-align: center;\n  font-family: \"Lato\", sans-serif; }\n\n@media screen and (max-width: 700px) {\n  body {\n    width: 100%; } }\n\nheader {\n  overflow: hidden; }\n\n.container {\n  margin: 0 auto;\n  width: 100vw;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  font-size: 5vw; }\n\n.head_logo {\n  background-image: url(" + __webpack_require__(8) + ");\n  height: 28vh;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center; }\n\nsection .container {\n  background-position: center;\n  height: 60vh;\n  width: 100vw;\n  display: flex;\n  justify-content: space-around;\n  align-content: center;\n  align-items: center; }\n\n.empty div {\n  height: 100pxf; }\n\n.container {\n  overflow: hidden; }\n\nfooter {\n  display: flex;\n  justify-content: space-around;\n  background-color: #ba7753;\n  height: 12vh;\n  width: 100vw; }\n\n.adress {\n  text-align: left;\n  margin-top: 2%;\n  font-size: 3vw; }\n\n.hours {\n  text-align: right;\n  margin-top: 2%;\n  font-size: 3vw; }\n\n.coffees {\n  background-image: url(" + __webpack_require__(6) + ");\n  height: 15vh;\n  width: 20vw;\n  background-position: center;\n  background-size: cover; }\n\n.menu-item,\n.menu-open-button {\n  background: #EEEEEE;\n  border-radius: 100%;\n  width: 80px;\n  height: 80px;\n  margin-left: -40px;\n  margin-top: 10%;\n  position: absolute;\n  color: #FFFFFF;\n  text-align: center;\n  line-height: 80px;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  -webkit-transition: -webkit-transform ease-out 200ms;\n  transition: -webkit-transform ease-out 200ms;\n  transition: transform ease-out 200ms;\n  transition: transform ease-out 200ms, -webkit-transform ease-out 200ms; }\n\n.menu-open {\n  display: none; }\n\n.lines {\n  width: 25px;\n  height: 3px;\n  background: #596778;\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-left: -12.5px;\n  margin-top: -1.5px;\n  -webkit-transition: -webkit-transform 200ms;\n  transition: -webkit-transform 200ms;\n  transition: transform 200ms;\n  transition: transform 200ms, -webkit-transform 200ms; }\n\n.line-1 {\n  -webkit-transform: translate3d(0, -8px, 0);\n  transform: translate3d(0, -8px, 0); }\n\n.line-2 {\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0); }\n\n.line-3 {\n  -webkit-transform: translate3d(0, 8px, 0);\n  transform: translate3d(0, 8px, 0); }\n\n.menu-open:checked + .menu-open-button .line-1 {\n  -webkit-transform: translate3d(0, 0, 0) rotate(45deg);\n  transform: translate3d(0, 0, 0) rotate(45deg); }\n\n.menu-open:checked + .menu-open-button .line-2 {\n  -webkit-transform: translate3d(0, 0, 0) scale(0.1, 1);\n  transform: translate3d(0, 0, 0) scale(0.1, 1); }\n\n.menu-open:checked + .menu-open-button .line-3 {\n  -webkit-transform: translate3d(0, 0, 0) rotate(-45deg);\n  transform: translate3d(0, 0, 0) rotate(-45deg); }\n\n.menu {\n  margin: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 80px;\n  height: 80px;\n  text-align: center;\n  box-sizing: border-box;\n  font-size: 1rem; }\n\n.menu-item {\n  transition: all 0.1s ease 0s; }\n\n.menu-item:hover {\n  background: #EEEEEE;\n  color: #3290B1; }\n\n.menu-item:nth-child(3) {\n  -webkit-transition-duration: 180ms;\n  transition-duration: 180ms; }\n\n.menu-item:nth-child(4) {\n  -webkit-transition-duration: 180ms;\n  transition-duration: 180ms; }\n\n.menu-item:nth-child(5) {\n  -webkit-transition-duration: 180ms;\n  transition-duration: 180ms; }\n\n.menu-item:nth-child(6) {\n  -webkit-transition-duration: 180ms;\n  transition-duration: 180ms; }\n\n.menu-item:nth-child(7) {\n  -webkit-transition-duration: 180ms;\n  transition-duration: 180ms; }\n\n.menu-item:nth-child(8) {\n  -webkit-transition-duration: 180ms;\n  transition-duration: 180ms; }\n\n.menu-item:nth-child(9) {\n  -webkit-transition-duration: 180ms;\n  transition-duration: 180ms; }\n\n.menu-open-button {\n  z-index: 2;\n  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  -webkit-transition-duration: 400ms;\n  transition-duration: 400ms;\n  -webkit-transform: scale(1.1, 1.1) translate3d(0, 0, 0);\n  transform: scale(1.1, 1.1) translate3d(0, 0, 0);\n  cursor: pointer;\n  box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14); }\n\n.menu-open-button:hover {\n  -webkit-transform: scale(1.2, 1.2) translate3d(0, 0, 0);\n  transform: scale(1.2, 1.2) translate3d(0, 0, 0); }\n\n.menu-open:checked + .menu-open-button {\n  -webkit-transition-timing-function: linear;\n  transition-timing-function: linear;\n  -webkit-transition-duration: 200ms;\n  transition-duration: 200ms;\n  -webkit-transform: scale(0.8, 0.8) translate3d(0, 0, 0);\n  transform: scale(0.8, 0.8) translate3d(0, 0, 0); }\n\n.menu-open:checked ~ .menu-item {\n  -webkit-transition-timing-function: cubic-bezier(0.935, 0, 0.34, 1.33);\n  transition-timing-function: cubic-bezier(0.935, 0, 0.34, 1.33); }\n\n.menu-open:checked ~ .menu-item:nth-child(3) {\n  transition-duration: 180ms;\n  -webkit-transition-duration: 180ms;\n  -webkit-transform: translate3d(0.08361px, -104.99997px, 0);\n  transform: translate3d(0.08361px, -104.99997px, 0); }\n\n.menu-open:checked ~ .menu-item:nth-child(4) {\n  transition-duration: 280ms;\n  -webkit-transition-duration: 280ms;\n  -webkit-transform: translate3d(90.9466px, -52.47586px, 0);\n  transform: translate3d(90.9466px, -52.47586px, 0); }\n\n.menu-open:checked ~ .menu-item:nth-child(5) {\n  transition-duration: 380ms;\n  -webkit-transition-duration: 380ms;\n  -webkit-transform: translate3d(90.9466px, 52.47586px, 0);\n  transform: translate3d(90.9466px, 52.47586px, 0); }\n\n.menu-open:checked ~ .menu-item:nth-child(6) {\n  transition-duration: 480ms;\n  -webkit-transition-duration: 480ms;\n  -webkit-transform: translate3d(0.08361px, 104.99997px, 0);\n  transform: translate3d(0.08361px, 104.99997px, 0); }\n\n.menu-open:checked ~ .menu-item:nth-child(7) {\n  transition-duration: 580ms;\n  -webkit-transition-duration: 580ms;\n  -webkit-transform: translate3d(-90.86291px, 52.62064px, 0);\n  transform: translate3d(-90.86291px, 52.62064px, 0); }\n\n.menu-open:checked ~ .menu-item:nth-child(8) {\n  transition-duration: 680ms;\n  -webkit-transition-duration: 680ms;\n  -webkit-transform: translate3d(-91.03006px, -52.33095px, 0);\n  transform: translate3d(-91.03006px, -52.33095px, 0); }\n\n.menu-open:checked ~ .menu-item:nth-child(9) {\n  transition-duration: 780ms;\n  -webkit-transition-duration: 780ms;\n  -webkit-transform: translate3d(-0.25084px, -104.9997px, 0);\n  transform: translate3d(-0.25084px, -104.9997px, 0); }\n\n.blue {\n  background-color: #8f3200;\n  box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);\n  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12); }\n\n.blue:hover {\n  color: #8f3200;\n  text-shadow: none; }\n\n.green {\n  background-color: #8f3200;\n  box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);\n  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12); }\n\n.green:hover {\n  color: #8f3200;\n  text-shadow: none; }\n\n.red {\n  background-color: #8f3200;\n  box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);\n  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12); }\n\n.red:hover {\n  color: #8f3200;\n  text-shadow: none; }\n\n.purple {\n  background-color: #8f3200;\n  box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);\n  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12); }\n\n.purple:hover {\n  color: #8f3200;\n  text-shadow: none; }\n\n.orange {\n  background-color: #8f3200;\n  box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);\n  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12); }\n\n.orange:hover {\n  color: #8f3200;\n  text-shadow: none; }\n\n.lightblue {\n  background-color: #8f3200;\n  box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);\n  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12); }\n\n.lightblue:hover {\n  color: #8f3200;\n  text-shadow: none; }\n", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(5);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/img/icon.png";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/img/coffeeshade.jpg";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/img/logo.png";

/***/ })
/******/ ]);