import _isotropyFs from "isotropy-lib-filesystem";
import path from "path";


async function moveDir() {
  await _isotropyFs.moveDir(path.join("/home/private/docs", "documents"), path.join("/home/private/docs", "reports"));
}
