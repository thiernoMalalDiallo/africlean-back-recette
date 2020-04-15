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
const subscribeModel_model_1 = require("../abonnement/subscribeModel.model");
const planningIntervention_model_1 = require("../intervention/planningIntervention.model");
/**
 * Le modèle de données administrateur
 */
let Administrator = class Administrator extends employe_model_1.Employe {
    //******************Seters et getters***************************/
    getObjectId() {
        return this.objectId;
    }
    setObjectId(value) {
        this.objectId = value;
    }
    getAdminLevel() {
        return this.adminLevel;
    }
    setAdminLevel(value) {
        this.adminLevel = value;
    }
    getSubscribeModel() {
        return this.subscribeModel;
    }
    setSubscribeModel(value) {
        this.subscribeModel = value;
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
    __metadata("design:type", Number)
], Administrator.prototype, "adminLevel", void 0);
__decorate([
    typeorm_1.OneToMany(type => subscribeModel_model_1.SubscribeModel, subscribeModel => subscribeModel.admin, {
        cascade: true
    }),
    __metadata("design:type", Array)
], Administrator.prototype, "subscribeModel", void 0);
__decorate([
    typeorm_1.OneToMany(type => planningIntervention_model_1.PlanningIntervention, planning => planning.admin, {
        cascade: true
    }),
    __metadata("design:type", Array)
], Administrator.prototype, "planning", void 0);
Administrator = __decorate([
    typeorm_1.Entity()
], Administrator);
exports.Administrator = Administrator;
//# sourceMappingURL=administrator.model.js.map