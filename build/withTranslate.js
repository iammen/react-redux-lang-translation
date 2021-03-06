'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _context = require('./context');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * HOC for acccessing translate function
 * 
 * @param  {Object} WrappedComponent React component
 * @return {Object}
 */
function withTranslate(WrappedComponent) {
  return _react2.default.forwardRef(function (props, ref) {
    return _react2.default.createElement(
      _context.TranslateConsumer,
      null,
      function (_ref) {
        var addTranslation = _ref.addTranslation,
            translate = _ref.translate;
        return _react2.default.createElement(WrappedComponent, _extends({}, props, {
          addTranslation: addTranslation,
          translate: translate,
          ref: ref
        }));
      }
    );
  });
}

exports.default = withTranslate;