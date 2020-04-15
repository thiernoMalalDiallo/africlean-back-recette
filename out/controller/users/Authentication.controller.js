"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const user_model_1 = require("../../models/users/user.model");
class AuthController {
}
AuthController.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
    //Check if username and password are set
    let { username, password } = req.body;
    if (!(username && password)) {
        res.status(400).send();
    }
    //Get user from database
    const userRepository = typeorm_1.getRepository(user_model_1.User);
    let user;
    try {
        user = yield userRepository.findOneOrFail({ where: { username } });
    }
    catch (error) {
        res.status(401).send();
    }
    //Check if encrypted password match
    /*  if (!user.checkIfUnencryptedPasswordIsValid(password)) {
          res.status(401).send();
          return;
      }
*/
    //Sing JWT, valid for 1 hour
    /*
    const token = jwt.sign(
        { userId: user.id, username: user.username },
        config.jwtSecret,
        { expiresIn: "1h" }
    );*/
    //Send the jwt in the response
    // res.send(token);
});
AuthController.changePassword = (req, res) => __awaiter(this, void 0, void 0, function* () {
    //Get ID from JWT
    const id = res.locals.jwtPayload.userId;
    //Get parameters from the body
    const { oldPassword, newPassword } = req.body;
    if (!(oldPassword && newPassword)) {
        res.status(400).send();
    }
    //Get user from the database
    const userRepository = typeorm_1.getRepository(user_model_1.User);
    let user;
    try {
        user = yield userRepository.findOneOrFail(id);
    }
    catch (id) {
        res.status(401).send();
    }
    //Check if old password matchs
    /*  if (!user.checkIfUnencryptedPasswordIsValid(oldPassword)) {
          res.status(401).send();
          return;
      }*/
    //Validate de model (password lenght)
    //  user.password = newPassword;
    const errors = yield class_validator_1.validate(user);
    if (errors.length > 0) {
        res.status(400).send(errors);
        return;
    }
    //Hash the new password and save
    //user.hashPassword();
    userRepository.save(user);
    res.status(204).send();
});
exports.default = AuthController;
//# sourceMappingURL=Authentication.controller.js.map