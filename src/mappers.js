import * as t from "babel-types";

/*
FS Mappers
*/

export function fs_getFiles(result, libFs, basePath) {
  return {
    DIR: result.dir,
    LIB_FS: libFs,
    BASE_PATH: basePath,
    RECURSE: t.booleanLiteral(result.recurse)
  };
}

export function fs_readFile(result, libFs, basePath) {
  return {
    DIR: result.dir,
    FILENAME: result.filename,
    LIB_FS: libFs,
    BASE_PATH: basePath
  };
}

export function fs_createFile(result, libFs, basePath) {
  return {
    DIR: result.dir,
    FILENAME: result.filename,
    CONTENTS: result.contents,
    LIB_FS: libFs,
    BASE_PATH: basePath
  };
}

export function fs_updateFile(result, libFs, basePath) {
  return {
    DIR: result.dir,
    FILENAME: result.filename,
    CONTENTS: result.contents,
    LIB_FS: libFs,
    BASE_PATH: basePath
  };
}

export function fs_deleteFile(result, libFs, basePath) {
  return {
    DIR: result.dir,
    FILENAME: result.filename,
    LIB_FS: libFs,
    BASE_PATH: basePath
  };
}

export function fs_deleteDir(result, libFs, basePath) {
  return {
    DIR: result.dir,
    LIB_FS: libFs,
    BASE_PATH: basePath
  };
}

export function fs_moveFile(result, libFs, basePath) {
  return {
    DIR: result.dir,
    FILENAME: result.filename,
    NEWDIR: result.newDir,
    NEWFILENAME: result.newFilename,
    LIB_FS: libFs,
    BASE_PATH: basePath
  };
}

export function fs_moveDir(result, libFs, basePath) {
  return {
    DIR: result.dir,
    NEWDIR: result.newDir,
    LIB_FS: libFs,
    BASE_PATH: basePath
  };
}
