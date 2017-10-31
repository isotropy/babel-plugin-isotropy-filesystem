import * as t from "babel-types";

export default function(operation) {
  return (result, libFs, basePath) => {
    switch (operation) {
      case "get-files":
        return {
          DIR: result.dir,
          LIB_FS: libFs,
          BASE_PATH: basePath,
          RECURSE: result.recurse ? t.booleanLiteral(true) : t.booleanLiteral(false)
        };
      case "read-file":
        return {
          DIR: result.dir,
          FILENAME: result.filename,
          LIB_FS: libFs,
          BASE_PATH: basePath
        };
      case "create-file":
        return {
          FILES: result.files,
          LIB_FS: libFs,
          BASE_PATH: basePath
        };
      case "update-file":
        return {
          DIR: result.dir,
          FILENAME: result.filename,
          CONTENTS: result.contents,
          LIB_FS: libFs,
          BASE_PATH: basePath
        };
      case "move-file":
        return {
          DIR: result.dir,
          FILENAME: result.filename,
          NEWDIR: result.newDir,
          NEWFILENAME: result.newFilename,
          LIB_FS: libFs,
          BASE_PATH: basePath
        };
      case "move-dir":
        return {
          DIR: result.dir,
          NEWDIR: result.newDir,
          LIB_FS: libFs,
          BASE_PATH: basePath
        };
      case "delete-file":
        return {
          DIR: result.dir,
          FILENAME: result.filename,
          LIB_FS: libFs,
          BASE_PATH: basePath
        };
      case "delete-dir":
        return {
          DIR: result.dir,
          LIB_FS: libFs,
          BASE_PATH: basePath
        };
      default:
        throw new Error("Mapper not found. Unsupported operation.");
    }
  };
}
