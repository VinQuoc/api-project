const _ = require("lodash");
const { MOMENT_DATE, parse2Str } = require("../utils/date");

exports.sqlSelectAll = ({ tableName }) => {
    return `
        SELECT *
        FROM [${tableName}]
    `;
}

exports.sqlGetDetail = ({ tableName, where }) => {
    return `
    SELECT *
    FROM ${tableName}
    ${where}
  `;
}

exports.sqlPostInsert = ({ tableName, columns, rows }) => {
    const values = rows
        .map(
            (row) =>
                `(${columns
                    .map((col) => (!_.isNil(row[col]) ? `'${row[col]}'` : "NULL"))
                    .join(",")})`
        )
        .join(",");

    return `
    INSERT INTO ${tableName} (${columns.join(",")})
    VALUES ${values}
  `;
}

exports.sqlPatchUpdate = ({ tableName, row }) => {
    const values = Object.keys(row)
        .map((col) => `${col}=${!_.isNil(row[col]) ? `'${row[col]}'` : null}`)
        .join(",");
    return `
      UPDATE ${tableName}
      SET ${values}
      WHERE id='${row.id}'
    `;
};