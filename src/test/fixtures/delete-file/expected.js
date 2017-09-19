import ispyFs from "isotropy-lib-fs";
import path from "path";
import myFs from "../my-fs";

async function deleteFile() {
  await ispyFs.deleteFile(path.join("/home", "documents"), "report.txt");
}
