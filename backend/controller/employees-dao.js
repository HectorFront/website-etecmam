const conn = require('../config/database');
const views = require('../view/render');
const Storage = require('./storage');
const token = Storage.hashingToken();
/**
 * @author Hector Rodrigues Da Silva
 * @methods of Employees
 */
module.exports = {

    /**
      *
      * @param req
      * @param res
      * @method GET
      * @return {*}
      */
    GETemployees: (req, res) => {
        const get = `SELECT * FROM funcionarios`;
        conn.query(get, (err, results) => {
            if (err)
                return res.status(500).send({ err: `erro ao buscar funcionarios`, status: err });
            return res.status(200).json(results);
        });
    },

    /**
      *
      * @param req
      * @param res
      * @method POST
      * @return {*}
      */
    POSTemployees: (req, res) => {
        if (views.state.logged && req.headers.authorization === Storage.encrypt(token)) {
            const { nome, cargo } = req.body;
            const post = `INSERT INTO funcionarios SET nome='${nome}', cargo='${cargo}'`;
            conn.query(post, (err, results) => {
                if (err)
                    return res.status(500).send({ err: `erro ao cadastrar funcionario`, status: err });
                return res.status(201).send({ sucess: `sucesso ao cadastrar funcionario`, status: results });
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
    UPDATEemployees: (req, res) => {
        if (views.state.logged && req.headers.authorization === Storage.encrypt(token)) {
            const id = req.params.id;
            const { nome, cargo } = req.body;
            const update = `UPDATE funcionarios SET nome='${nome}', cargo='${cargo}' WHERE id = ${id}`;
            conn.query(update, (err, results) => {
                if (err)
                    return res.status(500).send({ err: `erro ao atualizar funcionario`, status: err });
                return res.status(200).send({ sucess: `sucesso ao atualizar funcionario`, status: results });
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
    DELETEemployees: (req, res) => {
        if (views.state.logged && req.headers.authorization === Storage.encrypt(token)) {
            const id = req.params.id;
            const deleteFunc = `DELETE FROM funcionarios WHERE id = ${id}`;
            conn.query(deleteFunc, (err, results) => {
                if (err)
                    return res.status(500).send({ err: `erro ao deletar funcionario`, status: err });
                return res.status(200).send({ sucess: `sucesso ao deletar funcionario`, status: results });
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
    GETdirectory: (req, res) => {
        const get = `SELECT * FROM diretoria WHERE id = 1`;
        conn.query(get, (err, results) => {
            if (err)
                return res.status(500).send({ err: `erro ao buscar dados da direcao`, status: err });
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
    GETcoordination: (req, res) => {
        const get = `SELECT * FROM coordenacao_cursos WHERE id = 1`;
        conn.query(get, (err, results) => {
            if (err)
                return res.status(500).send({ err: `erro ao buscar dados da coordenacao`, status: err });
            return res.status(200).json(results[0]);
        })

    },

    /**
      *
      * @param req
      * @param res
      * @method PUT
      * @return {*}
      */
    UPDATEdirectory: (req, res) => {
        if (views.state.logged && req.headers.authorization === Storage.encrypt(token)) {
            const editDiretoria = `UPDATE diretoria SET diretoria='${req.body.diretoria}', diretor_administrativo='${req.body.diretorAdm}',
            diretor_academico='${req.body.diretorAcademico}', assistente_administrativo='${req.body.assistenteTec}', coordenacao_pedagogica='${req.body.coordenacaoPedagogica}',
            coordenacao_estagio='${req.body.coordenacaoEstagio}'`;
            conn.query(editDiretoria, (err, results) => {
                if (err)
                    return res.status(500).send({ err: `erro ao atualizar a diretoria`, status: err });
                return res.status(200).send({ sucess: `sucesso ao atualizar dados da diretoria`, status: results });
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
    UPDATEcoordination: (req, res) => {
        if (views.state.logged && req.headers.authorization === Storage.encrypt(token)) {
            const editCoordenacao = `UPDATE coordenacao_cursos SET ensino_medio='${req.body.coordenacaoMedio}', administracao='${req.body.coordenacaoAdm}',
        automacao_industrial_eletronica='${req.body.coordenacaoIndustrial}', ds_noite='${req.body.coordenacaoDs}', enfermagem='${req.body.coordenacaoEnfer}',
        etim_ds='${req.body.coordenacaoEtimDs}', etim_meca='${req.body.coordenacaoEtimMeca}', mecatronica_mecanica='${req.body.coordenacaoMecanicaMecatronica}'`;
            conn.query(editCoordenacao, (err, results) => {
                if (err) throw err;
                return res.status(200).send({ sucess: `sucesso ao atualizar dados da cordenacao`, status: results });
            });
        } else {
            return res.status(401).send({ unauthorized: `usuario nao autorizado para fazer esta acao`, status: 401 });
        }
    },
}