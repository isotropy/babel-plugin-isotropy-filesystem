"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (opts) {
  var _analysis = void 0,
      _analysisState = void 0,
      _importAnalysis = false;

  function analyze(fn, path, state) {
    _analysisState = false;
    var analysis = fn(path, state);
    path.skip();
    if (analysis !== undefined) {
      _analysis = analysis.value;
      _analysisState = true;
    }
    if (analysis === true) _analysisState = true;
  }

  var analyzers = void 0;
  // Specifies the isotropy filesystem library
  var libFsSource = t.StringLiteral("isotropy-lib-fs");

  return {
    plugin: {
      pre: function pre() {
        analyzers = (0, _dist2.default)();
      },

      visitor: {
        ImportDeclaration: function ImportDeclaration(path, state) {
          analyze(analyzers.meta.analyzeImportDeclaration, path, state);
          if (_importAnalysis) return;
          console.log(state.file.opts);
          /*
          Inserts two statements:
            * isotropy fs lib module import
            * path module import
          */
          path.insertBefore([t.importDeclaration([t.importDefaultSpecifier(t.identifier(state.opts.libFsIdentifier))], libFsSource), t.importDeclaration([t.importDefaultSpecifier(t.identifier("path"))], t.stringLiteral("path"))]);
          _importAnalysis = true;
          path.skip;
        },
        AssignmentExpression: function AssignmentExpression(path, state) {
          analyze(analyzers.write.analyzeAssignmentExpression, path, state);
          if (!_analysisState) return;
          /*
          Based  on  the  analysis  from  the  analyzer  module  (_analysis),
          the appropriate code translation is created by calling the template
          with the corresponding mapper function which is inturn fed with the
          result  of  the  analysis (the first argument). This  code  is  then
          turned  into  an  await  expr.  The  mapper  function  also  takes
          the  libFsIdentifier  variable  and  the  basePath  from the  config
          */
          path.replaceWith(t.awaitExpression(template[_analysis.type]()(mapper[_analysis.type]((0, _nodeCleaner2.default)(_analysis), t.identifier(state.opts.libFsIdentifier), t.stringLiteral(state.opts.filesystemModules[_analysis.module]))).expression));
        },
        CallExpression: function CallExpression(path, state) {
          analyze(analyzers.read.analyzeCallExpression, path, state);
          if (!_analysisState) return;
          /*
          Based  on  the  analysis  from  the  analyzer  module  (_analysis),
          the appropriate code translation is created by calling the template
          with the corresponding mapper function which is inturn fed with the
          result  of  the  analysis (the first argument). This  code  is  then
          turned  into  an  await  expr.  The  mapper  function  also  takes
          the  libFsIdentifier  variable  and  the  basePath  from the  config
          */
          path.replaceWith(t.awaitExpression(template[_analysis.type]()(mapper[_analysis.type]((0, _nodeCleaner2.default)(_analysis), t.identifier(state.opts.libFsIdentifier), t.stringLiteral(state.opts.filesystemModules[_analysis.module]))).expression));
        }
      }
    }
  };
};

var _dist = require("../../isotropy-ast-analyzer-fs/dist");

var _dist2 = _interopRequireDefault(_dist);

var _mappers = require("./mappers");

var mapper = _interopRequireWildcard(_mappers);

var _templates = require("./templates");

var template = _interopRequireWildcard(_templates);

var _babelTypes = require("babel-types");

var t = _interopRequireWildcard(_babelTypes);

var _nodeCleaner = require("./utils/node-cleaner");

var _nodeCleaner2 = _interopRequireDefault(_nodeCleaner);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=fs-plugin.js.map