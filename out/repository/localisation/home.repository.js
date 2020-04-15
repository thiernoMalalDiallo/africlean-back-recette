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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_dependency_injection_1 = require("express-dependency-injection");
const generic_repository_1 = require("../generic.repository");
const home_model_1 = require("../../models/localisation/home.model");
const homeUsers_model_1 = require("../../models/localisation/homeUsers.model");
const homeUsers_repository_1 = require("./homeUsers.repository");
/**
 * Repository du model foyer
 */
let HomeRepository = class HomeRepository extends express_dependency_injection_1.Repository(generic_repository_1.GenericRepository) {
    /**
     * @constructor
     */
    constructor() {
        super();
        this.repository = super.getConnection().getRepository(home_model_1.Home);
    }
    /**
     * Ouverture d'une connexion à la base de donnée
     */
    connectDatabase() {
        const _super = Object.create(null, {
            connect: { get: () => super.connect }
        });
        return __awaiter(this, void 0, void 0, function* () {
            this.connection = yield _super.connect.call(this);
            this.repository = this.connection.getRepository(home_model_1.Home);
            //  this.repositorySector = this.connection.getRepository(Sector);
            // this.repositoryUserHome = this.connection.getRepository(HomeUsers);
        });
    }
    /**
     * Fermeture de service des connexion à la base de données
     */
    closeDatabase() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.close();
        });
    }
    /**
     * Enregistrement d'un foyer
     * @param home
     */
    save(home) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.save(home);
        });
    }
    /**
     * Retourn un foyer à partir de son ID
     * @param id
     */
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.findOne(id);
        });
    }
    /**
     * Retourn la liste de tous les foyers
     */
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.find();
        });
    }
    /**
     * Modification d'un foyer
     * @param id
     * @param home
     */
    update(id, home) {
        return __awaiter(this, void 0, void 0, function* () {
            let homeUpdated = yield this.repository.findOne(id);
            homeUpdated.setNameOfHome(home.getNameOfHome());
            homeUpdated.setGeolocallisationHome(home.getGeolocallisationHome());
            homeUpdated.setSector(home.getSector());
            homeUpdated.setHomeUsers(home.getHomeUsers());
            return yield this.repository.save(homeUpdated);
        });
    }
    /**
     * Suppression d'un foyer
     * @param id
     */
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let homeDeleted = yield this.repository.findOne(id);
            return yield this.repository.remove(homeDeleted);
        });
    }
    findHomeByName(nameOfHome) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.find({ where: { nameOfHome: nameOfHome } });
        });
    }
    updateAdressHome(nameOfHome, sector) {
        let home = this.findHomeByName(nameOfHome);
        let homeUser;
        if (home == null) {
            let newHome = new home_model_1.Home();
            newHome.setNameOfHome(nameOfHome);
            newHome.sector = sector;
            let homesaved = this.repository.save(newHome);
            homeUser = new homeUsers_model_1.HomeUsers();
        }
    }
    /**
     * Retourne tous les userHome
     * @param homeCode Id de la maison
     */
    getUsersHome(homeCode) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repositoryHomeUser.getByHome(homeCode);
        });
    }
    /**
     * Retourne tous les maisons d'un secteur
     * @param idSector
     */
    getHomesBySecteur(idSector) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.find({ sectorCode: idSector });
        });
    }
};
__decorate([
    express_dependency_injection_1.Inject(homeUsers_repository_1.HomeUsersRepository),
    __metadata("design:type", homeUsers_repository_1.HomeUsersRepository)
], HomeRepository.prototype, "repositoryHomeUser", void 0);
HomeRepository = __decorate([
    express_dependency_injection_1.ExRepository(),
    __metadata("design:paramtypes", [])
], HomeRepository);
exports.HomeRepository = HomeRepository;
//# sourceMappingURL=home.repository.js.map