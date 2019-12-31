"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = decorate;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var node = _propTypes.PropTypes.node,
    oneOfType = _propTypes.PropTypes.oneOfType,
    func = _propTypes.PropTypes.func;

function decorate(componentName) {
  var displayName = "LeafletUniv".concat(componentName);

  var Decorated =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2["default"])(Decorated, _Component);

    function Decorated(props) {
      var _this;

      (0, _classCallCheck2["default"])(this, Decorated);
      _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Decorated).call(this, props));
      _this.state = {
        loaded: false
      };
      _this.constructor.displayName = displayName;
      return _this;
    }

    (0, _createClass2["default"])(Decorated, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.setState(function () {
          return {
            loaded: true
          };
        });
        this.ClientComponent = require('react-leaflet')[componentName];
      }
    }, {
      key: "render",
      value: function render() {
        if (!this.state.loaded) return null;
        var ClientComponent = this.ClientComponent;
        var _this$props = this.props,
            children = _this$props.children,
            leafletRef = _this$props.leafletRef,
            rest = (0, _objectWithoutProperties2["default"])(_this$props, ["children", "leafletRef"]);
        var childComponents = typeof children === 'function' ? children() : children;
        return _react["default"].createElement(ClientComponent, (0, _extends2["default"])({}, rest, {
          ref: leafletRef
        }), childComponents);
      }
    }]);
    return Decorated;
  }(_react.Component);

  Decorated.displayName = displayName;
  Decorated.propTypes = {
    children: oneOfType([node, func]),
    leafletRef: func
  };
  return Decorated;
}