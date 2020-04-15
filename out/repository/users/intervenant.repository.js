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
const intervenant_model_1 = require("../../models/users/intervenant.model");
const home_model_1 = require("../../models/localisation/home.model");
const homeUsers_model_1 = require("../../models/localisation/homeUsers.model");
const sector_repository_1 = require("../localisation/sector.repository");
const homeUsers_repository_1 = require("../localisation/homeUsers.repository");
const home_repository_1 = require("../localisation/home.repository");
const utils_service_1 = require("../../services/utils/utils.service");
/**
 * Le repository du model de données Intervennant
 */
let IntervenantRepository = class IntervenantRepository extends express_dependency_injection_1.Repository(generic_repository_1.GenericRepository) {
    constructor() {
        super();
        this.repository = super.getConnection().getRepository(intervenant_model_1.Intervenant);
    }
    /**
     * Connexion à la base de données
     */
    connectDatabase() {
        const _super = Object.create(null, {
            connect: { get: () => super.connect }
        });
        return __awaiter(this, void 0, void 0, function* () {
            this.connection = yield _super.connect.call(this);
            this.repository = this.connection.getRepository(intervenant_model_1.Intervenant);
            //  this.repositorySector = this.connection.getRepository(Sector);
            //  this.repositoryHome = this.connection.getRepository(Home);
            // this.repositoryHomeUser = this.connection.getRepository(HomeUsers);
        });
    }
    /**
     *  Enregistrement d'un intervenant
     * @param intervennant
     */
    save(intervennant) {
        return this.repository.save(intervennant);
    }
    /**
     * Retourn un intervenant à partir de son id
     * @param id
     */
    findById(id) {
        return this.repository.findOne(id);
    }
    /**
     * Modification d'un intervenant
     * @param id
     * @param intervennant
     */
    update(id, intervennant) {
        return __awaiter(this, void 0, void 0, function* () {
            let newIntervennant = yield this.repository.findOne(id);
            return this.repository.save(newIntervennant);
        });
    }
    /**
     * Suppression d'un intervenant à partir de son id
     * @param id
     */
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let intervennantUser = yield this.repository.findOne(id);
            return this.repository.remove(intervennantUser);
        });
    }
    /**
     * Retourn la liste de tous les intervenant
     */
    getAll() {
        return this.repository.find();
    }
    /***
     * Fermeture de connexion de service de la base de données
     */
    closeDatabase() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.close();
        });
    }
    /**
     * Modification du mot de pass
     * @param id
     * @param newIntervenant
     */
    updatePassWord(id, newIntervenant) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    /***
     * Enregistre l'adresse d'un utilisateur
     * @param id
     * @param homeName
     * @param sectorCode
     */
    saveAdress(id, homeName, sectorCode) {
        return __awaiter(this, void 0, void 0, function* () {
            let intervennantUpdated = yield this.repository.findOne(id);
            // Creation d'une nouvelle Home
            let newHome = new home_model_1.Home();
            newHome.setNameOfHome(homeName);
            newHome.setSectorCode(sectorCode);
            let homeSaved = yield this.repositoryHome.save(newHome);
            // // Création d'une HomeUser et enregistrement de la homeUser
            let newHomeUser = new homeUsers_model_1.HomeUsers();
            newHomeUser.setHomeCode(homeSaved.getObjectId());
            newHomeUser.setUserCode(intervennantUpdated.getObjectId());
            return yield this.repositoryHomeUser.save(newHomeUser);
        });
    }
    /**
     * Modification d'e l'adresse de l'utilisateur utilisateur à partir du nom de la maison et du secteur
     * @param id
     * @param sectorCode
     * @param homeCode
     */
    deleteAdress(id, homeCode, sectorCode) {
        return __awaiter(this, void 0, void 0, function* () {
            let listHome = [];
            let intervenantUpdated = yield this.repository.findOne(id);
            // On Recupère tous les homesUsers à ne pas supprimer
            let homeUserNotDeleted = yield this.repositoryHomeUser.findNoDeletedHomeUser(id, homeCode);
            // on supprime la homeUser qui a comme home = homeASupprimer
            return yield this.repositoryHomeUser.delateUserAdress(id, homeCode);
        });
    }
    /**
     * Retourne le foyer d'un utilisateur à partir de son id
     * @param id
     */
    getIntervennantHome(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = yield this.repository.findOne(id);
            console.log(user);
            let userHomes = yield this.repositoryHomeUser.getByUserCode(user.getObjectId());
            console.log(userHomes);
            let homes = [];
            for (let i = 0; i < userHomes.length; i++) {
                let homeCode = this.utilsService.getObjectIdString(userHomes[i].getHomeCode());
                let home = yield this.repositoryHome.findById(homeCode);
                console.log(home);
                homes.push(home);
            }
            return {
                homes: homes,
                homeUsers: userHomes
            };
        });
    }
    /**
     * Return la list des id des intervenants
     */
    getAllIntervenantsIds() {
        return __awaiter(this, void 0, void 0, function* () {
            let intervenants = yield this.getAll();
            let intervenantsIds = intervenants.map(intervenant => intervenant.getObjectId());
            return { userType: "INTERVENANT", userIds: intervenantsIds };
        });
    }
};
__decorate([
    express_dependency_injection_1.Inject(sector_repository_1.SectorRepository),
    __metadata("design:type", sector_repository_1.SectorRepository)
], IntervenantRepository.prototype, "repositorySector", void 0);
__decorate([
    express_dependency_injection_1.Inject(homeUsers_repository_1.HomeUsersRepository),
    __metadata("design:type", homeUsers_repository_1.HomeUsersRepository)
], IntervenantRepository.prototype, "repositoryHomeUser", void 0);
__decorate([
    express_dependency_injection_1.Inject(home_repository_1.HomeRepository),
    __metadata("design:type", home_repository_1.HomeRepository)
], IntervenantRepository.prototype, "repositoryHome", void 0);
__decorate([
    express_dependency_injection_1.Inject(utils_service_1.UtilsService),
    __metadata("design:type", utils_service_1.UtilsService)
], IntervenantRepository.prototype, "utilsService", void 0);
IntervenantRepository = __decorate([
    express_dependency_injection_1.ExRepository(),
    __metadata("design:paramtypes", [])
], IntervenantRepository);
exports.IntervenantRepository = IntervenantRepository;
//# sourceMappingURL=intervenant.repository.js.map