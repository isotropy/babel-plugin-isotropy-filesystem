import _isotropyFs from "isotropy-lib-filesystem";
import path from "path";


async function getFiles() {
  return await _isotropyFs.getFiles(path.join("/home/private/docs", "/some/path"), false);
}
