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
const incident_model_1 = require("../../models/intervention/incident.model");
const utils_service_1 = require("../../services/utils/utils.service");
/**
 * Repository du Model de données PlanningIncident
 */
let IncidentRepository = class IncidentRepository extends express_dependency_injection_1.Repository(generic_repository_1.GenericRepository) {
    /**
     * @constructor
     */
    constructor() {
        super();
        this.repository = super.getConnection().getRepository(incident_model_1.Incident);
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
            this.repository = this.connection.getRepository(incident_model_1.Incident);
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
     * Enregistrement d'un incident
     * @param incident
     */
    save(incident) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.save(incident);
        });
    }
    /**
     * Retourn un incident à partir de son ID
     * @param id
     */
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.findOne(id);
        });
    }
    /**
     * Retourn la liste de tous les incidents
     */
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.find();
        });
    }
    /**
     * Modification d'un incident
     * @param id
     * @param incident
     */
    update(id, incident) {
        return __awaiter(this, void 0, void 0, function* () {
            let incidentUpdated = yield this.repository.findOne(id);
            incidentUpdated.setDateOfAlert(incident.getDateOfAlert());
            incidentUpdated.setMessage(incident.getMessage());
            incidentUpdated.setIncidentDate(incident.getIncidentDate());
            incidentUpdated.setStateOfIncident(incident.getStateOfIncident());
            incidentUpdated.setClientCode(incident.getClientCode());
            incidentUpdated.setHomeCode(incident.getHomeCode());
            return yield this.repository.save(incidentUpdated);
        });
    }
    /**
     * Suppression d'un incident
     * @param id
     */
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let incidentDeleted = yield this.repository.findOne(id);
            return yield this.repository.remove(incidentDeleted);
        });
    }
    /**
     * Retourne la liste des incident d'un utilisateur
     * @param userCode, code du client
     */
    getIncidentByUser(userCode) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.find({
                where: {
                    clientCode: this.utilsService.getObjectId(userCode)
                },
                order: {
                    incidentDate: 'DESC'
                }
            });
        });
    }
};
__decorate([
    express_dependency_injection_1.Inject(utils_service_1.UtilsService),
    __metadata("design:type", utils_service_1.UtilsService)
], IncidentRepository.prototype, "utilsService", void 0);
IncidentRepository = __decorate([
    express_dependency_injection_1.ExRepository(),
    __metadata("design:paramtypes", [])
], IncidentRepository);
exports.IncidentRepository = IncidentRepository;
//# sourceMappingURL=incident.repository.js.map