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
const district_model_1 = require("../../models/localisation/district.model");
const sector_repository_1 = require("./sector.repository");
/**
 * Repository du model de données Quartier
 */
let DistrictRepository = class DistrictRepository extends express_dependency_injection_1.Repository(generic_repository_1.GenericRepository) {
    /**
     * @constructor
     */
    constructor() {
        super();
        this.repository = super.getConnection().getRepository(district_model_1.District);
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
            this.repository = this.connection.getRepository(district_model_1.District);
            ///    this.repositorySector = this.connection.getRepository(Sector);
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
     * Enregistrement d'un quartier
     * @param district
     */
    save(district) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.save(district);
        });
    }
    /**
     * Retourn un quartier à partir de son ID
     * @param id
     */
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.findOne(id);
        });
    }
    /**
     * Retourn la liste de tous les quartiers
     */
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.find();
        });
    }
    /**
     * Modification d'un quartier
     * @param id
     * @param district
     */
    update(id, district) {
        return __awaiter(this, void 0, void 0, function* () {
            let districtUpdated = yield this.repository.findOne(id);
            districtUpdated.setNameOfDistrict(district.getNameOfDistrict());
            districtUpdated.setZipCode(district.getZipCode());
            districtUpdated.setTown(district.getTown());
            districtUpdated.setSector(district.getSector());
            return this.repository.save(districtUpdated);
        });
    }
    /**
     * Suppression d'un quartier
     * @param id
     */
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let districtDeleted = yield this.repository.findOne(id);
            return yield this.repository.remove(districtDeleted);
        });
    }
    /**
     * Retourne tous les secteurs d'un quartier
     * @param idDistrict Id du quartier
     */
    getSectors(idDistrict) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repositorySector.getSectorByDistrict(idDistrict);
        });
    }
    /**
     * Retourne la liste des quartiers d'une commune
     * @param idTown
     */
    getDistrictByCommune(idTown) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.find({ townCode: idTown });
        });
    }
};
__decorate([
    express_dependency_injection_1.Inject(sector_repository_1.SectorRepository),
    __metadata("design:type", sector_repository_1.SectorRepository)
], DistrictRepository.prototype, "repositorySector", void 0);
DistrictRepository = __decorate([
    express_dependency_injection_1.ExRepository(),
    __metadata("design:paramtypes", [])
], DistrictRepository);
exports.DistrictRepository = DistrictRepository;
//# sourceMappingURL=district.repository.js.map