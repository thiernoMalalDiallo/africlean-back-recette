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
const generic_repository_1 = require("../generic.repository");
const express_dependency_injection_1 = require("express-dependency-injection");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const employe_repository_1 = require("./employe.repository");
const user_model_1 = require("../../models/users/user.model");
const client_repository_1 = require("./client.repository");
const administrator_repository_1 = require("./administrator.repository");
const manager_repository_1 = require("./manager.repository");
const intervenant_repository_1 = require("./intervenant.repository");
const commercial_repository_1 = require("./commercial.repository");
const home_repository_1 = require("../localisation/home.repository");
const sector_repository_1 = require("../localisation/sector.repository");
const district_repository_1 = require("../localisation/district.repository");
const town_repository_1 = require("../localisation/town.repository");
const region_repository_1 = require("../localisation/region.repository");
const country_repository_1 = require("../localisation/country.repository");
const homeUsers_repository_1 = require("../localisation/homeUsers.repository");
const home_model_1 = require("../../models/localisation/home.model");
const subscribe_repository_1 = require("../abonnement/subscribe.repository");
const utils_service_1 = require("../../services/utils/utils.service");
const homeUsers_model_1 = require("../../models/localisation/homeUsers.model");
const login_repository_1 = require("./login.repository");
/**
 * Repository du modèle User
 */
let UserRepository = class UserRepository extends express_dependency_injection_1.Repository(generic_repository_1.GenericRepository) {
    /**
     * @constructor
     */
    constructor() {
        super();
        // this.repository = super.getConnection().getRepository(User);
    }
    /**
     * Ouverture d'une connection à la base de données
     */
    connectDatabase() {
        const _super = Object.create(null, {
            connect: { get: () => super.connect }
        });
        return __awaiter(this, void 0, void 0, function* () {
            this.connection = yield _super.connect.call(this);
        });
    }
    /**
     * Fermeture de service de connexion à la base de données
     */
    closeDatabase() {
        return __awaiter(this, void 0, void 0, function* () {
            this.connection.close();
        });
    }
    /**
     * Retourn la liste de tous les utilisateurs
     */
    getAll() {
        return rxjs_1.zip(this.repositoryClient.getAll(), this.repositoryAdmin.getAll(), this.repositoryCommercial.getAll(), this.repositoryIntervenant.getAll(), this.repositoryManager.getAll()).pipe(operators_1.map(([clients, admins, commerciaux, intervenants, managers]) => {
            let users = clients;
            return users.concat(admins).concat(commerciaux).concat(intervenants).concat(managers);
        }));
    }
    /**
     * Modification de l'adresse de utilisateur à partir du nom de la maison et du secteur
     * @param id
     * @param sectorCode
     * @param homeCode
     * @param remplaced
     * @param newAdress
     */
    deleteAdress(idHomeUser, remplaced, idHommesuser) {
        return __awaiter(this, void 0, void 0, function* () {
            // On recupere le home user
            let homeUser = yield this.repositoryHomeUser.findById(idHomeUser);
            // TODO : Tester si un abonnement est en cours pour cette adresse:
            // Message : Attention un abonnement est lié à cette adresse. Voulez-la remplacez par une autre ?
            // 1- OUI => remplacer l'adresse en envoyant un param remplaced = true; et notifier les manager
            // 2- NON => mettre à null l'adresse dans la collection abonnement, notifier les managers et supprimer l'adresse
            // On supprime le home
            let homUserCode = this.utilsService.getObjectIdString(homeUser.getHomeCode());
            this.repositoryHome.delete(homUserCode);
            // On Recupère tous les homesUsers à ne pas supprimer
            return yield this.repositoryHomeUser.delete(idHomeUser);
        });
    }
    /**
     * Retourne la liste d'adresses de la maison d'un utilisateur
     * @param id id user
     * @param role rôle de l'utilisateur
     */
    getHomesAdress(id, role) {
        return __awaiter(this, void 0, void 0, function* () {
            let i;
            let adresses = [];
            let homesRes = yield this.getHomes(id, role);
            let homesUser = homesRes.homeUsers;
            let homes = homesRes.homes;
            for (i = 0; i < homes.length; i++) {
                let home = homes[i];
                let subscribes = yield this.repositorySubscribe.findSubscribeByAdress(home.getObjectId());
                let subscribe = subscribes[0];
                let sector = yield this.repositorySector.findById(home.getSectorCode());
                let district = yield this.repositoryDistrict.findById(sector.getDistrictCode());
                let town = yield this.repositoryTown.findById(district.getTownCode());
                let region = yield this.repositoryRegion.findById(town.getRegionCode());
                let country = yield this.repositoryCountry.findById(region.getCountryCode());
                adresses.push({
                    adresseId: homesUser[i].getObjectId(),
                    idHome: home.getObjectId(),
                    country: country.getCountryName(),
                    region: region.getRegionName(),
                    commune: town.getNameOfTown(),
                    district: district.getNameOfDistrict(),
                    sector: sector.getNameOfSector(),
                    home: home.getNameOfHome(),
                    state: subscribe ? subscribe.getStateOfSubscription() : null
                });
            }
            return adresses;
        });
    }
    /**
     * Retourne les adresses qui n'ont pas d'abonnement
     * @param id id user
     * @param role rôle de l'utilisateur
     */
    getFreeAdress(id, role) {
        return __awaiter(this, void 0, void 0, function* () {
            let i;
            let adresses = [];
            let homesRes = yield this.getHomes(id, role);
            let homesUser = homesRes.homeUsers;
            let homes = homesRes.homes;
            for (i = 0; i < homes.length; i++) {
                let home = homes[i];
                let subscribes = yield this.repositorySubscribe.findSubscribeByAdress(home.getObjectId());
                if (subscribes.length === 0) {
                    let sectorCode = this.utilsService.getObjectIdString(home.getSectorCode());
                    let sector = yield this.repositorySector.findById(sectorCode);
                    let district = yield this.repositoryDistrict.findById(sector.getDistrictCode());
                    let town = yield this.repositoryTown.findById(district.getTownCode());
                    let region = yield this.repositoryRegion.findById(town.getRegionCode());
                    let country = yield this.repositoryCountry.findById(region.getCountryCode());
                    adresses.push({
                        adresseId: homesUser[i].getObjectId(),
                        idHome: home.getObjectId(),
                        country: country.getCountryName(),
                        region: region.getRegionName(),
                        commune: town.getNameOfTown(),
                        district: district.getNameOfDistrict(),
                        sector: sector.getNameOfSector(),
                        home: home.getNameOfHome()
                    });
                }
            }
            return adresses;
        });
    }
    /**
     * Retourne les adresses qui ont un abonnement
     * @param id id user
     * @param role rôle de l'utilisateur
     */
    getSubscribeAdress(id, role) {
        return __awaiter(this, void 0, void 0, function* () {
            let i;
            let adresses = [];
            let homesRes = yield this.getHomes(id, role);
            let homesUser = homesRes.homeUsers;
            let homes = homesRes.homes;
            for (i = 0; i < homes.length; i++) {
                let home = homes[i];
                let subscribes = yield this.repositorySubscribe.findSubscribeByAdress(home.getObjectId());
                if (subscribes.length > 0) {
                    let subscribe = subscribes[0];
                    let homeCode = this.utilsService.getObjectIdString(home.getSectorCode());
                    let sector = yield this.repositorySector.findById(homeCode);
                    let district = yield this.repositoryDistrict.findById(sector.getDistrictCode());
                    let town = yield this.repositoryTown.findById(district.getTownCode());
                    let region = yield this.repositoryRegion.findById(town.getRegionCode());
                    let country = yield this.repositoryCountry.findById(region.getCountryCode());
                    adresses.push({
                        adresseId: homesUser[i].getObjectId(),
                        idHome: home.getObjectId(),
                        country: country.getCountryName(),
                        region: region.getRegionName(),
                        commune: town.getNameOfTown(),
                        district: district.getNameOfDistrict(),
                        sector: sector.getNameOfSector(),
                        home: home.getNameOfHome(),
                        state: subscribe.getStateOfSubscription()
                    });
                }
            }
            return adresses;
        });
    }
    /**
     * Renvoie les maisons de l'user
     * @param id id user
     * @param role role
     */
    getHomes(id, role) {
        return __awaiter(this, void 0, void 0, function* () {
            if (role) {
                switch (role) {
                    case 'INTERVENANT':
                        return yield this.repositoryIntervenant.getIntervennantHome(id);
                    case 'CLIENT':
                        return yield this.repositoryClient.getClientHome(id);
                    case 'COMMERCIAL':
                        return yield this.repositoryCommercial.getCommercialHome(id);
                    case 'MANAGER':
                        return yield this.repositoryManager.getManagerHome(id);
                    default:
                        return yield this.repositoryAdmin.getAdminHome(id);
                }
            }
        });
    }
    /**
     * Enregistrement d'un adresse
     * @param idUser
     * @param homeName
     * @param sectorCode
     * @param role
     */
    saveAdress(idUser, homeName, sectorCode, role) {
        return __awaiter(this, void 0, void 0, function* () {
            // on recupere l'utilisateur
            let userUpdated = yield this.findUserById(idUser, role);
            // Creation d'une nouvelle Home
            let newHome = new home_model_1.Home();
            newHome.setNameOfHome(homeName);
            newHome.setSectorCode(sectorCode);
            let homeSaved = yield this.repositoryHome.save(newHome);
            // // Création d'une HomeUser et enregistrement de la homeUser
            let newHomeUser = new homeUsers_model_1.HomeUsers();
            newHomeUser.setHomeCode(homeSaved.getObjectId());
            newHomeUser.setUserCode(userUpdated.getObjectId());
            return yield this.repositoryHomeUser.save(newHomeUser);
        });
    }
    /**
     * Modification d'un adresse
     * @param idHome
     * @param newHomeName
     * @param newHomeSectorCode
     */
    updateAdress(idHome, newHomeName, newHomeSectorCode) {
        return __awaiter(this, void 0, void 0, function* () {
            // recuperation du home à changer
            let homeUpdated = yield this.repositoryHome.findById(idHome);
            homeUpdated.setSectorCode(newHomeSectorCode);
            homeUpdated.setNameOfHome(newHomeName);
            return yield this.repositoryHome.save(homeUpdated);
        });
    }
    /**
     * Suppression d'une adresse
     * @param userCode
     * @param homeCode
     */
    deleteUserAdress(userCode, homeCode) {
        return __awaiter(this, void 0, void 0, function* () {
            let home = null;
            // on recupere l'abonnement liée a l'adresse
            let subscribes = yield this.repositorySubscribe.findSubscribeByAdress(homeCode);
            // on supprime la homeUser qui a comme home = homeCode à Supprimer
            let homesUsers = yield this.repositoryHomeUser.getAll();
            for (let i = 0; i < homesUsers.length; i++) {
                if (homesUsers[i].getHomeCode() == homeCode &&
                    homesUsers[i].getUserCode() == userCode) {
                    yield this.repositoryHomeUser.delete(homesUsers[i].getObjectId());
                }
            }
            // On supprime l'adresse
            if (subscribes.length == 0) {
                home = yield this.repositoryHome.findById(homeCode);
                yield this.repositoryHome.delete(homeCode);
            }
            return home;
        });
    }
    /**
     * Return l'utilisateur en fonction de l'id de son id
     * @param userCode son id
     * @param role, role de l'utilisateur
     */
    findUserById(userCode, role) {
        return __awaiter(this, void 0, void 0, function* () {
            let codeUser = this.utilsService.getObjectIdString(userCode);
            switch (role) {
                case 'INTERVENANT':
                    return yield this.repositoryIntervenant.findById(codeUser);
                case 'CLIENT':
                    return yield this.repositoryClient.findById(codeUser);
                case 'COMMERCIAL':
                    return yield this.repositoryCommercial.findById(codeUser);
                case 'MANAGER':
                    return yield this.repositoryManager.findById(codeUser);
                default:
                    return yield this.repositoryAdmin.findById(codeUser);
            }
        });
    }
    /**
     * Mofification des informations de l'utilisateur
     * @param infomations
     */
    updateUserInfos(infomations) {
        return __awaiter(this, void 0, void 0, function* () {
            // Recuperation de le login de l'utilisateur
            const logins = yield this.repositoryLogin.findLoginForUserUpdated(infomations.phoneNumber, infomations.password, infomations.role);
            let login = logins[0];
            login.setLogin(infomations.newPhoneNumber);
            yield this.repositoryLogin.update(login.getObjectId(), login);
            // Recuperation de l'utilisateur à modifier
            let user = yield this.findUserById(infomations.userId, infomations.role);
            user.setFirstName(infomations.firstname);
            user.setLastName(infomations.lastname);
            user.setEmail(infomations.email);
            user.setPhoneNumber(infomations.newPhoneNumber);
            //  Modification de l'utilisateur
            switch (infomations.role) {
                case 'INTERVENANT':
                    return yield this.repositoryIntervenant.update(user.getObjectId(), user);
                case 'CLIENT':
                    return yield this.repositoryClient.updateClient(user.getObjectId(), user);
                case 'COMMERCIAL':
                    return yield this.repositoryCommercial.update(user.getObjectId(), user);
                case 'MANAGER':
                    return yield this.repositoryManager.update(user.getObjectId(), user);
                default:
                    return yield this.repositoryAdmin.update(user.getObjectId(), user);
            }
        });
    }
    /**
     * Modification du mot de pass de l'urilisateur
     * @param infomations
     */
    updatePassword(infomations) {
        return __awaiter(this, void 0, void 0, function* () {
            // Recuperation de le login de l'utilisateur
            let passHashed = user_model_1.User.hashPassword(infomations.newPassword);
            const logins = yield this.repositoryLogin.findLoginForUserUpdated(infomations.phoneNumber, infomations.password, infomations.role);
            let login = logins[0];
            login.setPassword(passHashed);
            yield this.repositoryLogin.update(login.getObjectId(), login);
            // Recuperation de l'utilisateur à modifier
            let user = yield this.findUserById(infomations.userId, infomations.role);
            user.setPassword(passHashed);
            //  Modification de l'utilisateur
            switch (infomations.role) {
                case 'INTERVENANT':
                    return yield this.repositoryIntervenant.update(user.getObjectId(), user);
                case 'CLIENT':
                    return yield this.repositoryClient.updateClient(user.getObjectId(), user);
                case 'COMMERCIAL':
                    return yield this.repositoryCommercial.update(user.getObjectId(), user);
                case 'MANAGER':
                    return yield this.repositoryManager.update(user.getObjectId(), user);
                default:
                    return yield this.repositoryAdmin.update(user.getObjectId(), user);
            }
        });
    }
    /**
     * Retourn tous les ids
     */
    getAllAdministrerIds() {
        return __awaiter(this, void 0, void 0, function* () {
            let users = [];
            let managers = yield this.repositoryManager.getAll();
            const managersIds = managers.map(manager => manager.getObjectId());
            let commerciaux = yield this.repositoryCommercial.getAll();
            let commerciauxIds = commerciaux.map(commercial => commercial.getObjectId());
            let administrators = yield this.repositoryAdmin.getAll();
            let administratorsIds = administrators.map(administrator => administrator.getObjectId());
            // TMP: A supprimer
            let clients = yield this.repositoryClient.getAll();
            let clientsIds = clients.map(client => client.getObjectId());
            users = managersIds.concat(commerciauxIds).concat(administratorsIds).concat(clientsIds);
            return users;
        });
    }
};
__decorate([
    express_dependency_injection_1.Inject(employe_repository_1.EmployeRepository),
    __metadata("design:type", employe_repository_1.EmployeRepository)
], UserRepository.prototype, "repositoryEmploye", void 0);
__decorate([
    express_dependency_injection_1.Inject(client_repository_1.ClientRepository),
    __metadata("design:type", client_repository_1.ClientRepository)
], UserRepository.prototype, "repositoryClient", void 0);
__decorate([
    express_dependency_injection_1.Inject(administrator_repository_1.AdministratorRepository),
    __metadata("design:type", administrator_repository_1.AdministratorRepository)
], UserRepository.prototype, "repositoryAdmin", void 0);
__decorate([
    express_dependency_injection_1.Inject(manager_repository_1.ManagerRepository),
    __metadata("design:type", manager_repository_1.ManagerRepository)
], UserRepository.prototype, "repositoryManager", void 0);
__decorate([
    express_dependency_injection_1.Inject(intervenant_repository_1.IntervenantRepository),
    __metadata("design:type", intervenant_repository_1.IntervenantRepository)
], UserRepository.prototype, "repositoryIntervenant", void 0);
__decorate([
    express_dependency_injection_1.Inject(commercial_repository_1.CommercialRepository),
    __metadata("design:type", commercial_repository_1.CommercialRepository)
], UserRepository.prototype, "repositoryCommercial", void 0);
__decorate([
    express_dependency_injection_1.Inject(home_repository_1.HomeRepository),
    __metadata("design:type", home_repository_1.HomeRepository)
], UserRepository.prototype, "repositoryHome", void 0);
__decorate([
    express_dependency_injection_1.Inject(sector_repository_1.SectorRepository),
    __metadata("design:type", sector_repository_1.SectorRepository)
], UserRepository.prototype, "repositorySector", void 0);
__decorate([
    express_dependency_injection_1.Inject(district_repository_1.DistrictRepository),
    __metadata("design:type", district_repository_1.DistrictRepository)
], UserRepository.prototype, "repositoryDistrict", void 0);
__decorate([
    express_dependency_injection_1.Inject(town_repository_1.TownRepository),
    __metadata("design:type", town_repository_1.TownRepository)
], UserRepository.prototype, "repositoryTown", void 0);
__decorate([
    express_dependency_injection_1.Inject(region_repository_1.RegionRepository),
    __metadata("design:type", region_repository_1.RegionRepository)
], UserRepository.prototype, "repositoryRegion", void 0);
__decorate([
    express_dependency_injection_1.Inject(country_repository_1.CountryRepository),
    __metadata("design:type", country_repository_1.CountryRepository)
], UserRepository.prototype, "repositoryCountry", void 0);
__decorate([
    express_dependency_injection_1.Inject(homeUsers_repository_1.HomeUsersRepository),
    __metadata("design:type", homeUsers_repository_1.HomeUsersRepository)
], UserRepository.prototype, "repositoryHomeUser", void 0);
__decorate([
    express_dependency_injection_1.Inject(login_repository_1.LoginRepository),
    __metadata("design:type", login_repository_1.LoginRepository)
], UserRepository.prototype, "repositoryLogin", void 0);
__decorate([
    express_dependency_injection_1.Inject(subscribe_repository_1.SubscribeRepository),
    __metadata("design:type", subscribe_repository_1.SubscribeRepository)
], UserRepository.prototype, "repositorySubscribe", void 0);
__decorate([
    express_dependency_injection_1.Inject(utils_service_1.UtilsService),
    __metadata("design:type", utils_service_1.UtilsService)
], UserRepository.prototype, "utilsService", void 0);
UserRepository = __decorate([
    express_dependency_injection_1.ExRepository(),
    __metadata("design:paramtypes", [])
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map