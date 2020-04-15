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
const subscribeModel_model_1 = require("../../models/abonnement/subscribeModel.model");
const client_repository_1 = require("../users/client.repository");
const utils_service_1 = require("../../services/utils/utils.service");
/**
 * Repository du modèle de données abonnement
 */
let SubscribeRepository = class SubscribeRepository extends express_dependency_injection_1.Repository(generic_repository_1.GenericRepository) {
    /**
     * @constructor
     */
    constructor() {
        super();
        this.repository = super.getConnection().getRepository(subscribeModel_model_1.SubscribeModel);
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
            this.repository = this.connection.getRepository(subscribeModel_model_1.SubscribeModel);
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
     * Enregistrement d'un abonnement
     * @param subscribeModel
     */
    save(subscribeModel) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.save(subscribeModel);
        });
    }
    /**
     * Retourn un abonnement à partir de son ID
     * @param id
     */
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.findOne(id);
        });
    }
    /**
     * Retourn la liste de tous les abonnements
     */
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.find();
        });
    }
    /**
     * Modification d'un abonnement
     * @param id
     * @param subscribeModel
     */
    update(id, subscribeModel) {
        return __awaiter(this, void 0, void 0, function* () {
            let subscribeModelUpdated = yield this.repository.findOne(id);
            subscribeModelUpdated.setCodeOfSubscription(subscribeModel.getCodeOfSubscription());
            subscribeModelUpdated.setDateOfSbscription(subscribeModel.getDateOfSbscription());
            subscribeModelUpdated.setTypeOfSubscription(subscribeModel.getTypeOfSubscription());
            subscribeModelUpdated.setStateOfSubscription(subscribeModel.getStateOfSubscription());
            subscribeModelUpdated.setHomeCode(subscribeModel.getHomeCode());
            subscribeModelUpdated.setAdminCode(subscribeModel.getAdminCode());
            subscribeModelUpdated.setManagerCode(subscribeModel.getManagerCode());
            subscribeModelUpdated.setCommercialCode(subscribeModel.getCommercialCode());
            subscribeModelUpdated.setClientCode(subscribeModel.getClientCode());
            subscribeModelUpdated.setTrace(subscribeModel.getTrace());
            return yield this.repository.save(subscribeModelUpdated);
        });
    }
    /**
     * Suppression d'un abonnement
     * @param id
     */
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let subscribeDeleted = yield this.repository.findOne(id);
            return yield this.repository.remove(subscribeDeleted);
        });
    }
    /**
     * confirmation d'un abonnement
     * @param idHome, id de l'abonnement
     * @param idClient, id du client
     * @param trace, id l'auteur de la confirmation
     */
    confirmSubscribe(idHome, idClient, trace) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield this.repositoryClient.findById(idClient);
            if (client.getIsSubscribe() == "EN COURS") {
                client.setIsSubscribe("ABONNEE");
                client.setTrace(trace);
                yield this.repositoryClient.updateClient(idClient, client);
            }
            let subscribeConfirm = yield this.findSubscribeByAdress(idHome);
            let subscribeConfirmation = subscribeConfirm[0];
            subscribeConfirmation.setStateOfSubscription("VALIDER");
            subscribeConfirmation.setTrace(trace);
            return yield this.update(subscribeConfirmation.getObjectId(), subscribeConfirmation);
        });
    }
    /**
     * Annulation d'un abonnement
     * @param idHome
     * @param idClient, id du client
     */
    cancelSubscribe(idHome, idClient) {
        return __awaiter(this, void 0, void 0, function* () {
            let subscribeConfirm = yield this.findSubscribeByAdress(idHome);
            let subscribeConfirmation = subscribeConfirm[0];
            yield this.update(subscribeConfirmation.getObjectId(), subscribeConfirmation);
            let client = yield this.repositoryClient.findById(idClient);
            if (client.getIsSubscribe() == "EN COURS") {
                client.setIsSubscribe("NULL");
                return yield this.repositoryClient.updateClient(idClient, client);
            }
            else {
                return client;
            }
        });
    }
    /**
     * Renvoie un abonnement lie a une adresse
     * @param idHome, id de la maison
     */
    findSubscribeByAdress(idHome) {
        return __awaiter(this, void 0, void 0, function* () {
            // On récupère le ObjectId correspondant au idHome
            let objectIdHome = this.utilsService.getObjectId(idHome);
            return yield this.repository.find({ where: { homeCode: objectIdHome } });
        });
    }
    /**
     * Renvoie un abonnement lie a l'adresse d'un utilisateur
     * @param idHome, id de la maison
     * @param idClient
     */
    findSubscribeByClientAdress(idHome, idClient) {
        return __awaiter(this, void 0, void 0, function* () {
            // On récupère le ObjectId correspondant au idHome
            let objectIdHome = this.utilsService.getObjectId(idHome);
            let objectIdClient = this.utilsService.getObjectId(idClient);
            let subscribes = yield this.repository.find({
                homeCode: objectIdHome,
                clientCode: objectIdClient
            });
            console.log(subscribes);
            return subscribes[0];
        });
    }
    /**
     * Retourn le nombre d'abonnement
     * @param clientCode
     */
    getSubscribebyUser(clientCode) {
        return __awaiter(this, void 0, void 0, function* () {
            let objectIDClientCode = this.utilsService.getObjectId(clientCode);
            // Abonnement RESILIEE
            let subscribesResilie = yield this.repository.find({
                clientCode: objectIDClientCode,
                stateOfSubscription: 'RESILIEE'
            });
            // Abonnement EN COURS
            let subscribesEnCours = yield this.repository.find({
                clientCode: objectIDClientCode,
                stateOfSubscription: 'EN COURS'
            });
            // Abonnement VALIDEE
            let subscribesValidee = yield this.repository.find({
                clientCode: objectIDClientCode,
                stateOfSubscription: 'VALIDER'
            });
            // Abonnement EN COURS DE RESILIATION
            let subscribesResiliation = yield this.repository.find({
                clientCode: objectIDClientCode,
                stateOfSubscription: 'EN COURS DE RESILIATION'
            });
            return {
                enCours: subscribesEnCours,
                validee: subscribesValidee,
                enCoursResiliation: subscribesResiliation,
                resilie: subscribesResilie
            };
        });
    }
};
__decorate([
    express_dependency_injection_1.Inject(client_repository_1.ClientRepository),
    __metadata("design:type", client_repository_1.ClientRepository)
], SubscribeRepository.prototype, "repositoryClient", void 0);
__decorate([
    express_dependency_injection_1.Inject(utils_service_1.UtilsService),
    __metadata("design:type", utils_service_1.UtilsService)
], SubscribeRepository.prototype, "utilsService", void 0);
SubscribeRepository = __decorate([
    express_dependency_injection_1.ExRepository(),
    __metadata("design:paramtypes", [])
], SubscribeRepository);
exports.SubscribeRepository = SubscribeRepository;
//# sourceMappingURL=subscribe.repository.js.map