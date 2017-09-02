"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fs_getFiles = fs_getFiles;
exports.fs_readFile = fs_readFile;
exports.fs_createFile = fs_createFile;
exports.fs_deleteFile = fs_deleteFile;
exports.fs_deleteDir = fs_deleteDir;
exports.fs_updateFile = fs_updateFile;
exports.fs_moveFile = fs_moveFile;
exports.fs_moveDir = fs_moveDir;

var _babelTemplate = require("babel-template");

var _babelTemplate2 = _interopRequireDefault(_babelTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fs_getFiles() {
  return (0, _babelTemplate2.default)("LIB_FS.getFiles(path.join(BASE_PATH, DIR), RECURSE);");
}

function fs_readFile() {
  return (0, _babelTemplate2.default)("LIB_FS.readFile(path.join(BASE_PATH, DIR), FILENAME);");
}

function fs_createFile() {
  return (0, _babelTemplate2.default)("LIB_FS.createFile(path.join(BASE_PATH, DIR), FILENAME, CONTENTS);");
}

function fs_deleteFile() {
  return (0, _babelTemplate2.default)("LIB_FS.deleteFile(path.join(BASE_PATH, DIR), FILENAME);");
}

function fs_deleteDir() {
  return (0, _babelTemplate2.default)("LIB_FS.deleteFile(path.join(BASE_PATH, DIR));");
}

function fs_updateFile() {
  return (0, _babelTemplate2.default)("LIB_FS.updateFile(path.join(BASE_PATH, DIR), FILENAME, CONTENTS);");
}

function fs_moveFile() {
  return (0, _babelTemplate2.default)("LIB_FS.moveFile(DIR, FILENAME, NEWDIR, NEWFILENAME);");
}

function fs_moveDir() {
  return (0, _babelTemplate2.default)("LIB_FS.moveDir(DIR, NEWDIR);");
}
//# sourceMappingURL=templates.js.map