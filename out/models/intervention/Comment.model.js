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
 * Model de données des commentaires (Avis)
 */
let Comment = class Comment {
    //************************setter and getters*******************/
    getObjectId() {
        return this.objectId;
    }
    setObjectId(value) {
        this.objectId = value;
    }
    getDateComment() {
        return this.dateComment;
    }
    setDateComment(value) {
        this.dateComment = value;
    }
    getTypeOfComment() {
        return this.typeOfComment;
    }
    setTypeOfComment(value) {
        this.typeOfComment = value;
    }
    getMessage() {
        return this.message;
    }
    setMessage(value) {
        this.message = value;
    }
    getAuthorCode() {
        return this.authorCode;
    }
    setAuthorCode(value) {
        this.authorCode = value;
    }
};
__decorate([
    typeorm_1.ObjectIdColumn(),
    __metadata("design:type", String)
], Comment.prototype, "objectId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Comment.prototype, "dateComment", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Comment.prototype, "typeOfComment", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Comment.prototype, "message", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", mongodb_1.ObjectID)
], Comment.prototype, "authorCode", void 0);
Comment = __decorate([
    typeorm_1.Entity()
], Comment);
exports.Comment = Comment;
//# sourceMappingURL=Comment.model.js.map