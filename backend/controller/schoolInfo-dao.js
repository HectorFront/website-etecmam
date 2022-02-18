const conn = require('../config/database');
const views = require('../view/render');
const Storage = require('./storage');
const token = Storage.hashingToken();
/**
 * @author Hector Rodrigues Da Silva
 * @methods of School Info
 */
module.exports = {

    /**
      *
      * @param req
      * @param res
      * @method GET
      * @return {*}
      */
    GETinformationsSchool: (req, res) => {
        const getInfoEscola = "SELECT * FROM info_escola";
        conn.query(getInfoEscola, (err, results) => {
            if (err)
                return res.status(500).send({ err: `erro ao buscar informacoes da escola`, status: err });
            return res.status(200).json(results[0]);
        });
    },

    /**
      *
      * @param req
      * @param res
      * @method PUT
      * @return {*}
      */
    UPDATEinformationsSchool: (req, res) => {
        if (views.state.logged && req.headers.authorization === Storage.encrypt(token)) {
            const editInfo = `UPDATE info_escola SET alunos='${req.body.alunos}', anos_tradicao='${req.body.tradicao}', cursos='${req.body.quantidadecursos}'`;
            conn.query(editInfo, (err, results) => {
                if (err)
                    return res.status(500).send({ err: `erro ao atualizar informacoes da escola`, status: err });
                return res.status(200).send({ sucess: `sucesso ao atualizar dados da escola`, status: results });
            });
        } else {
            return res.status(401).send({ unauthorized: `usuario nao autorizado para fazer esta acao`, status: 401 });
        }
    }
}