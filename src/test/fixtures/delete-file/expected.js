import _isotropyFs from "isotropy-lib-filesystem";
import path from "path";


async function deleteFile() {
  await _isotropyFs.deleteFile(path.join("/home/private/docs", "documents"), "report.txt");
}
