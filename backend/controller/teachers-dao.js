const conn = require('../config/database');
const views = require('../view/render');
const Storage = require('./storage');
const token = Storage.hashingToken();
/**
 * @author Hector Rodrigues Da Silva
 * @methods of Teachers
 */
module.exports = {

    /**
      *
      * @param req
      * @param res
      * @method GET
      * @return {*}
      */
    GETteacher: (req, res) => {
        const id = req.params.id;
        const getTeacher = `SELECT * FROM professores WHERE id = ${id}`;
        conn.query(getTeacher, (err, results) => {
            if (err)
                return res.status(500).send({ err: `erro ao buscar professor`, status: err });
            return res.status(200).json(results[0]);
        });
    },

    /**
      *
      * @param req
      * @param res
      * @method GET
      * @return {*}
      */
    GETinformationsTeachers: (req, res) => {
        const getInfoEscola = "SELECT id, nome, email FROM professores";
        conn.query(getInfoEscola, (err, results) => {
            if (err)
                return res.status(500).send({ err: `erro ao buscar professores`, status: err });
            return res.status(200).json(results);
        });
    },

    /**
      *
      * @param req
      * @param res
      * @method  POST
      * @return {*}
      */
    POSTteachers: (req, res) => {
        if (views.state.logged && req.headers.authorization === Storage.encrypt(token)) {
            const { nome, email } = req.body;
            let postProf = `INSERT INTO professores SET nome='${nome}', email='${email}'`;
            conn.query(postProf, (err, results) => {
                if (err)
                    return res.status(500).send({ err: `falha ao inserir professor`, status: err });
                return res.status(201).send({ sucess: `Sucesso ao inserir professor`, status: results });
            });
        } else {
            return res.status(401).send({ unauthorized: `usuario nao autorizado para fazer esta acao`, status: 401 });
        }
    },

    /**
      *
      * @param req
      * @param res
      * @method PUT
      * @return {*}
      */
    UPDATEteachers: (req, res) => {
        if (views.state.logged && req.headers.authorization === Storage.encrypt(token)) {
            const id = req.params.id;
            const { nome, email } = req.body;
            const editProf = `UPDATE professores SET nome='${nome}', email='${email}' WHERE id = ${id}`;
            conn.query(editProf, (err, results) => {
                if (err)
                    return res.status(500).send({ err: `falha ao atualizar professor`, status: err });
                return res.status(200).send({ sucess: `professor atualizado com sucesso`, status: results });
            });
        } else {
            return res.status(401).send({ unauthorized: `usuario nao autorizado para fazer esta acao`, status: 401 });
        }
    },

    /**
      *
      * @param req
      * @param res
      * @method DELETE
      * @return {*}
      */
    DELETEteachers: (req, res) => {
        if (views.state.logged && req.headers.authorization === Storage.encrypt(token)) {
            const id = req.params.id;
            const deleteProf = `DELETE FROM professores WHERE id = ${id}`;
            conn.query(deleteProf, (err, results) => {
                if (err)
                    return res.status(500).send({ err: `falha ao deletar professor`, status: err });
                return res.status(200).send({ sucess: `professor deletado com sucesso`, status: results });
            });
        } else {
            return res.status(401).send({ unauthorized: `usuario nao autorizado para fazer esta acao`, status: 401 });
        }
    }
}