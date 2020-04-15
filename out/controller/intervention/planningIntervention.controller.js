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
const planningIntervention_model_1 = require("../../models/intervention/planningIntervention.model");
const planningIntervention_repository_1 = require("../../repository/intervention/planningIntervention.repository");
/**
 * Controller lié aux Planning d'intervention.
 */
let PlanningInterventionController = class PlanningInterventionController extends express_dependency_injection_1.AbstractRouter {
    /**
     * Enregistrement d'une Planning d'intervention
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    post(_req, res, args) {
        let newPlanningIntervention = new planningIntervention_model_1.PlanningIntervention();
        newPlanningIntervention.setCodeIntervention(args.body.codeIntervention);
        newPlanningIntervention.setTitle(args.body.title);
        newPlanningIntervention.setStartDate(args.body.startDate);
        newPlanningIntervention.setEndDate(args.body.endDate);
        let clientCode = this.repoPlanningIntervention.utilsService.getObjectId(args.body.clientCode);
        let managerCode = this.repoPlanningIntervention.utilsService.getObjectId(args.body.managerCode);
        let adminCode = this.repoPlanningIntervention.utilsService.getObjectId(args.body.adminCode);
        let commercialCode = this.repoPlanningIntervention.utilsService.getObjectId(args.body.commercialCode);
        let intervenantCode = this.repoPlanningIntervention.utilsService.getObjectId(args.body.intervenantCode);
        newPlanningIntervention.setClientCode(clientCode);
        newPlanningIntervention.setManagerCode(managerCode);
        newPlanningIntervention.setAdminCode(adminCode);
        newPlanningIntervention.setCommercialCode(commercialCode);
        newPlanningIntervention.setIntervenantCode(intervenantCode);
        return rxjs_1.from(this.repoPlanningIntervention.save(newPlanningIntervention)).subscribe(data => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Retourne une planning à partir de son id
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    get(_req, res, args) {
        return rxjs_1.from(this.repoPlanningIntervention.findById(args.params.id)).subscribe(data => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Retourne la liste de tous les plannings
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    findAll(_req, res, args) {
        return rxjs_1.from(this.repoPlanningIntervention.getAll()).subscribe(data => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Modification d'une planning à partir de son id
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    put(_req, res, args) {
        return rxjs_1.from(this.repoPlanningIntervention.update(args.params.id, args.body)).subscribe(data => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Suppression d'une planning à partir de son id
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    delete(_req, res, args) {
        return rxjs_1.from(this.repoPlanningIntervention.delete(args.params.id)).subscribe(data => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Retourn le planning d'un utilisateur
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    findPlanningByUser(_req, res, args) {
        return rxjs_1.from(this.repoPlanningIntervention.findPlanningByUser(args.body.userCode, args.body.role)).subscribe(data => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
};
__decorate([
    express_dependency_injection_1.Inject(planningIntervention_repository_1.PlanningInterventionRepository),
    __metadata("design:type", planningIntervention_repository_1.PlanningInterventionRepository)
], PlanningInterventionController.prototype, "repoPlanningIntervention", void 0);
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
], PlanningInterventionController.prototype, "post", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/:id",
        verb: express_dependency_injection_1.HttpVerbs.GET
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], PlanningInterventionController.prototype, "get", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/",
        verb: express_dependency_injection_1.HttpVerbs.GET
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], PlanningInterventionController.prototype, "findAll", null);
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
], PlanningInterventionController.prototype, "put", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/delete/:id",
        verb: express_dependency_injection_1.HttpVerbs.DELETE
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], PlanningInterventionController.prototype, "delete", null);
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
], PlanningInterventionController.prototype, "findPlanningByUser", null);
PlanningInterventionController = __decorate([
    express_dependency_injection_1.ExRouter({
        path: "/planning"
    })
], PlanningInterventionController);
exports.PlanningInterventionController = PlanningInterventionController;
//# sourceMappingURL=planningIntervention.controller.js.map