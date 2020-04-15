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
const login_model_1 = require("../../models/users/login.model");
const user_model_1 = require("../../models/users/user.model");
const client_repository_1 = require("./client.repository");
const administrator_repository_1 = require("./administrator.repository");
const manager_repository_1 = require("./manager.repository");
const intervenant_repository_1 = require("./intervenant.repository");
const commercial_repository_1 = require("./commercial.repository");
const utils_service_1 = require("../../services/utils/utils.service");
/**
 * Le repository du model de données Login
 */
let LoginRepository = class LoginRepository extends express_dependency_injection_1.Repository(generic_repository_1.GenericRepository) {
    // private repositoryClient: typeorm.Repository<Client>;
    // private repositoryAdmin: typeorm.Repository<Administrator>;
    // private repositoryManager: typeorm.Repository<Manager>;
    // private repositoryIntervenant: typeorm.Repository<Intervenant>;
    // private repositoryCommercial: typeorm.Repository<Commercial>;
    /**
     * @constructor
     */
    constructor() {
        super();
        this.repositoryLogin = super.getConnection().getRepository(login_model_1.Login);
    }
    /**
     * Connexion à la base de données
     */
    connectDatabase() {
        const _super = Object.create(null, {
            connect: { get: () => super.connect }
        });
        return __awaiter(this, void 0, void 0, function* () {
            this.connection = yield _super.connect.call(this);
            this.repositoryLogin = this.connection.getRepository(login_model_1.Login);
        });
    }
    /**
     * Enregistrement d'un login
     * @param login
     */
    save(login) {
        return this.repositoryLogin.save(login);
    }
    /**
     * Retourn un login à partir de son id
     * @param id
     */
    findById(id) {
        return this.repositoryLogin.findOne(id);
    }
    /**
     * Retourn les (le) login d'un utilisateur
     * @param login
     */
    findByLogin(login) {
        return this.repositoryLogin.find({ where: { login: login } });
    }
    /**
     * Modification d'un login à partir de son id
     * @param id
     * @param login
     */
    update(id, login) {
        return __awaiter(this, void 0, void 0, function* () {
            let loginUpdated = yield this.repositoryLogin.findOne(id);
            return this.repositoryLogin.save(login);
        });
    }
    /**
     * Suppression d'un login
     * @param id
     */
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let loginUser = yield this.repositoryLogin.findOne(id);
            return this.repositoryLogin.remove(loginUser);
        });
    }
    /**
     * Retourn la liste de tous les login
     */
    getAll() {
        return this.repositoryLogin.find();
    }
    /**
     * Fermeture de la connexion au service de la db.
     */
    closeDatabase() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.close();
        });
    }
    /**
     * Retourn l'utilisateur en fonction de l'id de login
     * @param login
     * @param password
     */
    findUserByLogin(login, password) {
        return __awaiter(this, void 0, void 0, function* () {
            //let cryptoHas = require('crypto');
            const passhashed = user_model_1.User.hashPassword(password); //cryptoHas.createHash('sha256').update(password ).digest('base64');
            return yield this.repositoryLogin.find({
                login: login,
                password: passhashed
            });
        });
    }
    /**
     * Return l'utilisateur en fonction de l'id de son login
     * @param id son id
     */
    findUserByLoginId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let login = yield this.repositoryLogin.findOne(id);
            if (login) {
                let loginRole = login.getRole();
                let codeUser = this.utilsService.getObjectIdString(login.getcodeUser());
                switch (loginRole) {
                    case 'INTERVENANT':
                        return yield this.repositoryIntervenant.findById(codeUser);
                    case 'CLIENT':
                        return yield this.repositoryClient.findById(codeUser);
                    case 'COMMERCIAL':
                        return yield this.repositoryCommercial.findById(codeUser);
                    case 'MANAGER':
                        return yield this.repositoryManager.findById(codeUser);
                    default:
                        return yield this.repositoryAdmin.findById(codeUser);
                }
            }
        });
    }
    /**
     * Retourn l'utilisateur en fonction de l'id de login
     * @param login
     * @param password
     * @param role
     */
    findLoginForUserUpdated(login, password, role) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repositoryLogin.find({
                login: login,
                password: password,
                role: role
            });
        });
    }
    /**
     * Modification du mot de pass
     * @param idLogin
     */
    updatePassword(idLogin) {
    }
};
__decorate([
    express_dependency_injection_1.Inject(client_repository_1.ClientRepository),
    __metadata("design:type", client_repository_1.ClientRepository)
], LoginRepository.prototype, "repositoryClient", void 0);
__decorate([
    express_dependency_injection_1.Inject(administrator_repository_1.AdministratorRepository),
    __metadata("design:type", administrator_repository_1.AdministratorRepository)
], LoginRepository.prototype, "repositoryAdmin", void 0);
__decorate([
    express_dependency_injection_1.Inject(manager_repository_1.ManagerRepository),
    __metadata("design:type", manager_repository_1.ManagerRepository)
], LoginRepository.prototype, "repositoryManager", void 0);
__decorate([
    express_dependency_injection_1.Inject(intervenant_repository_1.IntervenantRepository),
    __metadata("design:type", intervenant_repository_1.IntervenantRepository)
], LoginRepository.prototype, "repositoryIntervenant", void 0);
__decorate([
    express_dependency_injection_1.Inject(commercial_repository_1.CommercialRepository),
    __metadata("design:type", commercial_repository_1.CommercialRepository)
], LoginRepository.prototype, "repositoryCommercial", void 0);
__decorate([
    express_dependency_injection_1.Inject(utils_service_1.UtilsService),
    __metadata("design:type", utils_service_1.UtilsService)
], LoginRepository.prototype, "utilsService", void 0);
LoginRepository = __decorate([
    express_dependency_injection_1.ExRepository(),
    __metadata("design:paramtypes", [])
], LoginRepository);
exports.LoginRepository = LoginRepository;
//# sourceMappingURL=login.repository.js.map