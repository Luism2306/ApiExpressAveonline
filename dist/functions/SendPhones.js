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
exports.sendSMSs = exports.sendSMS = void 0;
const axios_1 = __importDefault(require("axios"));
const getAllPhone_1 = require("./getAllPhone");
function sendSMS({ phone }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const phones = yield (0, getAllPhone_1.getAllPhone)();
            const payload = {
                to: [phone],
                body: "Has generado un nuevo envio, para verlo ingresa a https://aveonline.co/",
            };
            yield axios_1.default.post("https://notificaciones.api.aveonline.co/api/v1/sms/send", payload, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            });
            console.log("Mensaje de texto enviado exitosamente a todos los teléfonos.");
        }
        catch (error) {
            console.error(error);
            throw new Error("Error enviando mensaje de texto");
        }
    });
}
exports.sendSMS = sendSMS;
function sendSMSs() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const phones = yield (0, getAllPhone_1.getAllPhone)();
            for (const phone of phones) {
                yield sendSMS({
                    phone: [phone],
                });
            }
            console.log("Mensaje de texto enviado exitosamente a todos los teléfonos.");
        }
        catch (error) {
            console.error(error);
            throw new Error("Error enviando mensaje de texto");
        }
    });
}
exports.sendSMSs = sendSMSs;
//# sourceMappingURL=SendPhones.js.map