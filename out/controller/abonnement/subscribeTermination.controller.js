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
const subscribeTermination_repository_1 = require("../../repository/abonnement/subscribeTermination.repository");
const subscribeTermination_model_1 = require("../../models/abonnement/subscribeTermination.model");
const operators_1 = require("rxjs/operators");
const client_repository_1 = require("../../repository/users/client.repository");
const notification_repository_1 = require("../../repository/abonnement/notification.repository");
const subscribe_repository_1 = require("../../repository/abonnement/subscribe.repository");
const utils_service_1 = require("../../services/utils/utils.service");
const userNotification_repository_1 = require("../../repository/abonnement/userNotification.repository");
const notificationModel_model_1 = require("../../models/abonnement/notificationModel.model");
/**
 * Controller lié aux Résilliation d'abonnement
 */
let SubscribeTerminationController = class SubscribeTerminationController extends express_dependency_injection_1.AbstractRouter {
    /**
     * Enregistrement d'une resiliation
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    post(_req, res, args) {
        let newSubscribeTermination = new subscribeTermination_model_1.SubscribeTermination();
        newSubscribeTermination.setDateOfSubscribe(args.body.dateOfSubscribe);
        newSubscribeTermination.setDateOfTermination(new Date());
        newSubscribeTermination.setRaisonOfTermination(args.body.raisonOfTermination);
        newSubscribeTermination.setTrace(args.body.trace);
        let isSubscribe = "EN COURS DE RESILIATION";
        newSubscribeTermination.setStateOfTermination(isSubscribe);
        // retourn l'abonnement à résilluer
        return rxjs_1.from(this.repoSubscribe.findSubscribeByClientAdress(args.body.homeCode, args.body.clientCode)).pipe(operators_1.mergeMap((subscribe) => {
            let subscribeCode = this.repoSubscribe.utilsService.getObjectId(subscribe.getObjectId());
            newSubscribeTermination.setSubscribeCode(subscribeCode);
            return rxjs_1.from(this.repoSubscribeTermination.save(newSubscribeTermination)).pipe(operators_1.mergeMap((subscribeTermination) => {
                //modification du client ( isScribe du client est mis en COURS DE RESILLIATION)
                //let clientCode = SubscribeTerminationController.utilsService.getObjectIdString(subscribe.clientCode);
                return rxjs_1.from(this.repoclient.subscribeClient(args.body.clientCode, isSubscribe)).pipe(operators_1.mergeMap((res) => {
                    subscribe.setStateOfSubscription(isSubscribe);
                    subscribe.setTrace(subscribeTermination.getTrace());
                    // mise à jours de l'abonnement ( etat de l'abonnement est mis en COURS DE RESILLIATION)
                    return rxjs_1.from(this.repoSubscribe.update(subscribe.getObjectId(), subscribe)).pipe(operators_1.mergeMap((_) => {
                        let notification = new notificationModel_model_1.NotificationModel();
                        notification.setDateOfSend(new Date());
                        notification.setTitle("Résiliation d'un contrat");
                        notification.setMessage("un client vient de faire une demande de résiliation");
                        notification.setTypeNotification("RESILIATION");
                        notification.setSenderUserCode(subscribe.getClientCode());
                        // Recuperations des id des employer: admin, manager, commercial
                        return rxjs_1.from(this.repoNotification.save(notification)).pipe(operators_1.mergeMap((notif) => {
                            return rxjs_1.from(this.repoNotificationUser.sendNotificationToAllUserAdmin(notif.getObjectId())).pipe(operators_1.map((_) => {
                                return subscribeTermination;
                            }));
                        }));
                    }));
                }));
            }));
        })).subscribe(data => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Retourne une Resiliation
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    get(_req, res, args) {
        return rxjs_1.from(this.repoSubscribeTermination.findById(args.params.id)).subscribe(data => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Retourne la liste de tous les desabonnées
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    findAll(_req, res, args) {
        return rxjs_1.from(this.repoSubscribeTermination.getAll()).subscribe(data => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Modifier d'une resilluation
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    put(_req, res, args) {
        return rxjs_1.from(this.repoSubscribeTermination.update(args.params.id, args.body)).subscribe(data => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Supprimer d'une résilluation
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    delete(_req, res, args) {
        return rxjs_1.from(this.repoSubscribeTermination.delete(args.params.id)).subscribe(data => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Confirmation de la résilluation d'un abonnement
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    confrimSubscribe(_req, res, args) {
        return rxjs_1.from(this.repoSubscribeTermination.confirmSubscribeTermination(args.body.homeCode, args.body.clientCode, args.body.trace)).subscribe(data => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Annulation d'une demande de désabonnement
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    cancelSubscribe(_req, res, args) {
        return rxjs_1.from(this.repoSubscribeTermination.cancelSubscribetTermination(args.body.homeCode, args.body.clientCode)).subscribe(data => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
};
SubscribeTerminationController.utilsService = new utils_service_1.UtilsService();
__decorate([
    express_dependency_injection_1.Inject(subscribe_repository_1.SubscribeRepository),
    __metadata("design:type", subscribe_repository_1.SubscribeRepository)
], SubscribeTerminationController.prototype, "repoSubscribe", void 0);
__decorate([
    express_dependency_injection_1.Inject(subscribeTermination_repository_1.SubscribeTerminationRepository),
    __metadata("design:type", subscribeTermination_repository_1.SubscribeTerminationRepository)
], SubscribeTerminationController.prototype, "repoSubscribeTermination", void 0);
__decorate([
    express_dependency_injection_1.Inject(client_repository_1.ClientRepository),
    __metadata("design:type", client_repository_1.ClientRepository)
], SubscribeTerminationController.prototype, "repoclient", void 0);
__decorate([
    express_dependency_injection_1.Inject(notification_repository_1.NotificationRepository),
    __metadata("design:type", notification_repository_1.NotificationRepository)
], SubscribeTerminationController.prototype, "repoNotification", void 0);
__decorate([
    express_dependency_injection_1.Inject(userNotification_repository_1.NotificaionUserRepository),
    __metadata("design:type", userNotification_repository_1.NotificaionUserRepository)
], SubscribeTerminationController.prototype, "repoNotificationUser", void 0);
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
], SubscribeTerminationController.prototype, "post", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/:id",
        verb: express_dependency_injection_1.HttpVerbs.GET
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], SubscribeTerminationController.prototype, "get", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/",
        verb: express_dependency_injection_1.HttpVerbs.GET
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], SubscribeTerminationController.prototype, "findAll", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/update/:id",
        verb: express_dependency_injection_1.HttpVerbs.PUT,
        middlewares: [
            body_parser_middleware_1.BodyParserMiddleware
        ]
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], SubscribeTerminationController.prototype, "put", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/delete/:id",
        verb: express_dependency_injection_1.HttpVerbs.DELETE
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], SubscribeTerminationController.prototype, "delete", null);
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
], SubscribeTerminationController.prototype, "confrimSubscribe", null);
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
], SubscribeTerminationController.prototype, "cancelSubscribe", null);
SubscribeTerminationController = __decorate([
    express_dependency_injection_1.ExRouter({
        path: "/resiliation"
    })
], SubscribeTerminationController);
exports.SubscribeTerminationController = SubscribeTerminationController;
//# sourceMappingURL=subscribeTermination.controller.js.map