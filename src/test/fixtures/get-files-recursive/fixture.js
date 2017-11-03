import myFs from "../my-fs";

async function getFilesRecursive() {
  return myFs.docs.filter(file => file.dir.startsWith("/some/path"));
}
