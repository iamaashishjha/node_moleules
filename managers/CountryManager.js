const mysql = require('mysql2/promise');
const { CountriesFetcher } = require("../stores/fetchers/AllDataFetchers.js");
const Store = require("../stores/MainStore");

class CountryManager {
    async init() {
        /**
         * ### WARNING ###
         *
         * Initialization order matters :D
         *
         * ### WARNING ###
         */

        console.log(new Date(), ": Connecting MySQL Country Manager");
        const conn = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            port: parseInt(process.env.DB_PORT, 3306),
        });
        console.log(new Date(), ": MySQL Connected Country Manager");
        const [result] = await conn.execute(CountriesFetcher.query);
        CountriesFetcher.callback(result, Store);
        await conn.end();
        console.log(new Date(), ": Closed MySQL Connection Country Manager");
    }

    get store() {
        return Store.countries;
    }
}

module.exports = CountryManager;
