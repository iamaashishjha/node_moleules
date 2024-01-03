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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moleculer_1 = require("moleculer");
const LauncherManager_1 = __importDefault(require("../managers/LauncherManager"));
class Launcher extends moleculer_1.Service {
    constructor(broker) {
        super(broker);
        this.broker = broker;
        this.launcher = new LauncherManager_1.default();
        this.parseServiceSchema({
            name: "launcher",
            created: () => __awaiter(this, void 0, void 0, function* () {
                this.logger.info("Initializing Launcher Service");
                yield this.launcher
                    .init()
                    .catch((err) => console.log("ERROR EXECUTING INIT METHOD", err));
            }),
            settings: {},
            events: {},
            actions: {
                hello: {
                    rest: {
                        method: "GET",
                        path: "/hello"
                    },
                    handler() {
                        return __awaiter(this, void 0, void 0, function* () {
                            return "Hello Moleculer From Entry";
                        });
                    }
                },
            },
        });
    }
}
exports.default = Launcher;
//# sourceMappingURL=launcher.service.js.map