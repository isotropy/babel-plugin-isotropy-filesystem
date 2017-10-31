import _isotropyFs from "isotropy-lib-filesystem";


async function getFiles() {
  return await _isotropyFs.getFiles("/home/private/docs", "/some/path", false);
}
