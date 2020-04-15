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
const homeUsers_model_1 = require("../../models/localisation/homeUsers.model");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("typeorm");
/**
 * Repository du model foyer-utilisateur
 */
let HomeUsersRepository = class HomeUsersRepository extends express_dependency_injection_1.Repository(generic_repository_1.GenericRepository) {
    constructor() {
        super();
        this.repository = super.getConnection().getRepository(homeUsers_model_1.HomeUsers);
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
            //   this.repository = this.connection.getRepository(HomeUsers);
            //    this.repositoryHome = this.connection.getRepository(Home);
            //   this.repositoryUser = this.connection.getRepository(Client);
        });
    }
    /**
     * Fermeture de service des connexion à la base de données
     */
    closeDatabase() {
        return __awaiter(this, void 0, void 0, function* () {
            this.connection.close();
        });
    }
    /**
     * Enregistrement d'une laison foyer -utilisateurs
     * @param homeUsers
     */
    save(homeUsers) {
        return this.repository.save(homeUsers);
    }
    /**
     * Retourn un foyerUser à partir de son ID
     * @param id
     */
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.findOne(id);
        });
    }
    /**
     * Retourn la liste de tous les foyerUser
     */
    getAll() {
        return this.repository.find();
    }
    /**
     * Modification d'un foyer-user
     * @param id
     * @param homeUsers
     */
    update(id, homeUsers) {
        return __awaiter(this, void 0, void 0, function* () {
            let homeUserUpdated = yield this.repository.findOne(id);
            homeUserUpdated.setObjectId(homeUsers.getObjectId());
            homeUserUpdated.setHome(homeUsers.getHome());
            homeUserUpdated.setUser(homeUsers.getUser());
            return this.repository.save(homeUserUpdated);
        });
    }
    /**
     * Suppression d'un foyer user
     * @param id
     */
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let homeUserDeleted = yield this.repository.findOne(id);
            return this.repository.remove(homeUserDeleted);
        });
    }
    /**
     * Retourn un userHome à partir  du code l'utilisateur
     * @param userCode
     */
    getByUserCode(userCode) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.find({
                userCode: userCode
            });
        });
    }
    /**
     *Retourne un foyer à partir de son code
     * @param homeCode
     */
    getByHome(homeCode) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.find({
                homeCode: homeCode
            });
        });
    }
    /**
     *Suppression de tous les homeUser qui ont comme home = homeASupprimer
     * @param userCode
     * @param homeCode
     */
    delateUserAdress(userCode, homeCode) {
        return __awaiter(this, void 0, void 0, function* () {
            let homeUser = this.findDeletedHomeUser(userCode, homeCode);
            console.log(homeUser);
            return yield this.repository.remove(homeUser[0]);
        });
    }
    /**
     * Recuperation de tous les homesUsers à ne pas supprimer
     * @param userCode
     * @param homeCode
     */
    findNoDeletedHomeUser(userCode, homeCode) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.find({
                userCode: userCode,
                homeCode: typeorm_2.Not(typeorm_1.Equal(homeCode))
            });
        });
    }
    /**
     * Recuperation de tous les homesUsers à  supprimer
     * @param userCode
     * @param homeCode
     */
    findDeletedHomeUser(userCode, homeCode) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.find({
                userCode: typeorm_1.Equal(userCode),
                homeCode: typeorm_1.Equal(homeCode)
            });
        });
    }
};
HomeUsersRepository = __decorate([
    express_dependency_injection_1.ExRepository(),
    __metadata("design:paramtypes", [])
], HomeUsersRepository);
exports.HomeUsersRepository = HomeUsersRepository;
//# sourceMappingURL=homeUsers.repository.js.map