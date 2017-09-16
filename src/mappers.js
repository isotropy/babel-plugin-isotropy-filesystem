import * as t from "babel-types";

/*
FS Mappers
*/

export function getFiles(result, libFs, basePath) {
  return {
    DIR: result.dir,
    LIB_FS: libFs,
    BASE_PATH: basePath,
    RECURSE: t.booleanLiteral(result.recurse)
  };
}

export function readFile(result, libFs, basePath) {
  return {
    DIR: result.dir,
    FILENAME: result.filename,
    LIB_FS: libFs,
    BASE_PATH: basePath
  };
}

export function createFile(result, libFs, basePath) {
  return {
    DIR: result.dir,
    FILENAME: result.filename,
    CONTENTS: result.contents,
    LIB_FS: libFs,
    BASE_PATH: basePath
  };
}

export function updateFile(result, libFs, basePath) {
  return {
    DIR: result.dir,
    FILENAME: result.filename,
    CONTENTS: result.contents,
    LIB_FS: libFs,
    BASE_PATH: basePath
  };
}

export function deleteFile(result, libFs, basePath) {
  return {
    DIR: result.dir,
    FILENAME: result.filename,
    LIB_FS: libFs,
    BASE_PATH: basePath
  };
}

export function deleteDir(result, libFs, basePath) {
  return {
    DIR: result.dir,
    LIB_FS: libFs,
    BASE_PATH: basePath
  };
}

export function moveFile(result, libFs, basePath) {
  return {
    DIR: result.dir,
    FILENAME: result.filename,
    NEWDIR: result.newDir,
    NEWFILENAME: result.newFilename,
    LIB_FS: libFs,
    BASE_PATH: basePath
  };
}

export function moveDir(result, libFs, basePath) {
  return {
    DIR: result.dir,
    NEWDIR: result.newDir,
    LIB_FS: libFs,
    BASE_PATH: basePath
  };
}
