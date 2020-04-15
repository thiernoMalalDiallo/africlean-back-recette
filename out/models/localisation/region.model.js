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
const country_model_1 = require("./country.model");
const town_model_1 = require("./town.model");
/**
 * Model de données Region
 */
let Region = class Region {
    getCodeRegion() {
        return this.codeRegion;
    }
    setCodeRegion(value) {
        this.codeRegion = value;
    }
    getRegionName() {
        return this.regionName;
    }
    setRegionName(value) {
        this.regionName = value;
    }
    getZipCode() {
        return this.zipCode;
    }
    setZipCode(value) {
        this.zipCode = value;
    }
    getCountry() {
        return this.country_old;
    }
    setCountry(value) {
        this.country_old = value;
    }
    getCountryCode() {
        return this.countryCode;
    }
    setCountryCode(value) {
        this.countryCode = value;
    }
    getTowns() {
        return this.towns;
    }
    setTowns(value) {
        this.towns = value;
    }
};
__decorate([
    typeorm_1.ObjectIdColumn(),
    __metadata("design:type", String)
], Region.prototype, "codeRegion", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Region.prototype, "regionName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Region.prototype, "zipCode", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Region.prototype, "countryCode", void 0);
__decorate([
    typeorm_1.ManyToOne(type => country_model_1.Country, country => country.regions, { onDelete: 'CASCADE' }),
    __metadata("design:type", country_model_1.Country)
], Region.prototype, "country_old", void 0);
__decorate([
    typeorm_1.OneToMany(type => town_model_1.Town, town => town.region, {
        cascade: true
    }),
    __metadata("design:type", Array)
], Region.prototype, "towns", void 0);
Region = __decorate([
    typeorm_1.Entity()
], Region);
exports.Region = Region;
//# sourceMappingURL=region.model.js.map