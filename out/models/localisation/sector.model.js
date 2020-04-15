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
const district_model_1 = require("./district.model");
const home_model_1 = require("./home.model");
/**
 * Model de donnée Secteur
 */
let Sector = class Sector {
    //***************************setter and getters**********************************/
    getObjectId() {
        return this.objectId;
    }
    setObjectId(value) {
        this.objectId = value;
    }
    getNameOfSector() {
        return this.nameOfSector;
    }
    setNameOfSector(value) {
        this.nameOfSector = value;
    }
    getDistrict() {
        return this.district;
    }
    setDistrict(value) {
        this.district = value;
    }
    getHome() {
        return this.home;
    }
    setHome(value) {
        this.home = value;
    }
    getDistrictCode() {
        return this.districtCode;
    }
    setDistrictCode(value) {
        this.districtCode = value;
    }
};
__decorate([
    typeorm_1.ObjectIdColumn(),
    __metadata("design:type", String)
], Sector.prototype, "objectId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Sector.prototype, "nameOfSector", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Sector.prototype, "districtCode", void 0);
__decorate([
    typeorm_1.ManyToOne(type => district_model_1.District, district => district.sector),
    __metadata("design:type", district_model_1.District)
], Sector.prototype, "district", void 0);
__decorate([
    typeorm_1.OneToMany(type => home_model_1.Home, home => home.sector, {
        cascade: true
    }),
    __metadata("design:type", Array)
], Sector.prototype, "home", void 0);
Sector = __decorate([
    typeorm_1.Entity()
], Sector);
exports.Sector = Sector;
//# sourceMappingURL=sector.model.js.map