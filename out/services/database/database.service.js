"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var DataBaseService_1;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const express_dependency_injection_1 = require("express-dependency-injection");
const config_service_1 = require("../config/config.service");
const country_model_1 = require("../../models/localisation/country.model");
const town_model_1 = require("../../models/localisation/town.model");
const region_model_1 = require("../../models/localisation/region.model");
const sector_model_1 = require("../../models/localisation/sector.model");
const district_model_1 = require("../../models/localisation/district.model");
const home_model_1 = require("../../models/localisation/home.model");
const homeUsers_model_1 = require("../../models/localisation/homeUsers.model");
const user_model_1 = require("../../models/users/user.model");
const employe_model_1 = require("../../models/users/employe.model");
const client_model_1 = require("../../models/users/client.model");
const intervention_model_1 = require("../../models/intervention/intervention.model");
const intervenant_model_1 = require("../../models/users/intervenant.model");
const manager_model_1 = require("../../models/users/manager.model");
const commercial_model_1 = require("../../models/users/commercial.model");
const subscribeModel_model_1 = require("../../models/abonnement/subscribeModel.model");
const subscribeTermination_model_1 = require("../../models/abonnement/subscribeTermination.model");
const paySubscription_model_1 = require("../../models/abonnement/paySubscription.model");
const planningIntervention_model_1 = require("../../models/intervention/planningIntervention.model");
const incident_model_1 = require("../../models/intervention/incident.model");
const login_model_1 = require("../../models/users/login.model");
const administrator_model_1 = require("../../models/users/administrator.model");
const Comment_model_1 = require("../../models/intervention/Comment.model");
const userNotification_model_1 = require("../../models/abonnement/userNotification.model");
const notificationModel_model_1 = require("../../models/abonnement/notificationModel.model");
let DataBaseService = DataBaseService_1 = class DataBaseService {
    connection() {
        let options = DataBaseService_1.config.getDatabaseConfig();
        let url = `mongodb${options.address}`;
        return typeorm_1.createConnection({
            type: options.type,
            useNewUrlParser: true,
            url: url,
            ssl: true,
            authSource: "admin",
            entities: [
                country_model_1.Country,
                region_model_1.Region,
                town_model_1.Town,
                district_model_1.District,
                sector_model_1.Sector,
                home_model_1.Home,
                homeUsers_model_1.HomeUsers,
                user_model_1.User,
                employe_model_1.Employe,
                client_model_1.Client,
                administrator_model_1.Administrator,
                intervention_model_1.Intervention,
                intervenant_model_1.Intervenant,
                manager_model_1.Manager,
                commercial_model_1.Commercial,
                subscribeModel_model_1.SubscribeModel,
                subscribeTermination_model_1.SubscribeTermination,
                paySubscription_model_1.PaySubscription,
                planningIntervention_model_1.PlanningIntervention,
                incident_model_1.Incident,
                login_model_1.Login,
                notificationModel_model_1.NotificationModel,
                userNotification_model_1.UserNotification,
                Comment_model_1.Comment
            ]
        });
    }
    static setConnexionInstance(connection) {
        DataBaseService_1.connectionInstance = connection;
    }
    static getConnexionInstance() {
        return DataBaseService_1.connectionInstance;
    }
};
DataBaseService.config = new config_service_1.ConfigService();
DataBaseService = DataBaseService_1 = __decorate([
    express_dependency_injection_1.Service()
], DataBaseService);
exports.DataBaseService = DataBaseService;
//# sourceMappingURL=database.service.js.map