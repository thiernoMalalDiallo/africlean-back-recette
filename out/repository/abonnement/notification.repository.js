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
const client_repository_1 = require("../users/client.repository");
const administrator_repository_1 = require("../users/administrator.repository");
const manager_repository_1 = require("../users/manager.repository");
const intervenant_repository_1 = require("../users/intervenant.repository");
const commercial_repository_1 = require("../users/commercial.repository");
const utils_service_1 = require("../../services/utils/utils.service");
const notificationModel_model_1 = require("../../models/abonnement/notificationModel.model");
/**
 * Repository du modèle de données notification
 */
let NotificationRepository = class NotificationRepository extends express_dependency_injection_1.Repository(generic_repository_1.GenericRepository) {
    /**
     * @constructor
     */
    constructor() {
        super();
        this.repository = super.getConnection().getRepository(notificationModel_model_1.NotificationModel);
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
            this.repository = this.connection.getRepository(notificationModel_model_1.NotificationModel);
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
     * Enregistrement d'une notification
     * @param notification
     */
    save(notification) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.save(notification);
        });
    }
    /**
     * Retourn une notification à partir de son ID
     * @param id
     */
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.findOne(id);
        });
    }
    /**
     * Retourn la liste de tous les notifications
     */
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.find();
        });
    }
    /**
     * Modification d'une notification
     * @param id
     * @param notification
     */
    update(id, notification) {
        return __awaiter(this, void 0, void 0, function* () {
            let notificationUpdated = yield this.repository.findOne(id);
            notificationUpdated.setTitle(notification.getTitle());
            notificationUpdated.setMessage(notification.getMessage());
            notificationUpdated.setTypeNotification(notification.getTypeNotification());
            notificationUpdated.setSenderUserCode(notification.getSenderUserCode());
            notificationUpdated.setDateOfSend(notification.getDateOfSend());
            return yield this.repository.save(notificationUpdated);
        });
    }
    /**
     * Suppression d'une notification
     * @param id
     */
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let subscribeDeleted = yield this.repository.findOne(id);
            return yield this.repository.remove(subscribeDeleted);
        });
    }
    /*  /!**
       * Retourne la liste notification par utilisateur (groupe d'utilisateur)
       * @param receiverClientId du client
       *!/
      public async getNotificationByUser(receiverClientId: {userType: string, userIds: string[]}[]){
          return await this.repository.find({receiversUserCode: receiverClientId});
      }
  
      /!**
       * Retourne la liste des notifications à afficher pour un utilisateur (ou groupe d'utilisateur)
       * @param receiverClientId du client
       *!/
      public async getNotHidenNotificationByuser(receiverClientId: {userType: string, userIds: string[]}[]){
          return await this.repository.find(
              {
                  receiversUserCode: receiverClientId,
                  hidenNotification: true
              });
      }
  */
    /**
     * Retourn tous les ids
     */
    getAllIds() {
        return __awaiter(this, void 0, void 0, function* () {
            let managersIds = yield this.repositoryManager.getAllManagerIds();
            let commerciauxIds = yield this.repositoryCommercial.getAllcommerciauxIds();
            let administratorsIds = yield this.repositoryAdmin.getAllAdminIds();
            return [managersIds, commerciauxIds, administratorsIds];
        });
    }
    /**
     * Retourn tous les ids
     */
    getAllAdministrerIds() {
        return __awaiter(this, void 0, void 0, function* () {
            let managers = yield this.repositoryManager.getAll();
            let managersIds = managers.map(manager => manager.getObjectId());
            let commerciaux = yield this.repositoryCommercial.getAll();
            let commerciauxIds = commerciaux.map(commercial => commercial.getObjectId());
            let administrators = yield this.repositoryAdmin.getAll();
            let administratorsIds = administrators.map(administrator => administrator.getObjectId());
            return [managersIds, commerciauxIds, administratorsIds];
        });
    }
};
__decorate([
    express_dependency_injection_1.Inject(client_repository_1.ClientRepository),
    __metadata("design:type", client_repository_1.ClientRepository)
], NotificationRepository.prototype, "repositoryClient", void 0);
__decorate([
    express_dependency_injection_1.Inject(administrator_repository_1.AdministratorRepository),
    __metadata("design:type", administrator_repository_1.AdministratorRepository)
], NotificationRepository.prototype, "repositoryAdmin", void 0);
__decorate([
    express_dependency_injection_1.Inject(manager_repository_1.ManagerRepository),
    __metadata("design:type", manager_repository_1.ManagerRepository)
], NotificationRepository.prototype, "repositoryManager", void 0);
__decorate([
    express_dependency_injection_1.Inject(intervenant_repository_1.IntervenantRepository),
    __metadata("design:type", intervenant_repository_1.IntervenantRepository)
], NotificationRepository.prototype, "repositoryIntervenant", void 0);
__decorate([
    express_dependency_injection_1.Inject(commercial_repository_1.CommercialRepository),
    __metadata("design:type", commercial_repository_1.CommercialRepository)
], NotificationRepository.prototype, "repositoryCommercial", void 0);
__decorate([
    express_dependency_injection_1.Inject(utils_service_1.UtilsService),
    __metadata("design:type", utils_service_1.UtilsService)
], NotificationRepository.prototype, "utilsService", void 0);
NotificationRepository = __decorate([
    express_dependency_injection_1.ExRepository(),
    __metadata("design:paramtypes", [])
], NotificationRepository);
exports.NotificationRepository = NotificationRepository;
//# sourceMappingURL=notification.repository.js.map