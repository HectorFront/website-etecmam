const nodemailer = require('nodemailer');
const config = require('../config/serviceGmail');
const templateContact = require('../templates/contact');
const templateNewUser = require('../templates/newUser');
/**
 * @author Hector Rodrigues Da Silva
 * @methods of Nodemailer
 */
module.exports = {

    /**
      *
      * @param req
      * @param res
      * @method POST
      * @return {*}
      */
    SendContact: (req, resp) => {
        const { assunto, nome, email, telefone, mensagem } = req.body;
        const templateEmailContact = templateContact.Contact(assunto, nome, email, telefone, mensagem);
        const mailOptions = {
            from: config.auth.user,
            to: 'hectddos103@gmail.com',
            subject: req.body.assunto,
            html: templateEmailContact
        };

        nodemailer.createTransport(config).sendMail(mailOptions, (err, results) => {
            if (err)
                return resp.send({ error: `Falha no envio de formulário`, status: err });
            return resp.send({ success: `Formulário enviado com sucesso`, status: results });
        });
    },

    /**
      *
      * @param req
      * @param res
      * @method POST
      * @return {*}
      */
    SendEmailUser: (req, resp) => {
        const { nome, email, date } = req.body;
        const templateEmailNewUser = templateNewUser.NewUser(nome, email, date);
        const mailOptions = {
            from: config.auth.user,
            to: req.body.email,
            subject: req.body.assunto,
            html: templateEmailNewUser
        };

        nodemailer.createTransport(config).sendMail(mailOptions, (err, results) => {
            if (err)
                return resp.send({ error: `Falha no envio de email`, status: err });
            return resp.send({ success: `Email enviado com sucesso`, status: results });
        });
    }
}