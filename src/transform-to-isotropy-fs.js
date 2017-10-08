import getAnalyzers from "../../isotropy-ast-analyzer-filesystem";
import * as mapper from "./mappers";
import * as template from "./templates";
import * as t from "babel-types";

export default function() {
  const analyzers = getAnalyzers();
  const libFsSource = t.StringLiteral("isotropy-lib-filesystem");
  let libFsIdentifier;
  const visitor = {};

  const replace = (path, analysis) => {
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
            analysis,
            t.identifier(libFsIdentifier),
            t.stringLiteral(analysis.module)
          )
        ).expression
      )
    );
    path.skip();
  };

  visitor.ImportDeclaration = {
    exit(path, state) {
      const analysis = analyzers.meta.analyzeImportDeclaration(path, state);
      if (analysis) {
        libFsIdentifier = path.scope.generateUidIdentifier("isotropyFs").name;
        /*
            Inserts two statements:
            * isotropy fs lib module import
            * path module import
          */
        path.replaceWithMultiple([
          t.importDeclaration(
            [t.importDefaultSpecifier(t.identifier(libFsIdentifier))],
            libFsSource
          ),
          t.importDeclaration(
            [t.importDefaultSpecifier(t.identifier("path"))],
            t.stringLiteral("path")
          )
        ]);
        path.skip();
      }
    }
  };

  visitor.AssignmentExpression = function(path, state) {
    const analysis = analyzers.write.analyzeAssignmentExpression(path, state);
    if (analysis) {
      replace(path, analysis.value);
    }
  };

  visitor.CallExpression = function(path, state) {
    const analysis = analyzers.read.analyzeCallExpression(path, state);
    if (analysis) {
      replace(path, analysis.value);
    }
  };

  return { visitor };
}
