import _isotropyFs from "isotropy-lib-filesystem";


async function deleteDir() {
  await _isotropyFs.deleteFile("/home/private/docs", "documents");
}
