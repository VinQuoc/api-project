const _ = require("lodash");
const { QueryTypes, db, createResult } = require("./db-access");
const { User } = require("./tablename-const");

exports.updateLatestLogin = async ({ id, latest_login }) => {
    try {
        const sql = `
      UPDATE [${User}]
      SET latest_login='${latest_login}'
      OUTPUT INSERTED.*
      WHERE id='${id}' 
    `;
        const many = await db.query(sql, { type: QueryTypes.SELECT });
        const ret = _.get(many, [0], null);

        return createResult(ret);
    } catch (ex) {
        return createResult(null, ex);
    }
};
