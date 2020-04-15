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
const user_model_1 = require("../users/user.model");
const home_model_1 = require("./home.model");
/**
 * Model de données des liaisons Foyer et utilisateurs
 */
let HomeUsers = class HomeUsers {
    //***************************setter and getters**********************************/
    getObjectId() {
        return this.objectId;
    }
    setObjectId(value) {
        this.objectId = value;
    }
    getUser() {
        return this.user;
    }
    setUser(value) {
        this.user = value;
    }
    getHome() {
        return this.home;
    }
    setHome(value) {
        this.home = value;
    }
    getUserCode() {
        return this.userCode;
    }
    setUserCode(value) {
        this.userCode = value;
    }
    getHomeCode() {
        return this.homeCode;
    }
    setHomeCode(value) {
        this.homeCode = value;
    }
};
__decorate([
    typeorm_1.ObjectIdColumn(),
    __metadata("design:type", String)
], HomeUsers.prototype, "objectId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], HomeUsers.prototype, "userCode", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], HomeUsers.prototype, "homeCode", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_model_1.User, user => user.homeUser),
    __metadata("design:type", user_model_1.User)
], HomeUsers.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToOne(type => home_model_1.Home, home => home.homeUsers),
    __metadata("design:type", home_model_1.Home)
], HomeUsers.prototype, "home", void 0);
HomeUsers = __decorate([
    typeorm_1.Entity()
], HomeUsers);
exports.HomeUsers = HomeUsers;
//# sourceMappingURL=homeUsers.model.js.map