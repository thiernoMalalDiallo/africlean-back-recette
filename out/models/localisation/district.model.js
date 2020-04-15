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
const town_model_1 = require("./town.model");
const sector_model_1 = require("./sector.model");
/**
 * Le model de données Quartier
 */
let District = class District {
    //***************************setter and getters**********************************/
    getObjectId() {
        return this.objectId;
    }
    setObjectId(value) {
        this.objectId = value;
    }
    getNameOfDistrict() {
        return this.nameOfDistrict;
    }
    setNameOfDistrict(value) {
        this.nameOfDistrict = value;
    }
    getZipCode() {
        return this.zipCode;
    }
    setZipCode(value) {
        this.zipCode = value;
    }
    getTown() {
        return this.town;
    }
    setTown(value) {
        this.town = value;
    }
    getSector() {
        return this.sector;
    }
    setSector(value) {
        this.sector = value;
    }
    getTownCode() {
        return this.townCode;
    }
    setTownCode(value) {
        this.townCode = value;
    }
};
__decorate([
    typeorm_1.ObjectIdColumn(),
    __metadata("design:type", String)
], District.prototype, "objectId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], District.prototype, "nameOfDistrict", void 0);
__decorate([
    typeorm_1.Column("text"),
    __metadata("design:type", String)
], District.prototype, "zipCode", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], District.prototype, "townCode", void 0);
__decorate([
    typeorm_1.ManyToOne(type => town_model_1.Town, town => town.districts),
    __metadata("design:type", town_model_1.Town)
], District.prototype, "town", void 0);
__decorate([
    typeorm_1.OneToMany(type => sector_model_1.Sector, sector => sector.district),
    __metadata("design:type", Array)
], District.prototype, "sector", void 0);
District = __decorate([
    typeorm_1.Entity()
], District);
exports.District = District;
//# sourceMappingURL=district.model.js.map