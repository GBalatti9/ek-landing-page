const express = require('express');
const cors = require('cors');

const { transporter, configurationToSendEmail, objectToHTMLTable } = require('./helpers/mailer');

const app = express();

app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use(cors());

app.get('/', ( req, res ) => {
    res.send('Everything is working...')
})

app.post('/lead', async ( req, res ) => {
    console.log(req.body);
    const { formState } = req.body;
    const { mail } = formState;

    const { nombreCompleto } = formState;
    const nombre = nombreCompleto.split(' ')[0];
    console.log({ nombre });

    const table = objectToHTMLTable(formState)
    console.log({ formState });

    try {
        await transporter.sendMail(configurationToSendEmail(mail, 'Bienvenido', '' ,`<h1>Gracias por su consulta al Estudio Kohon</h1>
        <p>Hola ${ nombre } </p>
        <p>En los próximos días nos estaremos comunicando con usted. Para más información puede ingresar a https://estudiokohon.com/ y ver todos nuestros proyectos.</p>
        <p>Saludos cordiales.</p>
        <p>El equipo del Estudio Kohon.</p>`));
        await transporter.sendMail(configurationToSendEmail('gas.balatti@gmail.com', 'Nuevo lead', 'Informacion del lead', table));
        console.log('Mails sent...');
        res.status(200).json({ message: 'Solicitud recibida correctamente' });
        
    } catch (error) {
        console.log("Error to send mail", error);
    }
} )

const port = 3000;

app.listen( process.env.PORT || 3000, () => {
    console.log(`App running on ${port}`);
} )