"use strict";
// import { Service, ServiceBroker, Context } from "moleculer";
// const { EntryManager } = require('../managers/EntryManager'); // Use the correct path
import { Service, ServiceBroker, Context } from "moleculer";
import EntryManager from "../managers/EntryManager";

export default class Launcher extends Service {
	private launcher: EntryManager = new EntryManager();
    public constructor(public broker: ServiceBroker) {
		super(broker);
		this.parseServiceSchema({
			name: "launcher",
			created: async () => {
				this.logger.info("Initializing Launcher Service");
				await this.launcher
					.init()
					.catch((err: Error) =>
						console.log("ERROR EXECUTING INIT METHOD", err)
					);
			},

			settings: {

            },

			events: {
				
			},
			actions: {
				hello: {
					rest: {
						method: "GET",
						path: "/hello"
					},
					async handler() {
						return "Hello Moleculer From Entry";
					}
				},
			},
		});
	}

}