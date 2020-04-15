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
const intervention_model_1 = require("../../models/intervention/intervention.model");
const utils_service_1 = require("../../services/utils/utils.service");
/**
 * Repository du Model de données Planning d'Intervention
 */
let InterventionRepository = class InterventionRepository extends express_dependency_injection_1.Repository(generic_repository_1.GenericRepository) {
    /**
     * @constructor
     */
    constructor() {
        super();
        this.repository = super.getConnection().getRepository(intervention_model_1.Intervention);
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
            this.repository = this.connection.getRepository(intervention_model_1.Intervention);
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
     * Enregistrement d'une intervention
     * @param intervention
     */
    save(intervention) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.save(intervention);
        });
    }
    /**
     * Retourn une intervention à partir de son ID
     * @param id
     */
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.findOne(id);
        });
    }
    /**
     *  Retourn la liste de toutes les interventions
     */
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.find();
        });
    }
    /**
     * Modification d'une intervention
     * @param id
     * @param intervention
     */
    update(id, intervention) {
        return __awaiter(this, void 0, void 0, function* () {
            let interventionUpdated = yield this.repository.findOne(id);
            interventionUpdated.setDateOfIntervention(intervention.getDateOfIntervention());
            interventionUpdated.setIntervenantCode(intervention.getIntervenantCode());
            interventionUpdated.setClientCode(intervention.getClientCode());
            interventionUpdated.setHomeCode(intervention.getHomeCode());
            return yield this.repository.save(interventionUpdated);
        });
    }
    /**
     * Suppression d'une intervention
     * @param id
     */
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let intervention = yield this.repository.findOne(id);
            return yield this.repository.remove(intervention);
        });
    }
};
__decorate([
    express_dependency_injection_1.Inject(utils_service_1.UtilsService),
    __metadata("design:type", utils_service_1.UtilsService)
], InterventionRepository.prototype, "utilsService", void 0);
InterventionRepository = __decorate([
    express_dependency_injection_1.ExRepository(),
    __metadata("design:paramtypes", [])
], InterventionRepository);
exports.InterventionRepository = InterventionRepository;
//# sourceMappingURL=intervention.repository.js.map