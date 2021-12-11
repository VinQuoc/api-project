const _ = require("lodash");
const { basicAcs } = require("../database");
const { bcryptUtil } = require("../utils");
const { User } = require("../database/tablename-const");
const basicServ = require("./basic-serv");

module.exports = {
  getUserByAuth,
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

async function createUser(params) {
  if (_.isEmpty(params)) {
    return []
  }

  const safeRecs = Array.isArray(params) ? params : [params]
  const prs = safeRecs.map(rec => {
    return {
      ...rec,
      status: "ACTIVE",
    }
  });

  await basicServ.insert("users", prs)
  return prs
}