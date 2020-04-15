"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_dependency_injection_1 = require("express-dependency-injection");
const access_control_allow_origin_middleware_1 = require("../middlewares/headers/response/access-control-allow-origin.middleware");
const access_control_allow_headers_middleware_1 = require("../middlewares/headers/response/access-control-allow-headers.middleware");
const user_controller_1 = require("./users/user.controller");
const town_controller_1 = require("./localisation/town.controller");
const district_controller_1 = require("./localisation/district.controller");
const sector_controller_1 = require("./localisation/sector.controller");
const home_controller_1 = require("./localisation/home.controller");
const country_controller_1 = require("./localisation/country.controller");
const subscribe_controller_1 = require("./abonnement/subscribe.controller");
const paySubscription_controller_1 = require("./abonnement/paySubscription.controller");
const subscribeTermination_controller_1 = require("./abonnement/subscribeTermination.controller");
const region_controller_1 = require("./localisation/region.controller");
const incident_controller_1 = require("./intervention/incident.controller");
const planningIntervention_controller_1 = require("./intervention/planningIntervention.controller");
const intervention_controller_1 = require("./intervention/intervention.controller");
const access_control_allow_methods_middleware_1 = require("../middlewares/headers/response/access-control-allow-methods.middleware");
const homeUser_controller_1 = require("./localisation/homeUser.controller");
const login_controller_1 = require("./users/login.controller");
const notification_controller_1 = require("./abonnement/notification.controller");
const comment_controller_1 = require("./intervention/comment.controller");
/**
 * Controller principal de l'application - toutes les requêtes passeront par la.
 */
let MainController = class MainController extends express_dependency_injection_1.AbstractRouter {
};
MainController = __decorate([
    express_dependency_injection_1.ExRouter({
        path: "/",
        middlewares: [
            access_control_allow_origin_middleware_1.AccessControlAllowOriginMiddleware,
            access_control_allow_headers_middleware_1.AccessControlAllowHeadersMiddleware,
            access_control_allow_methods_middleware_1.AccessControlAllowMethodsMiddleware
        ],
        routers: [
            user_controller_1.UserController,
            login_controller_1.LoginController,
            homeUser_controller_1.HomeUserController,
            home_controller_1.HomeController,
            sector_controller_1.SectorController,
            district_controller_1.DistrictController,
            town_controller_1.TownController,
            region_controller_1.RegionController,
            country_controller_1.CountryController,
            incident_controller_1.IncidentController,
            planningIntervention_controller_1.PlanningInterventionController,
            intervention_controller_1.InterventionController,
            comment_controller_1.CommentController,
            subscribe_controller_1.SubscribeController,
            paySubscription_controller_1.PaySubscriptionController,
            subscribeTermination_controller_1.SubscribeTerminationController,
            notification_controller_1.NotificationController
        ]
    })
], MainController);
exports.MainController = MainController;
//# sourceMappingURL=main.controller.js.map
