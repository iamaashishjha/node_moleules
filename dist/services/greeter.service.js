"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
    name: "greeter",
    settings: {},
    dependencies: [],
    actions: {
        hello: {
            rest: {
                method: "GET",
                path: "/hello"
            },
            handler() {
                return __awaiter(this, void 0, void 0, function* () {
                    return "Hello Moleculer";
                });
            }
        },
        welcome: {
            rest: "/welcome",
            params: {
                name: "string"
            },
            handler(ctx) {
                return __awaiter(this, void 0, void 0, function* () {
                    return `Welcome, ${ctx.params.name}`;
                });
            }
        },
        "test-ts": {
            rest: {
                method: "GET",
                path: "/test-ts",
            },
            handler: (ctx) => {
                console.log(ctx.params);
                return ctx.params.a + ctx.params.b;
            },
        },
    },
    events: {},
    methods: {},
    created() {
    },
    started() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    },
    stopped() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
};
//# sourceMappingURL=greeter.service.js.map