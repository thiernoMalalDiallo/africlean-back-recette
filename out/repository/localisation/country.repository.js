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
const country_model_1 = require("../../models/localisation/country.model");
const region_repository_1 = require("./region.repository");
const town_repository_1 = require("./town.repository");
const district_repository_1 = require("./district.repository");
const sector_repository_1 = require("./sector.repository");
/**
 * Reoisitory du modèle de données Pays
 */
let CountryRepository = class CountryRepository extends express_dependency_injection_1.Repository(generic_repository_1.GenericRepository) {
    /**
     * @constructor
     */
    constructor() {
        super();
        this.repository = super.getConnection().getRepository(country_model_1.Country);
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
            this.repository = this.connection.getRepository(country_model_1.Country);
            //  this.repoRegion = this.connection.getRepository(Region);
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
     * Enregistrement d'un pays
     * @param country
     */
    save(country) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.save(country);
        });
    }
    /**
     * Retourn un pays à partir de son ID
     * @param id
     */
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.findOne(id);
        });
    }
    /**
     *
     * Retourne la liste de tous les pays
     */
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.find();
        });
    }
    /**
     * Retourne toutes les régions du pays
     * @param idCountry Id du pays
     */
    getRegions(idCountry) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repositoryRegion.getRegionByCountry(idCountry);
        });
    }
    /**
     * TODO: a revoir
     * Renvoi toute la hiérarchie
     */
    getAdress() {
        return __awaiter(this, void 0, void 0, function* () {
            let adress = [];
            let currentCountry;
            let currentRegion;
            let currentCommune;
            let currentDistrict;
            console.log('TOTO');
            // On récupére tous les pays
            let countries = yield this.getAll();
            // Pour chaque pays, on recupéres toutes les regions
            countries.forEach((country) => __awaiter(this, void 0, void 0, function* () {
                console.log('Premier pays : ' + country.getCountryName());
                currentCountry = country;
                let regions = yield this.getRegions(country.getObjectId());
                console.log(regions[0]);
                // Pour chaque regions, on recupére toutes les communes
                regions.forEach((region) => __awaiter(this, void 0, void 0, function* () {
                    console.log('Premier region : ' + region.getRegionName());
                    currentRegion = region;
                    let communes = yield this.repositoryRegion.getCommunes(region.getCodeRegion());
                    // Pour chaque commune, on recupere tous les quartiers
                    communes.forEach((commune) => __awaiter(this, void 0, void 0, function* () {
                        console.log('Premier commune : ' + commune.getNameOfTown());
                        currentCommune = commune;
                        let districts = yield this.repositoryCommune.getDistricts(commune.getObjectId());
                        // Pour chaque quartier on recupere tous les secteurs
                        districts.forEach((district) => __awaiter(this, void 0, void 0, function* () {
                            currentDistrict = district;
                            let sectors = yield this.repositoryDistrict.getSectors(district.getObjectId());
                            let locate = {
                                country: currentCountry,
                                region: currentRegion,
                                commune: currentCommune,
                                district: currentDistrict,
                                sectors: sectors
                            };
                            console.log(locate);
                            adress.push(locate);
                        }));
                    }));
                }));
            }));
            console.log('je suis a la fin');
            // return adress;
        });
    }
    /***
     * Modification d'un pays
     * @param id
     * @param country
     */
    update(id, country) {
        return __awaiter(this, void 0, void 0, function* () {
            let countryUpdated = yield this.repository.findOne(id);
            countryUpdated.setCountryCode(country.getCountryCode());
            countryUpdated.setCountryName(country.getCountryName());
            countryUpdated.setRegions(country.getRegions());
            return yield this.repository.save(countryUpdated);
        });
    }
    /**
     * Suppression d'un pays
     * @param id
     */
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let countryDeleted = yield this.repository.findOne(id);
            console.log(countryDeleted);
            return yield this.repository.remove(countryDeleted);
        });
    }
};
__decorate([
    express_dependency_injection_1.Inject(region_repository_1.RegionRepository),
    __metadata("design:type", region_repository_1.RegionRepository)
], CountryRepository.prototype, "repositoryRegion", void 0);
__decorate([
    express_dependency_injection_1.Inject(town_repository_1.TownRepository),
    __metadata("design:type", town_repository_1.TownRepository)
], CountryRepository.prototype, "repositoryCommune", void 0);
__decorate([
    express_dependency_injection_1.Inject(district_repository_1.DistrictRepository),
    __metadata("design:type", district_repository_1.DistrictRepository)
], CountryRepository.prototype, "repositoryDistrict", void 0);
__decorate([
    express_dependency_injection_1.Inject(sector_repository_1.SectorRepository),
    __metadata("design:type", sector_repository_1.SectorRepository)
], CountryRepository.prototype, "repositorySector", void 0);
CountryRepository = __decorate([
    express_dependency_injection_1.ExRepository(),
    __metadata("design:paramtypes", [])
], CountryRepository);
exports.CountryRepository = CountryRepository;
//# sourceMappingURL=country.repository.js.map