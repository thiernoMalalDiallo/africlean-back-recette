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
const mongodb_1 = require("mongodb");
const paySubscription_model_1 = require("./paySubscription.model");
const subscribeTermination_model_1 = require("./subscribeTermination.model");
const commercial_model_1 = require("../users/commercial.model");
const manager_model_1 = require("../users/manager.model");
const administrator_model_1 = require("../users/administrator.model");
const client_model_1 = require("../users/client.model");
/**
 * Le modèle de données abonnement
 */
let SubscribeModel = class SubscribeModel {
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
    getTypeOfSubscription() {
        return this.typeOfSubscription;
    }
    setTypeOfSubscription(value) {
        this.typeOfSubscription = value;
    }
    getStateOfSubscription() {
        return this.stateOfSubscription;
    }
    setStateOfSubscription(value) {
        this.stateOfSubscription = value;
    }
    getBalanceOfSubscription() {
        return this.balanceOfSubscription;
    }
    setBalanceOfSubscription(value) {
        this.balanceOfSubscription = value;
    }
    getDateOfSbscription() {
        return this.dateOfSbscription;
    }
    setDateOfSbscription(value) {
        this.dateOfSbscription = value;
    }
    getClientCode() {
        return this.clientCode;
    }
    setClientCode(value) {
        this.clientCode = value;
    }
    getIntervenantCode() {
        return this.intervenantCode;
    }
    setIntervenantCode(value) {
        this.intervenantCode = value;
    }
    getAdminCode() {
        return this.adminCode;
    }
    setAdminCode(value) {
        this.adminCode = value;
    }
    getManagerCode() {
        return this.managerCode;
    }
    setManagerCode(value) {
        this.managerCode = value;
    }
    getHomeCode() {
        return this.homeCode;
    }
    setHomeCode(value) {
        this.homeCode = value;
    }
    getCommercialCode() {
        return this.commercialCode;
    }
    setCommercialCode(value) {
        this.commercialCode = value;
    }
    getTrace() {
        return this.trace;
    }
    setTrace(value) {
        this.trace = value;
    }
    getPaySubscription() {
        return this.paySubscription;
    }
    setPaySubscription(value) {
        this.paySubscription = value;
    }
    getSubscribeTermination() {
        return this.subscribeTermination;
    }
    setSubscribeTermination(value) {
        this.subscribeTermination = value;
    }
    getCommercial() {
        return this.commercial;
    }
    setCommercial(value) {
        this.commercial = value;
    }
    getManager() {
        return this.manager;
    }
    setManager(value) {
        this.manager = value;
    }
    getAdmin() {
        return this.admin;
    }
    setAdmin(value) {
        this.admin = value;
    }
    getClient() {
        return this.client;
    }
    setClient(value) {
        this.client = value;
    }
};
__decorate([
    typeorm_1.ObjectIdColumn(),
    __metadata("design:type", String)
], SubscribeModel.prototype, "objectId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], SubscribeModel.prototype, "codeOfSubscription", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], SubscribeModel.prototype, "typeOfSubscription", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], SubscribeModel.prototype, "balanceOfSubscription", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], SubscribeModel.prototype, "dateOfSbscription", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], SubscribeModel.prototype, "stateOfSubscription", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", mongodb_1.ObjectID)
], SubscribeModel.prototype, "clientCode", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", mongodb_1.ObjectID)
], SubscribeModel.prototype, "intervenantCode", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", mongodb_1.ObjectID)
], SubscribeModel.prototype, "commercialCode", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", mongodb_1.ObjectID)
], SubscribeModel.prototype, "managerCode", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", mongodb_1.ObjectID)
], SubscribeModel.prototype, "adminCode", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", mongodb_1.ObjectID)
], SubscribeModel.prototype, "homeCode", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Array)
], SubscribeModel.prototype, "trace", void 0);
__decorate([
    typeorm_1.OneToMany(type => paySubscription_model_1.PaySubscription, paySubscription => paySubscription.subscribe, {
        cascade: true
    }),
    __metadata("design:type", Array)
], SubscribeModel.prototype, "paySubscription", void 0);
__decorate([
    typeorm_1.OneToMany(type => subscribeTermination_model_1.SubscribeTermination, subscribeTermination => subscribeTermination.subscribe, {
        cascade: true
    }),
    __metadata("design:type", Array)
], SubscribeModel.prototype, "subscribeTermination", void 0);
__decorate([
    typeorm_1.ManyToOne(type => commercial_model_1.Commercial, commercial => commercial.subscribeModel),
    __metadata("design:type", commercial_model_1.Commercial)
], SubscribeModel.prototype, "commercial", void 0);
__decorate([
    typeorm_1.ManyToOne(type => manager_model_1.Manager, managerUser => managerUser.subscribeModel),
    __metadata("design:type", manager_model_1.Manager)
], SubscribeModel.prototype, "manager", void 0);
__decorate([
    typeorm_1.ManyToOne(type => administrator_model_1.Administrator, administrateur => administrateur.subscribeModel),
    __metadata("design:type", administrator_model_1.Administrator)
], SubscribeModel.prototype, "admin", void 0);
__decorate([
    typeorm_1.ManyToOne(type => client_model_1.Client, Client => Client.subscribeModel),
    __metadata("design:type", client_model_1.Client)
], SubscribeModel.prototype, "client", void 0);
SubscribeModel = __decorate([
    typeorm_1.Entity()
], SubscribeModel);
exports.SubscribeModel = SubscribeModel;
//# sourceMappingURL=subscribeModel.model.js.map