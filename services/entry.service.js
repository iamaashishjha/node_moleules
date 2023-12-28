"use strict";
// const { EntryManager } = require('../managers/EntryManager'); // Use the correct path
const EntryManager = require('../managers/EntryManager.js');


/**
 * @typedef {import('moleculer').ServiceSchema} ServiceSchema Moleculer's Service Schema
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

/** @type {ServiceSchema} */
module.exports = {
    name: "entry",

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
        index: {
            rest: {
                method: "GET",
                path: "/"
            },
            async handler() {
                const manager = new EntryManager();
                await manager.init();
                const store = manager.entryStore;
                return store;
            }
        },
    },

    /**
     * Events
     */
    events: {
        "category.created": {
            handler(ctx) {
                console.log("Payload:", ctx.params);
                console.log("Sender:", ctx.nodeID);
                console.log("Metadata:", ctx.meta);
                console.log("The called event name:", ctx.eventName);
            }
        }
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
