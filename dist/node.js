"use strict";

exports.__esModule = true;

require("core-js/modules/es.weak-map.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

exports.request = exports.combineUrl = exports.default = void 0;

require("core-js/modules/es.promise.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.object.assign.js");

var _nodeFetch = _interopRequireWildcard(require("node-fetch"));

var _es = _interopRequireDefault(require("web-streams-polyfill/ponyfill/es2018"));

var _index = _interopRequireWildcard(require("./index"));

exports.default = _index.default;
exports.combineUrl = _index.combineUrl;
exports.request = _index.request;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Basically from https://github.com/sindresorhus/ky-universal/blob/main/index.js with modifications
var TEN_MEGABYTES = 10000000;

function _ref(url, options) {
  return (0, _nodeFetch.default)(url, Object.assign({
    highWaterMark: TEN_MEGABYTES
  }, options));
}

if (!global.fetch) {
  global.fetch = _ref;
}

if (!global.Headers) global.Headers = _nodeFetch.Headers;
if (!global.Request) global.Request = _nodeFetch.Request;
if (!global.Response) global.Response = _nodeFetch.Response;
if (!global.ReadableStream) global.ReadableStream = _es.default;