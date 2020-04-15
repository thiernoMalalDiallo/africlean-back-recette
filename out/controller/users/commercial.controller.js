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
const operators_1 = require("rxjs/operators");
const express_dependency_injection_1 = require("express-dependency-injection");
const body_parser_middleware_1 = require("../../middlewares/body-parser/body.parser.middleware");
const user_model_1 = require("../../models/users/user.model");
const commercial_repository_1 = require("../../repository/users/commercial.repository");
const commercial_model_1 = require("../../models/users/commercial.model");
const login_repository_1 = require("../../repository/users/login.repository");
const login_model_1 = require("../../models/users/login.model");
const control_registration_fields_service_1 = require("../../services/fields/control-registration-fields.service");
/**
 * Controller lié aux commerciaux.
 */
let CommercialController = class CommercialController extends express_dependency_injection_1.AbstractRouter {
    /**
     * Enregistrement un commercial
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    post(_req, res, args) {
        /*if(!this.controlFields.controlRegistration(args.body)){
            return this.controlFields.getErroMessge('Veuillez remplir correctement les champs', res);
        }*/
        let newCommercial = new commercial_model_1.Commercial();
        newCommercial.setFirstName(args.body.firstName);
        newCommercial.setLastName(args.body.lastName);
        newCommercial.setGenderOfUser(args.body.gender);
        newCommercial.setEmail(args.body.email);
        let passHashed = user_model_1.User.hashPassword(args.body.password);
        newCommercial.setPassword(passHashed);
        newCommercial.setPhoneNumber(args.body.phoneNumber);
        newCommercial.setDateOfCreation(new Date());
        return rxjs_1.from(this.repoCommercial.save(newCommercial)).pipe(operators_1.mergeMap((commercial) => {
            let newLogin = new login_model_1.Login();
            newLogin.setLogin(commercial.getPhoneNumber());
            newLogin.setPassword(commercial.getPassword());
            newLogin.setRole('COMMERCIAL');
            let commercialCode = this.repoCommercial.utilsService.getObjectId(commercial.getObjectId());
            newLogin.setUser(commercialCode);
            return rxjs_1.from(this.repoLogin.save(newLogin)).pipe(operators_1.map((res) => {
                return commercial;
            }));
        })).subscribe((data) => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Retourne un commercial
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    get(_req, res, args) {
        return rxjs_1.from(this.repoCommercial.findById(args.params.id)).subscribe((data) => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Retourne la liste des tous les commerciaux
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    findAll(_req, res, args) {
        return rxjs_1.from(this.repoCommercial.getAll()).subscribe((data) => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Modification d'un commercial
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    put(_req, res, args) {
        return rxjs_1.from(this.repoCommercial.updatePassWord(args.params.id, args.body)).subscribe((data) => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Suppression d'un commercial
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    delete(_req, res, args) {
        return rxjs_1.from(this.repoCommercial.delete(args.params.id)).subscribe((data) => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Modification d'un address
     * @param _req
     * @param res
     * @param args
     */
    update(_req, res, args) {
        return rxjs_1.from(this.repoCommercial.saveAdress(args.params.id, args.body.nameOfHome, args.body.sectorCode)).subscribe((data) => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Retourne la liste des maison de l'utilisateur
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    getHomeByUser(_req, res, args) {
        return rxjs_1.from(this.repoCommercial.getCommercialHome(args.params.id)).subscribe((data) => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Modification d'un address
     * @param _req
     * @param res
     * @param args
     */
    saveAdress(_req, res, args) {
        return rxjs_1.from(this.repoCommercial.saveAdress(args.params.id, args.body.nameOfHome, args.body.sectorCode)).subscribe((data) => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
};
__decorate([
    express_dependency_injection_1.Inject(commercial_repository_1.CommercialRepository),
    __metadata("design:type", commercial_repository_1.CommercialRepository)
], CommercialController.prototype, "repoCommercial", void 0);
__decorate([
    express_dependency_injection_1.Inject(login_repository_1.LoginRepository),
    __metadata("design:type", login_repository_1.LoginRepository)
], CommercialController.prototype, "repoLogin", void 0);
__decorate([
    express_dependency_injection_1.Inject(control_registration_fields_service_1.ControlRegistrationFields),
    __metadata("design:type", Object)
], CommercialController.prototype, "controlFields", void 0);
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
], CommercialController.prototype, "post", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/:id",
        verb: express_dependency_injection_1.HttpVerbs.GET
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], CommercialController.prototype, "get", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/",
        verb: express_dependency_injection_1.HttpVerbs.GET
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], CommercialController.prototype, "findAll", null);
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
], CommercialController.prototype, "put", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/delete/:id",
        verb: express_dependency_injection_1.HttpVerbs.DELETE
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], CommercialController.prototype, "delete", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/update_adress/:id",
        verb: express_dependency_injection_1.HttpVerbs.PUT,
        middlewares: [
            body_parser_middleware_1.BodyParserMiddleware
        ]
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], CommercialController.prototype, "update", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/home-by-user/:id",
        verb: express_dependency_injection_1.HttpVerbs.GET
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], CommercialController.prototype, "getHomeByUser", null);
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
], CommercialController.prototype, "saveAdress", null);
CommercialController = __decorate([
    express_dependency_injection_1.ExRouter({
        path: "/commercial"
    })
], CommercialController);
exports.CommercialController = CommercialController;
//# sourceMappingURL=commercial.controller.js.map