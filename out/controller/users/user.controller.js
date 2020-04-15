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
const access_control_allow_origin_middleware_1 = require("../../middlewares/headers/response/access-control-allow-origin.middleware");
const access_control_allow_headers_middleware_1 = require("../../middlewares/headers/response/access-control-allow-headers.middleware");
const access_control_allow_methods_middleware_1 = require("../../middlewares/headers/response/access-control-allow-methods.middleware");
const client_controller_1 = require("./client.controller");
const employe_controller_1 = require("./employe.controller");
const user_repository_1 = require("../../repository/users/user.repository");
const rxjs_1 = require("rxjs");
const body_parser_middleware_1 = require("../../middlewares/body-parser/body.parser.middleware");
/**
 * Controller principal des utilisateurs - toutes les requêtes qui concerne les utilisateurs passeront par la.
 */
let UserController = class UserController extends express_dependency_injection_1.AbstractRouter {
    /**
     * Retourne tous les utilisateurs
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    get(_req, res) {
        return rxjs_1.from(this.repoUser.getAll()).subscribe(data => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Retourne toutes les adresses d'un utilisateur
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    getAdress(_req, res, args) {
        return rxjs_1.from(this.repoUser.getHomesAdress(args.params.idUser, args.body.role)).subscribe(data => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Retourne toutes les adresses qui n'ont pas d'abonnement
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    getFreeAdress(_req, res, args) {
        return rxjs_1.from(this.repoUser.getFreeAdress(args.params.idUser, args.body.role)).subscribe(data => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Retourne toutes les adresses qui n'ont pas d'abonnement
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    getSubscribeAdress(_req, res, args) {
        return rxjs_1.from(this.repoUser.getSubscribeAdress(args.params.idUser, args.body.role)).subscribe(data => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Enregistrement d'une addresse
     * @param _req
     * @param res
     * @param args
     */
    saveAdress(_req, res, args) {
        return rxjs_1.from(this.repoUser.saveAdress(args.params.id, args.body.nameOfHome, args.body.sectorCode, args.body.role)).subscribe((data) => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Suppression de l'addresse d'un utilisateur
     * @param _req
     * @param res
     * @param args
     */
    updateAdress(_req, res, args) {
        return rxjs_1.from(this.repoUser.updateAdress(args.body.homeCode, args.body.nameOfHome, args.body.sectorCode)).subscribe((data) => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Suppression de l'addresse d'un utilisateur
     * @param _req
     * @param res
     * @param args
     */
    delateAdress(_req, res, args) {
        return rxjs_1.from(this.repoUser.deleteUserAdress(args.body.userCode, args.body.homeCode)).subscribe((data) => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Mise à jour les informations user
     * @param _req
     * @param res
     * @param args
     */
    updateInformations(_req, res, args) {
        return rxjs_1.from(this.repoUser.updateUserInfos(args.body)).subscribe((data) => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Mise à jour du mot de passe user
     * @param _req
     * @param res
     * @param args
     */
    updatePassword(_req, res, args) {
        return rxjs_1.from(this.repoUser.updatePassword(args.body)).subscribe((data) => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
};
__decorate([
    express_dependency_injection_1.Inject(user_repository_1.UserRepository),
    __metadata("design:type", user_repository_1.UserRepository)
], UserController.prototype, "repoUser", void 0);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/",
        verb: express_dependency_injection_1.HttpVerbs.GET
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], UserController.prototype, "get", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/adress/:idUser",
        verb: express_dependency_injection_1.HttpVerbs.POST,
        middlewares: [
            body_parser_middleware_1.BodyParserMiddleware
        ]
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], UserController.prototype, "getAdress", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/free-adress/:idUser",
        verb: express_dependency_injection_1.HttpVerbs.POST,
        middlewares: [
            body_parser_middleware_1.BodyParserMiddleware
        ]
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], UserController.prototype, "getFreeAdress", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/subscribe-adress/:idUser",
        verb: express_dependency_injection_1.HttpVerbs.POST,
        middlewares: [
            body_parser_middleware_1.BodyParserMiddleware
        ]
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], UserController.prototype, "getSubscribeAdress", null);
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
], UserController.prototype, "saveAdress", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/update-adress",
        verb: express_dependency_injection_1.HttpVerbs.POST,
        middlewares: [
            body_parser_middleware_1.BodyParserMiddleware
        ]
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], UserController.prototype, "updateAdress", null);
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
], UserController.prototype, "delateAdress", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/update-informations",
        verb: express_dependency_injection_1.HttpVerbs.POST,
        middlewares: [
            body_parser_middleware_1.BodyParserMiddleware
        ]
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], UserController.prototype, "updateInformations", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/update-password",
        verb: express_dependency_injection_1.HttpVerbs.POST,
        middlewares: [
            body_parser_middleware_1.BodyParserMiddleware
        ]
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], UserController.prototype, "updatePassword", null);
UserController = __decorate([
    express_dependency_injection_1.ExRouter({
        path: "/user",
        middlewares: [
            access_control_allow_origin_middleware_1.AccessControlAllowOriginMiddleware,
            access_control_allow_headers_middleware_1.AccessControlAllowHeadersMiddleware,
            access_control_allow_methods_middleware_1.AccessControlAllowMethodsMiddleware
        ],
        routers: [
            client_controller_1.ClientController,
            employe_controller_1.EmployeController
        ]
    })
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map
console.log('USER - CONTROLLER')