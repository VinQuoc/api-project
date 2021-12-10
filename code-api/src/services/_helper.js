const { models } = require("../models");

exports.getColumns = (tableName, isCreate = true) => {
  let ret;
  const model = models[tableName];
  if (model) {
    ret = isCreate ? model[0] : model[1];
  } else if (tableName === "users") {
    if (isCreate) {
      ret = [
        "id",
        "username",
        "password",
        "status",
        // "email",
        // "phone",
        // "role_name",
      ];
    } else {
      ret = [
        "id",
        "username",
        "status",
        // "email",
        // "phone",
        // "role_name",
      ];
    }
  } else if (tableName === "token") {
    ret = ["user_id", "token"];
  } else if (tableName === "history") {
    ret = [
      "id",
      "action",
      "content",
      "user_id",
      "note",
      "created_date",
    ];
  }

  return ret || [];
};
