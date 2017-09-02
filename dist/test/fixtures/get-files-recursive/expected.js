import ispyFs from "isotropy-lib-fs";
import path from "path";
import myFs from "../my-fs";

async function getFilesRecursive() {
  return await ispyFs.getFiles(path.join("/home", "/some/path"), true);
}
