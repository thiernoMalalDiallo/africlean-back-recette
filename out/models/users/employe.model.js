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
const user_model_1 = require("./user.model");
/**
 * Le model de donnée de l'employe
 */
let Employe = class Employe extends user_model_1.User {
    ////***********setters and getters ******************************////////////////////
    getObjectId() {
        return this.objectId;
    }
    setObjectId(value) {
        this.objectId = value;
    }
    getDateStartJob() {
        return this.dateStartJob;
    }
    setDateStartJob(value) {
        this.dateStartJob = value;
    }
    getPositionName() {
        return this.positionName;
    }
    setPositionName(value) {
        this.positionName = value;
    }
    getLastDiplome() {
        return this.lastDiplome;
    }
    setLastDiplome(value) {
        this.lastDiplome = value;
    }
    getDateObtentionLastDiplome() {
        return this.dateObtentionLastDiplome;
    }
    setDateObtentionLastDiplome(value) {
        this.dateObtentionLastDiplome = value;
    }
    getEtablissmentOfLastDiplome() {
        return this.etablissmentOfLastDiplome;
    }
    setEtablissmentOfLastDiplome(value) {
        this.etablissmentOfLastDiplome = value;
    }
    getAnotherDiplome() {
        return this.anotherDiplome;
    }
    setAnotherDiplome(value) {
        this.anotherDiplome = value;
    }
    getDateObtentionAnotherDiplome() {
        return this.dateObtentionAnotherDiplome;
    }
    setDateObtentionAnotherDiplome(value) {
        this.dateObtentionAnotherDiplome = value;
    }
    getEtablissmentOfAnotherDiplome() {
        return this.etablissmentOfAnotherDiplome;
    }
    setEtablissmentOfAnotherDiplome(value) {
        this.etablissmentOfAnotherDiplome = value;
    }
    getNbYearsExperiencies() {
        return this.nbYearsExperiencies;
    }
    setNbYearsExperiencies(value) {
        this.nbYearsExperiencies = value;
    }
    getLastJobName() {
        return this.lastJobName;
    }
    setLastJobName(value) {
        this.lastJobName = value;
    }
    getLastJobEntreprise() {
        return this.lastJobEntreprise;
    }
    setLastJobEntreprise(value) {
        this.lastJobEntreprise = value;
    }
};
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Employe.prototype, "dateStartJob", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Employe.prototype, "positionName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Employe.prototype, "lastDiplome", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Employe.prototype, "dateObtentionLastDiplome", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Employe.prototype, "etablissmentOfLastDiplome", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Employe.prototype, "anotherDiplome", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Employe.prototype, "dateObtentionAnotherDiplome", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Employe.prototype, "etablissmentOfAnotherDiplome", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Employe.prototype, "nbYearsExperiencies", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Employe.prototype, "lastJobName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Employe.prototype, "lastJobEntreprise", void 0);
Employe = __decorate([
    typeorm_1.Entity()
], Employe);
exports.Employe = Employe;
//# sourceMappingURL=employe.model.js.map