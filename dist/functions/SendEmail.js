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
exports.sendEmails = exports.sendEmail = void 0;
const axios_1 = __importDefault(require("axios"));
const getAllEmail_1 = require("./getAllEmail");
function sendEmail({ email }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const payload = {
                to: email,
                subject: "Buenas Tardes",
                body: "ddd",
            };
            yield axios_1.default.post("https://notificaciones.api.aveonline.co/api/v2/email/send", payload, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "X-Hub-Aveonline": "AVeonline",
                },
            });
            console.log(`Correo electrónico enviado a: ${email}`);
        }
        catch (error) {
            console.error(error);
            throw new Error("Error enviando correos electrónicos");
        }
    });
}
exports.sendEmail = sendEmail;
function sendEmails() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const emails = yield (0, getAllEmail_1.getAllEmails)();
            for (const email of emails) {
                yield sendEmail({
                    email
                });
            }
            console.log("Todos los correos electrónicos han sido enviados exitosamente.");
        }
        catch (error) {
            console.error(error);
            throw new Error("Error enviando correos electrónicos");
        }
    });
}
exports.sendEmails = sendEmails;
//# sourceMappingURL=SendEmail.js.map