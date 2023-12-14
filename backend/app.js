const express = require('express');
const cors = require('cors');
const { google } = require('googleapis');
const fs = require('fs');
const key = require('./secrets.json');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const SHEET_ID = '1eV-hPb2LXeLGdrYhFU5Ag38TRi6fUbxzy6HSo60O5Vo';

const client = new google.auth.JWT(key.client_email, null, key.private_key, ['https://www.googleapis.com/auth/spreadsheets']);

const sheets = google.sheets({ version: 'v4', auth: client });

app.get('/', async (req, res) => {
    try {        
        const values = await sheets.spreadsheets.values.get({
            spreadsheetId: SHEET_ID,
            range: 'Data'
        });
    
        res.send(values.data);
    } catch (error) {
        console.error('Error al obtener datos de la hoja de cálculo:', error);
        res.status(500).send('Error interno del servidor');
    }
});

app.post('/lead', async (req, res) => {

    // const valuesFromBody = 
    const { nombreCompleto, mail, telefono, tipoDepartamento, zonaDepartamento } = req.body.formState;
    const columnNames = {
        fullName: nombreCompleto || '',
        email: mail || '',
        phoneNumber: telefono || '',
        flatType: tipoDepartamento || '',
        flatZone: zonaDepartamento || '',
    };

    const { fullName, email, phoneNumber, flatType, flatZone } = columnNames;

    try {
        await sheets.spreadsheets.values.append({
            spreadsheetId: SHEET_ID,
            range: 'Data!A3:E',
            insertDataOption: 'INSERT_ROWS',
            valueInputOption: 'RAW',
            requestBody: {
                values: [[ fullName, email, phoneNumber, flatType, flatZone ]]
            }
        });
        res.json({ message: 'Se agregó la información de manera correcta' })
    } catch (error) {
        console.error('Error al enviar datos de la hoja de cálculo:', error);
        res.status(500).send('Error interno del servidor');
    }
})

const port = process.env.PORT || 3000;

app.listen( port, () => {
    console.log(`App running on ${port}`);
})