const conn = require('../config/database');
const views = require('../view/render');
const Storage = require('./storage');
const token = Storage.hashingToken();
/**
 * @author Hector Rodrigues Da Silva
 * @methods of Publications
 */
module.exports = {

    /**
      *
      * @param req
      * @param res
      * @method GET
      * @return {*}
      */
    GETpublications: (req, res) => {
        const get = `SELECT * FROM noticias`;
        conn.query(get, (err, results) => {
            if (err)
                return res.status(500).send({ err: `erro ao buscar publicacoes`, status: err });
            return res.status(200).json(results);
        });
    },

    /**
      *
      * @param req
      * @param res
      * @method GET
      * @return {*}
      */
    GETpublicationsIndex: (req, res) => {
        const get = `SELECT * FROM noticias ORDER BY data_hora DESC LIMIT 3`;
        conn.query(get, (err, results) => {
            if (err)
                return res.status(500).send({ err: `erro ao buscar publicacoes`, status: err });
            return res.status(200).json(results);
        });
    },

    /**
      *
      * @param req
      * @param res
      * @method GET
      * @return {*}
      */
    GETpaginationIndex: (req, res) => {
        const offset = req.params.offset;
        const limit = req.params.limit;
        const get = `SELECT * FROM noticias ORDER BY id desc LIMIT ${limit} OFFSET ${offset}`;
        conn.query(get, (err, results) => {
            if (err)
                return res.status(500).send({ err: `erro ao buscar ${limit} publicacoes`, status: err });
            return res.status(200).json(results);
        });
    },

    /**
      *
      * @param req
      * @param res
      * @method GET
      * @return {*}
      */
    GETpublicationsID: (req, res) => {
        const id = req.params.id;
        const getId = `SELECT * FROM noticias WHERE id = ${id}`;
        conn.query(getId, (err, results) => {
            if (err)
                return res.status(500).send({ err: `erro ao buscar publicacao`, status: err });
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
    COUNTpublications: (req, res) => {
        const count = `SELECT COUNT(*) as count FROM noticias`;
        conn.query(count, (err, results) => {
            if (err)
                return res.status(500).send({ err: `erro ao contar todas as publicações`, status: err });
            return res.status(200).json(results[0]);
        });
    },

    /**
      *
      * @param req
      * @param res
      * @method POST
      * @return {*}
      */
    INSERTpublications: (req, res) => {
        if (views.state.logged && req.headers.authorization === Storage.encrypt(token)) {
            const { titulo, assunto, autor, descricao, imagem, video, video_yt } = req.body;
            const insert = `INSERT noticias SET titulo='${titulo}', assunto='${assunto}', autor='${autor}', descricao='${descricao}', imagem='${imagem}', video='${video}', video_yt='${video_yt}'`;
            conn.query(insert, (err, results) => {
                if (err)
                    return res.status(500).send({ err: `erro ao inserir publicacao`, status: err });
                return res.status(201).send({ sucess: `sucesso ao inserir publicacao`, status: results });
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
    UPDATEpublications: (req, res) => {
        if (views.state.logged && req.headers.authorization === Storage.encrypt(token)) {
            const id = req.params.id;
            const { titulo, assunto, autor, video_yt, descricao } = req.body;
            const update = `UPDATE noticias SET titulo='${titulo}', assunto='${assunto}', video_yt='${video_yt}', autor='${autor}', descricao='${descricao}'
        WHERE id= ${id}`;
            conn.query(update, (err, results) => {
                if (err)
                    return res.status(500).send({ err: `erro ao atualizar a publicacao`, status: err });
                return res.status(200).send({ sucess: `sucesso ao atualizar a publicacao`, status: results });
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
    DELETEpublications: (req, res) => {
        if (views.state.logged && req.headers.authorization === Storage.encrypt(token)) {
            const id = req.params.id;
            const deletePublication = `DELETE FROM noticias WHERE id = ${id}`;
            conn.query(deletePublication, (err, results) => {
                if (err)
                    return res.status(500).send({ err: `erro ao deletar publicacao`, status: err });
                return res.status(200).send({ sucess: `sucesso ao deletar publicacao`, status: results });
            });
        } else {
            return res.status(401).send({ unauthorized: `usuario nao autorizado para fazer esta acao`, status: 401 });
        }
    }
}