
"use strict";
const RegionManager = require('../managers/RegionManager.js');
const { fetchMySqlConfigs } = require("../config/db_utils_mysql.js");
const DbService = require("moleculer-db");
const { ServiceBroker } = require("moleculer");

const manager = new RegionManager();
const broker = new ServiceBroker();

module.exports = {
    name: "region",

    /**
     * Mixins
     */
    // mixins: [DbService],

    /**
     * Settings
     */
    settings: {
        fetchMySqlConfigs,
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
        console.log("Region Service created");
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
        console.log("Region Service Started");

    },

    /**
     * Service stopped lifecycle event handler
     */
    async stopped() {
        console.log("Region Service Stopped");

    }
};