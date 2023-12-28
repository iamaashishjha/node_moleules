"use strict";
import {Service, ServiceBroker, Context} from "moleculer";

/**
 * @typedef {import('moleculer').ServiceSchema} ServiceSchema Moleculer's Service Schema
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

/** @type {ServiceSchema} */
module.exports = {
	name: "greeter",

	/**
	 * Settings
	 */
	settings: {

	},

	/**
	 * Dependencies
	 */
	dependencies: [],

	/**
	 * Actions
	 */
	actions: {

		/**
		 * Say a 'Hello' action.
		 *
		 * @returns
		 */
		hello: {
			rest: {
				method: "GET",
				path: "/hello"
			},
			async handler() {
				return "Hello Moleculer";
			}
		},

		/**
		 * Welcome, a username
		 *
		 * @param {String} name - User name
		 */
		welcome: {
			rest: "/welcome",
			params: {
				name: "string"
			},
			/** @param {Context} ctx  */
			async handler(ctx: Context<{name: string}>): Promise<string> {
				return `Welcome, ${ctx.params.name}`;
			}
		},
		/**
		 * 
		 * 
		 *  
		 */
		"test-ts": {
			rest: {
				method: "GET",
				path: "/test-ts",
			},
			handler: (ctx: Context<{a: number; b: number}>) => {
				console.log(ctx.params);
				return ctx.params.a + ctx.params.b;
			},
		},
	},

	/**
	 * Events
	 */
	events: {

	},

	/**
	 * Methods
	 */
	methods: {

	},

	/**
	 * Service created lifecycle event handler
	 */
	created() {

	},

	/**
	 * Service started lifecycle event handler
	 */
	async started() {

	},

	/**
	 * Service stopped lifecycle event handler
	 */
	async stopped() {

	}
};



// export default class GreeterService extends Service{

// 	public constructor(public broker: ServiceBroker) {
// 		super(broker);
// 		this.parseServiceSchema({
// 			name: "greeter",
// 			actions:{
// 				"test-ts": {
// 					rest: {
// 						method: "GET",
// 						path: "/test-ts",
// 					},
// 					handler: (ctx: Context<{a: number; b: number}>) => {
// 						console.log(ctx.params);
// 						return ctx.params.a + ctx.params.b;
// 					},
// 				},
// 			},
// 		});
// 	}

// 		// Action
// 		public ActionHello(): string {
// 			return "Hello Moleculer";
// 		}
	
// 		public ActionWelcome(name: string): string {
// 			return `Welcome, ${name}`;
// 		}
// }