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
const rxjs_1 = require("rxjs");
const incident_repository_1 = require("../../repository/intervention/incident.repository");
const body_parser_middleware_1 = require("../../middlewares/body-parser/body.parser.middleware");
const incident_model_1 = require("../../models/intervention/incident.model");
const operators_1 = require("rxjs/operators");
const userNotification_repository_1 = require("../../repository/abonnement/userNotification.repository");
const notificationModel_model_1 = require("../../models/abonnement/notificationModel.model");
const notification_repository_1 = require("../../repository/abonnement/notification.repository");
/**
 * Controller lié aux incidents
 */
let IncidentController = class IncidentController extends express_dependency_injection_1.AbstractRouter {
    /**
     * Enregistre un incident
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    post(_req, res, args) {
        let newIncident = new incident_model_1.Incident();
        newIncident.setDateOfAlert(new Date());
        newIncident.setMessage(args.body.message);
        let clientCode = this.repoIncident.utilsService.getObjectId(args.body.clientCode);
        let homeCode = this.repoIncident.utilsService.getObjectId(args.body.homeCode);
        newIncident.setClientCode(clientCode);
        newIncident.setHomeCode(homeCode);
        newIncident.setTypeOfalert(args.body.typeOfAlert);
        newIncident.setPhoneNumber(args.body.phoneNumber);
        newIncident.setIncidentDate(args.body.incidentDate);
        newIncident.setStateOfIncident("SIGNALER");
        return rxjs_1.from(this.repoIncident.save(newIncident)).pipe(operators_1.mergeMap((incident) => {
            let notification = new notificationModel_model_1.NotificationModel();
            notification.setDateOfSend(new Date());
            notification.setTitle("NOUVEL INCIDENT");
            notification.setMessage("un client vient de signaler un incident");
            notification.setTypeNotification("INCIDENT");
            let senderUsercode = this.repoIncident.utilsService.getObjectId(incident.getObjectId());
            notification.setSenderUserCode(senderUsercode);
            return rxjs_1.from(this.repoNotification.save(notification)).pipe(operators_1.mergeMap((notif) => {
                return rxjs_1.from(this.repoNotificationUser.sendNotificationToAllUserAdmin(notif.getObjectId())).pipe(operators_1.map((_) => {
                    return incident;
                }));
            }));
        })).subscribe(data => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * retourner un Incident
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    get(_req, res, args) {
        return rxjs_1.from(this.repoIncident.findById(args.params.id)).subscribe(data => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * retourne la liste de tous les incidents
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    findAll(_req, res, args) {
        return rxjs_1.from(this.repoIncident.getAll()).subscribe(data => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * modifier un incident
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    put(_req, res, args) {
        return rxjs_1.from(this.repoIncident.update(args.params.id, args.body)).subscribe(data => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * supprimer un incident
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    delete(_req, res, args) {
        return rxjs_1.from(this.repoIncident.delete(args.params.id)).subscribe(data => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Return un incident de l'utilisateur
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    findIncidentUser(_req, res, args) {
        return rxjs_1.from(this.repoIncident.getIncidentByUser(args.params.idUser)).subscribe(data => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
};
__decorate([
    express_dependency_injection_1.Inject(incident_repository_1.IncidentRepository),
    __metadata("design:type", incident_repository_1.IncidentRepository)
], IncidentController.prototype, "repoIncident", void 0);
__decorate([
    express_dependency_injection_1.Inject(notification_repository_1.NotificationRepository),
    __metadata("design:type", notification_repository_1.NotificationRepository)
], IncidentController.prototype, "repoNotification", void 0);
__decorate([
    express_dependency_injection_1.Inject(userNotification_repository_1.NotificaionUserRepository),
    __metadata("design:type", userNotification_repository_1.NotificaionUserRepository)
], IncidentController.prototype, "repoNotificationUser", void 0);
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
], IncidentController.prototype, "post", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/:id",
        verb: express_dependency_injection_1.HttpVerbs.GET
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], IncidentController.prototype, "get", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/",
        verb: express_dependency_injection_1.HttpVerbs.GET
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], IncidentController.prototype, "findAll", null);
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
], IncidentController.prototype, "put", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/delete/:id",
        verb: express_dependency_injection_1.HttpVerbs.DELETE
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], IncidentController.prototype, "delete", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/user-incident/:idUser",
        verb: express_dependency_injection_1.HttpVerbs.GET,
        middlewares: []
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], IncidentController.prototype, "findIncidentUser", null);
IncidentController = __decorate([
    express_dependency_injection_1.ExRouter({
        path: "/incident"
    })
], IncidentController);
exports.IncidentController = IncidentController;
//# sourceMappingURL=incident.controller.js.map