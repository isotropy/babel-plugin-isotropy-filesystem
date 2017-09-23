import _isotropyFs from "isotropy-lib-fs";
import path from "path";


async function readFile() {
  return await _isotropyFs.readFile(path.join("/home/private/docs", "/some/path"), "report.txt");
}
