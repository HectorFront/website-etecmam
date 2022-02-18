const nodemailer = require('nodemailer');
const config = require('../config/serviceGmail');
const conn = require('../config/database');
const Storage = require('./storage');
const views = require('../view/render');
const templateRecovery = require('../templates/recovery');
const token = Storage.hashingToken();
/**
 * @author Hector Rodrigues Da Silva
 * @methods of Users
 */
module.exports = {

    /**
      *
      * @param req
      * @param res
      * @method GET
      * @return {*}
      */
    VALIDATElogin: (req, res) => {
        const email = req.body.email;
        const senha = req.body.senha;
        const objectData = { email, senha };

        Storage.loginAdm(objectData)
            .then(id => {
                views.state.logged = true;
                views.state.id = id;
                Storage.userConnected(id)
                    .then((userName) => {
                        views.state.user = userName;
                        return res.redirect(`/admin/school?param=${id}`);
                    }).catch(() => {
                        return res.redirect('/');
                    });
            }).catch(() => {
                return res.render("login", { class: `alert alert-danger animation-alert`, msg: `E-mail ou senha inválida!` })
            });
    },

    /**
      *
      * @param req
      * @param res
      * @method GET
      * @return {*}
      */
    GETuser: (req, res) => {
        if (views.state.logged) {
            const id = req.params.id;
            const getUser = `SELECT userName, sexo, cargo, permissao, email, senha, status_logged FROM usuario INNER JOIN login ON usuario.id = login.id WHERE usuario.id = ${id} AND login.id = ${id}`;
            conn.query(getUser, (err, results) => {
                if (err) throw err;
                if (results.length > 0) {
                    results[0].email = Storage.descrypt(results[0].email);
                    results[0].senha = Storage.descrypt(results[0].senha);
                    results[0].webtoken = Storage.encrypt(token);

                    return res.status(200).json(results[0]);
                } else if (results.length <= 0) {
                    return res.status(404).send({ err: `este usuario nao existe` })
                }
            })
        } else {
            return res.status(404).render('404');
        }
    },

    /**
      *
      * @param req
      * @param res
      * @method GET
      * @return {*}
      */
    GETusers: (req, res) => {
        if (views.state.logged) {
            const getUsers = `SELECT * FROM login INNER JOIN usuario ON login.id = usuario.id`;
            conn.query(getUsers, (err, results) => {
                if (err) {
                    res.status(500).send({ err: `erro ao buscars todos usuarios`, status: err });
                } else {
                    results.map(item => { item.email = Storage.descrypt(item.email) });
                    return res.status(200).json(results);
                }
            });
        } else {
            return res.status(404).render('404');
        }
    },

    /**
      *
      * @param req
      * @param res
      * @method POST
      * @return {*}
      */
    POSTuser: (req, res) => {
        if (views.state.logged && req.headers.authorization === Storage.encrypt(token)) {
            const { nome, email, senha, sexo, permissao, cargo } = req.body;
            let id = null;

            new Promise((resolve, reject) => {
                const createLogin = `INSERT INTO login SET email='${Storage.encrypt(email)}', senha='${Storage.encrypt(senha)}'`;
                conn.query(createLogin, (err, results) => {
                    if (err) {
                        return res.status(500).send({ err: `erro ao criar usuario de login`, status: err });
                    } else {
                        id = results.insertId;
                        resolve();
                    }
                });
            }).then(() => {
                const registerUser = `INSERT INTO usuario SET id=${id}, userName='${nome}', sexo='${sexo}', permissao='${permissao}', cargo='${cargo}', status_logged='${0}'`;
                conn.query(registerUser, (err, results) => {
                    if (err)
                        return res.status(500).send({ err: `erro ao inserir um novo usuario`, status: err });
                    return res.status(201).send({ success: `sucesso ao criar usuario de login`, status: results });
                });
            })
        } else {
            return res.status(401).send({ unauthorized: `usuario nao autorizado para fazer esta acao`, status: 401 });
        }
    },

    /**
      *
      * @param req
      * @param res
      * @method GET
      * @return {*}
      */
    VALIDATEemail: (req, res) => {
        const { email } = req.body;

        const verifyEmail = `SELECT email FROM login WHERE email = '${Storage.encrypt(email)}'`;
        conn.query(verifyEmail, (err, results) => {
            if (err) {
                return res.status(500).send({ err: `erro na query de verificação de email`, status: err });
            } else {
                if (results.length > 0) {
                    return res.status(409).send({ err: `email de usuario ja existente`, status: results });
                } else {
                    return res.status(200).send({ err: `email valido para uso`, status: results });
                }
            }
        })
    },

    /**
      *
      * @param req
      * @param res
      * @method GET
      * @return {*}
      */
    RESETuserPassword: (req, res) => {
        const { email } = req.body;

        let idUser = null;
        let codeRecuperation = null;

        const verifyUserEmail = `SELECT id, email FROM login WHERE email = '${Storage.encrypt(email)}'`;
        conn.query(verifyUserEmail, (err, results) => {
            if (err) {
                return res.status(500).send({ err: `erro na query de verificação de email`, status: err });
            }
            if (results.length > 0) {
                (results.map(item => idUser = item.id));
                const generate = (n) => {
                    let add = 1, max = 12 - add;
                    if (n > max) {
                        return generate(max) + generate(n - max);
                    }
                    max = Math.pow(10, n + add);
                    let min = max / 10;
                    let number = Math.floor(Math.random() * (max - min + 1)) + min;
                    return ("" + number).substring(add);
                }
                codeRecuperation = generate(6);

                const setCode = `UPDATE login SET codigo_recuperacao='${codeRecuperation}' WHERE id = ${idUser}`;
                conn.query(setCode, (err, results) => {
                    if (err)
                        return res.status(500).send({ err: `erro ao gerar código de recuperacao de senha para usuário`, status: err });
                    return res.status(200).send({ success: `código de recuperacao criado com sucesso`, status: results })
                });

                const templateEmailRecovery = templateRecovery.Recovery(codeRecuperation);
                const mailOptions = {
                    from: config.auth.user,
                    to: email,
                    subject: 'Redefinição de senha',
                    html: templateEmailRecovery
                };

                nodemailer.createTransport(config).sendMail(mailOptions, (err, results) => {
                    if (err)
                        console.log({ error: `Falha no envio de formulario de redefinicao de senha`, status: err });
                    console.log({ success: `Formulario de redefinicao de senha enviado com sucesso`, status: results });
                });
            } else {
                return res.status(404).send({ err: `email invalido para redefinicao de senha`, status: results });
            }
        })
    },

    /**
      *
      * @param req
      * @param res
      * @method GET
      * @return {*}
      */
    VALIDATEcodeUser: (req, res) => {
        const { codigo } = req.body;

        const verifyCode = `SELECT id, codigo_recuperacao FROM login WHERE codigo_recuperacao = ${codigo}`;
        conn.query(verifyCode, (err, results) => {
            if (err) {
                return res.status(500).send({ err: `erro ao fazer verificacao de codigo de redefinicao`, status: results });
            } else {
                if (results.length > 0) {
                    return res.status(200).send({ success: `codigo de redefinicao valido`, status: results });
                } else {
                    return res.status(404).send({ err: `codigo de redefinicao invalido` });
                }
            }
        })
    },

    /**
      *
      * @param req
      * @param res
      * @method PATCH
      * @return {*}
      */
    UPDATEpassword: (req, res) => {
      if (req.headers.authorization === Storage.encrypt(token)) {
          const id = req.params.id;
          const { senha } = req.body;

          const updatePassword = `UPDATE login SET senha='${Storage.encrypt(senha)}', codigo_recuperacao='' WHERE id = ${id}`;
          conn.query(updatePassword, (err, results) => {
              if (err)
                  return res.status(500).send({ err: `erro ao redefinir senha de usuário`, status: err })
              return res.status(200).send({ success: `senha de usuário redefinida com sucesso`, status: results });
          })
       }
    },

    /**
      *
      * @param req
      * @param res
      * @method PATCH
      * @return {*}
      */
    UPDATEuser: (req, res) => {
        if (views.state.logged && req.headers.authorization === Storage.encrypt(token)) {
            const id = req.params.id;
            const { nome, email, sexo, permissao, cargo } = req.body;

            const updateUser = `UPDATE usuario SET userName='${nome}', email='${Storage.encrypt(email)}', sexo='${sexo}', permissao='${permissao}', cargo='${cargo}' WHERE id = ${id}`;
            conn.query(updateUser, (err, results) => {
                if (err)
                    return res.status(500).send({ err: `erro ao atualizar usuario`, status: err });
                return res.status(200).send({ success: `sucesso ao atualizar usuario`, status: results });
            });
        } else {
            return res.status(401).send({ unauthorized: `usuario nao autorizado para fazer esta acao`, status: 401 });
        }
    },

    /**
      *
      * @param req
      * @param res
      * @method PATCH
      * @return {*}
      */
    UPDATEstatusLogged: (req, res) => {
        if (req.headers.authorization === Storage.encrypt(token)) {
            const id = req.params.id;
            const setStatus = `UPDATE usuario SET status_logged='${req.body.status}' WHERE id = ${id}`;
            conn.query(setStatus, (err, results) => {
                if (err)
                    return res.status(500).send({ err: `erro ao atualizar status de usuario`, status: err });
                return res.status(200).send({ success: `sucesso ao atualizar status de usuario`, status: results });
            });
        }
    },

    /**
      *
      * @param req
      * @param res
      * @method DELETE
      * @return {*}
      */
    DELETEUser: (req, res) => {
        if (views.state.logged && req.headers.authorization === Storage.encrypt(token)) {
            const id = req.params.id;

            const deleteUser = `DELETE FROM login WHERE id = ${id}`;
            conn.query(deleteUser, (err, results) => {
                if (err)
                    return res.status(500).send({ err: `erro ao deletar usuario`, status: err });
                return res.status(200).send({ success: `sucesso ao deletar usuario`, status: results });
            });
        } else {
            return res.status(401).send({ unauthorized: `usuario nao autorizado para fazer esta acao`, status: 401 });
        }
    },

    /**
      *
      * @param req
      * @param res
      * @method PATCH
      * @return {*}
      */
    UPDATEuserlogged: (req, res) => {
        if (views.state.logged && req.headers.authorization === Storage.encrypt(token)) {
            const id = req.params.id;
            const { nome, email, senha, cargo } = req.body;

            const updateUserlogged = `UPDATE usuario SET userName='${nome}', cargo='${cargo}' WHERE id = ${id}`;
            const updateLogin = !senha
                ? `UPDATE login SET email='${Storage.encrypt(email)}' WHERE id = ${id}`
                : `UPDATE login SET email='${Storage.encrypt(email)}', senha='${Storage.encrypt(senha)}' WHERE id = ${id}`;

            new Promise((resolve, reject) => {
                conn.query(updateUserlogged, (err, results) => {
                    if (err) throw err;
                    console.log({ success: `sucesso ao atualizar usuario`, status: results });
                    resolve();
                });
            }).then(() => {
                conn.query(updateLogin, (err, results) => {
                    if (err)
                        return res.status(500).send({ err: `erro ao atualizar usuario de email e senha`, status: err });
                    return res.status(200).send({ success: `sucesso ao atualizar email e senha de usuário`, status: results })
                })
            });
        } else {
            return res.status(401).send({ unauthorized: `usuario nao autorizado para fazer esta acao`, status: 401 });
        }
    },
}
