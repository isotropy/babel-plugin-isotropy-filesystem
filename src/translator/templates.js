import template from "babel-template";

export function db_count() {
  return template(`LIB_DB.count(DB, TABLE);`);
}
