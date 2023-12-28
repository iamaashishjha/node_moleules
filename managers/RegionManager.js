const mysql = require('mysql2/promise');
const { RegionsFetcher } = require("../stores/fetchers/AllDataFetchers.js");
const Store = require("../stores/MainStore");

class RegionManager {
    async init() {
        /**
         * ### WARNING ###
         *
         * Initialization order matters :D
         *
         * ### WARNING ###
         */

        console.log(new Date(), ": Connecting MySQL Region Manager");
        const conn = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            port: parseInt(process.env.DB_PORT, 3306),
        });
        console.log(new Date(), ": MySQL Connected Region Manager");
        const [result] = await conn.execute(RegionsFetcher.query);
        RegionsFetcher.callback(result, Store);
        await conn.end();
        console.log(new Date(), ": Closed MySQL Connection Region Manager");
    }

    get store() {
        return Store.regions;
    }
}

module.exports = RegionManager;
