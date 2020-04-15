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
const rxjs_1 = require("rxjs");
const express_dependency_injection_1 = require("express-dependency-injection");
const body_parser_middleware_1 = require("../../middlewares/body-parser/body.parser.middleware");
const user_model_1 = require("../../models/users/user.model");
const intervenant_repository_1 = require("../../repository/users/intervenant.repository");
const intervenant_model_1 = require("../../models/users/intervenant.model");
const operators_1 = require("rxjs/operators");
const login_model_1 = require("../../models/users/login.model");
const login_repository_1 = require("../../repository/users/login.repository");
const control_registration_fields_service_1 = require("../../services/fields/control-registration-fields.service");
/**
 * Controller lié aux intervenants.
 */
let IntervenantController = class IntervenantController extends express_dependency_injection_1.AbstractRouter {
    /**
     * Enregistrement d'un intervenant
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    post(_req, res, args) {
        //
        // if(!this.controlFields.controlRegistration(args.body)){
        //     return this.controlFields.getErroMessge('Veuillez remplir correctement les champs', res);
        // }
        let newIntervenant = new intervenant_model_1.Intervenant();
        newIntervenant.setFirstName(args.body.firstName);
        newIntervenant.setLastName(args.body.lastName);
        newIntervenant.setGenderOfUser(args.body.gender);
        newIntervenant.setEmail(args.body.email);
        let passHashed = user_model_1.User.hashPassword(args.body.password);
        newIntervenant.setPassword(passHashed);
        newIntervenant.setPhoneNumber(args.body.phoneNumber);
        newIntervenant.setDateOfCreation(new Date());
        return rxjs_1.from(this.repoIntervenant.save(newIntervenant)).pipe(operators_1.mergeMap((intervenant) => {
            let newLogin = new login_model_1.Login();
            newLogin.setLogin(intervenant.getPhoneNumber());
            newLogin.setPassword(intervenant.getPassword());
            newLogin.setRole('INTERVENANT');
            let intervenantCode = this.repoIntervenant.utilsService.getObjectId(intervenant.getObjectId());
            newLogin.setUser(intervenantCode);
            return rxjs_1.from(this.repoLogin.save(newLogin)).pipe(operators_1.map((res) => {
                return intervenant;
            }));
        })).subscribe((data) => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Retourne un intervenant
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    get(_req, res, args) {
        return rxjs_1.from(this.repoIntervenant.findById(args.params.id)).subscribe((data) => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Retourne la liste de tous les intervenants
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    findAll(_req, res, args) {
        return rxjs_1.from(this.repoIntervenant.getAll()).subscribe((data) => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Modification d'un intervenant
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    put(_req, res, args) {
        return rxjs_1.from(this.repoIntervenant.updatePassWord(args.params.id, args.body)).subscribe((data) => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Suppression d'un intervenant
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    delete(_req, res, args) {
        return rxjs_1.from(this.repoIntervenant.delete(args.params.id)).subscribe((data) => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Modification d'un address
     * @param _req
     * @param res
     * @param args
     */
    saveAdress(_req, res, args) {
        return rxjs_1.from(this.repoIntervenant.saveAdress(args.params.id, args.body.nameOfHome, args.body.sectorCode)).subscribe((data) => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
};
__decorate([
    express_dependency_injection_1.Inject(intervenant_repository_1.IntervenantRepository),
    __metadata("design:type", intervenant_repository_1.IntervenantRepository)
], IntervenantController.prototype, "repoIntervenant", void 0);
__decorate([
    express_dependency_injection_1.Inject(login_repository_1.LoginRepository),
    __metadata("design:type", login_repository_1.LoginRepository)
], IntervenantController.prototype, "repoLogin", void 0);
__decorate([
    express_dependency_injection_1.Inject(control_registration_fields_service_1.ControlRegistrationFields),
    __metadata("design:type", Object)
], IntervenantController.prototype, "controlFields", void 0);
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
], IntervenantController.prototype, "post", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/:id",
        verb: express_dependency_injection_1.HttpVerbs.GET
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], IntervenantController.prototype, "get", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/",
        verb: express_dependency_injection_1.HttpVerbs.GET
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], IntervenantController.prototype, "findAll", null);
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
], IntervenantController.prototype, "put", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/delete/:id",
        verb: express_dependency_injection_1.HttpVerbs.DELETE
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], IntervenantController.prototype, "delete", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/update-adress/:id",
        verb: express_dependency_injection_1.HttpVerbs.PUT,
        middlewares: [
            body_parser_middleware_1.BodyParserMiddleware
        ]
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], IntervenantController.prototype, "saveAdress", null);
IntervenantController = __decorate([
    express_dependency_injection_1.ExRouter({
        path: "/intervenant"
    })
], IntervenantController);
exports.IntervenantController = IntervenantController;
//# sourceMappingURL=intervenant.controller.js.map