import _isotropyFs from "isotropy-lib-fs";
import path from "path";


async function getFilesRecursive() {
  return await _isotropyFs.getFiles(path.join("/home/private/docs", "/some/path"), true);
}
