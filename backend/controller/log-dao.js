const conn = require('../config/database');
const views = require('../view/render');
const Moment = require('moment');
const Storage = require('./storage');
const token = Storage.hashingToken();
Moment.locale('pt-br');
/**
 * @author Hector Rodrigues Da Silva
 * @methods of Log
 */
(function () {
    setInterval(() => {
        let limitTruncate = true;
        const hour = Moment(new Date()).format('HH:mm:ss');
        if (hour == '00:00:30' && limitTruncate) {
            const deleteLog = 'TRUNCATE TABLE log_atividade';
            conn.query(deleteLog, (err, results) => {
                if (err) {
                    console.log({ err: `erro ao deletar log de atividade`, status: err });
                } else {
                    limitTruncate = false;
                    console.log({ success: `sucesso ao deletar log de atividade`, status: results });
                }
            });
        } else {
            limitTruncate = true;
        }
    }, 1000);
}());
module.exports = {

    /**
      *
      * @param req
      * @param res
      * @method GET
      * @return {*}
      */
    GETlogs: (req, res) => {
        if (views.state.logged) {
            const getLogs = `SELECT * FROM log_atividade`;
            conn.query(getLogs, (err, results) => {
                if (err)
                    return res.status(500).send({ err: `erro ao buscar logs de atividade`, status: err });
                return res.json(results);
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
    POSTlog: (req, res) => {
        console.log(req.headers.authorization, Storage.encrypt(token))
        if (views.state.logged && req.headers.authorization === Storage.encrypt(token)) {
            const { icone, usuario, cargo, atividade } = req.body;
            const registerLog = `INSERT log_atividade SET icon='${icone}', usuario='${usuario}', cargo='${cargo}', atividade='${atividade}'`;
            conn.query(registerLog, (err, results) => {
                if (err)
                    return res.status(500).send({ err: `erro ao registrar log de atividade`, status: err });
                return res.status(201).send({ success: `sucesso ao registrar log de atividade`, status: results })
            });
        } else {
            return res.status(401).send({ unauthorized: `usuario nao autorizado para fazer esta acao`, status: 401 });
        }
    }
}