const express = require('express');
const cors = require('cors');
const { google } = require('googleapis');
const fs = require('fs');
const key = require('./credentials.json');
require('dotenv').config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const { transporter, configurationToSendEmail, objectToHTMLTable } = require('./helpers/mailer');

const client = new google.auth.JWT(key.client_email, null, key.private_key, ['https://www.googleapis.com/auth/spreadsheets']);

const sheets = google.sheets({ version: 'v4', auth: client });

app.get('/', async (req, res) => {
    try {
        const values = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.SHEET_ID,
            range: 'Data'
        });

        res.send(values.data);
    } catch (error) {
        console.error('Error al obtener datos de la hoja de cálculo:', error);
        res.status(500).send('Error interno del servidor');
    }
});

app.post('/lead', async (req, res) => {

    const { nombreCompleto, mail, telefono, tipoDepartamento, zonaDepartamento } = req.body.formState;

    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];

    const columnNames = {
        date: formattedDate,
        fullName: nombreCompleto || '',
        email: mail || '',
        phoneNumber: telefono || '',
        flatType: tipoDepartamento || '',
        flatZone: zonaDepartamento || '',
    };
    
    const { date, fullName, email, phoneNumber, flatType, flatZone } = columnNames;
    const name = fullName.split(' ')[0];

    try {

        await transporter.sendMail(configurationToSendEmail(mail, 'Bienvenido', '' ,`<h1>Gracias por su consulta al Estudio Kohon</h1>
        <p>Hola ${ name } </p>
        <p>En los próximos días nos estaremos comunicando con usted. Para más información puede ingresar a https://estudiokohon.com/ y ver todos nuestros proyectos.</p>
        <p>Saludos cordiales.</p>
        <p>El equipo del Estudio Kohon.</p>`));

        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.SHEET_ID,
            range: 'Data!A3:E',
            insertDataOption: 'INSERT_ROWS',
            valueInputOption: 'RAW',
            requestBody: {
                values: [[ date, fullName, email, phoneNumber, flatType, flatZone ]]
            }
        });
        res.json({ message: 'Se agregó la información de manera correcta' })
    } catch (error) {
        console.error('Error al enviar datos de la hoja de cálculo:', error);
        res.status(500).send('Error interno del servidor');
    }
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App running on ${port}`);
})