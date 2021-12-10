const _ = require("lodash");
const { basicAcs } = require("../database");
const { jwtUtil } = require("../utils");
const { Token } = require("../database/tablename-const");

exports.getToken = async (user) => {
  const usr = JSON.parse(JSON.stringify(user));
  delete usr["password"];
  const ret = await jwtUtil.generateToken(usr);

  let tokenRet = await basicAcs.detail(Token, { user_id: user.id });
  if (tokenRet.OK && !_.isEmpty(tokenRet.data)) {
    const newData = {
      ...tokenRet.data,
      token: ret,
    };
    await basicAcs.update(Token, { columns: ["token"], row: newData });
  } else {
    const rows = { user_id: user.id, token: ret };
    await basicAcs.insert(Token, { columns: ["id", "user_id", "token"], rows });
  }

  return ret;
};
