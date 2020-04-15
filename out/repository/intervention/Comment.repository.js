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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_dependency_injection_1 = require("express-dependency-injection");
const generic_repository_1 = require("../generic.repository");
const Comment_model_1 = require("../../models/intervention/Comment.model");
const client_repository_1 = require("../users/client.repository");
const utils_service_1 = require("../../services/utils/utils.service");
/**
 * Repository du Model de données commentaire
 */
let CommentRepository = class CommentRepository extends express_dependency_injection_1.Repository(generic_repository_1.GenericRepository) {
    /**
     * @constructor
     */
    constructor() {
        super();
        this.repository = super.getConnection().getRepository(Comment_model_1.Comment);
    }
    /**
     * Ouverture d'une connexion à la base de donnée
     */
    connectDatabase() {
        const _super = Object.create(null, {
            connect: { get: () => super.connect }
        });
        return __awaiter(this, void 0, void 0, function* () {
            this.connection = yield _super.connect.call(this);
            this.repository = this.connection.getRepository(Comment_model_1.Comment);
        });
    }
    /**
     * Fermeture de service des connexion à la base de données
     */
    closeDatabase() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.close();
        });
    }
    /**
     * Enregistrement d'un Commentaire
     * @param comment
     */
    save(comment) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.save(comment);
        });
    }
    /**
     * Retourn un Commentaire à partir de son ID
     * @param id
     */
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.findOne(id);
        });
    }
    /**
     * Retourn la liste de tous les commentaires
     */
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.find({
                order: {
                    dateComment: 'DESC'
                }
            });
        });
    }
    /**
     * Modification d'un Commentaire
     * @param id
     * @param Comment
     */
    update(id, Comment) {
        return __awaiter(this, void 0, void 0, function* () {
            let CommentUpdated = yield this.repository.findOne(id);
            CommentUpdated.setDateComment(Comment.getDateComment());
            CommentUpdated.setMessage(Comment.getMessage());
            CommentUpdated.setAuthorCode(Comment.getAuthorCode());
            return yield this.repository.save(CommentUpdated);
        });
    }
    /**
     * Suppression d'un Commentaire
     * @param id
     */
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let CommentDeleted = yield this.repository.findOne(id);
            return yield this.repository.remove(CommentDeleted);
        });
    }
    /**
     * Return la list des id des managers
     */
    getAllCommentAuthor() {
        return __awaiter(this, void 0, void 0, function* () {
            let commentaires = yield this.getAll();
            console.log(commentaires);
            let commentAuthors = [];
            for (let i = 0; i < commentaires.length; i++) {
                let comment = commentaires[i];
                let authorCode = this.utilsService.getObjectIdString(comment.getAuthorCode());
                let author;
                author = yield this.repositoryClient.findById(authorCode);
                let userComment = { author, comment };
                commentAuthors.push(userComment);
            }
            return yield commentAuthors;
        });
    }
};
__decorate([
    express_dependency_injection_1.Inject(client_repository_1.ClientRepository),
    __metadata("design:type", client_repository_1.ClientRepository)
], CommentRepository.prototype, "repositoryClient", void 0);
__decorate([
    express_dependency_injection_1.Inject(utils_service_1.UtilsService),
    __metadata("design:type", utils_service_1.UtilsService)
], CommentRepository.prototype, "utilsService", void 0);
CommentRepository = __decorate([
    express_dependency_injection_1.ExRepository(),
    __metadata("design:paramtypes", [])
], CommentRepository);
exports.CommentRepository = CommentRepository;
//# sourceMappingURL=Comment.repository.js.map