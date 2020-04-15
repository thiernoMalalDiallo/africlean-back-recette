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
const manager_repository_1 = require("../../repository/users/manager.repository");
const manager_model_1 = require("../../models/users/manager.model");
const operators_1 = require("rxjs/operators");
const login_model_1 = require("../../models/users/login.model");
const login_repository_1 = require("../../repository/users/login.repository");
const control_registration_fields_service_1 = require("../../services/fields/control-registration-fields.service");
/**
 * Controller lié aux managers.
 */
let ManagerController = class ManagerController extends express_dependency_injection_1.AbstractRouter {
    /**
     * Enregistrement d'un manager
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    post(_req, res, args) {
        /*
                if(!this.controlFields.controlRegistration(args.body)){
                    return this.controlFields.getErroMessge('Veuillez remplir correctement les champs', res);
                }*/
        let newManager = new manager_model_1.Manager();
        newManager.setFirstName(args.body.firstName);
        newManager.setLastName(args.body.lastName);
        newManager.setGenderOfUser(args.body.gender);
        newManager.setEmail(args.body.email);
        let passHashed = user_model_1.User.hashPassword(args.body.password);
        newManager.setPassword(passHashed);
        newManager.setPhoneNumber(args.body.phoneNumber);
        newManager.setDateOfCreation(new Date());
        return rxjs_1.from(this.repoManager.save(newManager)).pipe(operators_1.mergeMap((manager) => {
            let newLogin = new login_model_1.Login();
            newLogin.setLogin(manager.getPhoneNumber());
            newLogin.setPassword(manager.getPassword());
            newLogin.setRole('MANAGER');
            let managerCode = this.repoManager.utilsService.getObjectId(manager.getObjectId());
            newLogin.setUser(managerCode);
            return rxjs_1.from(this.repoLogin.save(newLogin)).pipe(operators_1.map((res) => {
                return manager;
            }));
        })).subscribe((data) => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Retourne un manager à partir de son id
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    get(_req, res, args) {
        return rxjs_1.from(this.repoManager.findById(args.params.id)).subscribe((data) => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Retourne tous les managers
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    findAll(_req, res, args) {
        return rxjs_1.from(this.repoManager.getAll()).subscribe((data) => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Modification d'un manager
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    put(_req, res, args) {
        return rxjs_1.from(this.repoManager.updatePassWord(args.params.id, args.body)).subscribe((data) => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Suppression d'un manager
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    delete(_req, res, args) {
        return rxjs_1.from(this.repoManager.delete(args.params.id)).subscribe((data) => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Modification d'un address
     * @param _req
     * @param res
     * @param args
     */
    saveAdress(_req, res, args) {
        return rxjs_1.from(this.repoManager.saveAdress(args.params.id, args.body.nameOfHome, args.body.sectorCode)).subscribe((data) => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Retourne la liste des maison du manager
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    getHomeByUser(_req, res, args) {
        return rxjs_1.from(this.repoManager.getManagerHome(args.params.id)).subscribe((data) => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Retourner les id des managers
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    getManaerId(_req, res, args) {
        return rxjs_1.from(this.repoManager.getAllManagerIds()).subscribe((data) => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
};
__decorate([
    express_dependency_injection_1.Inject(manager_repository_1.ManagerRepository),
    __metadata("design:type", manager_repository_1.ManagerRepository)
], ManagerController.prototype, "repoManager", void 0);
__decorate([
    express_dependency_injection_1.Inject(login_repository_1.LoginRepository),
    __metadata("design:type", login_repository_1.LoginRepository)
], ManagerController.prototype, "repoLogin", void 0);
__decorate([
    express_dependency_injection_1.Inject(control_registration_fields_service_1.ControlRegistrationFields),
    __metadata("design:type", Object)
], ManagerController.prototype, "controlFields", void 0);
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
], ManagerController.prototype, "post", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/:id",
        verb: express_dependency_injection_1.HttpVerbs.GET
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], ManagerController.prototype, "get", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/",
        verb: express_dependency_injection_1.HttpVerbs.GET
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], ManagerController.prototype, "findAll", null);
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
], ManagerController.prototype, "put", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/delete/:id",
        verb: express_dependency_injection_1.HttpVerbs.DELETE
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], ManagerController.prototype, "delete", null);
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
], ManagerController.prototype, "saveAdress", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/home-by-user/:id",
        verb: express_dependency_injection_1.HttpVerbs.GET
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], ManagerController.prototype, "getHomeByUser", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/managerIds",
        verb: express_dependency_injection_1.HttpVerbs.GET
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], ManagerController.prototype, "getManaerId", null);
ManagerController = __decorate([
    express_dependency_injection_1.ExRouter({
        path: "/manager"
    })
], ManagerController);
exports.ManagerController = ManagerController;
//# sourceMappingURL=manager.controller.js.map