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
exports.sendSmssFacturas = exports.sendEmailFacturas = exports.sendSms = void 0;
const axios_1 = __importDefault(require("axios"));
const getInvoiceInfo_1 = require("./getInvoiceInfo");
function sendSms({ telefono, html, }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const bodyTemplate = `
    <div>
      ${html}
    </div>
`;
            const payload = {
                to: telefono,
                body: bodyTemplate,
            };
            yield axios_1.default.post("https://notificaciones.api.aveonline.co/api/v1/sms/send", payload, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
            });
            console.log(`Mensaje enviado a: ${telefono}`);
        }
        catch (error) {
            console.error(error);
            throw new Error("Error enviando Mensajes");
        }
    });
}
exports.sendSms = sendSms;
function sendEmailFacturas({ nit, prefijoFactura, cliente, telefono, numeroFactura, correocliente, }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const html = `
      <p>Estimado ${cliente} ,</p>
      <p>Le queremos recordar que su facura ${numeroFactura}</p>
      <p>Se encuentra pendiente </p>
      <p>Atentamente,</p>
      <p>El equipo de Aveonline</p>
      <p>El equipo de Aveonline</p>
  `;
            yield sendSms({
                telefono: telefono,
                html,
            });
            console.log(`Mensaje enviado a: ${telefono}`);
        }
        catch (error) {
            console.error(error);
            throw new Error("Error enviando Mensaje");
        }
    });
}
exports.sendEmailFacturas = sendEmailFacturas;
function sendSmssFacturas() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const facturas = yield (0, getInvoiceInfo_1.getInvoiceInfo)();
            for (const factura of facturas) {
                yield sendEmailFacturas(Object.assign({}, factura));
            }
            console.log("Todos los correos mensajes han sido enviados exitosamente.");
        }
        catch (error) {
            console.error(error);
            throw new Error("Error enviando mensajes");
        }
    });
}
exports.sendSmssFacturas = sendSmssFacturas;
//# sourceMappingURL=SendPhones.js.map