const mysql = require('mysql2/promise');
const { CitiesFetcher } = require("../stores/fetchers/AllDataFetchers.js");
const Store = require("../stores/MainStore.js");

class CityManager {
    async init() {
        /**
         * ### WARNING ###
         *
         * Initialization order matters :D
         *
         * ### WARNING ###
         */

        console.log(new Date(), ": Connecting MySQL City Manager");
        const conn = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            port: parseInt(process.env.DB_PORT, 3306),
        });
        console.log(new Date(), ": MySQL Connected City Manager");
        const [result] = await conn.execute(CitiesFetcher.query);
        CitiesFetcher.callback(result, Store);
        await conn.end();
        console.log(new Date(), ": Closed MySQL Connection City Manager");
    }

    get store() {
        return Store.cities;
    }
}

module.exports = CityManager;
