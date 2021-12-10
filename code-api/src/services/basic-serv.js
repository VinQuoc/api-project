const { basicAcs } = require("../database");
const { bcryptUtil } = require("../utils");
const { getColumns } = require("./_helper");


exports.insert = async (tableName, params) => {
    const columns = getColumns(tableName);
    let preData;
    if (tableName === "users") {
        const dataSafe = Array.isArray(params) ? params : [params];
        const arrPass = await Promise.all([
            ...dataSafe.map((p) => bcryptUtil.generateHash(p.password, p.username)),
        ]);
        preData = dataSafe.map((p) => {
            const find = arrPass.find((itm) => itm.key === p.username);
            return {
                ...p,
                password: find.hash,
            };
        });
    } else {
        preData = params;
    }

    const acRet = await basicAcs.insert(
        tableName,
        { columns, rows: preData },
    );
    if (!acRet.OK) {
        throw acRet.error;
    }

    return acRet.data;
};