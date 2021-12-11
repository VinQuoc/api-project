const _ = require("lodash");
const {
    QueryTypes,
    db,
    createResult,
    createPaginate,
} = require("./db-access");
const sqlStr = require("./sql-str");
const { parse2Str } = require("../utils/date");
const { v4: uuid } = require("uuid");

exports.detail = async (tableName, params) => {
    try {
        if (_.isEmpty(params)) {
            return createResult({});
        }

        let whereP = _.keys(params)
            .map((p) => `${p}='${params[p]}'`)
            .join(" AND ");
        if (!_.isEmpty(whereP)) {
            whereP = `WHERE ${whereP}`;
        }

        const sql = sqlStr.sqlGetDetail({
            tableName,
            where: whereP,
        });

        const many = await db.query(sql, { type: QueryTypes.SELECT });
        const ret = _.get(many, [0], {});

        return createResult(ret);
    } catch (ex) {
        return createResult(null, ex);
    }
}

exports.insert = async (tableName, { columns, rows }) => {
    try {
        let rowsSafe = Array.isArray(rows) ? rows : [rows];
        rowsSafe = rowsSafe.map((r) => {
            return {
                ...r,
                id: uuid(),
            };
        });

        const sql = sqlStr.sqlPostInsert({
            tableName,
            columns,
            rows: rowsSafe,
        });
        const ret = await db.query(sql, { type: QueryTypes.INSERT });

        return createResult(ret);
    } catch (ex) {
        return createResult(null, ex);
    }
};

exports.update = async (tableName, params) => {
    try {
        const dataSafe = Array.isArray(params) ? params : [params];
        const sql = dataSafe.map(({ columns, row }) => {
            const data = {
                ...row,
            };
            return sqlStr.sqlPatchUpdate({
                tableName,
                columns,
                row: data,
            });
        }).join(';');
        const many = await db.query(sql, { type: QueryTypes.UPDATE });

        return createResult(many);
    } catch (ex) {
        return createResult(null, ex);
    }
};