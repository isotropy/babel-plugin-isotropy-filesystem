import ispyFs from "isotropy-lib-fs";
import path from "path";
import myFs from "../my-fs";

async function moveFile() {
  await ispyFs.moveFile("documents", "report.txt", "reports", "report.txt");
}
