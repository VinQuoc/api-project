const { userServ } = require("../services");
const { createResponse } = require("./_helper");

exports.createUser = async (req, res) => {
  try {
    const ret = await userServ.createUser(req.body);

    return createResponse(res, ret);
  } catch (ex) {
    return createResponse(res, ex, false);
  }
}