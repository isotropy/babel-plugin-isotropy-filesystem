import _isotropyFs from "isotropy-lib-filesystem";


async function deleteFile() {
  await _isotropyFs.deleteFile("/home/private/docs", "documents", "report.txt");
}
