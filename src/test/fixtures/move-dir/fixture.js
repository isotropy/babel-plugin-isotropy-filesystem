import myFs from "../my-fs";

async function moveDir() {
  myFs.docs = myFs.docs.map(
    file =>
      file.dir === "path/to/docs/"
        ? {
            ...file,
            dir: file.dir.replace("path/to/docs/", "path/to/new-docs/")
          }
        : file
  );
}
