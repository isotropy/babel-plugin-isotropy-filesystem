import _isotropyFs from "isotropy-lib-filesystem";


async function moveDir() {
  await _isotropyFs.moveDir("/home/private/docs", "documents", "reports");
}
