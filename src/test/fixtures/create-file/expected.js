import _isotropyFs from "isotropy-lib-filesystem";


async function createFile() {
  await _isotropyFs.createFile("/home/private/docs", {
    dir: "documents",
    filename: "report.txt",
    contents: "hello, world"
  });
}
