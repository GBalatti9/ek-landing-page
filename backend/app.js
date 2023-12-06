const express = require('express');
const cors = require('cors');

const { transporter, configurationToSendEmail, objectToHTMLTable } = require('./helpers/mailer');

const app = express();

app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use(cors());

app.post('/lead', async ( req, res ) => {
    console.log(req.body);
    const { formState } = req.body;
    const { mail } = formState;

    const table = objectToHTMLTable(formState)
    console.log({ table });

    try {
        await transporter.sendMail(configurationToSendEmail(mail, 'Bienvenido', 'Gracias por su consulta al Estudio Kohon, en los próximos días nos estaremos comunicando con usted. Para más información puede ingresar a https://estudiokohon.com/ ir ver todos nuestros proyectos. Saludos'));
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