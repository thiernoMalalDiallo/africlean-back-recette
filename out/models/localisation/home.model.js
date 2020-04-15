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
const sector_model_1 = require("./sector.model");
const homeUsers_model_1 = require("./homeUsers.model");
/**
 * Model de données Foyer
 */
let Home = class Home {
    //***************************setter and getters**********************************/
    getObjectId() {
        return this.objectId;
    }
    setObjectId(value) {
        this.objectId = value;
    }
    getNameOfHome() {
        return this.nameOfHome;
    }
    setNameOfHome(value) {
        this.nameOfHome = value;
    }
    getGeolocallisationHome() {
        return this.geolocallisationHome;
    }
    setGeolocallisationHome(value) {
        this.geolocallisationHome = value;
    }
    getSector() {
        return this.sector;
    }
    setSector(value) {
        this.sector = value;
    }
    getHomeUsers() {
        return this.homeUsers;
    }
    setHomeUsers(value) {
        this.homeUsers = value;
    }
    getSectorCode() {
        return this.sectorCode;
    }
    setSectorCode(value) {
        this.sectorCode = value;
    }
};
__decorate([
    typeorm_1.ObjectIdColumn(),
    __metadata("design:type", String)
], Home.prototype, "objectId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Home.prototype, "nameOfHome", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Home.prototype, "geolocallisationHome", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Home.prototype, "sectorCode", void 0);
__decorate([
    typeorm_1.ManyToOne(type => sector_model_1.Sector, sector => sector.home),
    __metadata("design:type", sector_model_1.Sector)
], Home.prototype, "sector", void 0);
__decorate([
    typeorm_1.OneToMany(type => homeUsers_model_1.HomeUsers, homeUsers => homeUsers.home, {
        cascade: true
    }),
    __metadata("design:type", Array)
], Home.prototype, "homeUsers", void 0);
Home = __decorate([
    typeorm_1.Entity()
], Home);
exports.Home = Home;
//# sourceMappingURL=home.model.js.map