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
const generic_repository_1 = require("../generic.repository");
const express_dependency_injection_1 = require("express-dependency-injection");
const employe_model_1 = require("../../models/users/employe.model");
const rxjs_1 = require("rxjs");
const client_repository_1 = require("./client.repository");
const administrator_repository_1 = require("./administrator.repository");
const manager_repository_1 = require("./manager.repository");
const intervenant_repository_1 = require("./intervenant.repository");
const commercial_repository_1 = require("./commercial.repository");
/**
 * Repository du modèle employe
 */
let EmployeRepository = class EmployeRepository extends express_dependency_injection_1.Repository(generic_repository_1.GenericRepository) {
    /**
     * @constructor
     */
    constructor() {
        super();
        this.repository = super.getConnection().getRepository(employe_model_1.Employe);
    }
    /**
     * Ouverture d'une connexion au service de la base données
     */
    connectDatabase() {
        const _super = Object.create(null, {
            connect: { get: () => super.connect }
        });
        return __awaiter(this, void 0, void 0, function* () {
            this.connection = yield _super.connect.call(this);
            //  this.repositoryAdmin = this.connection.getRepository(Administrator);
            //  this.repositoryManager = this.connection.getRepository(Manager);
            //   this.repositoryCommercial = this.connection.getRepository(Commercial);
            // this.repositoryIntervenant = this.connection.getRepository(Intervenant);
        });
    }
    /**
     * Enregistrement d'un employe
     * @param employe
     */
    save(employe) {
        return this.repository.save(employe);
    }
    /**
     * Retourn un employe à partir de son id
     * @param id
     */
    findById(id) {
        return this.repository.findOne(id);
    }
    /**
     * Retourn la liste de tous les employers
     */
    getAll() {
        return rxjs_1.zip(this.repositoryAdmin.getAll(), this.repositoryCommercial.getAll(), this.repositoryIntervenant.getAll(), this.repositoryManager.getAll());
    }
    /**
     * Fermeture de la connexion à la base de données
     */
    closeDatabase() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.close();
        });
    }
};
__decorate([
    express_dependency_injection_1.Inject(client_repository_1.ClientRepository),
    __metadata("design:type", client_repository_1.ClientRepository)
], EmployeRepository.prototype, "repositoryClient", void 0);
__decorate([
    express_dependency_injection_1.Inject(administrator_repository_1.AdministratorRepository),
    __metadata("design:type", administrator_repository_1.AdministratorRepository)
], EmployeRepository.prototype, "repositoryAdmin", void 0);
__decorate([
    express_dependency_injection_1.Inject(manager_repository_1.ManagerRepository),
    __metadata("design:type", manager_repository_1.ManagerRepository)
], EmployeRepository.prototype, "repositoryManager", void 0);
__decorate([
    express_dependency_injection_1.Inject(intervenant_repository_1.IntervenantRepository),
    __metadata("design:type", intervenant_repository_1.IntervenantRepository)
], EmployeRepository.prototype, "repositoryIntervenant", void 0);
__decorate([
    express_dependency_injection_1.Inject(commercial_repository_1.CommercialRepository),
    __metadata("design:type", commercial_repository_1.CommercialRepository)
], EmployeRepository.prototype, "repositoryCommercial", void 0);
EmployeRepository = __decorate([
    express_dependency_injection_1.ExRepository(),
    __metadata("design:paramtypes", [])
], EmployeRepository);
exports.EmployeRepository = EmployeRepository;
//# sourceMappingURL=employe.repository.js.map