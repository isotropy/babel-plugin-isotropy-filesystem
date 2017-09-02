import getAnalyzers from "../../isotropy-ast-analyzer-fs/dist";
import * as mapper from "./mappers";
import * as template from "./templates";
import * as t from "babel-types";
import clean from "./utils/node-cleaner";

export default function(opts) {
  let _analysis,
    _analysisState,
    _importAnalysis = false;

  function analyze(fn, path, state) {
    _analysisState = false;
    const analysis = fn(path, state);
    path.skip();
    if (analysis !== undefined) {
      _analysis = analysis.value;
      _analysisState = true;
    }
    if (analysis === true) _analysisState = true;
  }

  let analyzers;
  // Specifies the isotropy filesystem library
  const libFsSource = t.StringLiteral("isotropy-lib-fs");

  return {
    plugin: {
      pre() {
        analyzers = getAnalyzers();
      },
      visitor: {
        ImportDeclaration(path, state) {
          analyze(analyzers.meta.analyzeImportDeclaration, path, state);
          if (_importAnalysis) return;
          console.log(state.file.opts)
          /*
          Inserts two statements:
            * isotropy fs lib module import
            * path module import
          */
          path.insertBefore([
            t.importDeclaration(
              [
                t.importDefaultSpecifier(
                  t.identifier(state.opts.libFsIdentifier)
                )
              ],
              libFsSource
            ),
            t.importDeclaration(
              [t.importDefaultSpecifier(t.identifier("path"))],
              t.stringLiteral("path")
            )
          ]);
          _importAnalysis = true;
          path.skip;
        },

        AssignmentExpression(path, state) {
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
          path.replaceWith(
            t.awaitExpression(
              template[_analysis.type]()(
                mapper[_analysis.type](
                  clean(_analysis),
                  t.identifier(state.opts.libFsIdentifier),
                  t.stringLiteral(
                    state.opts.filesystemModules[_analysis.module]
                  )
                )
              ).expression
            )
          );
        },

        CallExpression(path, state) {
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
          path.replaceWith(
            t.awaitExpression(
              template[_analysis.type]()(
                mapper[_analysis.type](
                  clean(_analysis),
                  t.identifier(state.opts.libFsIdentifier),
                  t.stringLiteral(
                    state.opts.filesystemModules[_analysis.module]
                  )
                )
              ).expression
            )
          );
        }
      }
    }
  };
}
