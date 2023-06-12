"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.newUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt")); //libreria para incriptar infromacion password 
const user_1 = require("../models/user");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const newUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    //validamos si el Usuario ya existe en la base de Datos 
    const user = yield user_1.User.findOne({ where: { username: username } });
    if (user) {
        return res.status(400).json({
            msg: `Ya Existe un Usuario con el Nombre ${username}`,
        });
    }
    const hashedPassword = yield bcrypt_1.default.hash(password, 10);
    try {
        //guardamos usuario creado en la base de datos 
        yield user_1.User.create({
            username: username,
            password: hashedPassword,
        });
        res.json({
            msg: 'Usuario ' + username + ' creado Exitosamente',
        });
    }
    catch (error) {
        res.status(400).json({
            msg: 'uups Ocurrio un Eroor ',
            error
        });
    }
});
exports.newUser = newUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    // Validamos si el Usuario Existe en la base de Datos 
    const user = yield user_1.User.findOne({ where: { username: username } });
    if (!user) {
        return res.status(400).json({
            msg: `No Exite Un Usuario con el Nombre ${username} en la base de datos`,
        });
    }
    // Validamos password 
    const passwordValid = yield bcrypt_1.default.compare(password, user.password);
    if (!passwordValid) {
        return res.status(400).json({
            msg: `Password Incorrecto `
        });
    }
    //Generamos Token 
    const token = jsonwebtoken_1.default.sign({
        username: username
    }, process.env.SECRET_KEY || 'kamch25', {
    /* expiresIn: '10000'  tiempo de expiracion de token 10s en este caso  */
    });
    res.json(token);
});
exports.loginUser = loginUser;
