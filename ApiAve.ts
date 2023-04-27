import express from 'express';
import bodyParser from 'body-parser';
import cron from 'node-cron';
import { getAllEmails } from './functions/getAllEmail';
import { getAllPhone } from './functions/getAllPhone';
import { sendEmailsFacturas } from './functions/SendEmail';
import { sendSmssFacturas } from './functions/SendPhones';
import { getInvoiceInfo } from './functions/getInvoiceInfo';

const app = express();

app.use(bodyParser.json()); 

app.get('/', (req, res) => {
  res.send('Hola Bienvenido al  Api de envios de sms y correos de Aveonline!');
});


//Lista de correos electronicos
app.get('/emails', async (req, res) => {
  try {
    const emails = await getAllEmails();
    console.log(emails);
    res.json(emails);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error obteniendo los correos electrónicos');
  }
});

//Lista de telefonos
app.get('/phone', async (req, res) => {
  try {
    const phones = await getAllPhone();
    console.log(phones); 
    res.json(phones);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error obteniendo los telefonos');
  }
});

//Lista de Todos los datos del cliente
app.get('/facturas', async (req, res) => {
  try {
    const facturas = await getInvoiceInfo();
    console.log(facturas); 
    res.json(facturas);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error obteniendo las facturas');
  }
});



//Envio de correos electronicos a los clientes
app.get('/send-emails', async (req, res) => {
  try {
    await sendEmailsFacturas();
    res.send('Todos los correos electrónicos han sido enviados exitosamente.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error enviando los correos electrónicos');
  }
});


//Lista de mensajes a los clientes
app.get('/send-sms', async (req, res) => {
  try {
    await sendSmssFacturas();
    res.send('Todos los sms han sido enviados exitosamente.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error enviando los sms');
  }
});

app.listen(3000, () => {
  console.log('API escuchando en el puerto 3000');
});

cron.schedule("*/5 * * * *", sendEmailsFacturas)