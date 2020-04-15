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
const intervenant_model_1 = require("../users/intervenant.model");
const manager_model_1 = require("../users/manager.model");
const commercial_model_1 = require("../users/commercial.model");
const client_model_1 = require("../users/client.model");
const administrator_model_1 = require("../users/administrator.model");
const mongodb_1 = require("mongodb");
/**
 * Model de données Planning d'intervention
 */
let PlanningIntervention = class PlanningIntervention {
    //************************setter and getters*******************/
    getObjectId() {
        return this.objectId;
    }
    setObjectId(value) {
        this.objectId = value;
    }
    getCodeIntervention() {
        return this.codeIntervention;
    }
    setCodeIntervention(value) {
        this.codeIntervention = value;
    }
    getTitle() {
        return this.title;
    }
    setTitle(value) {
        this.title = value;
    }
    getStartDate() {
        return this.startDate;
    }
    setStartDate(value) {
        this.startDate = value;
    }
    getEndDate() {
        return this.endDate;
    }
    setEndDate(value) {
        this.endDate = value;
    }
    getClient() {
        return this.client;
    }
    setClient(value) {
        this.client = value;
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
    getIntervennant() {
        return this.intervennant;
    }
    setIntervennant(value) {
        this.intervennant = value;
    }
    getAdmin() {
        return this.admin;
    }
    setAdmin(value) {
        this.admin = value;
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
    getCommercialCode() {
        return this.commercialCode;
    }
    setCommercialCode(value) {
        this.commercialCode = value;
    }
};
__decorate([
    typeorm_1.ObjectIdColumn(),
    __metadata("design:type", String)
], PlanningIntervention.prototype, "objectId", void 0);
__decorate([
    typeorm_1.ObjectIdColumn(),
    __metadata("design:type", String)
], PlanningIntervention.prototype, "codeIntervention", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], PlanningIntervention.prototype, "title", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], PlanningIntervention.prototype, "startDate", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], PlanningIntervention.prototype, "endDate", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", mongodb_1.ObjectID)
], PlanningIntervention.prototype, "clientCode", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", mongodb_1.ObjectID)
], PlanningIntervention.prototype, "intervenantCode", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", mongodb_1.ObjectID)
], PlanningIntervention.prototype, "commercialCode", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", mongodb_1.ObjectID)
], PlanningIntervention.prototype, "managerCode", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", mongodb_1.ObjectID)
], PlanningIntervention.prototype, "adminCode", void 0);
__decorate([
    typeorm_1.ManyToOne(type => client_model_1.Client, client => client.planning),
    __metadata("design:type", client_model_1.Client)
], PlanningIntervention.prototype, "client", void 0);
__decorate([
    typeorm_1.ManyToOne(type => commercial_model_1.Commercial, commercial => commercial.planning),
    __metadata("design:type", commercial_model_1.Commercial)
], PlanningIntervention.prototype, "commercial", void 0);
__decorate([
    typeorm_1.ManyToOne(type => manager_model_1.Manager, managerUser => managerUser.planning),
    __metadata("design:type", manager_model_1.Manager)
], PlanningIntervention.prototype, "manager", void 0);
__decorate([
    typeorm_1.ManyToOne(type => intervenant_model_1.Intervenant, intervenant => intervenant.planning),
    __metadata("design:type", intervenant_model_1.Intervenant)
], PlanningIntervention.prototype, "intervennant", void 0);
__decorate([
    typeorm_1.ManyToOne(type => administrator_model_1.Administrator, administrateur => administrateur.planning),
    __metadata("design:type", administrator_model_1.Administrator)
], PlanningIntervention.prototype, "admin", void 0);
PlanningIntervention = __decorate([
    typeorm_1.Entity()
], PlanningIntervention);
exports.PlanningIntervention = PlanningIntervention;
//# sourceMappingURL=planningIntervention.model.js.map