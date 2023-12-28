
"use strict";
const CountryManager = require('../managers/CountryManager.js');
const { fetchMySqlConfigs } = require("../config/db_utils_mysql.js");
const DbService = require("moleculer-db");
const { Service, ServiceBroker, Context } = require("moleculer");

const manager = new CountryManager();
const broker = new ServiceBroker();

module.exports = {
    name: "country",

    /**
     * Mixins
     */
    // mixins: [DbMixin("categories")],
    // mixins: [DbMixin("categories")],
    // mixins: [ApiGwService],
    // mixins: [DbService],

    /**
     * Settings
     */
    settings: {
        fetchMySqlConfigs,
        // fields: ["_id", "title", "text"], // Define your schema fields
        // entityValidator: {
        //     title: "string",
        //     text: { type: "string", optional: true }
        // }
    },

    /**
     * Dependencies
     */
    dependencies: [],

    /**
     * Actions
     */
    actions: {
        index: {
            rest: {
                method: "GET",
                path: "/"
            },
            async handler() {
                broker.logger.info("      Action handler");
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
        console.log("Country Service created");
        manager
            .init()
            .catch((err) =>
                console.log("ERROR EXECUTING INIT METHOD", err)
            );
    },

    /**
     * Service started lifecycle event handler
     */
    async started() {
        console.log("Country Service Started");

    },

    /**
     * Service stopped lifecycle event handler
     */
    async stopped() {
        console.log("Country Service Stopped");

    }
};