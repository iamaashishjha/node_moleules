
const HTTPClientService =  require("moleculer-http-client");

module.exports = {
    name: "http",
    mixins: [HTTPClientService],
    /**
     * Moleculer settings
     */
    settings: {
        // HTTP client settings
        httpClient: {
            // Boolean value indicating whether request should be logged or not
            logging: false,

            // Log request function
            // logOutgoingRequest: logOutgoingRequest,

            // Log response function
            // logIncomingResponse: logIncomingResponse,

            // Format the Response      
            responseFormatter: "body", // one of "body", "headers", "status", "full", "raw" or a Function. Example: (res) => ({body: res.body, headers: res.headers})

            // Format the Errors
            // errorFormatter: errorFormatter,

            // Got Client options
            defaultOptions: {
                // Put here any Got available option that can be used to extend Got client
            }
        }
        // httpClient: {
        //     // Boolean value indicating whether request should be logged or not
        //     logging: false,
        //     responseFormatter: "body",
        //     retry: {
        //         limit: 1,
        //         statusCodes: [
        //             408,
        //             413,
        //             429,
        //             502,
        //             503,
        //             504,
        //             521,
        //             522,
        //             524,
        //         ],
        //     },
        // },
    },
};