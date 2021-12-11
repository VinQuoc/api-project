const { Sequelize, QueryTypes } = require("sequelize");

// thay đổi username, password, database
const config = {
    username: "root",
    password: "Abc1234%^&",
    database: "blogdb",
    host: "127.0.0.1",
    dialect: "mysql",
    logging: false,
    timezone: "+07:00",
    underscored: true,
    dialectOptions: {
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
let sql = `
    SELECT *
    FROM users
    WHERE username='zxc6'
    `;

let sql3 = `
INSERT INTO blogdb.users (id,username,password,status) 
VALUES ('2fe66c32-d747-4885-ab71-8231e0dd33f2', 'zzz1', '$2b$10$CroglVCRzD0oGb3BGP7/9u2IJ4nXL7syS/wNOvd/nz2yh9x8eEgB6', 'ACTIVE');
`;

let sql2 = `
    INSERT INTO users(id,username,password,status)
    VALUES('52637a8c-d160-4551-be2b-2aefed8f0fe5','zxc09','$2b$10$xif0BthI1f/W4d.DF9FMFeWIX0/hCXYa/zr2Oxdq0w2KYvs7uJ9jy','ACTIVE');
`;

const getById = async (sql) => {
    try {
        const ret = await db.query(sql, { type: QueryTypes.INSERT });
        console.log('ret', ret);
    } catch (error) {
        console.log(error);

    }
}

getById(sql2);