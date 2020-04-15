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
/**
 * Le modèle de données Pays
 */
let Country = class Country {
    //************************ setter and getters *******************//
    getObjectId() {
        return this.objectId;
    }
    setObjectId(value) {
        this.objectId = value;
    }
    getCountryCode() {
        return this.countryCode;
    }
    setCountryCode(value) {
        this.countryCode = value;
    }
    getCountryName() {
        return this.countryName;
    }
    setCountryName(value) {
        this.countryName = value;
    }
    getRegions() {
        return this.regions;
    }
    setRegions(value) {
        this.regions = value;
    }
};
__decorate([
    typeorm_1.ObjectIdColumn(),
    __metadata("design:type", String)
], Country.prototype, "objectId", void 0);
__decorate([
    typeorm_1.Column("text"),
    __metadata("design:type", String)
], Country.prototype, "countryCode", void 0);
__decorate([
    typeorm_1.Column("text"),
    __metadata("design:type", String)
], Country.prototype, "countryName", void 0);
__decorate([
    typeorm_1.OneToMany(type => region_model_1.Region, region => region.country_old, { nullable: true, eager: true, onDelete: 'CASCADE', onUpdate: 'CASCADE',
        cascade: ["insert", "update", "remove"] }),
    __metadata("design:type", Array)
], Country.prototype, "regions", void 0);
Country = __decorate([
    typeorm_1.Entity()
], Country);
exports.Country = Country;
//# sourceMappingURL=country.model.js.map