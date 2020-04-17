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
const typeorm_1 = require("typeorm");
const mongodb_1 = require("mongodb");
/**
 * Le modèle de données notification
 */
let Notification = class Notification {
    ///*********************************setters end getters*************************************************/
    getObjectId() {
        return this.objectId;
    }
    setObjectId(value) {
        this.objectId = value;
    }
    getTitle() {
        return this.title;
    }
    setTitle(value) {
        this.title = value;
    }
    getMessage() {
        return this.message;
    }
    setMessage(value) {
        this.message = value;
    }
    getTypeNotification() {
        return this.typeNotification;
    }
    setTypeNotification(value) {
        this.typeNotification = value;
    }
    getDateOfSend() {
        return this.dateOfSend;
    }
    setDateOfSend(value) {
        this.dateOfSend = value;
    }
    getSenderUserCode() {
        return this.senderUserCode;
    }
    setSenderUserCode(value) {
        this.senderUserCode = value;
    }
};
__decorate([
    typeorm_1.ObjectIdColumn(),
    __metadata("design:type", String)
], Notification.prototype, "objectId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Notification.prototype, "title", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Notification.prototype, "dateOfSend", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Notification.prototype, "message", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Notification.prototype, "typeNotification", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", mongodb_1.ObjectID)
], Notification.prototype, "senderUserCode", void 0);
Notification = __decorate([
    typeorm_1.Entity()
], Notification);
exports.Notification = Notification;
//# sourceMappingURL=Notification.model.js.map