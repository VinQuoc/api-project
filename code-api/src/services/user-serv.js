const _ = require("lodash");
const generator = require('generate-password');
const { basicAcs, userAcs } = require("../database");
const { bcryptUtil, dateUtil } = require("../utils");
const { User } = require("../database/tablename-const");
const basicServ = require("./basic-serv");

module.exports = {
  getUserByAuth,
  updateLatestLogin,
  createUser
}

async function getUserByAuth(username, password) {
  let error;
  const userRet = await basicAcs.detail(User, { username });
  if (userRet.OK && !_.isEmpty(userRet.data)) {
    const user = userRet.data;
    const isMath = await bcryptUtil.compare(password, user.password);
    if (password === user.password || isMath) {
      if (["ACTIVE"].includes(user.status)) {
        delete user["password"];
        return {
          data: user,
        };
      } else {
        error = "User not active.";
      }
    } else {
      error = "Please check password.";
    }
  } else {
    error = `Not found user with username: ${username}.`;
  }

  return {
    error,
  };
};

async function updateLatestLogin(params) {
  const latest_login = dateUtil.parse2Str();
  const ret = await userAcs.updateLatestLogin({ ...params, latest_login });

  if (ret.OK) {
    return ret.data;
  }

  return null;
};

async function createUser(params, others) {
  if (_.isEmpty(params)) {
    return []
  }

  const safeRecs = Array.isArray(params) ? params : [params]
  const prs = safeRecs.map(rec => {
    // const password = generator.generate({
    //   length: 12,
    //   numbers: true,
    //   symbols: true
    // });

    return {
      ...rec,
      // password,
      // status: "ACTIVE",//"FORCE_PASS",
    }
  });

  await basicServ.insert2("users", prs, others)
  return prs
}