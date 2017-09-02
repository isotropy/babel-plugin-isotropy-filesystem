import template from "babel-template";

export function fs_getFiles() {
  return template(`LIB_FS.getFiles(path.join(BASE_PATH, DIR), RECURSE);`);
}

export function fs_readFile() {
  return template(`LIB_FS.readFile(path.join(BASE_PATH, DIR), FILENAME);`);
}

export function fs_createFile() {
  return template(
    `LIB_FS.createFile(path.join(BASE_PATH, DIR), FILENAME, CONTENTS);`
  );
}

export function fs_deleteFile() {
  return template(`LIB_FS.deleteFile(path.join(BASE_PATH, DIR), FILENAME);`);
}

export function fs_deleteDir() {
  return template(`LIB_FS.deleteFile(path.join(BASE_PATH, DIR));`);
}

export function fs_updateFile() {
  return template(
    `LIB_FS.updateFile(path.join(BASE_PATH, DIR), FILENAME, CONTENTS);`
  );
}

export function fs_moveFile() {
  return template(`LIB_FS.moveFile(DIR, FILENAME, NEWDIR, NEWFILENAME);`);
}

export function fs_moveDir() {
  return template(`LIB_FS.moveDir(DIR, NEWDIR);`);
}
