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
const intervenant_model_1 = require("../users/intervenant.model");
const mongodb_1 = require("mongodb");
/**
 * Model de données d'Intervention
 */
let Intervention = class Intervention {
    //************************setter and getters*******************/
    getObjectId() {
        return this.objectId;
    }
    setObjectId(value) {
        this.objectId = value;
    }
    getDateOfIntervention() {
        return this.dateOfIntervention;
    }
    setDateOfIntervention(value) {
        this.dateOfIntervention = value;
    }
    getClient() {
        return this.client;
    }
    setClient(value) {
        this.client = value;
    }
    getIntervenant() {
        return this.intervenant;
    }
    setIntervenant(value) {
        this.intervenant = value;
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
    getHomeCode() {
        return this.homeCode;
    }
    setHomeCode(value) {
        this.homeCode = value;
    }
};
__decorate([
    typeorm_1.ObjectIdColumn(),
    __metadata("design:type", String)
], Intervention.prototype, "objectId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Intervention.prototype, "dateOfIntervention", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", mongodb_1.ObjectID)
], Intervention.prototype, "clientCode", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", mongodb_1.ObjectID)
], Intervention.prototype, "homeCode", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", mongodb_1.ObjectID)
], Intervention.prototype, "intervenantCode", void 0);
__decorate([
    typeorm_1.ManyToOne(type => client_model_1.Client, client => client.interventions),
    __metadata("design:type", client_model_1.Client)
], Intervention.prototype, "client", void 0);
__decorate([
    typeorm_1.ManyToOne(type => intervenant_model_1.Intervenant, intervenant => intervenant.interventions),
    __metadata("design:type", intervenant_model_1.Intervenant)
], Intervention.prototype, "intervenant", void 0);
Intervention = __decorate([
    typeorm_1.Entity()
], Intervention);
exports.Intervention = Intervention;
//# sourceMappingURL=intervention.model.js.map