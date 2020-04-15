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
const client_model_1 = require("../../models/users/client.model");
const homeUsers_model_1 = require("../../models/localisation/homeUsers.model");
const home_model_1 = require("../../models/localisation/home.model");
const home_repository_1 = require("../localisation/home.repository");
const homeUsers_repository_1 = require("../localisation/homeUsers.repository");
const utils_service_1 = require("../../services/utils/utils.service");
/**
 * Le repository du model de données Client
 */
let ClientRepository = class ClientRepository extends express_dependency_injection_1.Repository(generic_repository_1.GenericRepository) {
    constructor() {
        super();
        this.repositoryClient = super.getConnection().getRepository(client_model_1.Client);
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
            this.repositoryClient = this.connection.getRepository(client_model_1.Client);
            /*this.repositorySector = this.connection.getRepository(Sector);
            this.repositoryHome = this.connection.getRepository(Home);
            this.repositoryHomeUser = this.connection.getRepository(HomeUsers);*/
        });
    }
    /**
     * Enregistrement d'un utilisateur
     * @param client
     */
    save(client) {
        return this.repositoryClient.save(client);
    }
    /**
     * Retourn un client à partir de son id
     * @param id
     */
    findById(id) {
        return this.repositoryClient.findOne(id);
    }
    /**
     * Enregistrement d'un adresse
     * @param id
     * @param homeName
     * @param sectorCode
     */
    saveAdress(id, homeName, sectorCode) {
        return __awaiter(this, void 0, void 0, function* () {
            let clientUpdated = yield this.repositoryClient.findOne(id);
            // Creation d'une nouvelle Home
            let newHome = new home_model_1.Home();
            newHome.setNameOfHome(homeName);
            newHome.setSectorCode(sectorCode);
            let homeSaved = yield this.repositoryHome.save(newHome);
            // // Création d'une HomeUser et enregistrement de la homeUser
            let newHomeUser = new homeUsers_model_1.HomeUsers();
            newHomeUser.setHomeCode(homeSaved.getObjectId());
            newHomeUser.setUserCode(clientUpdated.getObjectId());
            return yield this.repositoryHomeUser.save(newHomeUser);
        });
    }
    /**
     * Modification d'e l'adresse de l'utilisateur utilisateur à partir du nom de la maison et du secteur
     * @param idClient
     * @param homeCode
     */
    deleteAdress(idClient, homeCode) {
        return __awaiter(this, void 0, void 0, function* () {
            let clientUpdated = yield this.repositoryClient.findOne(idClient);
            let homesUsers = yield this.repositoryHomeUser.getAll();
            for (let i = 0; i < homesUsers.length; i++) {
                if (homesUsers[i].getHomeCode() == homeCode) {
                    yield this.repositoryHomeUser.delete(homesUsers[i].getObjectId());
                }
            }
            /* // on recupere l'abonnement liée a l'adresse
             let subscribes = await this.repositorySubscribe.findSubscribeByAdress(homeCode);
     
             // On regarde si l'adresse n'est pas liée à un abonnement
             if(subscribes.length==0){
                */ let home = yield this.repositoryHome.findById(homeCode);
            yield this.repositoryHome.delete(homeCode);
            // }
            // on supprime la homeUser qui a comme home = home à Supprimer
            return clientUpdated;
        });
    }
    /**se
     * Modification d'un utilisateur
     * @param id
     * @param client
     */
    updateClient(id, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let clientUpdated = yield this.repositoryClient.findOne(id);
            clientUpdated.setFirstName(client.getFirstName());
            clientUpdated.setLastName(client.getLastName());
            clientUpdated.setPseudo(client.getPseudo());
            clientUpdated.setDateOfBirth(client.getDateOfBirth());
            clientUpdated.setCountryOfBirth(client.getCountryOfBirth());
            clientUpdated.setFatherFirstName(client.getFatherFirstName());
            clientUpdated.setFatherLastName(client.getFatherLastName());
            clientUpdated.setMotherFirstName(client.getMotherFirstName());
            clientUpdated.setMotherLarstName(client.getMotherLarstName());
            clientUpdated.setEmail(client.getEmail());
            clientUpdated.setPassword(client.getPassword());
            clientUpdated.setPhoneFixedNumber(client.getPhoneFixedNumber());
            clientUpdated.setPhoneNumber(client.getPhoneNumber());
            clientUpdated.setAdress(client.getAdress());
            clientUpdated.setBanqueCode(client.getBanqueCode());
            clientUpdated.setCityOfAdress(client.getCityOfAdress());
            clientUpdated.setZipCode(client.getZipCode());
            clientUpdated.setCivilitOfUsers(client.getCivilitOfUsers());
            clientUpdated.setGenderOfUser(client.getGenderOfUser());
            clientUpdated.setUserJob(client.getUserJob());
            clientUpdated.setIsSubscribe(client.getIsSubscribe());
            clientUpdated.setDateOfCreation(client.getDateOfCreation());
            clientUpdated.setDateOfUpdate(client.getDateOfUpdate());
            clientUpdated.setDateOfDeleted(client.getDateOfDeleted());
            clientUpdated.setTrace(client.getTrace());
            return yield this.repositoryClient.save(client);
        });
    }
    /**
     * Suppression d'un client à partir de son id
     * @param id
     */
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let clientUser = yield this.repositoryClient.findOne(id);
            return this.repositoryClient.remove(clientUser);
        });
    }
    /**
     * retourn la list des tous les clients
     */
    getAll() {
        return this.repositoryClient.find();
    }
    /**
     * Fermeture de service de la connexion à la base de données.
     */
    closeDatabase() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.close();
        });
    }
    /**
     * Retourne le foyer d'un utilisateur à partir de son id
     * @param id
     */
    getClientHome(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = yield this.repositoryClient.findOne(id);
            let userHomes = yield this.repositoryHomeUser.getByUserCode(user.getObjectId());
            let homes = [];
            for (let i = 0; i < userHomes.length; i++) {
                let homeCode = this.utilsService.getObjectIdString(userHomes[i].getHomeCode());
                let home = yield this.repositoryHome.findById(homeCode);
                homes.push(home);
            }
            return {
                homes: homes,
                homeUsers: userHomes
            };
        });
    }
    subscribeClient(id, isSubscribe) {
        return __awaiter(this, void 0, void 0, function* () {
            let clientSubscribe = yield this.repositoryClient.findOne(id);
            if (clientSubscribe.getIsSubscribe() != "ABONNEE") {
                clientSubscribe.setIsSubscribe(isSubscribe);
                return yield this.repositoryClient.save(clientSubscribe);
            }
            else {
                return clientSubscribe;
            }
        });
    }
    /**
     * Return la list des id des clients
     */
    getAllClientsIds() {
        return __awaiter(this, void 0, void 0, function* () {
            let clients = yield this.getAll();
            let clientsIds = clients.map(client => client.getObjectId());
            return { userType: "CLIENT", userIds: clientsIds };
        });
    }
};
__decorate([
    express_dependency_injection_1.Inject(homeUsers_repository_1.HomeUsersRepository),
    __metadata("design:type", homeUsers_repository_1.HomeUsersRepository)
], ClientRepository.prototype, "repositoryHomeUser", void 0);
__decorate([
    express_dependency_injection_1.Inject(home_repository_1.HomeRepository),
    __metadata("design:type", home_repository_1.HomeRepository)
], ClientRepository.prototype, "repositoryHome", void 0);
__decorate([
    express_dependency_injection_1.Inject(utils_service_1.UtilsService),
    __metadata("design:type", utils_service_1.UtilsService)
], ClientRepository.prototype, "utilsService", void 0);
ClientRepository = __decorate([
    express_dependency_injection_1.ExRepository(),
    __metadata("design:paramtypes", [])
], ClientRepository);
exports.ClientRepository = ClientRepository;
//# sourceMappingURL=client.repository.js.map