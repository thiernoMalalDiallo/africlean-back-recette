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
const employe_model_1 = require("./employe.model");
const intervention_model_1 = require("../intervention/intervention.model");
const planningIntervention_model_1 = require("../intervention/planningIntervention.model");
/**
 * Le modèle de données Intervenant
 */
let Intervenant = class Intervenant extends employe_model_1.Employe {
    //******************Seters et getters***************************/
    getObjectId() {
        return this.objectId;
    }
    setObjectId(value) {
        this.objectId = value;
    }
    getDateOfAbonnement() {
        return this.dateOfAbonnement;
    }
    setDateOfAbonnement(value) {
        this.dateOfAbonnement = value;
    }
    getIntervennantCode() {
        return this.intervenantCode;
    }
    setIntervennantCode(value) {
        this.intervenantCode = value;
    }
    getInterventions() {
        return this.interventions;
    }
    setInterventions(value) {
        this.interventions = value;
    }
    getPlanning() {
        return this.planning;
    }
    setPlanning(value) {
        this.planning = value;
    }
};
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Intervenant.prototype, "dateOfAbonnement", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Intervenant.prototype, "intervenantCode", void 0);
__decorate([
    typeorm_1.OneToMany(type => intervention_model_1.Intervention, intervention => intervention.intervenant, {
        cascade: true
    }),
    __metadata("design:type", Array)
], Intervenant.prototype, "interventions", void 0);
__decorate([
    typeorm_1.OneToMany(type => planningIntervention_model_1.PlanningIntervention, planning => planning.intervennant, {
        cascade: true
    }),
    __metadata("design:type", Array)
], Intervenant.prototype, "planning", void 0);
Intervenant = __decorate([
    typeorm_1.Entity()
], Intervenant);
exports.Intervenant = Intervenant;
//# sourceMappingURL=intervenant.model.js.map