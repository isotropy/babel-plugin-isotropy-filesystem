import _isotropyFs from "isotropy-lib-fs";
import path from "path";


async function moveFile() {
  await _isotropyFs.moveFile(path.join("/home/private/docs", "documents"), "report.txt", path.join("/home/private/docs", "reports"), "report.txt");
}
