import _isotropyFs from "isotropy-lib-filesystem";
import path from "path";


async function moveFile() {
  await _isotropyFs.moveFile(path.join("/home/private/docs", "documents"), "report.txt", path.join("/home/private/docs", "reports"), "report.txt");
}
