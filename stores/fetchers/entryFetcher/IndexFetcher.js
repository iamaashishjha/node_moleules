/* eslint-disable camelcase */
// import { RowDataPacket } from "mysql2";
// import { LauncherStore } from "../types";
const store = require("../../CategoryStore");

const AppFetcher = {
    query_name: "AppFetcher",
    query: `SELECT * FROM categories;`,
    callback: (rows, store) => {
        store = [];
        rows.forEach((row, index) => {
            store.set({
                title: row.title,
                text: row.text
            })
            // const entryKey = index;
            // store[entryKey] =
            //  {
            //     title: row.title,
            //     text: row.text
            // }
        });
        console.log(store);
    },
};

// Export each constant individually
module.exports = {
    AppFetcher,
};