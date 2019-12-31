"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _decorator = _interopRequireDefault(require("./decorator"));

var COMPONENTS = ['AttributionControl', 'Circle', 'CircleMarker', 'ControlledLayer', 'DivOverlay', 'FeatureGroup', 'GeoJSON', 'GridLayer', 'ImageOverlay', 'LayerGroup', 'LayersControl', 'Map', 'MapComponent', 'MapControl', 'MapEvented', 'MapLayer', 'Marker', 'Pane', 'Path', 'Polygon', 'Polyline', 'Popup', 'Rectangle', 'ScaleControl', 'TileLayer', 'Tooltip', 'VideoOverlay', 'WMSTileLayer', 'ZoomControl'];
var COMPONENT_MAP = COMPONENTS.reduce(function (map, name) {
  map[name] = (0, _decorator["default"])(name);
  return map;
}, {});
module.exports = COMPONENT_MAP;