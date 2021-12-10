const express = require("express");
const router = express.Router();
const { createProtectedAuth } = require("../middleware");
const { helperAPI, userAPI: selfAPI } = require("../apis");
const { userCtrl: selfCtrl } = require("../src/controllers");

const API_METHOD = helperAPI.API_METHOD;
const apiComps = [selfAPI.APIS];
const ctrls = [selfCtrl];

apiComps.forEach((comp, idx) => {
  const ctrl = ctrls[idx];
  comp.forEach((api) => {
    let primary;
    if (api.protected) {
      primary = [`/${api.name}`, createProtectedAuth, ctrl[api.name]];
    } else {
      primary = [`/${api.name}`, ctrl[api.name]];
    }
    if (api.method === API_METHOD.GET) {
      router.get(...primary);
    } else if (api.method === API_METHOD.POST) {
      router.post(...primary);
    } else if (api.method === API_METHOD.PUT) {
      router.put(...primary);
    } else if (api.method === API_METHOD.DELETE) {
      router.delete(...primary);
    }
  });
});

module.exports = router;
