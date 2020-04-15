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
const userNotification_model_1 = require("../../models/abonnement/userNotification.model");
const user_repository_1 = require("../users/user.repository");
const utils_service_1 = require("../../services/utils/utils.service");
const notification_repository_1 = require("./notification.repository");
/**
 * Repository du model user-notification
 */
let NotificaionUserRepository = class NotificaionUserRepository extends express_dependency_injection_1.Repository(generic_repository_1.GenericRepository) {
    constructor() {
        super();
        this.repository = super.getConnection().getRepository(userNotification_model_1.UserNotification);
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
            //   this.repository = this.connection.getRepository(NotificaionUsers);
            //    this.repositoryNotificaion = this.connection.getRepository(Notificaion);
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
     * Enregistrement d'une laison user-notification
     * @param userNotification
     */
    save(userNotification) {
        return this.repository.save(userNotification);
    }
    /**
     * Retourn un user-Notification à partir de son ID
     * @param id
     */
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.findOne(id);
        });
    }
    /**
     * Retourn la liste de tous les userNotification
     */
    getAll() {
        return this.repository.find();
    }
    /**
     * Modification d'un user-notification
     * @param id
     * @param userNotification
     */
    update(id, userNotification) {
        return __awaiter(this, void 0, void 0, function* () {
            let userNotificationUpdated = yield this.repository.findOne(id);
            userNotificationUpdated.setState(userNotification.getState());
            userNotificationUpdated.setHidenNotification(userNotification.getHidenNotification());
            userNotificationUpdated.setNotificaionCode(userNotification.getNotificaionCode());
            userNotificationUpdated.setUserCode(userNotification.getUserCode());
            return this.repository.save(userNotification);
        });
    }
    /**
     * Suppression d'un user notification
     * @param id
     */
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let userNotificationDeleted = yield this.repository.findOne(id);
            return this.repository.remove(userNotificationDeleted);
        });
    }
    /**
     * Retourn un user-Notificaion à partir  du code l'utilisateur
     * @param userCode
     */
    getByUserCode(userCode) {
        return __awaiter(this, void 0, void 0, function* () {
            const userCodeObjectId = this.utilsService.getObjectId(userCode);
            return yield this.repository.find({
                userCode: userCodeObjectId
            });
        });
    }
    /**
     *Retourne un les userNotification à partir du code de notification
     * @param notificaionCode
     */
    getByNotificaion(notificaionCode) {
        return __awaiter(this, void 0, void 0, function* () {
            const notificaionObjectId = this.utilsService.getObjectId(notificaionCode);
            return yield this.repository.find({
                notificaionCode: notificaionObjectId
            });
        });
    }
    /**
     *Suppression de tous les NotificaionUser qui ont comme Notificaion = NotificaionASupprimer
     * @param userCode
     * @param notificaionCode
     */
    delateUserAdress(userCode, notificaionCode) {
        return __awaiter(this, void 0, void 0, function* () {
            let userNotificaion = this.findNotificaionUserByUserAndNotification(userCode, notificaionCode);
            console.log(userNotificaion);
            return yield this.repository.remove(userNotificaion[0]);
        });
    }
    /**
     * Recuperation de tous les NotificaionsUsers
     * @param userCode
     * @param notificaionCode
     */
    findNotificaionUserByUserAndNotification(userCode, notificaionCode) {
        return __awaiter(this, void 0, void 0, function* () {
            const userCodeObjectId = this.utilsService.getObjectId(userCode);
            const notificationCodeObjectId = this.utilsService.getObjectId(notificaionCode);
            return yield this.repository.find({
                userCode: userCodeObjectId,
                notificaionCode: notificationCodeObjectId
            });
        });
    }
    /**
     * Envoyer la notification à une liste des utilisateurs
     * @param notificationCode
     * @param userIds
     */
    sendUserNotification(notificationCode, userIds) {
        return __awaiter(this, void 0, void 0, function* () {
            let i = 0;
            for (i = 0; i < userIds.length; i++) {
                let userNotification = new userNotification_model_1.UserNotification();
                let userId = this.utilsService.getObjectId(userIds[i]);
                let notifId = this.utilsService.getObjectId(notificationCode);
                userNotification.setUserCode(userId);
                userNotification.setNotificaionCode(notifId);
                userNotification.setState(false);
                userNotification.setHidenNotification(false);
                yield this.repository.save(userNotification);
            }
        });
    }
    /**
     * Retourne les notifications non fermé d'un utilisateur à partir de son id
     * @param userCode
     * @param role
     */
    getNotificationByUser(userCode) {
        return __awaiter(this, void 0, void 0, function* () {
            let userNotification = yield this.getByUserCode(userCode);
            let notifications = [];
            for (let i = 0; i < userNotification.length; i++) {
                console.log(userNotification[i].getHidenNotification());
                if (userNotification[i].getHidenNotification() == false) {
                    let notificationCode = this.utilsService.getObjectIdString(userNotification[i].getNotificaionCode());
                    let notification = yield this.repositoryNotification.findById(notificationCode);
                    let state = userNotification[i].getState();
                    notifications.push({ notification, state });
                }
            }
            return notifications;
        });
    }
    /**
     * Fermeture d'une notification
     * @param userCode
     * @param role
     * @param notificationCode
     */
    notificationHidden(userCode, notificationCode) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('user : ' + userCode);
            console.log('notificationCode : ' + notificationCode);
            let notificationUser = yield this.findNotificaionUserByUserAndNotification(userCode, notificationCode);
            console.log(notificationUser);
            notificationUser[0].setHidenNotification(true);
            return this.repository.update(notificationUser[0].getObjectId(), notificationUser[0]);
        });
    }
    /**
     * Lecture d'une notification
     * @param userCode
     * @param role
     * @param notificationCode
     */
    viewNotification(userCode, role, notificationCode) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = yield this.repositoryUser.findUserById(userCode, role);
            let notificationUser = yield this.findNotificaionUserByUserAndNotification(userCode, notificationCode);
            notificationUser[0].setState(true);
            return this.repository.update(notificationUser[0].getObjectId(), notificationUser[0]);
        });
    }
    /**
     * Envoyer une notification à la liste des administrateurs (admin, manager, commerciaux)
     * @param notificationCode
     */
    sendNotificationToAllUserAdmin(notificationCode) {
        return __awaiter(this, void 0, void 0, function* () {
            let userIds = yield this.repositoryUser.getAllAdministrerIds();
            let notification = yield this.repositoryNotification.findById(notificationCode);
            // TODO : Emet une notification en fournissant le pseudo pour verifier si la connexion est
            // bien lié a un client donné
            // SUPPRIMER : collection ABO, NOTIFICATION, USER_NOTIF, INCIDENT
            return yield this.sendUserNotification(notificationCode, userIds);
        });
    }
};
__decorate([
    express_dependency_injection_1.Inject(user_repository_1.UserRepository),
    __metadata("design:type", user_repository_1.UserRepository)
], NotificaionUserRepository.prototype, "repositoryUser", void 0);
__decorate([
    express_dependency_injection_1.Inject(notification_repository_1.NotificationRepository),
    __metadata("design:type", notification_repository_1.NotificationRepository)
], NotificaionUserRepository.prototype, "repositoryNotification", void 0);
__decorate([
    express_dependency_injection_1.Inject(utils_service_1.UtilsService),
    __metadata("design:type", utils_service_1.UtilsService)
], NotificaionUserRepository.prototype, "utilsService", void 0);
NotificaionUserRepository = __decorate([
    express_dependency_injection_1.ExRepository(),
    __metadata("design:paramtypes", [])
], NotificaionUserRepository);
exports.NotificaionUserRepository = NotificaionUserRepository;
//# sourceMappingURL=userNotification.repository.js.map