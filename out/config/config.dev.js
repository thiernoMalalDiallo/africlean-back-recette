"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    "databaseConfig": {
        "address": "+srv://africlean-user:africleandatabase@africlean-cluster-qqtvm.mongodb.net/test?retryWrites=true&w=majority",
        "type": "mongodb",
        "databaseName": "test",
        "port": "27016",
        "user": "africlean-user",
        "pass": "africleandatabase",
        "poolSize": 15
    },
    "serverConfig": {
        url: "http://localhost",
        "listen": 3001,
        allowOrigin: "*"
    },
    jwtSecret: "africlean"
};
//# sourceMappingURL=config.dev.js.map