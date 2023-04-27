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
const node_cron_1 = __importDefault(require("node-cron"));
const getAllEmail_1 = require("./functions/getAllEmail");
const getAllPhone_1 = require("./functions/getAllPhone");
const SendEmail_1 = require("./functions/SendEmail");
const SendPhones_1 = require("./functions/SendPhones");
const getInvoiceInfo_1 = require("./functions/getInvoiceInfo");
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.get('/', (req, res) => {
    res.send('Hola Bienvenido al  Api de envios de sms y correos de Aveonline!');
});
//Lista de correos electronicos
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
//Lista de telefonos
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
//Lista de Todos los datos del cliente
app.get('/facturas', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const facturas = yield (0, getInvoiceInfo_1.getInvoiceInfo)();
        console.log(facturas);
        res.json(facturas);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Error obteniendo las facturas');
    }
}));
//Envio de correos electronicos a los clientes
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
//Lista de mensajes a los clientes
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
node_cron_1.default.schedule("*/2 * * * *", SendEmail_1.sendEmailsFacturas);
//# sourceMappingURL=ApiAve.js.map