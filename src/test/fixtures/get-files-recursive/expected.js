import _isotropyFs from "isotropy-lib-filesystem";
import path from "path";


async function getFilesRecursive() {
  return await _isotropyFs.getFiles(path.join("/home/private/docs", "/some/path"), true);
}
