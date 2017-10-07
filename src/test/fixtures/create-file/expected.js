import _isotropyFs from "isotropy-lib-filesystem";
import path from "path";


async function createFile() {
  await _isotropyFs.createFile(path.join("/home/private/docs", "documents"), "report.txt", "hello, world");
}
