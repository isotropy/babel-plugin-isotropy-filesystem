import _isotropyFs from "isotropy-lib-fs";
import path from "path";


async function updateFile() {
  await _isotropyFs.updateFile(path.join("/home/private/docs", "documents"), "report.txt", "hello, universe");
}
