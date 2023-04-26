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
exports.getAllEmails = void 0;
const axios_1 = __importDefault(require("axios"));
function getAllEmails() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield axios_1.default.post('https://app.aveonline.co/api/comunes/v1.0/administrativo/cartera.php', {
            "tipo": "cargarCartera",
            "fechaInicial": "",
            "fechaFinal": "",
            "prefijo": "",
            "edad": "",
            "factura": "",
            "nit": ""
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = response.data;
        const respuestaValida = (respuesta) => {
            return (typeof respuesta === "object" &&
                Array.isArray(respuesta.facturas) &&
                typeof respuesta.facturas[0] === "object" &&
                typeof respuesta.facturas[0].correocliente === "string");
        };
        if (!respuestaValida(data)) {
            throw new Error('La respuesta de la API no es válida');
        }
        const emails = data.facturas.map(factura => factura.correocliente).filter(email => email);
        return emails;
    });
}
exports.getAllEmails = getAllEmails;
//# sourceMappingURL=getAllEmail.js.map