"use strict";

const AddressManager = require('../managers/AddressManager.js');
const { fetchMySqlConfigs } = require("../config/db_utils_mysql.js");
const DbService = require("moleculer-db");
const { Service, ServiceBroker, Context } = require("moleculer");
const ErrorMixin = require('../mixins/ErrorMixins.js');

const manager = new AddressManager();
const broker = new ServiceBroker();

/** @type {ServiceSchema} */
module.exports = {
	name: "address",
	
    mixins: [ErrorMixin],

    hooks: {
        error: {
            "*": ['globalErrorHandler']
        }
    },
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
		index: {
			rest: {
				method: "GET",
				path: "/"
			},
			async handler() {
				// Emit the "user.created" event
				// broker.emit("address.created", manager.store);
				// console.log("Address Get => ", manager);
				// console.log("Address Get manager store => ", manager.store);
				return manager.store;
			}
		}
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
		console.log("Address Service created");
		manager
			.init()
			.catch((err) =>
				console.log("ERROR EXECUTING INIT METHOD", err)
			);

		// Emit the "user.created" event
		broker.emit("address.created", manager.store);
	},

	/**
	 * Service started lifecycle event handler
	 */
	async started() {
		console.log("Address Service Started");
	},

	/**
	 * Service stopped lifecycle event handler
	 */
	async stopped() {
		console.log("Address Service Stopped");
	},

};
