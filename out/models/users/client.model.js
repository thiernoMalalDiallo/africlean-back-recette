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
const user_model_1 = require("./user.model");
const typeorm_1 = require("typeorm");
const intervention_model_1 = require("../intervention/intervention.model");
const planningIntervention_model_1 = require("../intervention/planningIntervention.model");
const subscribeModel_model_1 = require("../abonnement/subscribeModel.model");
const incident_model_1 = require("../intervention/incident.model");
/**
 * Le modèle de données client
 */
let Client = class Client extends user_model_1.User {
    //********************* Setters and getters *************************////////////////////
    getIsSubscribe() {
        return this.isSubscribe;
    }
    setIsSubscribe(value) {
        this.isSubscribe = value;
    }
};
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Client.prototype, "isSubscribe", void 0);
__decorate([
    typeorm_1.OneToMany(type => intervention_model_1.Intervention, intervention => intervention.client, {
        cascade: true
    }),
    __metadata("design:type", Array)
], Client.prototype, "interventions", void 0);
__decorate([
    typeorm_1.OneToMany(type => planningIntervention_model_1.PlanningIntervention, planning => planning.client, {
        cascade: true
    }),
    __metadata("design:type", Array)
], Client.prototype, "planning", void 0);
__decorate([
    typeorm_1.OneToMany(type => subscribeModel_model_1.SubscribeModel, subscribeModel => subscribeModel.client, {
        cascade: true
    }),
    __metadata("design:type", Array)
], Client.prototype, "subscribeModel", void 0);
__decorate([
    typeorm_1.OneToMany(type => incident_model_1.Incident, incident => incident.client, {
        cascade: true
    }),
    __metadata("design:type", Array)
], Client.prototype, "incidents", void 0);
Client = __decorate([
    typeorm_1.Entity()
], Client);
exports.Client = Client;
//# sourceMappingURL=client.model.js.map