import ispyFs from "isotropy-lib-fs";
import path from "path";
import myFs from "../my-fs";

async function createFile() {
  await ispyFs.createFile(path.join("/home", "documents"), "report.txt", "hello, world");
}
