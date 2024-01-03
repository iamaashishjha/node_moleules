import LauncherStore from "../stores/LauncherStore";
import { HotspotConfigFetcher, StbFetcher } from "../stores/fetchers/AllDataFetchers";
import mysql from "mysql2/promise";

import { FetchResult, FetchPromise } from "../config/types";

export default class LauncherManager {
	private store = LauncherStore;

	private fetchers = [
		HotspotConfigFetcher,
		StbFetcher
	];

	public async init() {
		/**
		 * ### WARNING ###
		 *
		 * Initialization order matters :D
		 *
		 * ### WARNING ###
		 */

		await this.appendDbResultsToLauncherStore();

		
	}

	get entryStore() {
		return this.store;
	}

	private async appendDbResultsToLauncherStore(){
		console.log(new Date(), ": Connecting MySQL");
		const conn = await mysql.createConnection({
			host: process.env.DB_HOST,
			user: process.env.DB_USERNAME,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_DATABASE,
			port: parseInt(process.env.DB_PORT as string, 10),
		});

		await conn.connect();
		console.log(new Date(), ": MySQL Connected");

		const fetch_promises: FetchPromise[] = [];

		this.fetchers.forEach(fetcher => {
			console.log(new Date(), ": Executing", fetcher.query_name);
			fetch_promises.push(this.fetch(conn, fetcher.query, fetcher.query_name));
		});

		console.log(new Date(), ": Awaiting all DB promises");
		const results = await Promise.all(fetch_promises);

		results.forEach((res, i) => {
			console.log(
				new Date(),
				": Calling back",
				this.fetchers[i].query_name
			);
			const [_res] = res; // only use result portion;
			this.fetchers[i].callback(_res as FetchResult, this.store);
		});
		
		console.log(new Date(), ": Closing MySQL Connectiong");
		await conn.end();
		console.log(new Date(), ": Closed MySQL Connection");

		console.log(new Date(), ": Store populated with DB Data");

	}

	private async fetch(
		conn: mysql.Connection,
		query: string,
		query_name: string
	) {
		console.log(new Date(), ": Executing " + query_name);
		return conn.execute(query);
	}
}

// module.exports = LauncherStore;
