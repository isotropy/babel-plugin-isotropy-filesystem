import _isotropyFs from "isotropy-lib-filesystem";


async function readFile() {
  return await _isotropyFs.readFile("/home/private/docs", "/some/path", "report.txt");
}
