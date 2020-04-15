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
const homeUsers_model_1 = require("../localisation/homeUsers.model");
/**
 * Le modèle de données User
 */
let User = class User {
    //******************Seters et getters***************************/
    getObjectId() {
        return this.objectId;
    }
    setObjectId(value) {
        this.objectId = value;
    }
    getFirstName() {
        return this.firstName;
    }
    setFirstName(value) {
        this.firstName = value;
    }
    getLastName() {
        return this.lastName;
    }
    setLastName(value) {
        this.lastName = value;
    }
    getDateOfBirth() {
        return this.dateOfBirth;
    }
    setDateOfBirth(value) {
        this.dateOfBirth = value;
    }
    getCityOfBirth() {
        return this.cityOfBirth;
    }
    setCityOfBirth(value) {
        this.cityOfBirth = value;
    }
    getCountryOfBirth() {
        return this.countryOfBirth;
    }
    setCountryOfBirth(value) {
        this.countryOfBirth = value;
    }
    getFatherFirstName() {
        return this.fatherFirstName;
    }
    setFatherFirstName(value) {
        this.fatherFirstName = value;
    }
    getFatherLastName() {
        return this.fatherLastName;
    }
    setFatherLastName(value) {
        this.fatherLastName = value;
    }
    getMotherFirstName() {
        return this.motherFirstName;
    }
    setMotherFirstName(value) {
        this.motherFirstName = value;
    }
    getMotherLarstName() {
        return this.motherLarstName;
    }
    setMotherLarstName(value) {
        this.motherLarstName = value;
    }
    getPhoneNumber() {
        return this.phoneNumber;
    }
    setPhoneNumber(value) {
        this.phoneNumber = value;
    }
    getPhoneFixedNumber() {
        return this.phoneFixedNumber;
    }
    setPhoneFixedNumber(value) {
        this.phoneFixedNumber = value;
    }
    getAdress() {
        return this.adress;
    }
    setAdress(value) {
        this.adress = value;
    }
    getZipCode() {
        return this.zipCode;
    }
    setZipCode(value) {
        this.zipCode = value;
    }
    getCityOfAdress() {
        return this.cityOfAdress;
    }
    setCityOfAdress(value) {
        this.cityOfAdress = value;
    }
    getUserJob() {
        return this.userJob;
    }
    setUserJob(value) {
        this.userJob = value;
    }
    getPseudo() {
        return this.pseudo;
    }
    setPseudo(value) {
        this.pseudo = value;
    }
    getEmail() {
        return this.email;
    }
    setEmail(value) {
        this.email = value;
    }
    getPassword() {
        return this.password;
    }
    /**
     *
     * @param value
     */
    setPassword(value) {
        this.password = value;
    }
    getDateOfCreation() {
        return this.dateOfCreation;
    }
    setDateOfCreation(value) {
        this.dateOfCreation = value;
    }
    getDateOfUpdate() {
        return this.dateOfUpdate;
    }
    setDateOfUpdate(value) {
        this.dateOfUpdate = value;
    }
    getDateOfDeleted() {
        return this.dateOfDeleted;
    }
    setDateOfDeleted(value) {
        this.dateOfDeleted = value;
    }
    getGenderOfUser() {
        return this.genderOfUser;
    }
    setGenderOfUser(value) {
        this.genderOfUser = value;
    }
    getCivilitOfUsers() {
        return this.civilitOfUsers;
    }
    setCivilitOfUsers(value) {
        this.civilitOfUsers = value;
    }
    getBanqueCode() {
        return this.banqueCode;
    }
    setBanqueCode(value) {
        this.banqueCode = value;
    }
    getTypeOfUser() {
        return this.typeOfUser;
    }
    setTypeOfUser(value) {
        this.typeOfUser = value;
    }
    getHomeUser() {
        return this.homeUser;
    }
    setHomeUser(value) {
        this.homeUser = value;
    }
    getTrace() {
        return this.trace;
    }
    setTrace(value) {
        this.trace = value;
    }
    //*******************Autres methodes******************///
    static hashPassword(password) {
        let cryptoHas = require('crypto');
        // this.password = bcrypt.hashSync(this.password);
        const hash = cryptoHas.createHash('sha256').update(password).digest('base64');
        return hash;
    }
};
__decorate([
    typeorm_1.ObjectIdColumn(),
    __metadata("design:type", String)
], User.prototype, "objectId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], User.prototype, "dateOfBirth", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "cityOfBirth", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "countryOfBirth", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "fatherFirstName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "fatherLastName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "motherFirstName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "motherLarstName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "phoneNumber", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "phoneFixedNumber", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "adress", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "zipCode", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "cityOfAdress", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "userJob", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "pseudo", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], User.prototype, "dateOfCreation", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], User.prototype, "dateOfUpdate", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], User.prototype, "dateOfDeleted", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "genderOfUser", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "civilitOfUsers", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "banqueCode", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "typeOfUser", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Array)
], User.prototype, "trace", void 0);
__decorate([
    typeorm_1.OneToMany(type => homeUsers_model_1.HomeUsers, homeUsers => homeUsers.user, {
        cascade: true
    }),
    __metadata("design:type", Array)
], User.prototype, "homeUser", void 0);
User = __decorate([
    typeorm_1.Entity()
], User);
exports.User = User;
//# sourceMappingURL=user.model.js.map