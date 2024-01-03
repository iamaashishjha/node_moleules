"use strict";
// const { EntryManager } = require('../managers/EntryManager'); // Use the correct path
const EntryManager = require('../managers/EntryManager.js');
const HTTPClientService = require("moleculer-http-client");
const { Service, ServiceBroker, Context } = require("moleculer");
const ErrorMixin = require('../mixins/ErrorMixins.js');

const broker = new ServiceBroker();

/**
 * @typedef {import('moleculer').ServiceSchema} ServiceSchema Moleculer's Service Schema
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

/** @type {ServiceSchema} */
module.exports = {
    name: "entry",

    mixins: [HTTPClientService, ErrorMixin],

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
        index: {
            rest: {
                method: "GET",
                path: "/"
            },
            hooks: {
                before(ctx) {
                    broker.logger.info("Before action hook");
                },
                after(ctx, res) {
                    broker.logger.info("After action hook");

                    const statusCode = res ? res.statusCode : undefined;
                    broker.logger.info("Status Code => ", statusCode);

                    if (statusCode && (statusCode >= 400 && statusCode < 600)) {
                        // If the status code is in the 4xx or 5xx range, throw an error
                        const errorMessage = `Oops. Error Occured. Request failed with status code ${statusCode}`;
                        throw new Error(errorMessage);
                    }

                    return res;
                },

            },
            async handler(ctx) {
                // const url = "https://httpbin.org/json";
                // const url = "https://jsonplaceholder.typicode.com/posts";
                const url = "https://ceholder.typicode.com/posts";
                const options = {
                    method: "GET", responseType: "json"
                };
                const data = await ctx.call("http.get", { url, opt: options });

                // Success response
                return {
                    data,
                    errors: null,
                    message: "Request successful",
                    statusCode: 200
                };
                // const data = await ctx.call("http.get", { url: url, opt: options });
                // return data;
            }
        },

        "get-launcher-box-model-prefix": {
            rest: {
                method: "GET",
                path: "/"
            },
            async handler(ctx) {
                const data = [
                    { serial_prefix: '123456', model_id: 13 },
                    { serial_prefix: '12222', model_id: 13 },
                    { serial_prefix: '1233', model_id: 13 },
                    { serial_prefix: '126979', model_id: 13 },
                    { serial_prefix: '1239', model_id: 13 },
                    { serial_prefix: '1261979', model_id: 13 },
                    { serial_prefix: '7777777777', model_id: 13 },
                    { serial_prefix: '78C2C09CBA', model_id: 13 },
                    { serial_prefix: '1234567890', model_id: 19 },
                    { serial_prefix: '79389300', model_id: 13 },
                    { serial_prefix: '17938937', model_id: 13 },
                    { serial_prefix: '7938937123', model_id: 13 },
                    { serial_prefix: '7938937DFD', model_id: 13 },
                    { serial_prefix: '7938937KJK', model_id: 13 },
                    { serial_prefix: '47A67F325W', model_id: 13 },
                    { serial_prefix: 'LHAM2IA353', model_id: 13 },
                    { serial_prefix: 'LFJAKLDJFK', model_id: 13 },
                    { serial_prefix: 'LHAM2QW1MG', model_id: 13 },
                    { serial_prefix: 'ZXK0HN7563', model_id: 13 },
                    { serial_prefix: '47A67FNDNZ', model_id: 13 },
                    { serial_prefix: '8937129837', model_id: 13 },
                    { serial_prefix: '90909095', model_id: 13 },
                    { serial_prefix: '90909096', model_id: 13 },
                    { serial_prefix: '9090909195', model_id: 13 },
                    { serial_prefix: 'TESTSQL', model_id: 13 },
                    { serial_prefix: 'IOIO', model_id: 13 },
                    { serial_prefix: '88888888', model_id: 13 },
                    { serial_prefix: 'KFAJKLJ', model_id: 13 }
                ];

                // Success response
                return {
                    data,
                    errors: null,
                    message: "Request successful",
                    statusCode: 200
                };
                // const data = await ctx.call("http.get", { url: url, opt: options });
                // return data;
            }
        },

        "get-launcher-hotspots": {
            rest: {
                method: "GET",
                path: "/"
            },
            async handler(ctx) {
                const data = [
                    {
                        mode: 'disabled',
                        password: 'jags1234',
                        ssid: 'jagdeep-wifi',
                        status: 0,
                        authmode: 'open',
                        serial: '78c2c09c02cb'
                    },
                    {
                        mode: 'disabled',
                        password: '123456',
                        ssid: 'nettv',
                        status: 1,
                        authmode: 'open',
                        serial: '78c2c0928ed2'
                    },
                    {
                        mode: 'bridged',
                        password: 'birijan_home',
                        ssid: 'birijan_home',
                        status: 1,
                        authmode: 'open',
                        serial: '78C2C09CA258'
                    },
                    {
                        mode: 'routed',
                        password: '1234567890',
                        ssid: 'birijan_giec',
                        status: 1,
                        authmode: 'open',
                        serial: '00226D86EE02'
                    },
                    {
                        mode: 'routed',
                        password: '12345678',
                        ssid: 'e086k0102',
                        status: 1,
                        authmode: 'open',
                        serial: '00226d876c11'
                    },
                    {
                        mode: 'routed',
                        password: 'nepal123',
                        ssid: 'wlink_guest',
                        status: 1,
                        authmode: 'open',
                        serial: '00226D8789A9'
                    },
                    {
                        mode: 'routed',
                        password: 'jerry123$#',
                        ssid: 'jerry',
                        status: 1,
                        authmode: 'open',
                        serial: '78C2C09C02CA'
                    },
                    {
                        mode: 'routed',
                        password: '12345678',
                        ssid: 'worldlink',
                        status: 1,
                        authmode: 'open',
                        serial: '00226D8599BF'
                    },
                    {
                        mode: 'routed',
                        password: '44',
                        ssid: '3',
                        status: 1,
                        authmode: 'open',
                        serial: '00226D6766A5'
                    },
                    {
                        mode: 'routed',
                        password: 'nettv1',
                        ssid: 'nettv1',
                        status: 1,
                        authmode: 'open',
                        serial: '18937F8202D9'
                    },
                    {
                        mode: 'routed',
                        password: 'narayannettv',
                        ssid: 'narayannettv',
                        status: 1,
                        authmode: 'open',
                        serial: '00226D67667C'
                    },
                    {
                        mode: 'routed',
                        password: 'birijan_home',
                        ssid: 'birijan_home',
                        status: 1,
                        authmode: 'open',
                        serial: '00226D86F58D'
                    },
                    {
                        mode: 'routed',
                        password: '12345678',
                        ssid: 'aaaaa',
                        status: 1,
                        authmode: 'open',
                        serial: '00226D86FA52'
                    },
                    {
                        mode: 'routed',
                        password: 'bsujan_home',
                        ssid: 'bsujan_home',
                        status: 1,
                        authmode: 'open',
                        serial: 'bsujan_home-5'
                    },
                    {
                        mode: 'routed',
                        password: 'nirojmaharjan2050',
                        ssid: 'nirojmaharjan2050',
                        status: 1,
                        authmode: 'open',
                        serial: 'nirojmaharjan2050-5'
                    },
                    {
                        mode: 'routed',
                        password: 'nettv1',
                        ssid: 'nettv1',
                        status: 1,
                        authmode: 'open',
                        serial: '8CF710BC5A1D'
                    },
                    {
                        mode: 'routed',
                        password: 'rojilshrestha1',
                        ssid: 'rojilshrestha1',
                        status: 1,
                        authmode: 'open',
                        serial: 'rojilshrestha1-5'
                    },
                    {
                        mode: 'routed',
                        password: 'sitaram1_fithr',
                        ssid: 'sitaram1_fithr',
                        status: 1,
                        authmode: 'open',
                        serial: '00226D9237B7'
                    },
                    {
                        mode: 'routed',
                        password: 'nettv_padam',
                        ssid: 'nettv_padam',
                        status: 1,
                        authmode: 'open',
                        serial: '00226D676683'
                    },
                    {
                        mode: 'routed',
                        password: 'narayannettv',
                        ssid: 'narayannettv',
                        status: 1,
                        authmode: 'open',
                        serial: 'narayannettv-5'
                    },
                    {
                        mode: 'routed',
                        password: '123',
                        ssid: '123',
                        status: 1,
                        authmode: 'open',
                        serial: '123-5'
                    },
                    {
                        mode: 'disabled',
                        password: '12345',
                        ssid: '1234',
                        status: 0,
                        authmode: 'open',
                        serial: 'NX2016121140'
                    },
                    {
                        mode: 'routed',
                        password: 'sitaram1_fithr',
                        ssid: 'sitaram1_fithr',
                        status: 1,
                        authmode: 'open',
                        serial: '00226D916AE4'
                    },
                    {
                        mode: 'routed',
                        password: '44',
                        ssid: '74',
                        status: 1,
                        authmode: 'open',
                        serial: '78C2C0953474'
                    },
                    {
                        mode: 'routed',
                        password: 'test',
                        ssid: 'newtest',
                        status: 1,
                        authmode: 'open',
                        serial: '00226D86F608'
                    }
                ];

                // Success response
                return {
                    data,
                    errors: null,
                    message: "Request successful",
                    statusCode: 200
                };
                // const data = await ctx.call("http.get", { url: url, opt: options });
                // return data;
            }
        },
    },

    /**
     * Events
     */
    events: {
        "category.created": {
            handler(ctx) {
                console.log("Payload from Entry Service  =>", ctx.params);
                console.log("Sender from Entry Service  =>", ctx.nodeID);
                console.log("Metadata from Entry Service  =>", ctx.meta);
                console.log("The called event name from Entry Service  =>", ctx.eventName);
            }
        },
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
        console.log("Entry Service created");
    },

    /**
     * Service started lifecycle event handler
     */
    async started() {
        console.log("Entry Service started");

    },

    /**
     * Service stopped lifecycle event handler
     */
    async stopped() {
        console.log("Entry Service stopped");

    }
};
