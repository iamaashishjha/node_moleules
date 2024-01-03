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
const LauncherStore_1 = __importDefault(require("../stores/LauncherStore"));
const AllDataFetchers_1 = require("../stores/fetchers/AllDataFetchers");
const promise_1 = __importDefault(require("mysql2/promise"));
class LauncherManager {
    constructor() {
        this.store = LauncherStore_1.default;
        this.fetchers = [
            AllDataFetchers_1.HotspotConfigFetcher,
            AllDataFetchers_1.StbFetcher
        ];
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.appendDbResultsToLauncherStore();
        });
    }
    get entryStore() {
        return this.store;
    }
    appendDbResultsToLauncherStore() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(new Date(), ": Connecting MySQL");
            const conn = yield promise_1.default.createConnection({
                host: process.env.DB_HOST,
                user: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_DATABASE,
                port: parseInt(process.env.DB_PORT, 10),
            });
            yield conn.connect();
            console.log(new Date(), ": MySQL Connected");
            const fetch_promises = [];
            this.fetchers.forEach(fetcher => {
                console.log(new Date(), ": Executing", fetcher.query_name);
                fetch_promises.push(this.fetch(conn, fetcher.query, fetcher.query_name));
            });
            console.log(new Date(), ": Awaiting all DB promises");
            const results = yield Promise.all(fetch_promises);
            results.forEach((res, i) => {
                console.log(new Date(), ": Calling back", this.fetchers[i].query_name);
                const [_res] = res;
                this.fetchers[i].callback(_res, this.store);
            });
            console.log(new Date(), ": Closing MySQL Connectiong");
            yield conn.end();
            console.log(new Date(), ": Closed MySQL Connection");
            console.log(new Date(), ": Store populated with DB Data");
        });
    }
    fetch(conn, query, query_name) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(new Date(), ": Executing " + query_name);
            return conn.execute(query);
        });
    }
}
exports.default = LauncherManager;
//# sourceMappingURL=LauncherManager.js.map