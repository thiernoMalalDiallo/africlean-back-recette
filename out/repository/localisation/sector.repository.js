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
const sector_model_1 = require("../../models/localisation/sector.model");
const home_repository_1 = require("./home.repository");
/**
 * Repository du Model de donnée Secteur
 */
let SectorRepository = class SectorRepository extends express_dependency_injection_1.Repository(generic_repository_1.GenericRepository) {
    /**
     * @constructor
     */
    constructor() {
        super();
        this.repository = super.getConnection().getRepository(sector_model_1.Sector);
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
            this.repository = this.connection.getRepository(sector_model_1.Sector);
            // this.repositoryHome = this.connection.getRepository(Home);
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
     * Enregistrement d'un secteur
     * @param sector
     */
    save(sector) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.save(sector);
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.findOne(id);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.find();
        });
    }
    /**
     * Retourn un secteur à partir de son ID
     * @param id
     * @param sector
     */
    update(id, sector) {
        return __awaiter(this, void 0, void 0, function* () {
            let sectorUpdated = yield this.repository.findOne(id);
            sectorUpdated.setNameOfSector(sector.getNameOfSector());
            sectorUpdated.setDistrict(sector.getDistrict());
            sectorUpdated.setHome(sector.getHome());
            return yield this.repository.save(sectorUpdated);
        });
    }
    /**
     * Suppression d'un secteur
     * @param id
     */
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let sectorDeleted = yield this.repository.findOne(id);
            return yield this.repository.remove(sectorDeleted);
        });
    }
    /**
     * Retourne tous les maisons d'un secteur
     * @param idSector Id du secteur
     */
    getHomes(idSector) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repositoryHome.getHomesBySecteur(idSector);
        });
    }
    /**
     * Retourne la liste des secteurs d'un quartier
     * @param idDistrict
     */
    getSectorByDistrict(idDistrict) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.find({ districtCode: idDistrict });
        });
    }
};
__decorate([
    express_dependency_injection_1.Inject(home_repository_1.HomeRepository),
    __metadata("design:type", home_repository_1.HomeRepository)
], SectorRepository.prototype, "repositoryHome", void 0);
SectorRepository = __decorate([
    express_dependency_injection_1.Service(),
    __metadata("design:paramtypes", [])
], SectorRepository);
exports.SectorRepository = SectorRepository;
//# sourceMappingURL=sector.repository.js.map