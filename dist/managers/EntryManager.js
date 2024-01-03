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
const Store = require("../stores/EntryStore");
const http = require("http");
const https = require("https");
class EntryManager {
    constructor() {
        this.store = Store;
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.fetchData();
            const dataArr = JSON.parse(data);
            const entriesArr = dataArr.entries;
            entriesArr.forEach((entry, index) => {
                const entryKey = index;
                this.store[entryKey] = {
                    api: entry.API || "",
                    description: entry.Description || "",
                    auth: entry.Auth || "",
                    https: entry.HTTPS || "",
                    cors: entry.Cors || "",
                    link: entry.Link || "",
                    category: entry.Category || "",
                };
            });
            console.log("Data from the Store After:");
        });
    }
    get entryStore() {
        return this.store;
    }
    fetchData() {
        return __awaiter(this, void 0, void 0, function* () {
            const apiUrl = "https://api.publicapis.org/entries";
            return new Promise((resolve, reject) => {
                const request = https.get(apiUrl, (response) => {
                    let data = "";
                    response.on("data", (chunk) => {
                        data += chunk.toString();
                    });
                    response.on("end", () => {
                        resolve(data);
                    });
                });
                request.on("error", (error) => {
                    reject(error);
                });
            });
        });
    }
}
exports.default = EntryManager;
//# sourceMappingURL=EntryManager.js.map