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
const town_model_1 = require("../../models/localisation/town.model");
const district_repository_1 = require("./district.repository");
/**
 * Repository du modèle de données Pays
 */
let TownRepository = class TownRepository extends express_dependency_injection_1.Repository(generic_repository_1.GenericRepository) {
    /**
     * @constructor
     */
    constructor() {
        super();
        this.repository = super.getConnection().getRepository(town_model_1.Town);
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
            //  this.repository = this.connection.getRepository(Town);
            //   this.repositoryDistrict = this.connection.getRepository(District);
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
     * Enregistrement d'une commune
     * @param town
     */
    save(town) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.save(town);
        });
    }
    /**
     *  Retourn la liste de toutes les communes
     */
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.find();
        });
    }
    /**
     * Retourn une commune à partir de son ID
     * @param id
     */
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.findOne(id);
        });
    }
    /**
     * Modification d'une commune
     * @param id
     * @param town
     */
    update(id, town) {
        return __awaiter(this, void 0, void 0, function* () {
            let townUpdated = yield this.repository.findOne(id);
            townUpdated.setNameOfTown(town.getNameOfTown());
            townUpdated.setZipCode(town.getZipCode());
            townUpdated.setDistricts(town.getDistricts());
            townUpdated.setRegion(town.getRegion());
            return this.repository.save(town);
        });
    }
    /**
     * Suppression d'une commune
     * @param id
     */
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let town = yield this.repository.findOne(id);
            return this.repository.remove(town);
        });
    }
    /**
     * Retourne tous les quartier d'une commune
     * @param idTown Id de la commune
     */
    getDistricts(idTown) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repositoryDistrict.getDistrictByCommune(idTown);
        });
    }
    /**
     * Retourne la liste des communes par regions
     * @param idRegion
     */
    getCommunesByRegionCode(idRegion) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.find({ regionCode: idRegion });
        });
    }
};
__decorate([
    express_dependency_injection_1.Inject(district_repository_1.DistrictRepository),
    __metadata("design:type", district_repository_1.DistrictRepository)
], TownRepository.prototype, "repositoryDistrict", void 0);
TownRepository = __decorate([
    express_dependency_injection_1.ExRepository(),
    __metadata("design:paramtypes", [])
], TownRepository);
exports.TownRepository = TownRepository;
//# sourceMappingURL=town.repository.js.map