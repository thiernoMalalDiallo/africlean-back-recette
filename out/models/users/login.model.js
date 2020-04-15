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
const mongodb_1 = require("mongodb");
/**
 * Model de données PlanningIntervention
 */
let Login = class Login {
    //*************************Setter and getter************************************//
    setObjectId(value) {
        this.objectId = value;
    }
    getObjectId() {
        return this.objectId;
    }
    setLogin(login) {
        this.login = login;
    }
    setPassword(password) {
        this.password = password;
    }
    setRole(role) {
        this.role = role;
    }
    getLogin() {
        return this.login;
    }
    getPassword() {
        return this.password;
    }
    getRole() {
        return this.role;
    }
    setUser(codeUser) {
        this.codeUser = codeUser;
    }
    getcodeUser() {
        return this.codeUser;
    }
};
__decorate([
    typeorm_1.ObjectIdColumn(),
    __metadata("design:type", String)
], Login.prototype, "objectId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Login.prototype, "login", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Login.prototype, "password", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", mongodb_1.ObjectID)
], Login.prototype, "codeUser", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Login.prototype, "role", void 0);
Login = __decorate([
    typeorm_1.Entity()
], Login);
exports.Login = Login;
//# sourceMappingURL=login.model.js.map