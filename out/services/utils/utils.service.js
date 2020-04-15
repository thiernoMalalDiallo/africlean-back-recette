"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_dependency_injection_1 = require("express-dependency-injection");
const mongodb_1 = require("mongodb");
/**
 * Service encapsulant des fonctionnalités pour le bon fonctionnement de l'application
 */
let UtilsService = class UtilsService {
    /**
     * Renvoie un ObjectId
     * @param objectId ID
     */
    getObjectId(objectId) {
        let idObjectType = typeof objectId;
        if (idObjectType) {
            if (idObjectType == 'string') {
                objectId = new mongodb_1.ObjectID(objectId);
            }
        }
        return objectId;
    }
    /**
     * Renvoie le string correpondant au ObjectId
     * @param objectId ID
     */
    getObjectIdString(objectId) {
        let objectIdString = '';
        if (objectId) {
            objectIdString = objectId.toString();
        }
        return objectIdString;
    }
};
UtilsService = __decorate([
    express_dependency_injection_1.Service()
], UtilsService);
exports.UtilsService = UtilsService;
//# sourceMappingURL=utils.service.js.map