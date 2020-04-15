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
const planningIntervention_model_1 = require("../../models/intervention/planningIntervention.model");
const utils_service_1 = require("../../services/utils/utils.service");
const user_repository_1 = require("../users/user.repository");
/**
 *  Repository du dodel de données PlanningIntervention
 */
let PlanningInterventionRepository = class PlanningInterventionRepository extends express_dependency_injection_1.Repository(generic_repository_1.GenericRepository) {
    /**
     * @constructor
     */
    constructor() {
        super();
        this.repository = super.getConnection().getRepository(planningIntervention_model_1.PlanningIntervention);
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
            this.repository = this.connection.getRepository(planningIntervention_model_1.PlanningIntervention);
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
     * Enregistrement d'un planning
     * @param planification
     */
    save(planification) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.save(planification);
        });
    }
    /**
     * Retourn un planning à partir de son ID
     * @param id
     */
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.findOne(id);
        });
    }
    /**
     * Retourn la liste de tous les planning
     */
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.find();
        });
    }
    /**
     * Modification d'un planning
     * @param id
     * @param planningIntervention
     */
    update(id, planningIntervention) {
        return __awaiter(this, void 0, void 0, function* () {
            let planningInterventionUpdated = yield this.repository.findOne(id);
            planningInterventionUpdated.setCodeIntervention(planningIntervention.getCodeIntervention());
            planningInterventionUpdated.setStartDate(planningIntervention.getStartDate());
            planningInterventionUpdated.setEndDate(planningIntervention.getEndDate());
            planningInterventionUpdated.setTitle(planningIntervention.getTitle());
            planningInterventionUpdated.setIntervenantCode(planningIntervention.getIntervenantCode());
            planningInterventionUpdated.setClientCode(planningIntervention.getClientCode());
            planningInterventionUpdated.setManagerCode(planningIntervention.getManagerCode());
            planningInterventionUpdated.setCommercialCode(planningIntervention.getCommercialCode());
            planningInterventionUpdated.setAdminCode(planningIntervention.getAdminCode());
            return yield this.repository.save(planningInterventionUpdated);
        });
    }
    /**
     * Suppression d'un planning
     * @param id
     */
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let planningIntervention = yield this.repository.findOne(id);
            return yield this.repository.remove(planningIntervention);
        });
    }
    /**
     * Retourn la liste de planning d'un utilisateur
     * @param userCode
     * @param role
     */
    findPlanningByUser(userCode, role) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (role) {
                case 'INTERVENANT':
                    return yield this.repository.find({
                        intervenantCode: this.utilsService.getObjectId(userCode),
                    });
                case 'CLIENT':
                    return yield this.repository.find({
                        clientCode: this.utilsService.getObjectId(userCode),
                    });
                case 'COMMERCIAL':
                    return yield this.repository.find({
                        commercialCode: this.utilsService.getObjectId(userCode),
                    });
                case 'MANAGER':
                    return yield this.repository.find({
                        managerCode: this.utilsService.getObjectId(userCode),
                    });
                default:
                    return yield this.repository.find({
                        adminCode: this.utilsService.getObjectId(userCode),
                    });
            }
        });
    }
};
__decorate([
    express_dependency_injection_1.Inject(user_repository_1.UserRepository),
    __metadata("design:type", user_repository_1.UserRepository)
], PlanningInterventionRepository.prototype, "repositoryUser", void 0);
__decorate([
    express_dependency_injection_1.Inject(utils_service_1.UtilsService),
    __metadata("design:type", utils_service_1.UtilsService)
], PlanningInterventionRepository.prototype, "utilsService", void 0);
PlanningInterventionRepository = __decorate([
    express_dependency_injection_1.ExRepository(),
    __metadata("design:paramtypes", [])
], PlanningInterventionRepository);
exports.PlanningInterventionRepository = PlanningInterventionRepository;
//# sourceMappingURL=planningIntervention.repository.js.map