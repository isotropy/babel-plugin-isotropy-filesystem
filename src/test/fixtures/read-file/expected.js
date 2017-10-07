import _isotropyFs from "isotropy-lib-filesystem";
import path from "path";


async function readFile() {
  return await _isotropyFs.readFile(path.join("/home/private/docs", "/some/path"), "report.txt");
}
