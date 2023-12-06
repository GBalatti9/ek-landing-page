const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: "gas.balatti@gmail.com",
        pass: "lvwasuxodmlqqwjo",
    },
});

transporter.verify().then(() => {
    console.log("Ready to send emails...");
});

const configurationToSendEmail = (email, subject, text, html) => {
    return{
        from: '"Estudio Kohon <estudiokohon@gmail.com>',
        to: email,
        subject: subject,
        text: text,
        html: html
    }
}

const objectToHTMLTable = (obj) => {
    const keys = Object.keys(obj);
    const values = Object.values(obj);

    const tableRows = keys.map((key, index) => `<tr><th>${key}</th><td>${values[index]}</td></tr>`);

    return `<table><tbody>${tableRows.join('')}</tbody></table>`;
}

module.exports = {
    transporter,
    configurationToSendEmail,
    objectToHTMLTable
}