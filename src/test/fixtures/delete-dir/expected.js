import _isotropyFs from "isotropy-lib-filesystem";
import path from "path";


async function deleteDir() {
  await _isotropyFs.deleteFile(path.join("/home/private/docs", "documents"));
}
