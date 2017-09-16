import * as t from "babel-types";

export function db_count(analysis, libFs, db) {
  return {
    TABLE: analysis.collection,
    LIB_FS: libFs,
    DB: db
  };
}
