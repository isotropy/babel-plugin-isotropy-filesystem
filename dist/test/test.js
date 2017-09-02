"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _should = require("should");

var _should2 = _interopRequireDefault(_should);

var _babelCore = require("babel-core");

var babel = _interopRequireWildcard(_babelCore);

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _fsPlugin = require("../fs-plugin");

var _fsPlugin2 = _interopRequireDefault(_fsPlugin);

var _sourceMapSupport = require("source-map-support");

var _sourceMapSupport2 = _interopRequireDefault(_sourceMapSupport);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_sourceMapSupport2.default.install();

describe("isotropy-ast-analyzer-fs", function () {
  function run(_ref) {
    var _ref2 = _slicedToArray(_ref, 3),
        description = _ref2[0],
        dir = _ref2[1],
        opts = _ref2[2];

    it("" + description, function () {
      var fixturePath = _path2.default.resolve(__dirname, "fixtures", dir, "fixture.js");
      var outputPath = _path2.default.resolve(__dirname, "fixtures", dir, "output.js");
      var expected = _fs2.default.readFileSync(__dirname + ("/fixtures/" + dir + "/expected.js")).toString();
      var pluginInfo = (0, _fsPlugin2.default)(opts);

      var babelResult = babel.transformFileSync(fixturePath, {
        plugins: [[pluginInfo.plugin, {
          libFsIdentifier: "ispyFs",
          filesystemModules: {
            todosFsModule: "./dist/test/fixtures/my-fs"
          }
        }], "transform-object-rest-spread"],
        parserOpts: {
          sourceType: "module",
          allowImportExportEverywhere: true
        },
        babelrc: false
      });
      var actual = babelResult.code + "\n";
      actual.should.deepEqual(expected);
    });
  }

  var tests = [
  // ["create-file", "create-file"],
  // ["read-file", "read-file"],
  // ["update-file", "update-file"],
  // ["get-files", "get-files"],
  // ["get-files-recursive", "get-files-recursive"],
  // ["move-file", "move-file"],
  // ["move-dir", "move-dir"],
  // ["delete-file", "delete-file"],
  ["delete-dir", "delete-dir"]];

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = tests[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var test = _step.value;

      run(test);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
});
//# sourceMappingURL=test.js.map