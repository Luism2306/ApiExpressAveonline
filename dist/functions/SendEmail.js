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
exports.sendEmailsFacturas = exports.sendEmailFacturas = exports.sendEmail = void 0;
const axios_1 = __importDefault(require("axios"));
const getInvoiceInfo_1 = require("./getInvoiceInfo");
function sendEmail({ email, html, subject, }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const bodyTemplate = `
      <body>
        ${html}
      </body>
  `;
            const payload = {
                to: email,
                subject,
                body: bodyTemplate,
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
function sendEmailFacturas({ nit, prefijoFactura, cliente, numeroFactura, correocliente, }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const html = `
      <p>Estimado ${cliente} ,</p>
      <p>Gracias por su interés en nuestros productos. ${numeroFactura}</p>
      <p>El número de su última factura es</p>
      <p>Atentamente,</p>
      <p>El equipo de Aveonline</p>
  `;
            yield sendEmail({
                email: correocliente,
                subject: `Hola ${cliente}`,
                html,
            });
            console.log(`Correo electrónico enviado a: ${correocliente}`);
        }
        catch (error) {
            console.error(error);
            throw new Error("Error enviando correos electrónicos");
        }
    });
}
exports.sendEmailFacturas = sendEmailFacturas;
function sendEmailsFacturas() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const facturas = yield (0, getInvoiceInfo_1.getInvoiceInfo)();
            for (const factura of facturas) {
                yield sendEmailFacturas(Object.assign({}, factura));
            }
            console.log("Todos los correos electrónicos han sido enviados exitosamente.");
        }
        catch (error) {
            console.error(error);
            throw new Error("Error enviando correos electrónicos");
        }
    });
}
exports.sendEmailsFacturas = sendEmailsFacturas;
//# sourceMappingURL=SendEmail.js.map