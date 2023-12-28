// const mysql = require('mysql2');
const mysql = require('mysql2/promise');
// const { AppFetcher } = require("../stores/fetchers/entryFetcher/IndexFetcher.js");
const { CategoriesFetcher } = require("../stores/fetchers/AllDataFetchers.js");
// const Store = require("../stores/CategoryStore");
const Store = require("../stores/MainStore");
// const { json } = require('stream/consumers');
// const {createConnection,closeConnection, createPool,executeQuery,releasePool } = require("../config/db_utils_mysql.js");


class CategoryManager {

    // fetchers = [
    //     CategoriesFetcher
    // ];

    // fetchers = CategoriesFetcher;

    // store = Store;

    async init() {
        /**
         * ### WARNING ###
         *
         * Initialization order matters :D
         *
         * ### WARNING ###
         */

        console.log(new Date(), ": Connecting MySQL");

        const conn = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            port: parseInt(process.env.DB_PORT, 3306),
        });
        console.log(new Date(), ": MySQL Connected");

        // const [result] = await conn.query(CategoriesFetcher.query);
        const [result] = await conn.execute(CategoriesFetcher.query);
        // console.log("Query execution Result => ", result);
        CategoriesFetcher.callback(result, Store);

        console.log("Store Data at Init");
        console.log(Store);
        await conn.end();
        console.log(new Date(), ": Closed MySQL Connection");
    }

    get store() {
        return Store.categories;
    }
}

module.exports = CategoryManager;
