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
const region_model_1 = require("../../models/localisation/region.model");
const town_repository_1 = require("./town.repository");
/**
 * Repository de données Region
 */
let RegionRepository = class RegionRepository extends express_dependency_injection_1.Repository(generic_repository_1.GenericRepository) {
    /**
     * @constructor
     */
    constructor() {
        super();
        this.repository = super.getConnection().getRepository(region_model_1.Region);
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
            this.repository = this.connection.getRepository(region_model_1.Region);
            //   this.repositoryCommune = this.connection.getRepository(Town);
        });
    }
    /**
     * Fermeture de service des connexion à la base de données
     */
    closeDatabase() {
        return __awaiter(this, void 0, void 0, function* () {
            this.connection.close();
        });
    }
    /**
     * Enregistrement d'une région
     * @param region
     */
    save(region) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.save(region);
        });
    }
    /**
     * Retourn une région à partir de son ID
     * @param id
     */
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.findOne(id);
        });
    }
    /**
     *  Retourn la liste de toutes les régions
     */
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.find();
        });
    }
    /**
     * Modification d'une region
     * @param id
     * @param region
     */
    update(id, region) {
        return __awaiter(this, void 0, void 0, function* () {
            let regionUpdated = yield this.repository.findOne(id);
            regionUpdated.setCodeRegion(region.getCodeRegion());
            regionUpdated.setRegionName(region.getRegionName());
            regionUpdated.setZipCode(region.getZipCode());
            regionUpdated.setCountry(region.getCountry());
            regionUpdated.setTowns(region.getTowns());
            return this.repository.save(regionUpdated);
        });
    }
    /**
     * Suppression d'une region
     * @param id
     */
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let regionDeleted = yield this.repository.findOne(id);
            return this.repository.remove(regionDeleted);
        });
    }
    /**
     * Retourne toutes les commune d'une region
     * @param idRegion Id du region
     */
    getCommunes(idRegion) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repositoryCommune.getCommunesByRegionCode(idRegion);
        });
    }
    /**
     * Retourn les regions par pays
     * @param countryCode Id du region
     */
    getRegionByCountry(countryCode) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.find({ countryCode: countryCode });
        });
    }
};
__decorate([
    express_dependency_injection_1.Inject(town_repository_1.TownRepository),
    __metadata("design:type", town_repository_1.TownRepository)
], RegionRepository.prototype, "repositoryCommune", void 0);
RegionRepository = __decorate([
    express_dependency_injection_1.Service(),
    __metadata("design:paramtypes", [])
], RegionRepository);
exports.RegionRepository = RegionRepository;
//# sourceMappingURL=region.repository.js.map