import _isotropyFs from "isotropy-lib-filesystem";


async function moveDir() {
  await _isotropyFs.moveFile("/home/private/docs", "path/to/docs/", "path/to/new-docs/");
}
