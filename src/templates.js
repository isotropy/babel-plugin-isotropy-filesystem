import template from "babel-template";

export default function(operation) {
  switch (operation) {
    case "get-files":
      return template(`LIB_FS.getFiles(BASE_PATH, DIR, RECURSE);`);
    case "read-file":
      return template(`LIB_FS.readFile(BASE_PATH, DIR, FILENAME);`);
    case "create-file":
      return template(`LIB_FS.createFile(BASE_PATH, FILES);`);
    case "update-file":
      return template(`LIB_FS.updateFile(BASE_PATH, DIR, FILENAME, CONTENTS);`);
    case "move-file":
      return template(`LIB_FS.moveFile(BASE_PATH, DIR, FILENAME, NEWDIR, NEWFILENAME);`);
    case "move-dir":
      return template(`LIB_FS.moveDir(BASE_PATH, DIR, NEWDIR);`);
    case "delete-file":
      return template(`LIB_FS.deleteFile(BASE_PATH, DIR, FILENAME);`);
    case "delete-dir":
      return template(`LIB_FS.deleteFile(BASE_PATH, DIR);`);
    default:
      throw new Error("Template not found. Unsupported operation.");
  }
}
