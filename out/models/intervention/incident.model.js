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
const client_model_1 = require("../users/client.model");
const mongodb_1 = require("mongodb");
/**
 * Model de données d'Incident
 */
let Incident = class Incident {
    //************************setter and getters*******************/
    getObjectId() {
        return this.objectId;
    }
    setObjectId(value) {
        this.objectId = value;
    }
    getDateOfAlert() {
        return this.dateOfAlert;
    }
    setDateOfAlert(value) {
        this.dateOfAlert = value;
    }
    getTypeOfalert() {
        return this.typeOfalert;
    }
    setTypeOfalert(value) {
        this.typeOfalert = value;
    }
    getMessage() {
        return this.message;
    }
    setMessage(value) {
        this.message = value;
    }
    getClient() {
        return this.client;
    }
    setClient(value) {
        this.client = value;
    }
    getClientCode() {
        return this.clientCode;
    }
    setClientCode(value) {
        this.clientCode = value;
    }
    getHomeCode() {
        return this.homeCode;
    }
    setHomeCode(value) {
        this.homeCode = value;
    }
    setPhoneNumber(value) {
        this.phoneNumber = value;
    }
    getPhoneNumber() {
        return this.phoneNumber;
    }
    setIncidentDate(value) {
        this.incidentDate = value;
    }
    getIncidentDate() {
        return this.incidentDate;
    }
    getStateOfIncident() {
        return this.stateOfIncident;
    }
    setStateOfIncident(value) {
        this.stateOfIncident = value;
    }
};
__decorate([
    typeorm_1.ObjectIdColumn(),
    __metadata("design:type", String)
], Incident.prototype, "objectId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Incident.prototype, "dateOfAlert", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Incident.prototype, "typeOfalert", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Incident.prototype, "message", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Incident.prototype, "phoneNumber", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Incident.prototype, "incidentDate", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Incident.prototype, "stateOfIncident", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", mongodb_1.ObjectID)
], Incident.prototype, "clientCode", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", mongodb_1.ObjectID)
], Incident.prototype, "homeCode", void 0);
__decorate([
    typeorm_1.ManyToOne(type => client_model_1.Client, client => client.incidents),
    __metadata("design:type", client_model_1.Client)
], Incident.prototype, "client", void 0);
Incident = __decorate([
    typeorm_1.Entity()
], Incident);
exports.Incident = Incident;
//# sourceMappingURL=incident.model.js.map