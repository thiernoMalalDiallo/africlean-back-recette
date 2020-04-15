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
const login_repository_1 = require("../../repository/users/login.repository");
const login_model_1 = require("../../models/users/login.model");
const user_model_1 = require("../../models/users/user.model");
/**
 * Controller lié aux login.
 */
let LoginController = class LoginController extends express_dependency_injection_1.AbstractRouter {
    /**
     * Enregistre un login
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    post(_req, res, args) {
        let newLogin = new login_model_1.Login();
        newLogin.setLogin(args.body.login);
        let passHashed = user_model_1.User.hashPassword(args.body.password);
        newLogin.setPassword(args.body.password);
        newLogin.setRole(args.body.role);
        let loginCode = this.repoLogin.utilsService.getObjectId(args.body.login);
        newLogin.setUser(loginCode);
        return rxjs_1.from(this.repoLogin.save(newLogin)).subscribe(data => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => {
            res.end();
            //  this.repoLogin.closeDatabase()
        });
    }
    /**
     * retourner un login
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    get(_req, res, args) {
        return rxjs_1.from(this.repoLogin.findById(args.params.id)).subscribe(data => data != null ? res.json(data) : null, error => {
            res.status(500).send({ message: 'la requête à été interompu : ' + error });
            // this.repoLogin.closeDatabase()
        }, () => {
            res.end();
            //  this.repoLogin.closeDatabase()
        });
    }
    /**
     * retourner tous les login
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    findAll(_req, res, args) {
        return rxjs_1.from(this.repoLogin.getAll()).subscribe(data => data != null ? res.json(data) : null, error => {
            res.status(500).send({ message: 'la requête à été interompu : ' + error });
            //  this.repoLogin.closeDatabase()
        }, () => {
            res.end();
            //   this.repoLogin.closeDatabase()
        });
    }
    /**
     * supprimer un login
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    delete(_req, res, args) {
        return rxjs_1.from(this.repoLogin.delete(args.params.id)).subscribe(data => data != null ? res.json(data) : null, error => {
            res.status(500).send({ message: 'la requête à été interompu : ' + error });
            //  this.repoLogin.closeDatabase()
        }, () => {
            res.end();
            //  this.repoLogin.closeDatabase()
        });
    }
    /**
     * retourner un utilisateur
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    getUserByLogin(_req, res, args) {
        return rxjs_1.from(this.repoLogin.findUserByLoginId(args.params.id)).subscribe(data => data != null ? res.json(data) : null, error => {
            res.status(500).send({ message: 'la requête à été interompu : ' + error });
        }, () => {
            res.end();
        });
    }
    /**
     * retourner un login
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    getLogin(_req, res, args) {
        return rxjs_1.from(this.repoLogin.findUserByLogin(args.body.login, args.body.password)).subscribe(data => data != null ? res.json(data) : null, error => {
            res.status(500).send({ message: 'la requête à été interompu : ' + error });
        }, () => {
            res.end();
        });
    }
};
__decorate([
    express_dependency_injection_1.Inject(login_repository_1.LoginRepository),
    __metadata("design:type", login_repository_1.LoginRepository)
], LoginController.prototype, "repoLogin", void 0);
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
], LoginController.prototype, "post", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/:id",
        verb: express_dependency_injection_1.HttpVerbs.GET
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], LoginController.prototype, "get", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/",
        verb: express_dependency_injection_1.HttpVerbs.GET
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], LoginController.prototype, "findAll", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/delete/:id",
        verb: express_dependency_injection_1.HttpVerbs.DELETE
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], LoginController.prototype, "delete", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/user-loged/:id",
        verb: express_dependency_injection_1.HttpVerbs.GET
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], LoginController.prototype, "getUserByLogin", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/login-user",
        verb: express_dependency_injection_1.HttpVerbs.POST,
        middlewares: [
            body_parser_middleware_1.BodyParserMiddleware
        ]
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], LoginController.prototype, "getLogin", null);
LoginController = __decorate([
    express_dependency_injection_1.ExRouter({
        path: "/login"
    })
], LoginController);
exports.LoginController = LoginController;
//# sourceMappingURL=login.controller.js.map