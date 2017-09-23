import _isotropyFs from "isotropy-lib-fs";
import path from "path";


async function deleteFile() {
  await _isotropyFs.deleteFile(path.join("/home/private/docs", "documents"), "report.txt");
}
