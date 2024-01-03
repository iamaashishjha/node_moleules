"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moleculer_1 = require("moleculer");
const moleculer_web_1 = __importDefault(require("moleculer-web"));
class ApiService extends moleculer_1.Service {
    constructor(broker) {
        super(broker);
        this.parseServiceSchema({
            name: "api",
            mixins: [moleculer_web_1.default],
            settings: {
                port: process.env.PORT || 3000,
                routes: [
                    {
                        path: "/api",
                        whitelist: [
                            "**",
                        ],
                        use: [],
                        mergeParams: true,
                        authentication: false,
                        authorization: false,
                        autoAliases: true,
                        aliases: {},
                        onBeforeCall(ctx, route, req, res) {
                            ctx.meta.userAgent = req.headers["user-agent"];
                        },
                        callingOptions: {},
                        bodyParsers: {
                            json: {
                                strict: false,
                                limit: "1MB",
                            },
                            urlencoded: {
                                extended: true,
                                limit: "1MB",
                            },
                        },
                        mappingPolicy: "all",
                        logging: true,
                    },
                ],
                log4XXResponses: false,
                logRequestParams: null,
                logResponseData: null,
                assets: {
                    folder: "public",
                    options: {},
                },
            },
            methods: {},
        });
    }
}
exports.default = ApiService;
//# sourceMappingURL=api.service.js.map