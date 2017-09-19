import template from "babel-template";

export function getFiles() {
  return template(`LIB_FS.getFiles(path.join(BASE_PATH, DIR), RECURSE);`);
}

export function readFile() {
  return template(`LIB_FS.readFile(path.join(BASE_PATH, DIR), FILENAME);`);
}

export function createFile() {
  return template(
    `LIB_FS.createFile(path.join(BASE_PATH, DIR), FILENAME, CONTENTS);`
  );
}

export function deleteFile() {
  return template(`LIB_FS.deleteFile(path.join(BASE_PATH, DIR), FILENAME);`);
}

export function deleteDir() {
  return template(`LIB_FS.deleteFile(path.join(BASE_PATH, DIR));`);
}

export function updateFile() {
  return template(
    `LIB_FS.updateFile(path.join(BASE_PATH, DIR), FILENAME, CONTENTS);`
  );
}

export function moveFile() {
  return template(
    `LIB_FS.moveFile(path.join(BASE_PATH, DIR), FILENAME, path.join(BASE_PATH, NEWDIR), NEWFILENAME);`
  );
}

export function moveDir() {
  return template(
    `LIB_FS.moveDir(path.join(BASE_PATH, DIR), path.join(BASE_PATH, NEWDIR));`
  );
}
