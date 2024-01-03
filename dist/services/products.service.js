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
const DbMixin = require("../mixins/db.mixin");
module.exports = {
    name: "products",
    mixins: [DbMixin("products")],
    settings: {
        fields: [
            "_id",
            "name",
            "quantity",
            "price"
        ],
        entityValidator: {
            name: "string|min:3",
            price: "number|positive"
        }
    },
    hooks: {
        before: {
            create(ctx) {
                ctx.params.quantity = 0;
            }
        }
    },
    actions: {
        increaseQuantity: {
            rest: "PUT /:id/quantity/increase",
            params: {
                id: "string",
                value: "number|integer|positive"
            },
            handler(ctx) {
                return __awaiter(this, void 0, void 0, function* () {
                    const doc = yield this.adapter.updateById(ctx.params.id, { $inc: { quantity: ctx.params.value } });
                    const json = yield this.transformDocuments(ctx, ctx.params, doc);
                    yield this.entityChanged("updated", json, ctx);
                    return json;
                });
            }
        },
        decreaseQuantity: {
            rest: "PUT /:id/quantity/decrease",
            params: {
                id: "string",
                value: "number|integer|positive"
            },
            handler(ctx) {
                return __awaiter(this, void 0, void 0, function* () {
                    const doc = yield this.adapter.updateById(ctx.params.id, { $inc: { quantity: -ctx.params.value } });
                    const json = yield this.transformDocuments(ctx, ctx.params, doc);
                    yield this.entityChanged("updated", json, ctx);
                    return json;
                });
            }
        }
    },
    methods: {
        seedDB() {
            return __awaiter(this, void 0, void 0, function* () {
                yield this.adapter.insertMany([
                    { name: "Samsung Galaxy S10 Plus", quantity: 10, price: 704 },
                    { name: "iPhone 11 Pro", quantity: 25, price: 999 },
                    { name: "Huawei P30 Pro", quantity: 15, price: 679 },
                ]);
            });
        }
    },
    afterConnected() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
};
//# sourceMappingURL=products.service.js.map