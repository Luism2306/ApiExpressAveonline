import express from 'express';
import bodyParser from 'body-parser';
import { getAllEmails } from './functions/getAllEmail';
import { getAllPhone } from './functions/getAllPhone';
import { sendEmailsFacturas } from './functions/SendEmail';
import { sendSmssFacturas } from './functions/SendPhones';

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hola Bienvenido al  Api de envios de sms y correos de Aveonline!');
});

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

app.get('/send-emails', async (req, res) => {
  try {
    await sendEmailsFacturas();
    res.send('Todos los correos electrónicos han sido enviados exitosamente.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error enviando los correos electrónicos');
  }
});

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
