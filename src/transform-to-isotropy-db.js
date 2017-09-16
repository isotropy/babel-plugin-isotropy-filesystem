import getAnalyzers from "../../isotropy-ast-analyzer-db/dist";
import translate from "./translator";
import clean from "./utils/node-cleaner";
import * as t from "babel-types";

export default function(opts) {
  let analyzers;
  // Specifies the isotropy database library
  const libDbSource = t.StringLiteral("isotropy-lib-db");

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
              * isotropy db lib module import
              * db connection
            */
            path.replaceWithMultiple([
              t.importDeclaration(
                [
                  t.importDefaultSpecifier(
                    t.identifier(state.opts.libDbIdentifier)
                  )
                ],
                libDbSource
              )
              // dbConnection
            ]);
            path.skip();
          }
        },

        AssignmentExpression: {
          exit(path, state) {
            const analysis = analyzers.write.analyzeAssignmentExpression(
              path,
              state
            ).value;
            if (!analysis) return;
            path.replaceWith(translate(clean(analysis), state.opts));
            path.skip();
          }
        },

        CallExpression: {
          exit(path, state) {
            const analysis = analyzers.read.analyzeCallExpression(path, state)
              .value;
            if (!analysis) return;
            path.replaceWith(translate(clean(analysis), state.opts));
            path.skip();
          }
        },

        MemberExpression: {
          exit(path, state) {
            debugger;
            const analysis = analyzers.read.analyzeMemberExpression(path, state)
              .value;
            if (!analysis) return;
            path.replaceWith(translate(clean(analysis), state.opts));
            path.skip();
          }
        }

      }
    }
  };
}
