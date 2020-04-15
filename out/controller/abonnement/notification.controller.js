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
Object.defineProperty(exports, "__esModule", { value: true });
const express_dependency_injection_1 = require("express-dependency-injection");
const body_parser_middleware_1 = require("../../middlewares/body-parser/body.parser.middleware");
const rxjs_1 = require("rxjs");
const client_repository_1 = require("../../repository/users/client.repository");
const userNotification_repository_1 = require("../../repository/abonnement/userNotification.repository");
const operators_1 = require("rxjs/operators");
const notificationModel_model_1 = require("../../models/abonnement/notificationModel.model");
const notification_repository_1 = require("../../repository/abonnement/notification.repository");
/**
 * Controller lié aux notification
 */
let NotificationController = class NotificationController extends express_dependency_injection_1.AbstractRouter {
    /**
     * Enregistrement d'une notification
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    post(_req, res, args) {
        let newNotification = new notificationModel_model_1.NotificationModel();
        newNotification.setTitle(args.body.title);
        newNotification.setDateOfSend(new Date());
        newNotification.setTypeNotification(args.body.typeNotification);
        let senderUserCode = this.repoNotification.utilsService.getObjectId(args.body.senderUserCode);
        newNotification.setSenderUserCode(senderUserCode);
        return rxjs_1.from(this.repoNotification.save(newNotification)).pipe(operators_1.mergeMap((notification) => {
            return rxjs_1.from(this.repoNotificationUser.sendNotificationToAllUserAdmin(notification.getObjectId())).pipe(operators_1.map((_) => {
                return notification;
            }));
        })).subscribe(data => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Retourne une notification à partir de son id
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    get(_req, res, args) {
        return rxjs_1.from(this.repoNotification.findById(args.params.id)).subscribe(data => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Retournela liste des toutes les notifications
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    findAll(_req, res, args) {
        return rxjs_1.from(this.repoNotification.getAll()).subscribe(data => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Modification d'une notification à partir de son id
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    put(_req, res, args) {
        return rxjs_1.from(this.repoNotification.update(args.params.id, args.body)).subscribe(data => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Suppression d'une notification
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    delete(_req, res, args) {
        return rxjs_1.from(this.repoNotification.delete(args.params.id)).subscribe(data => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Visualisation d'une notification
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    viewNotification(_req, res, args) {
        return rxjs_1.from(this.repoNotificationUser.viewNotification(args.body.userCode, args.body.role, args.body.notificationCode)).subscribe(data => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Fermeture d'une notification
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    hideNotification(_req, res, args) {
        return rxjs_1.from(this.repoNotificationUser.notificationHidden(args.body.userCode, args.body.notificationCode)).subscribe(data => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Liste de notifications non fermé d'un utilisateur
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    getNotificationsByUser(_req, res, args) {
        return rxjs_1.from(this.repoNotificationUser.getNotificationByUser(args.body.userCode)).subscribe(data => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
};
__decorate([
    express_dependency_injection_1.Inject(notification_repository_1.NotificationRepository),
    __metadata("design:type", notification_repository_1.NotificationRepository)
], NotificationController.prototype, "repoNotification", void 0);
__decorate([
    express_dependency_injection_1.Inject(userNotification_repository_1.NotificaionUserRepository),
    __metadata("design:type", userNotification_repository_1.NotificaionUserRepository)
], NotificationController.prototype, "repoNotificationUser", void 0);
__decorate([
    express_dependency_injection_1.Inject(client_repository_1.ClientRepository),
    __metadata("design:type", client_repository_1.ClientRepository)
], NotificationController.prototype, "repoclient", void 0);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/save",
        verb: express_dependency_injection_1.HttpVerbs.POST,
        middlewares: [
            body_parser_middleware_1.BodyParserMiddleware
        ]
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], NotificationController.prototype, "post", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/:id",
        verb: express_dependency_injection_1.HttpVerbs.GET
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], NotificationController.prototype, "get", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/",
        verb: express_dependency_injection_1.HttpVerbs.GET
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], NotificationController.prototype, "findAll", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/update/:id",
        verb: express_dependency_injection_1.HttpVerbs.POST,
        middlewares: [
            body_parser_middleware_1.BodyParserMiddleware
        ]
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], NotificationController.prototype, "put", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/delete/:id",
        verb: express_dependency_injection_1.HttpVerbs.GET
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], NotificationController.prototype, "delete", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/view-notification",
        verb: express_dependency_injection_1.HttpVerbs.POST,
        middlewares: [
            body_parser_middleware_1.BodyParserMiddleware
        ]
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], NotificationController.prototype, "viewNotification", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/hiden-notification",
        verb: express_dependency_injection_1.HttpVerbs.POST,
        middlewares: [
            body_parser_middleware_1.BodyParserMiddleware
        ]
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], NotificationController.prototype, "hideNotification", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/user-notifications",
        verb: express_dependency_injection_1.HttpVerbs.POST,
        middlewares: [
            body_parser_middleware_1.BodyParserMiddleware
        ]
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], NotificationController.prototype, "getNotificationsByUser", null);
NotificationController = __decorate([
    express_dependency_injection_1.ExRouter({
        path: "/notification"
    })
], NotificationController);
exports.NotificationController = NotificationController;
//# sourceMappingURL=notification.controller.js.map