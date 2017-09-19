import getAnalyzers from "../../isotropy-ast-analyzer-fs/dist";
import * as mapper from "./mappers";
import * as template from "./templates";
import * as t from "babel-types";
import clean from "./utils/node-cleaner";

export default function(opts) {
  let analyzers;
  // Specifies the isotropy filesystem library
  const libFsSource = t.StringLiteral("isotropy-lib-fs");
  const libFsIdentifier =
    "isotropyFS_" + Math.random().toString(36).substring(2);

  return {
    plugin: {
      pre() {
        analyzers = getAnalyzers();
      },
      visitor: {
        ImportDeclaration: {
          exit(path, state) {
            const analysis = analyzers.meta.analyzeImportDeclaration(
              path,
              state
            );
            if (!analysis) return;
            /*
            Inserts two statements:
            * isotropy fs lib module import
            * path module import
            */
            path.replaceWithMultiple([
              t.importDeclaration(
                [t.importDefaultSpecifier(t.identifier(libFsIdentifier))],
                libFsSource
              )
              // ,
              // t.importDeclaration(
              //   [t.importDefaultSpecifier(t.identifier("path"))],
              //   t.stringLiteral("path")
              // )
            ]);
            path.skip();
          }
        },

        AssignmentExpression: {
          exit(path, state) {
            debugger;
            let analysis = analyzers.write.analyzeAssignmentExpression(
              path,
              state
            );
            if (!analysis) return;
            analysis = analysis.value;
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
                template[analysis.type]()(
                  mapper[analysis.type](
                    clean(analysis),
                    t.identifier(libFsIdentifier),
                    t.stringLiteral(analysis.module)
                  )
                ).expression
              )
            );
            path.skip();
          }
        },

        CallExpression: {
          exit(path, state) {
            let analysis = analyzers.read.analyzeCallExpression(path, state);
            if (!analysis) return;
            analysis = analysis.value;
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
                template[analysis.type]()(
                  mapper[analysis.type](
                    clean(analysis),
                    t.identifier(libFsIdentifier),
                    t.stringLiteral(analysis.module)
                  )
                ).expression
              )
            );
            path.skip();
          }
        }
      }
    }
  };
}
