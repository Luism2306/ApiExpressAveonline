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
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const getAllEmail_1 = require("./functions/getAllEmail");
const getAllPhone_1 = require("./functions/getAllPhone");
const SendEmail_1 = require("./functions/SendEmail");
const SendPhones_1 = require("./functions/SendPhones");
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.get('/', (req, res) => {
    res.send('Hola Bienvenido al  Api de envios de sms y correos de Aveonline!');
});
app.get('/emails', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const emails = yield (0, getAllEmail_1.getAllEmails)();
        console.log(emails);
        res.json(emails);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Error obteniendo los correos electrónicos');
    }
}));
app.get('/phone', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const phones = yield (0, getAllPhone_1.getAllPhone)();
        console.log(phones);
        res.json(phones);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Error obteniendo los telefonos');
    }
}));
app.get('/send-emails', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, SendEmail_1.sendEmailsFacturas)();
        res.send('Todos los correos electrónicos han sido enviados exitosamente.');
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Error enviando los correos electrónicos');
    }
}));
app.get('/send-sms', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, SendPhones_1.sendSmssFacturas)();
        res.send('Todos los sms han sido enviados exitosamente.');
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Error enviando los sms');
    }
}));
app.listen(3000, () => {
    console.log('API escuchando en el puerto 3000');
});
//# sourceMappingURL=ApiAve.js.map