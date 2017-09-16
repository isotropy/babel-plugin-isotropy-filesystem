import should from "should";
import * as babel from "babel-core";
import fs from "fs";
import path from "path";
import makePlugin from "../transform-to-isotropy-fs";
import sourceMapSupport from "source-map-support";

sourceMapSupport.install();

describe("isotropy-ast-analyzer-db", () => {
  function run([description, dir, opts]) {
    it(`${description}`, () => {
      const fixturePath = path.resolve(
        __dirname,
        "fixtures",
        dir,
        `fixture.js`
      );
      const outputPath = path.resolve(__dirname, "fixtures", dir, `output.js`);
      const expected = fs
        .readFileSync(__dirname + `/fixtures/${dir}/expected.js`)
        .toString();
      const pluginInfo = makePlugin(opts);

      const babelResult = babel.transformFileSync(fixturePath, {
        plugins: [
          [
            pluginInfo.plugin,
            {
              libDbIdentifier: "ispyDb",
              databaseModules: {
                todosDbModule: "./dist/test/fixtures/my-db"
              }
            }
          ],
          "transform-object-rest-spread"
        ],
        parserOpts: {
          sourceType: "module",
          allowImportExportEverywhere: true
        },
        babelrc: false
      });
      const actual = babelResult.code + "\n";
      actual.should.deepEqual(expected);
    });
  }

  const tests = [
    ["count", "count"]
  ];

  for (const test of tests) {
    run(test);
  }
});
