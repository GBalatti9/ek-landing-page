const express = require('express');
const cors = require('cors');
const { google } = require('googleapis');
const fs = require('fs');

const credentialsPath = './credentials.json';
const keys = JSON.parse(fs.readFileSync(credentialsPath));

// const { transporter, configurationToSendEmail, objectToHTMLTable } = require('./helpers/mailer');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const client = new google.auth.JWT(
    keys.client_email,
    null,
    keys.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
);

app.get('/', async (req, res) => {

    try {
        await client.authorize();
        const sheets = google.sheets({ version: 'v4', auth: client });
        const spreadsheetId = '1eV-hPb2LXeLGdrYhFU5Ag38TRi6fUbxzy6HSo60O5Vo';
        const range = 'Sheet1!D:H';
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range,
        });

        const values = response.data.values;
        res.json(values);

    } catch (error) {
        console.log(error);
    }
});

    // const auth = new google.auth.GoogleAuth({
    //     keyFile: 'credentials.json',
    //     scopes: 'https://www.googleapis.com/auth/spreadhseets',
    // });

    // const client = await auth.getClient();

    // const googleSheets = google.sheets({ version: 'v4', auth: client });

    // const spreadsheetId = '1eV-hPb2LXeLGdrYhFU5Ag38TRi6fUbxzy6HSo60O5Vo';

    // const metaData = await googleSheets.spreadsheets.get({
    //     auth,
    //     spreadsheetId,
    // });
    // res.send(metaData);

// app.post('/lead', async ( req, res ) => {
//     console.log(req.body);
//     const { formState } = req.body;
//     const { mail } = formState;

//     const { nombreCompleto } = formState;
//     const nombre = nombreCompleto.split(' ')[0];
//     console.log({ nombre });

// const table = objectToHTMLTable(formState)
// console.log({ formState });

// try {
// await transporter.sendMail(configurationToSendEmail(mail, 'Bienvenido', '' ,`<h1>Gracias por su consulta al Estudio Kohon</h1>
// <p>Hola ${ nombre } </p>
// <p>En los próximos días nos estaremos comunicando con usted. Para más información puede ingresar a https://estudiokohon.com/ y ver todos nuestros proyectos.</p>
// <p>Saludos cordiales.</p>
// <p>El equipo del Estudio Kohon.</p>`));
// await transporter.sendMail(configurationToSendEmail('gas.balatti@gmail.com', 'Nuevo lead', 'Informacion del lead', table));
//         console.log('Mails sent...');
//         res.status(200).json({ message: 'Solicitud recibida correctamente' });

//     } catch (error) {
//         console.log("Error to send mail", error);
//     }
// } )

const port = 3000;

app.listen(process.env.PORT || 3000, () => {
    console.log(`App running on ${port}`);
})