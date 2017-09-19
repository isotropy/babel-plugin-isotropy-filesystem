import ispyFs from "isotropy-lib-fs";
import path from "path";
import myFs from "../my-fs";

async function updateFile() {
  await ispyFs.updateFile(path.join("/home", "documents"), "report.txt", "hello, universe");
}
