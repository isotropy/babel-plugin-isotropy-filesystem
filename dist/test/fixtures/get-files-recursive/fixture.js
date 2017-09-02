import myFs from "../my-fs";

async function getFilesRecursive() {
  return myFs.docs.filter(
    file => file.dir === "/some/path" || file.dir.startsWith("/some/path/")
  );
}
