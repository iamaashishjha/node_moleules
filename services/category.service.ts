"use strict";
// import { Service, ServiceBroker, Context } from "moleculer";
// const { EntryManager } = require('../managers/EntryManager'); // Use the correct path
import { Service, ServiceBroker, Context } from "moleculer";
import CategoryManager from "../managers/CategoryManager.js";

export default class Category extends Service {
	private manager: CategoryManager = new CategoryManager();
    public constructor(public broker: ServiceBroker) {
		super(broker);
		this.parseServiceSchema({
			name: "launcher",
			created: async () => {
				this.logger.info("Initializing Category Manager Service");
				await this.manager
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