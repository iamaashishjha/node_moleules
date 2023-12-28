
const mysql = require('mysql2/promise');
const { AddressFetcher } = require("../stores/fetchers/AllDataFetchers.js");
const Store = require("../stores/MainStore");
class AddressManager {

    async init() {
        /**
         * ### WARNING ###
         *
         * Initialization order matters :D
         *
         * ### WARNING ###
         */
		// console.log(new Date(), ": Store flushed Address Store");
        // const store = Store.addresses;
		// // store = [];
        // Store.addresses = [];
        // console.log(new Date(), ": Store flushed Address Store");
        console.log(new Date(), ": Connecting MySQL Address Manager");
        const conn = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            port: parseInt(process.env.DB_PORT, 3306),
        });
        console.log(new Date(), ": MySQL Connected Address Manager");

        const [result] = await conn.execute(AddressFetcher.query);
        AddressFetcher.callback(result, Store);
        // AddressFetcher.callback(result, store);
        // AddressFetcher.callback(result, Store.addresses);

        await conn.end();
        console.log(new Date(), ": Closed MySQL Connection Address Manager");
    }

    get store() {
        return Store.addresses;
    }
}

module.exports = AddressManager;
