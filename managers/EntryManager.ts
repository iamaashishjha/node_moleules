const Store = require("../stores/EntryStore");

//
// const fetch = require('node-fetch');
const http = require("http");
const https = require("https");

export default class EntryManager {
	private store = Store;

	public async init() {
		/**
		 * ### WARNING ###
		 *
		 * Initialization order matters :D
		 *
		 * ### WARNING ###
		 */

		const data: string = await this.fetchData();
		const dataArr = JSON.parse(data);
		const entriesArr = dataArr.entries;
		entriesArr.forEach((entry: any, index: any) => {
			const entryKey = index;
			this.store[entryKey] = {
				api: entry.API || "",
				description: entry.Description || "",
				auth: entry.Auth || "",
				https: entry.HTTPS || "",
				cors: entry.Cors || "",
				link: entry.Link || "",
				category: entry.Category || "",
			};
		});
		console.log("Data from the Store After:");

		// this.redis = createClient({
		// 	url: this.config.redisURL,
		// });

		// await this.redis.connect();
		// console.log(new Date(), ": Redis Connected");
	}

	get entryStore() {
		return this.store;
	}


	private async fetchData(): Promise<string>{
		const apiUrl = "https://api.publicapis.org/entries";

			return new Promise((resolve, reject) => {
				const request = https.get(apiUrl, (response: any) => {
					let data = "";

					// A chunk of data has been received.
					response.on("data", (chunk: Buffer) => {
						data += chunk.toString();
					});

					// The whole response has been received.
					response.on("end", () => {
						resolve(data);
					});
				});

				// Handle errors
				request.on("error", (error: any) => {
					reject(error);
				});
			});
	}
}

// module.exports = EntryManager;
