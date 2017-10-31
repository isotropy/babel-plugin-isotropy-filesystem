import _isotropyFs from "isotropy-lib-filesystem";


async function updateFile() {
  await _isotropyFs.updateFile("/home/private/docs", "documents", "report.txt", "hello, universe");
}
