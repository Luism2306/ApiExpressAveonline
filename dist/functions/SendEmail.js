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
function sendEmailFacturas({ nit, prefijoFactura, factura, cliente, numeroFactura, correocliente, }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const html = `
    <div style="font-family: 'Open Sans',sans-serif; display:flex;margin:0 auto; justify-content: center;">
    <div style="width:600px;border-radius:10px;background:#ffffff;padding-bottom:32px; border-style: solid; border-width: 1px 1px 1px 1px; border-color: #EBEBEB;
        box-shadow: 0px 2px 10px 0px rgb(0 0 0 / 6%);">
        <div
            style="padding-left:0!important;height:12px;background:linear-gradient(296.48deg,#ac24f1 46.11%,#ff585d 97.89%);border-radius:10px 10px 0px 0px ; ">
        </div>
        <div style="padding-left:43px">
            <div>
                <div style="text-align:center;margin-top:28px">
                    <img src="https://ci5.googleusercontent.com/proxy/x0e9U7KINSRr1XLqN5aVwXwodKVG4cdcsvQdG6SqrSKRBIEb_OhmTqzPzWcKLjbFpGzQV-uJyri7RJZc9oQJAdnvyTEWq1fiAkA=s0-d-e1-ft#https://app.aveonline.co/assets/img/mano-onboarding.png"
                        alt="" class="CToWUd" data-bit="iit">
                </div>
                <h1
                    style="font-style:normal;margin-top:26.48px;font-weight:700;font-size:24px;line-height:24px;text-align:center;color:#4a4f54">
                    Hola, ${cliente}</h1>
                <p
                    style="font-style:normal;margin-top:40px;width:518px;height:54px;font-weight:400;font-size:16px;line-height:20px;color:#4a4f54; display: flex; justify-content: center;">
                    Te invitamos a ponerte al día con tus factura ${factura}
                </p>
                <a href="">
                    <button style="cursor: pointer; margin-top: 58px;
                        width: 514px;
                        height: 56px;
                        background: #007aff;
                        border-radius: 10px;
                        border: 0px;"><span style="font-style: normal;
                            font-weight: 500;
                            font-size: 16px;
                            line-height: 20px;
                            color: #ffffff"> Ir a pagar factura</span></button>
                </a>
                <div style="
                        margin-top: 40px;
                        margin-bottom: 32px;
                        border: 1px solid #dcdcdc;
                        width: 514px"></div>
            </div>
        </div>
        <div style="
            width: 514px; ">
            <span style="display: flex; justify-content: center; font-family:'Open Sans',sans-serif;font-style:normal;font-weight:700">El equipo de
                Aveonline.</span>
        </div>
    </div>
</div>
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
//comentar cuando este produccion datos de prueba
const facturasPrueba = [
    {
        idEmpresa: 158,
        totalDebito: null,
        pendcastigada: "SI",
        castigada: "SI",
        prefijoFactura: "ST",
        numeroFactura: 6346,
        observacion: "",
        factura: "ST 6346",
        totalFactura: 22680,
        cliente: "Gerardo",
        nit: "1152186540",
        telefono: "3136817586",
        telefono1: "3136817586",
        correocliente: "luigui23062001@gmail.com",
        vencida: "SI",
        fechaFactura: "2017/01/25",
        fechaVencimineto: "2017/02/02",
        diasVencimiento: -2274,
        estadoCliente: "8. Suspendió Operaciones con AVE",
        estadoNuevo: "Juridico",
        saldo: 22680,
        abonos: 0,
        notasCredito: 0,
        AsesorCom: "Yuleidy  Garcia Vasquez",
        notasCreditoAnticipos: 0,
    },
    {
        idEmpresa: 158,
        totalDebito: null,
        pendcastigada: "SI",
        castigada: "NO",
        prefijoFactura: "ST",
        numeroFactura: 6421,
        observacion: "",
        factura: "ST 6421",
        totalFactura: 52920,
        cliente: "Martin",
        nit: "1152186540",
        telefono: "3136817586",
        telefono1: "3136817586",
        correocliente: "luigui23062001@gmail.com",
        vencida: "SI",
        fechaFactura: "2017/02/06",
        fechaVencimineto: "2017/02/14",
        diasVencimiento: -2262,
        estadoCliente: "8. Suspendió Operaciones con AVE",
        estadoNuevo: "Juridico",
        saldo: 52920,
        abonos: 0,
        notasCredito: 0,
        AsesorCom: "Yuleidy  Garcia Vasquez",
        notasCreditoAnticipos: 0,
    },
    // Agrega más facturas de prueba aquí...
];
function sendEmailsFacturas() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log(sendEmailsFacturas);
            const facturas = facturasPrueba;
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