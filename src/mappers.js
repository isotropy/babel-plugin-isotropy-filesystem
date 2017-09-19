import * as t from "babel-types";

/*
FS Mappers
*/

export function getFiles(result, libFs, basePath) {
  return {
    DIR: result.dirNode,
    LIB_FS: libFs,
    BASE_PATH: basePath,
    RECURSE: t.booleanLiteral(result.recurse)
  };
}

export function readFile(result, libFs, basePath) {
  return {
    DIR: result.dirNode,
    FILENAME: result.filenameNode,
    LIB_FS: libFs,
    BASE_PATH: basePath
  };
}

export function createFile(result, libFs, basePath) {
  return {
    DIR: result.dirNode,
    FILENAME: result.filenameNode,
    CONTENTS: result.contentsNode,
    LIB_FS: libFs,
    BASE_PATH: basePath
  };
}

export function updateFile(result, libFs, basePath) {
  return {
    DIR: result.dirNode,
    FILENAME: result.filenameNode,
    CONTENTS: result.contentsNode,
    LIB_FS: libFs,
    BASE_PATH: basePath
  };
}

export function deleteFile(result, libFs, basePath) {
  return {
    DIR: result.dirNode,
    FILENAME: result.filenameNode,
    LIB_FS: libFs,
    BASE_PATH: basePath
  };
}

export function deleteDir(result, libFs, basePath) {
  return {
    DIR: result.dirNode,
    LIB_FS: libFs,
    BASE_PATH: basePath
  };
}

export function moveFile(result, libFs, basePath) {
  return {
    DIR: result.dirNode,
    FILENAME: result.filenameNode,
    NEWDIR: result.newDirNode,
    NEWFILENAME: result.newFilenameNode,
    LIB_FS: libFs,
    BASE_PATH: basePath
  };
}

export function moveDir(result, libFs, basePath) {
  return {
    DIR: result.dirNode,
    NEWDIR: result.newDirNode,
    LIB_FS: libFs,
    BASE_PATH: basePath
  };
}
