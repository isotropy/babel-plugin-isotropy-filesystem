"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fs_getFiles = fs_getFiles;
exports.fs_readFile = fs_readFile;
exports.fs_createFile = fs_createFile;
exports.fs_updateFile = fs_updateFile;
exports.fs_deleteFile = fs_deleteFile;
exports.fs_deleteDir = fs_deleteDir;
exports.fs_moveFile = fs_moveFile;
exports.fs_moveDir = fs_moveDir;

var _babelTypes = require("babel-types");

var t = _interopRequireWildcard(_babelTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/*
FS Mappers
*/

function fs_getFiles(result, libFs, basePath) {
  return {
    DIR: result.dir,
    LIB_FS: libFs,
    BASE_PATH: basePath,
    RECURSE: t.booleanLiteral(result.recurse)
  };
}

function fs_readFile(result, libFs, basePath) {
  return {
    DIR: result.dir,
    FILENAME: result.filename,
    LIB_FS: libFs,
    BASE_PATH: basePath
  };
}

function fs_createFile(result, libFs, basePath) {
  return {
    DIR: result.dir,
    FILENAME: result.filename,
    CONTENTS: result.contents,
    LIB_FS: libFs,
    BASE_PATH: basePath
  };
}

function fs_updateFile(result, libFs, basePath) {
  return {
    DIR: result.dir,
    FILENAME: result.filename,
    CONTENTS: result.contents,
    LIB_FS: libFs,
    BASE_PATH: basePath
  };
}

function fs_deleteFile(result, libFs, basePath) {
  return {
    DIR: result.dir,
    FILENAME: result.filename,
    LIB_FS: libFs,
    BASE_PATH: basePath
  };
}

function fs_deleteDir(result, libFs, basePath) {
  return {
    DIR: result.dir,
    LIB_FS: libFs,
    BASE_PATH: basePath
  };
}

function fs_moveFile(result, libFs, basePath) {
  return {
    DIR: result.dir,
    FILENAME: result.filename,
    NEWDIR: result.newDir,
    NEWFILENAME: result.newFilename,
    LIB_FS: libFs,
    BASE_PATH: basePath
  };
}

function fs_moveDir(result, libFs, basePath) {
  return {
    DIR: result.dir,
    NEWDIR: result.newDir,
    LIB_FS: libFs,
    BASE_PATH: basePath
  };
}
//# sourceMappingURL=mappers.js.map