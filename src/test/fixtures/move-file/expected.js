import _isotropyFs from "isotropy-lib-filesystem";


async function moveFile() {
  await _isotropyFs.moveFile("/home/private/docs", "documents", "report.txt", "reports", "report.txt");
}
