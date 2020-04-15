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
const subscribeTermination_model_1 = require("../../models/abonnement/subscribeTermination.model");
const client_repository_1 = require("../users/client.repository");
const subscribe_repository_1 = require("./subscribe.repository");
const utils_service_1 = require("../../services/utils/utils.service");
/**
 * Repository du modèle de données abonnement
 */
let SubscribeTerminationRepository = class SubscribeTerminationRepository extends express_dependency_injection_1.Repository(generic_repository_1.GenericRepository) {
    /**
     * @constructor
     */
    constructor() {
        super();
        this.repository = super.getConnection().getRepository(subscribeTermination_model_1.SubscribeTermination);
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
            this.repository = this.connection.getRepository(subscribeTermination_model_1.SubscribeTermination);
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
     * Enregistrement d''un désabonnement
     * @param subscribeTermination
     */
    save(subscribeTermination) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.save(subscribeTermination);
        });
    }
    /**
     * Retourn un désabonnement à partir de son ID
     * @param id
     */
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.findOne(id);
        });
    }
    /**
     * Retourn la liste de tous les déabonnements
     */
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.find();
        });
    }
    /**
     * Modification d'un désabonnement
     * @param id
     * @param subscribeTermination
     */
    update(id, subscribeTermination) {
        return __awaiter(this, void 0, void 0, function* () {
            let subscribeTerminationUpdated = yield this.repository.findOne(id);
            subscribeTerminationUpdated.setDateOfSubscribe(subscribeTermination.getDateOfSubscribe());
            subscribeTerminationUpdated.setDateOfTermination(subscribeTermination.getDateOfTermination());
            subscribeTerminationUpdated.setRaisonOfTermination(subscribeTermination.getRaisonOfTermination());
            subscribeTerminationUpdated.setTrace(subscribeTermination.getTrace());
            subscribeTerminationUpdated.setStateOfTermination(subscribeTermination.getStateOfTermination());
            return yield this.repository.save(subscribeTerminationUpdated);
        });
    }
    /**
     * Suppression d'un désaabonnement
     * @param id
     */
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let subscribeTerminationDeleted = yield this.repository.findOne(id);
            return yield this.repository.remove(subscribeTerminationDeleted);
        });
    }
    /**
     * confirmation d'une résilluation
     * @param idHome
     * @param idClient, id du client
     * @param trace, id l'auteur de la confirmation
     */
    confirmSubscribeTermination(idHome, idClient, trace) {
        return __awaiter(this, void 0, void 0, function* () {
            //Recuperation de l'abonnement en cours de désabonnement
            let subscribeToTerminate = yield this.repoSubscribe.findSubscribeByAdress(idHome);
            let subscribe = subscribeToTerminate[0];
            subscribe.setStateOfSubscription("RESILIEE");
            subscribe.setTrace(trace);
            yield this.repoSubscribe.update(subscribe.getObjectId(), subscribe);
            //Recuperation du désabonnement en cours
            let subscribeTer = yield this.getSubscribeTerminateBySubscribtion(subscribe.getObjectId());
            let subscribeTermination = subscribeTer[0];
            subscribeTermination.setStateOfTermination("RESILIEE");
            subscribeTermination.setTrace(trace);
            subscribeTermination.setSubscribeCode(this.utilsService.getObjectId(subscribe.getObjectId()));
            return yield this.update(subscribeTermination.getObjectId(), subscribeTermination);
        });
    }
    /**
     * Annulation d'un désabonnement
     * @param idHome
     * @param idClient, id du client
     */
    cancelSubscribetTermination(idHome, idClient) {
        return __awaiter(this, void 0, void 0, function* () {
            //Recuperation de l'abonnement en cours de désabonnement
            let subscribeToTerminate = yield this.repoSubscribe.findSubscribeByAdress(idHome);
            let subscribe = subscribeToTerminate[0];
            subscribe.setStateOfSubscription("VALIDER");
            yield this.repoSubscribe.update(subscribe.getObjectId(), subscribe);
            //Recuperation du désabonnement en cours
            let subscribeTer = yield this.getSubscribeTerminateBySubscribtion(subscribe.getObjectId());
            let subscribeTermination = subscribeTer[0];
            return yield this.delete(subscribeTermination.getObjectId());
        });
    }
    /**
     *Retourne le désabonnement liée à un abonnement
     * @param codeSuscribe
     */
    getSubscribeTerminateBySubscribtion(codeSuscribe) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.find({
                subscribeCode: this.utilsService.getObjectId(codeSuscribe)
            });
        });
    }
};
__decorate([
    express_dependency_injection_1.Inject(subscribe_repository_1.SubscribeRepository),
    __metadata("design:type", subscribe_repository_1.SubscribeRepository)
], SubscribeTerminationRepository.prototype, "repoSubscribe", void 0);
__decorate([
    express_dependency_injection_1.Inject(client_repository_1.ClientRepository),
    __metadata("design:type", client_repository_1.ClientRepository)
], SubscribeTerminationRepository.prototype, "repoClient", void 0);
__decorate([
    express_dependency_injection_1.Inject(utils_service_1.UtilsService),
    __metadata("design:type", utils_service_1.UtilsService)
], SubscribeTerminationRepository.prototype, "utilsService", void 0);
SubscribeTerminationRepository = __decorate([
    express_dependency_injection_1.ExRepository(),
    __metadata("design:paramtypes", [])
], SubscribeTerminationRepository);
exports.SubscribeTerminationRepository = SubscribeTerminationRepository;
//# sourceMappingURL=subscribeTermination.repository.js.map