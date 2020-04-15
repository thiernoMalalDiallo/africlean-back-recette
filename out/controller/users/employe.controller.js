"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_dependency_injection_1 = require("express-dependency-injection");
const access_control_allow_origin_middleware_1 = require("../../middlewares/headers/response/access-control-allow-origin.middleware");
const access_control_allow_headers_middleware_1 = require("../../middlewares/headers/response/access-control-allow-headers.middleware");
const access_control_allow_methods_middleware_1 = require("../../middlewares/headers/response/access-control-allow-methods.middleware");
const administrator_controller_1 = require("./administrator.controller");
const commercial_controller_1 = require("./commercial.controller");
const manager_controller_1 = require("./manager.controller");
const intervenant_controller_1 = require("./intervenant.controller");
/**
 * Controller principal des employer l' de l'application - toutes les requêtes qui concerne les employés passeront par la.
 */
let EmployeController = class EmployeController extends express_dependency_injection_1.AbstractRouter {
};
EmployeController = __decorate([
    express_dependency_injection_1.ExRouter({
        path: "/employe",
        middlewares: [
            access_control_allow_origin_middleware_1.AccessControlAllowOriginMiddleware,
            access_control_allow_headers_middleware_1.AccessControlAllowHeadersMiddleware,
            access_control_allow_methods_middleware_1.AccessControlAllowMethodsMiddleware
        ],
        routers: [
            administrator_controller_1.AdministratorController,
            commercial_controller_1.CommercialController,
            intervenant_controller_1.IntervenantController,
            manager_controller_1.ManagerController
        ]
    })
], EmployeController);
exports.EmployeController = EmployeController;
//# sourceMappingURL=employe.controller.js.map