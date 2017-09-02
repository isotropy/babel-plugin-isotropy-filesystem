import ispyFs from "isotropy-lib-fs";
import path from "path";
import myFs from "../my-fs";

async function readFile() {
  return await ispyFs.readFile(path.join("/home", "/some/path"), "report.txt");
}
