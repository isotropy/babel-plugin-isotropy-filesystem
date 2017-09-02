"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = clean;
function clean(obj) {
  if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) !== "object") {
    return obj;
  } else {
    if (Array.isArray(obj)) {
      return obj.map(function (o) {
        return clean(o);
      });
    } else {
      var newObj = {};
      for (var key in obj) {
        if (!["start", "end", "loc", "computed", "shorthand", "extra", "__clone", "path"].includes(key)) {
          newObj[key] = clean(obj[key]);
        }
      }
      return newObj;
    }
  }
}
//# sourceMappingURL=node-cleaner.js.map