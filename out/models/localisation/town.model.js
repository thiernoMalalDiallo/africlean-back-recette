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
const region_model_1 = require("./region.model");
const district_model_1 = require("./district.model");
/**
 * Le modèle de données Commune
 */
let Town = class Town {
    getObjectId() {
        return this.objectId;
    }
    setObjectId(value) {
        this.objectId = value;
    }
    getNameOfTown() {
        return this.nameOfTown;
    }
    setNameOfTown(value) {
        this.nameOfTown = value;
    }
    getZipCode() {
        return this.zipCode;
    }
    setZipCode(value) {
        this.zipCode = value;
    }
    getRegion() {
        return this.region;
    }
    setRegion(value) {
        this.region = value;
    }
    getDistricts() {
        return this.districts;
    }
    setDistricts(value) {
        this.districts = value;
    }
    getRegionCode() {
        return this.regionCode;
    }
    setRegionCode(value) {
        this.regionCode = value;
    }
};
__decorate([
    typeorm_1.ObjectIdColumn(),
    __metadata("design:type", String)
], Town.prototype, "objectId", void 0);
__decorate([
    typeorm_1.Column("text"),
    __metadata("design:type", String)
], Town.prototype, "nameOfTown", void 0);
__decorate([
    typeorm_1.Column("text"),
    __metadata("design:type", String)
], Town.prototype, "zipCode", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Town.prototype, "regionCode", void 0);
__decorate([
    typeorm_1.ManyToOne(type => region_model_1.Region, regions => regions.towns),
    __metadata("design:type", region_model_1.Region)
], Town.prototype, "region", void 0);
__decorate([
    typeorm_1.OneToMany(type => district_model_1.District, disctrict => disctrict.town, {
        cascade: true
    }),
    __metadata("design:type", Array)
], Town.prototype, "districts", void 0);
Town = __decorate([
    typeorm_1.Entity()
], Town);
exports.Town = Town;
//# sourceMappingURL=town.model.js.map