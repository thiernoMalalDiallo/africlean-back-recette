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
const client_repository_1 = require("../../repository/users/client.repository");
const operators_1 = require("rxjs/operators");
const login_model_1 = require("../../models/users/login.model");
const login_repository_1 = require("../../repository/users/login.repository");
const client_model_1 = require("../../models/users/client.model");
const control_registration_fields_service_1 = require("../../services/fields/control-registration-fields.service");
const home_repository_1 = require("../../repository/localisation/home.repository");
const homeUsers_repository_1 = require("../../repository/localisation/homeUsers.repository");
const user_model_1 = require("../../models/users/user.model");
/**
 * Controller lié aux clients.
 */
let ClientController = class ClientController extends express_dependency_injection_1.AbstractRouter {
    /**
     * Retourne un client
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    get(_req, res, args) {
        return rxjs_1.from(this.repoClient.findById(args.params.id)).subscribe((data) => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Retourne tous les clients
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    findAll(_req, res, args) {
        return rxjs_1.from(this.repoClient.getAll()).subscribe((data) => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Enregistrement d'un client
     * @param _req
     * @param res
     * @param args
     */
    post(_req, res, args) {
        /*  if(!this.controlFields.controlRegistration(args.body)){
              return this.controlFields.getErroMessge('Veuillez remplir correctement les champs', res);
          }*/
        let newClient = new client_model_1.Client();
        newClient.setFirstName(args.body.firstName);
        newClient.setLastName(args.body.lastName);
        newClient.setGenderOfUser(args.body.gender);
        newClient.setEmail(args.body.email);
        let passHashed = user_model_1.User.hashPassword(args.body.password);
        newClient.setPassword(passHashed);
        newClient.setIsSubscribe('NULL');
        newClient.setPhoneNumber(args.body.phoneNumber);
        newClient.setDateOfCreation(new Date());
        return rxjs_1.from(this.repoClient.save(newClient)).pipe(operators_1.mergeMap((client) => {
            let newLogin = new login_model_1.Login();
            newLogin.setLogin(client.getPhoneNumber());
            newLogin.setPassword(client.getPassword());
            newLogin.setRole('CLIENT');
            let clientCode = this.repoClient.utilsService.getObjectId(client.getObjectId());
            newLogin.setUser(clientCode);
            return rxjs_1.from(this.repoLogin.save(newLogin)).pipe(operators_1.map((res) => {
                return client;
            }));
        })).subscribe((data) => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Enregistrement d'une addresse
     * @param _req
     * @param res
     * @param args
     */
    saveAdress(_req, res, args) {
        return rxjs_1.from(this.repoClient.saveAdress(args.params.id, args.body.nameOfHome, args.body.sectorCode)).subscribe((data) => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Suppression d'une addresse
     * @param _req
     * @param res
     * @param args
     */
    delateAdress(_req, res, args) {
        return rxjs_1.from(this.repoClient.deleteAdress(args.body.clientCode, args.body.homeCode)).subscribe((data) => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Retourne la liste de tous de maison des utilisateurs
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    getHomeByUser(_req, res, args) {
        return rxjs_1.from(this.repoClient.getClientHome(args.params.id)).subscribe((data) => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
};
__decorate([
    express_dependency_injection_1.Inject(client_repository_1.ClientRepository),
    __metadata("design:type", client_repository_1.ClientRepository)
], ClientController.prototype, "repoClient", void 0);
__decorate([
    express_dependency_injection_1.Inject(login_repository_1.LoginRepository),
    __metadata("design:type", login_repository_1.LoginRepository)
], ClientController.prototype, "repoLogin", void 0);
__decorate([
    express_dependency_injection_1.Inject(login_repository_1.LoginRepository),
    __metadata("design:type", home_repository_1.HomeRepository)
], ClientController.prototype, "repoHome", void 0);
__decorate([
    express_dependency_injection_1.Inject(login_repository_1.LoginRepository),
    __metadata("design:type", homeUsers_repository_1.HomeUsersRepository)
], ClientController.prototype, "reposHomeUsers", void 0);
__decorate([
    express_dependency_injection_1.Inject(control_registration_fields_service_1.ControlRegistrationFields),
    __metadata("design:type", Object)
], ClientController.prototype, "controlFields", void 0);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/:id",
        verb: express_dependency_injection_1.HttpVerbs.GET
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], ClientController.prototype, "get", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/",
        verb: express_dependency_injection_1.HttpVerbs.GET
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], ClientController.prototype, "findAll", null);
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
], ClientController.prototype, "post", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/save-adress/:id",
        verb: express_dependency_injection_1.HttpVerbs.POST,
        middlewares: [
            body_parser_middleware_1.BodyParserMiddleware
        ]
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], ClientController.prototype, "saveAdress", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/delete-adress",
        verb: express_dependency_injection_1.HttpVerbs.POST,
        middlewares: [
            body_parser_middleware_1.BodyParserMiddleware
        ]
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], ClientController.prototype, "delateAdress", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/home-by-user/:id",
        verb: express_dependency_injection_1.HttpVerbs.GET
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], ClientController.prototype, "getHomeByUser", null);
ClientController = __decorate([
    express_dependency_injection_1.ExRouter({
        path: "/client"
    })
], ClientController);
exports.ClientController = ClientController;
//# sourceMappingURL=client.controller.js.map