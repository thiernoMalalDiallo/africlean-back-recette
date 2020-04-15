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
const paySubscription_model_1 = require("../../models/abonnement/paySubscription.model");
const utils_service_1 = require("../../services/utils/utils.service");
/**
 * Repository du modèle de données abonnement
 */
let PaySubscriptionRepository = class PaySubscriptionRepository extends express_dependency_injection_1.Repository(generic_repository_1.GenericRepository) {
    /**
     * @constructor
     */
    constructor() {
        super();
        this.repository = super.getConnection().getRepository(paySubscription_model_1.PaySubscription);
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
            this.repository = this.connection.getRepository(paySubscription_model_1.PaySubscription);
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
     * Enregistrement du payement d'abonnement
     * @param paySubscription
     */
    save(paySubscription) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.save(paySubscription);
        });
    }
    /**
     * Retourn un payement d'abonnement à partir de son ID
     * @param id
     */
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.findOne(id);
        });
    }
    /**
     * Retourn la liste de tous les payement d'abonnements
     */
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.find();
        });
    }
    /**
     * Modification d'un payement d'abonnement
     * @param id
     * @param paySubscription
     */
    update(id, paySubscription) {
        return __awaiter(this, void 0, void 0, function* () {
            let paySubscriptionUpdated = yield this.repository.findOne(id);
            paySubscriptionUpdated.setCodeOfSubscription(paySubscription.getCodeOfSubscription());
            paySubscriptionUpdated.setDateOfSubscribe(paySubscription.getDateOfSubscribe());
            paySubscriptionUpdated.setDateOfPayment(paySubscription.getDateOfPayment());
            paySubscriptionUpdated.setAmountToPay(paySubscription.getAmountToPay());
            paySubscriptionUpdated.setMeanOfPaymment(paySubscription.getMeanOfPaymment());
            paySubscriptionUpdated.setBalanceOfAbonnement(paySubscription.getBalanceOfAbonnement());
            return yield this.repository.save(paySubscriptionUpdated);
        });
    }
    /**
     * Suppression d'un payement d'abonnement
     * @param id
     */
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let paySubscribeDeleted = yield this.repository.findOne(id);
            return yield this.repository.remove(paySubscribeDeleted);
        });
    }
};
__decorate([
    express_dependency_injection_1.Inject(utils_service_1.UtilsService),
    __metadata("design:type", utils_service_1.UtilsService)
], PaySubscriptionRepository.prototype, "utilsService", void 0);
PaySubscriptionRepository = __decorate([
    express_dependency_injection_1.ExRepository(),
    __metadata("design:paramtypes", [])
], PaySubscriptionRepository);
exports.PaySubscriptionRepository = PaySubscriptionRepository;
//# sourceMappingURL=paySubscription.repository.js.map