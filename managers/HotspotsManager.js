const Store = require("../stores/EntryStore");

//
// const fetch = require('node-fetch');
const http = require("http");
const https = require("https");

class HotspotsManager {
    // private store = Store;

    async init() {
        /**
         * ### WARNING ###
         *
         * Initialization order matters :D
         *
         * ### WARNING ###
         */

        const data = await this.fetchData();
        const dataArr = JSON.parse(data);
        const entriesArr = dataArr.entries;
        entriesArr.forEach((entry, index) => {
            const entryKey = index;
            Store[entryKey] = {
                api: entry.API || "",
                description: entry.Description || "",
                auth: entry.Auth || "",
                https: entry.HTTPS || "",
                cors: entry.Cors || "",
                link: entry.Link || "",
                category: entry.Category || "",
            };
        });
    }

    get entryStore() {
        return Store;
    }


    async fetchData() {
        const apiUrl = "https://api.publicapis.org/entries";

        return new Promise((resolve, reject) => {
            const request = https.get(apiUrl, (response) => {
                let data = "";

                // A chunk of data has been received.
                response.on("data", (chunk) => {
                    data += chunk.toString();
                });

                // The whole response has been received.
                response.on("end", () => {
                    resolve(data);
                });
            });

            // Handle errors
            request.on("error", (error) => {
                reject(error);
            });
        });
    }
}

module.exports = HotspotsManager;
