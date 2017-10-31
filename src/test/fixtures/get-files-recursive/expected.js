import _isotropyFs from "isotropy-lib-filesystem";


async function getFilesRecursive() {
  return await _isotropyFs.getFiles("/home/private/docs", "/some/path", true);
}
