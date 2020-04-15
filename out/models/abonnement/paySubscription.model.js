"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const subscribeModel_model_1 = require("./subscribeModel.model");
const mongodb_1 = require("mongodb");
/**
 * Le modèle de données abonnement
 */
let PaySubscription = class PaySubscription {
    //************************setter and getters*******************/
    getObjectId() {
        return this.objectId;
    }
    setObjectId(value) {
        this.objectId = value;
    }
    getCodeOfSubscription() {
        return this.codeOfSubscription;
    }
    setCodeOfSubscription(value) {
        this.codeOfSubscription = value;
    }
    getBalanceOfAbonnement() {
        return this.balanceOfAbonnement;
    }
    setBalanceOfAbonnement(value) {
        this.balanceOfAbonnement = value;
    }
    getDateOfSubscribe() {
        return this.dateOfSubscribe;
    }
    setDateOfSubscribe(value) {
        this.dateOfSubscribe = value;
    }
    getDateOfPayment() {
        return this.dateOfPayment;
    }
    setDateOfPayment(value) {
        this.dateOfPayment = value;
    }
    getAmountToPay() {
        return this.amountToPay;
    }
    setAmountToPay(value) {
        this.amountToPay = value;
    }
    getMeanOfPaymment() {
        return this.meanOfPaymment;
    }
    setMeanOfPaymment(value) {
        this.meanOfPaymment = value;
    }
    getSubscribe() {
        return this.subscribe;
    }
    setSubscribe(value) {
        this.subscribe = value;
    }
    getSubscribeCode() {
        return this.subscribeCode;
    }
    setSubscribeCode(value) {
        this.subscribeCode = value;
    }
};
__decorate([
    typeorm_1.ObjectIdColumn(),
    __metadata("design:type", String)
], PaySubscription.prototype, "objectId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], PaySubscription.prototype, "codeOfSubscription", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], PaySubscription.prototype, "balanceOfAbonnement", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], PaySubscription.prototype, "dateOfSubscribe", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], PaySubscription.prototype, "dateOfPayment", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], PaySubscription.prototype, "amountToPay", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], PaySubscription.prototype, "meanOfPaymment", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", mongodb_1.ObjectID)
], PaySubscription.prototype, "subscribeCode", void 0);
__decorate([
    typeorm_1.ManyToOne(type => subscribeModel_model_1.SubscribeModel, subscribeModel => subscribeModel.paySubscription),
    __metadata("design:type", subscribeModel_model_1.SubscribeModel)
], PaySubscription.prototype, "subscribe", void 0);
PaySubscription = __decorate([
    typeorm_1.Entity()
], PaySubscription);
exports.PaySubscription = PaySubscription;
//# sourceMappingURL=paySubscription.model.js.map