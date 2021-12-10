const { models } = require("../models");

exports.getColumns = (tableName, isCreate = true) => {
  let ret;
  const model = models[tableName];
  if (model) {
    ret = isCreate ? model[0] : model[1];
  } else if (tableName === "user") {
    if (isCreate) {
      ret = [
        "id",
        "username",
        "password",
        "status",
        "email",
        "phone",
        "role_name",
        "note",
        "created_date",
        "created_by",
      ];
    } else {
      ret = [
        "id",
        "status",
        "email",
        "phone",
        "role_name",
        "note",
        "updated_date",
        "updated_by",
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
