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
    namespace: "",
    nodeID: null,
    metadata: {},
    logger: {
        type: "Console",
        options: {
            colors: true,
            moduleColors: false,
            formatter: "full",
            objectPrinter: null,
            autoPadding: false
        }
    },
    logLevel: "info",
    transporter: null,
    cacher: null,
    serializer: "JSON",
    requestTimeout: 10 * 1000,
    retryPolicy: {
        enabled: false,
        retries: 5,
        delay: 100,
        maxDelay: 1000,
        factor: 2,
        check: (err) => err && !!err.retryable
    },
    maxCallLevel: 100,
    heartbeatInterval: 10,
    heartbeatTimeout: 30,
    contextParamsCloning: false,
    tracking: {
        enabled: false,
        shutdownTimeout: 5000,
    },
    disableBalancer: false,
    registry: {
        strategy: "RoundRobin",
        preferLocal: true
    },
    circuitBreaker: {
        enabled: false,
        threshold: 0.5,
        minRequestCount: 20,
        windowTime: 60,
        halfOpenTime: 10 * 1000,
        check: (err) => err && err.code >= 500
    },
    bulkhead: {
        enabled: false,
        concurrency: 10,
        maxQueueSize: 100,
    },
    validator: true,
    errorHandler: null,
    metrics: {
        enabled: true,
        reporter: {
            type: "Prometheus",
            options: {
                port: 3030,
                path: "/metrics",
                defaultLabels: (registry) => ({
                    namespace: registry.broker.namespace,
                    nodeID: registry.broker.nodeID
                })
            }
        }
    },
    tracing: {
        enabled: true,
        exporter: {
            type: "Console",
            options: {
                logger: null,
                colors: true,
                width: 100,
                gaugeWidth: 40
            }
        }
    },
    middlewares: [],
    replCommands: null,
    created(brokerConfig) {
    },
    started(brokerConfig) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    },
    stopped(brokerConfig) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
};
//# sourceMappingURL=moleculer.config.js.map