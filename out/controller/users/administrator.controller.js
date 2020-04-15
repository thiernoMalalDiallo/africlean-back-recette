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
const administrator_repository_1 = require("../../repository/users/administrator.repository");
const login_repository_1 = require("../../repository/users/login.repository");
const login_model_1 = require("../../models/users/login.model");
const administrator_model_1 = require("../../models/users/administrator.model");
const control_registration_fields_service_1 = require("../../services/fields/control-registration-fields.service");
/**
 * Controller lié aux administrateurs.
 */
let AdministratorController = class AdministratorController extends express_dependency_injection_1.AbstractRouter {
    /**
     * Enregistrement d'un administrateur
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    post(_req, res, args) {
        /*  if(!this.controlFields.controlRegistration(args.body)){
              return this.controlFields.getErroMessge('Veuillez remplir correctement les champs', res);
          }*/
        let newAdmin = new administrator_model_1.Administrator();
        newAdmin.setFirstName(args.body.firstName);
        newAdmin.setLastName(args.body.lastName);
        newAdmin.setGenderOfUser(args.body.gender);
        newAdmin.setEmail(args.body.email);
        let passHashed = user_model_1.User.hashPassword(args.body.password);
        newAdmin.setPassword(passHashed);
        newAdmin.setPhoneNumber(args.body.phoneNumber);
        newAdmin.setDateOfCreation(new Date());
        return rxjs_1.from(this.repoAdmin.save(newAdmin)).pipe(operators_1.mergeMap((admin) => {
            let newLogin = new login_model_1.Login();
            newLogin.setLogin(admin.getPhoneNumber());
            newLogin.setPassword(admin.getPassword());
            newLogin.setRole('ADMIN');
            let adminCode = this.repoAdmin.utilsService.getObjectId(admin.getObjectId());
            newLogin.setUser(adminCode);
            return rxjs_1.from(this.repoLogin.save(newLogin)).pipe(operators_1.map((res) => {
                return admin;
            }));
        })).subscribe((data) => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end()
        //this.repoLogin.closeDatabase();
        );
    }
    /**
     * Retourn un administrateur à partir de son id
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    get(_req, res, args) {
        return rxjs_1.from(this.repoAdmin.findById(args.params.id)).subscribe(data => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Retourne la liste de tous les utilisateurs
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    findAll(_req, res) {
        return rxjs_1.from(this.repoAdmin.getAll()).subscribe((data) => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Modification d'un utilisateur
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    put(_req, res, args) {
        return rxjs_1.from(this.repoAdmin.updatePassWord(args.params.id, args.body)).subscribe((data) => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Suppression d'un utilisateur
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    delete(_req, res, args) {
        return rxjs_1.from(this.repoAdmin.delete(args.params.id)).subscribe(data => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Retourne la liste des maison de l'utilisateur
     * @param _req Request
     * @param res Response
     * @param args Arguments
     */
    getHomeByUser(_req, res, args) {
        return rxjs_1.from(this.repoAdmin.getAdminHome(args.params.id)).subscribe(data => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
    /**
     * Modification d'un address
     * @param _req
     * @param res
     * @param args
     */
    saveAdress(_req, res, args) {
        return rxjs_1.from(this.repoAdmin.saveAdress(args.params.id, args.body.nameOfHome, args.body.sectorCode)).subscribe((data) => data != null ? res.json(data) : null, error => res.status(500).send({ message: 'la requête à été interompu : ' + error }), () => res.end());
    }
};
__decorate([
    express_dependency_injection_1.Inject(administrator_repository_1.AdministratorRepository),
    __metadata("design:type", administrator_repository_1.AdministratorRepository)
], AdministratorController.prototype, "repoAdmin", void 0);
__decorate([
    express_dependency_injection_1.Inject(login_repository_1.LoginRepository),
    __metadata("design:type", login_repository_1.LoginRepository)
], AdministratorController.prototype, "repoLogin", void 0);
__decorate([
    express_dependency_injection_1.Inject(control_registration_fields_service_1.ControlRegistrationFields),
    __metadata("design:type", Object)
], AdministratorController.prototype, "controlFields", void 0);
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
], AdministratorController.prototype, "post", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/:id",
        verb: express_dependency_injection_1.HttpVerbs.GET
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], AdministratorController.prototype, "get", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/",
        verb: express_dependency_injection_1.HttpVerbs.GET
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], AdministratorController.prototype, "findAll", null);
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
], AdministratorController.prototype, "put", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/delete/:id",
        verb: express_dependency_injection_1.HttpVerbs.DELETE
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], AdministratorController.prototype, "delete", null);
__decorate([
    express_dependency_injection_1.ExRoute({
        path: "/home-by-user/:id",
        verb: express_dependency_injection_1.HttpVerbs.GET
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", rxjs_1.Subscription)
], AdministratorController.prototype, "getHomeByUser", null);
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
], AdministratorController.prototype, "saveAdress", null);
AdministratorController = __decorate([
    express_dependency_injection_1.ExRouter({
        path: "/admin"
    })
], AdministratorController);
exports.AdministratorController = AdministratorController;
//# sourceMappingURL=administrator.controller.js.map