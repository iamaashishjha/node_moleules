
"use strict";
const CityManager = require('../managers/CityManager.js');
const { fetchMySqlConfigs } = require("../config/db_utils_mysql.js");
const DbService = require("moleculer-db");
const { ServiceBroker } = require("moleculer");

const manager = new CityManager();
const broker = new ServiceBroker();

module.exports = {
    name: "city",

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
                broker.logger.info("Action handler");
                return manager.store;
            }
        },
        // list: {
        //     rest: {
        //         method: "GET",
        //         path: "/list"
        //     },
        //     async handler(ctx) {
        //         // return this.adapter.find();
        //     }
        // }
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
        console.log("City Service created");
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
        console.log("City Service Started");

    },

    /**
     * Service stopped lifecycle event handler
     */
    async stopped() {
        console.log("City Service Stopped");

    }
};