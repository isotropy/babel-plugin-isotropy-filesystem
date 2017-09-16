import * as mapper from "./mappers";
import * as template from "./templates";

export default function translate(analysis, opts, data = null) {
  /*
  Based  on  the  analysis  from  the  analyzer  module  (_analysis),
  the appropriate code translation is created by calling the template
  with the corresponding mapper function which is inturn fed with the
  result  of  the  analysis (the first argument). This  code  is  then
  turned  into  an  await  expr.  The  mapper  function  also  takes
  the libDbIdentifier variable and the database connection string and
  table from the  config.
  */
  if (analysis.source)
    if (!analysis.source.operation)
      return t.awaitExpression(
        template[analysis.operation]()(
          mapper[analysis.operation](
            analysis,
            t.identifier(opts.libDbIdentifier),
            t.stringLiteral(opts.databaseModules[analysis.module])
          )
        ).expression
      );

  return translate(
    (analysis.source = template[analysis.operation]()(
      mapper[analysis.operation](
        analysis,
        t.identifier(opts.libDbIdentifier),
        t.stringLiteral(opts.databaseModules[analysis.module])
      )
    )),
    opts
  );
}
