import ispyFs from "isotropy-lib-fs";
import path from "path";
import myFs from "../my-fs";

async function moveDir() {
  await ispyFs.moveDir("documents", "reports");
}
