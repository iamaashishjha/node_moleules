// Load variables from .env
require('dotenv').config();
const mysql = require('mysql2');

const dbConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
};

const createConnection = () => {
    return mysql.createConnection(dbConfig);
};

const createPool = (connectionLimit = 10) => {
    dbConfig.connectionLimit = connectionLimit;
    console.log(dbConfig);
    return mysql.createPool(dbConfig);
};

const fetchMySqlConfigs = () => {
    return { ...dbConfig };
};

const closeConnection = (connection) => {
    if (connection) {
        connection.end();
    }
};

const releasePool = (pool) => {
    if (pool) {
        pool.end();
    }
};

const executeQuery = async (connection, sql, values = null) => {
    // const pool = createPool();
    // const connection = pool.getConnection();
    // try {
    //     const [result] = await connection.query(sql, values);
    //     return result;
    // } finally {
    //     connection.release();
    // }

    console.log(connection);
    if (values) {
        const [rows, fields] = connection.query(sql, values);
        console.log(rows);
    // return result;
    return { result: rows };
    } else {
        console.log("SQL =>", sql);
        // const [rows, fields] = connection.query(sql);
        const [rows, fields] = await connection.query(query);
        console.log(rows);
        // return result;
        return { result: rows };
    }
    // console.log(rows);
    // // return result;
    // return { result: rows };

};

module.exports = {
    createConnection,
    createPool,
    fetchMySqlConfigs,
    closeConnection,
    releasePool,
    executeQuery,
};
