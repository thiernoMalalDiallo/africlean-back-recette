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
var SubscribeController_1;
const express_dependency_injection_1 = require("express-dependency-injection");
const body_parser_middleware_1 = require("../../middlewares/body-parser/body.parser.middleware");
const rxjs_1 = require("rxjs");
const subscribeModel_model_1 = require("../../models/abonnement/subscribeModel.model");
const subscribe_repository_1 = require("../../repository/abonnement/subscribe.repository");
const operators_1 = require("rxjs/operators");
const client_repository_1 = require("../../repository/users/client.repository");
const utils_service_1 = require("../../services/utils/utils.service");
const userNotification_repository_1 = require("../../repository/abonnement/userNotification.repository");
const notificationModel_model_1 = require("../../models/abonnement/notificationModel.model");
const notification_repository_1 = require("../../repository/abonnement/notification.repository");
/**
 * Controller lié aux Planning d'bonnement
 */
let SubscribeController = SubscribeController_1 = class SubscribeController extends express_dependency_injection_1.AbstractRouter {
    /**
     * Enregistrement d'un abonnement
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    post(_req, res, args) {
        let newSubscribeModel = new subscribeModel_model_1.SubscribeModel();
        newSubscribeModel.setCodeOfSubscription(args.body.codeOfSubscription);
        newSubscribeModel.setTypeOfSubscription(args.body.typeOfSubscription);
        newSubscribeModel.setDateOfSbscription(new Date());
        newSubscribeModel.setAdminCode(this.repoSubscribe.utilsService.getObjectId(args.body.adminCode));
        newSubscribeModel.setManagerCode(this.repoSubscribe.utilsService.getObjectId(args.body.managerCode));
        newSubscribeModel.setCommercialCode(this.repoSubscribe.utilsService.getObjectId(args.body.commercialCode));
        newSubscribeModel.setClientCode(SubscribeController_1.utilsService.getObjectId(args.body.clientCode));
        newSubscribeModel.setHomeCode(SubscribeController_1.utilsService.getObjectId(args.body.homeCode));
        newSubscribeModel.setTrace(args.body.trace);
        let stateOfSubscription = "EN COURS";
        newSubscribeModel.setStateOfSubscription(stateOfSubscription);
        return rxjs_1.from(this.repoSubscribe.save(newSubscribeModel)).pipe(operators_1.mergeMap((subscribe) => {
            let isSubscribe = "EN COURS";
            return rxjs_1.from(this.repoclient.subscribeClient(args.body.clientCode, isSubscribe)).pipe(operators_1.mergeMap((res) => {
                let notification = new notificationModel_model_1.NotificationModel();
                notification.setDateOfSend(new Date());
                notification.setTitle("NOUVEAU CLIENT");
                notification.setMessage("un client vient de faire une demande d'abonnement");
                notification.setTypeNotification("ABONNEMENT");
                notification.setSenderUserCode(subscribe.getClientCode());
                return rxjs_1.from(this.repoNotification.save(notification)).pipe(operators_1.mergeMap((notif) => {
                    return rxjs_1.from(this.repoNotificationUser.sendNotificationToAllUserAdmin(notif.getObjectId())).pipe(operators_1.map((_) => {
                        return subscribe;
                    }));
                }));
            }));
        })).subscribe(data => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Retourne un abonnement à partir de son id
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    get(_req, res, args) {
        return rxjs_1.from(this.repoSubscribe.findById(args.params.id)).subscribe(data => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Retourne la liste de tous les abonnements
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    findAll(_req, res, args) {
        return rxjs_1.from(this.repoSubscribe.getAll()).subscribe(data => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Modification d'un abonnement
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    put(_req, res, args) {
        return rxjs_1.from(this.repoSubscribe.update(args.params.id, args.body)).subscribe(data => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Suppression d'un abonnement
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    delete(_req, res, args) {
        return rxjs_1.from(this.repoSubscribe.delete(args.params.id)).subscribe(data => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * confirmation d'un abonnement
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    confrimSubscribe(_req, res, args) {
        return rxjs_1.from(this.repoSubscribe.confirmSubscribe(args.body.homeCode, args.body.clientCode, args.body.trace)).subscribe(data => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Annulation d'une demande d'abonnement
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    cancelSubscribe(_req, res, args) {
        return rxjs_1.from(this.repoSubscribe.cancelSubscribe(args.body.homeCode, args.body.clientCode)).subscribe(data => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * retourne les abonnement non résilié et en cours éffectué par l'utilisateur
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    getSubscribeByUser(_req, res, args) {
        return rxjs_1.from(this.repoSubscribe.getSubscribebyUser(args.params.id)).subscribe(data => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * recherche un abonnement à partir d'une adress
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    findSubscribeByAdress(_req, res, args) {
        return rxjs_1.from(this.repoSubscribe.findSubscribeByAdress(args.params.id)).subscribe(data => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
};
SubscribeController.utilsService = new utils_service_1.UtilsService();
__decorate([
    express_dependency_injection_1.Inject(subscribe_repository_1.SubscribeRepository),
    __metadata("design:type", subscribe_repository_1.SubscribeRepository)
], SubscribeController.prototype, "repoSubscribe", void 0);
__decorate([
    express_dependency_injection_1.Inject(client_repository_1.ClientRepository),
    __metadata("design:type", client_repository_1.ClientRepository)
], SubscribeController.prototype, "repoclient", void 0);
__decorate([
    express_dependency_injection_1.Inject(notification_repository_1.NotificationRepository),
    __metadata("design:type", notification_repository_1.NotificationRepository)
], SubscribeController.prototype, "repoNotification", void 0);
__decorate([
    express_dependency_injection_1.Inject(userNotification_repository_1.NotificaionUserRepository),
    __metadata("design:type", userNotification_repository_1.NotificaionUserRepository)
], SubscribeController.prototype, "repoNotificationUser", void 0);
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
], SubscribeController.prototype, "post", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/:id",
        verb: express_dependency_injection_1.HttpVerbs.GET
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], SubscribeController.prototype, "get", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/",
        verb: express_dependency_injection_1.HttpVerbs.GET
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], SubscribeController.prototype, "findAll", null);
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
], SubscribeController.prototype, "put", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/delete/:id",
        verb: express_dependency_injection_1.HttpVerbs.GET
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], SubscribeController.prototype, "delete", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/confirm",
        verb: express_dependency_injection_1.HttpVerbs.POST,
        middlewares: [
            body_parser_middleware_1.BodyParserMiddleware
        ]
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], SubscribeController.prototype, "confrimSubscribe", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/cancel",
        verb: express_dependency_injection_1.HttpVerbs.POST,
        middlewares: [
            body_parser_middleware_1.BodyParserMiddleware
        ]
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], SubscribeController.prototype, "cancelSubscribe", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/user-subscribe/:id",
        verb: express_dependency_injection_1.HttpVerbs.GET,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], SubscribeController.prototype, "getSubscribeByUser", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/adress/:id",
        verb: express_dependency_injection_1.HttpVerbs.GET,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], SubscribeController.prototype, "findSubscribeByAdress", null);
SubscribeController = SubscribeController_1 = __decorate([
    express_dependency_injection_1.ExRouter({
        path: "/abonnement"
    })
], SubscribeController);
exports.SubscribeController = SubscribeController;
//# sourceMappingURL=subscribe.controller.js.map