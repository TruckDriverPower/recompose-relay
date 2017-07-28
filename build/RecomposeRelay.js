(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["RecomposeRelay"] = factory();
	else
		root["RecomposeRelay"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _reactRelay = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-relay\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _reactRelay2 = _interopRequireDefault(_reactRelay);

	var _toClass = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"recompose/toClass\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _toClass2 = _interopRequireDefault(_toClass);

	var _createHelper = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"recompose/createHelper\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _createHelper2 = _interopRequireDefault(_createHelper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createContainer = function createContainer(options) {
	  return function (BaseComponent) {
	    return _reactRelay2.default.createContainer((0, _toClass2.default)(BaseComponent), options);
	  };
	};

	exports.default = (0, _createHelper2.default)(createContainer, 'createContainer', false);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.createContainer = undefined;

	var _createContainer2 = __webpack_require__(1);

	var _createContainer3 = _interopRequireDefault(_createContainer2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.createContainer = _createContainer3.default;

/***/ }
/******/ ])
});
;