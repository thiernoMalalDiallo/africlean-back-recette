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
let SubscribeTermination = class SubscribeTermination {
    //************************setter and getters*******************/
    getObjectId() {
        return this.objectId;
    }
    setObjectId(value) {
        this.objectId = value;
    }
    getDateOfSubscribe() {
        return this.dateOfSubscribe;
    }
    setDateOfSubscribe(value) {
        this.dateOfSubscribe = value;
    }
    getDateOfTermination() {
        return this.dateOfTermination;
    }
    setDateOfTermination(value) {
        this.dateOfTermination = value;
    }
    getStateOfTermination() {
        return this.stateOfTermination;
    }
    setStateOfTermination(value) {
        this.stateOfTermination = value;
    }
    getRaisonOfTermination() {
        return this.raisonOfTermination;
    }
    setRaisonOfTermination(value) {
        this.raisonOfTermination = value;
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
    getTrace() {
        return this.trace;
    }
    setTrace(value) {
        this.trace = value;
    }
};
__decorate([
    typeorm_1.ObjectIdColumn(),
    __metadata("design:type", String)
], SubscribeTermination.prototype, "objectId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], SubscribeTermination.prototype, "dateOfSubscribe", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], SubscribeTermination.prototype, "dateOfTermination", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], SubscribeTermination.prototype, "raisonOfTermination", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], SubscribeTermination.prototype, "stateOfTermination", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", mongodb_1.ObjectID)
], SubscribeTermination.prototype, "subscribeCode", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Array)
], SubscribeTermination.prototype, "trace", void 0);
__decorate([
    typeorm_1.ManyToOne(type => subscribeModel_model_1.SubscribeModel, subscribeModel => subscribeModel.subscribeTermination),
    __metadata("design:type", subscribeModel_model_1.SubscribeModel)
], SubscribeTermination.prototype, "subscribe", void 0);
SubscribeTermination = __decorate([
    typeorm_1.Entity()
], SubscribeTermination);
exports.SubscribeTermination = SubscribeTermination;
//# sourceMappingURL=subscribeTermination.model.js.map