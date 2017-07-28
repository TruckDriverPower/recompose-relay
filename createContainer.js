"use strict";

exports.__esModule = true;

var _reactRelay = require("react-relay/classic");

var _reactRelay2 = _interopRequireDefault(_reactRelay);

var _toClass = require("recompose/toClass");

var _toClass2 = _interopRequireDefault(_toClass);

var _createHelper = require("recompose/createHelper");

var _createHelper2 = _interopRequireDefault(_createHelper);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var createContainer = function createContainer(options) {
  return function(BaseComponent) {
    return _reactRelay2.default.createContainer((0, _toClass2.default)(BaseComponent), options);
  };
};

exports.default = (0, _createHelper2.default)(createContainer, "createContainer", false);
