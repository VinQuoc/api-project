const { Sequelize, QueryTypes } = require("sequelize");

// thay đổi username, password, database
const config = {
    username: "root",
    password: "Abc1234%^&",
    database: "viec_lam",
    host: "127.0.0.1",
    dialect: "mysql",
    logging: false,
    timezone: "+07:00",
    underscored: true,
    dialectOptions: {
        useUTC: true,
        dateStrings: true,
        typeCast: true,
    },
    define: {
        freezeTableName: true,
        timestamps: false,
    },
    pool: {
        max: 50,
        min: 0,
        idle: 10000,
        acquire: 60000,
        evict: 10000,
        connectTimeout: 1000000,
        handleDisconnects: false,
    },
};

const db = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);

// code test kết nối và truy vấn dữ liệu lên mysql
// thay đổi sql
let sql = `SELECT * FROM nguoi_dung WHERE id = 2`;

const getById = async (sql) => {
    try {
        const ret = await db.query(sql, { type: QueryTypes.SELECT });
        console.log(ret);
    } catch (error) {
        console.log(error);

    }
}

getById(sql);
