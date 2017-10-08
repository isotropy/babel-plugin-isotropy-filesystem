import should from "should";
import * as babel from "babel-core";
import fs from "fs";
import path from "path";
import transformToIsotropyFilesystem from "../transform-to-isotropy-fs";
import sourceMapSupport from "source-map-support";

sourceMapSupport.install();

describe("isotropy-ast-analyzer-filesystem", () => {
  function run([description, dir]) {
    const opts = {
      plugins: [
        [
          transformToIsotropyFilesystem(),
          {
            projects: [
              {
                dir: "dist/test",
                modules: [
                  {
                    source: "fixtures/my-fs",
                    locations: [{ name: "docs", path: "/home/private/docs" }]
                  }
                ]
              }
            ]
          }
        ],
        "syntax-object-rest-spread"
      ],
      parserOpts: {
        sourceType: "module",
        allowImportExportEverywhere: true
      },
      babelrc: false
    };

    it(`${description}`, () => {
      const fixturePath = path.resolve(
        __dirname,
        "fixtures",
        dir,
        `fixture.js`
      );

      const expected = fs.readFileSync(
        __dirname + `/fixtures/${dir}/expected.js`,
        "utf-8"
      );

      const babelResult = babel.transformFileSync(fixturePath, opts);
      const actual = babelResult.code + "\n";
      actual.should.deepEqual(expected);
    });
  }

  [
    ["read-file", "read-file"],
    ["create-file", "create-file"],
    ["update-file", "update-file"],
    ["get-files", "get-files"],
    ["get-files-recursive", "get-files-recursive"],
    ["move-file", "move-file"],
    ["move-dir", "move-dir"],
    ["delete-file", "delete-file"],
    ["delete-dir", "delete-dir"]
  ].forEach(test => run(test));
});
