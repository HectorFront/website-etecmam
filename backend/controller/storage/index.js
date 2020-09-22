require('dotenv').config('../../../.env');
const conn = require('../../config/database');
const crypto = require('crypto');
const hash = 'aes-256-ctr';
const typeHash = 'abcdabcd';
/**
 * @author Hector Rodrigues Da Silva
 * @methods of Storage
 */
module.exports = {
      /**
      *
      * @param {*}
      * @return {*}
      */
      hashingToken: () => {
            return process.env.WEB_TOKEN;
      },
      /**
      *
      * @param valueEncrypt
      * @return {*}
      */
      encrypt: (valueEncrypt) => {
            let dechiper = crypto.createDecipher(hash, typeHash);
            return dechiper.update(valueEncrypt, 'utf8', 'hex');
      },

      /**
      *
      * @param valueEncrypt
      * @return {*}
      */
      descrypt: (valueEncrypt) => {
            let dechiper = crypto.createDecipher(hash, typeHash);
            return dechiper.update(valueEncrypt, 'hex', 'utf8');
      },

      /**
      *
      * @param idUser 
      * @return {*}
      */
      userConnected: (idUser) => {
            return new Promise((resolve, reject) => {
                  const getUser = `SELECT userName FROM usuario WHERE id = ${idUser}`;
                  conn.query(getUser, (err, results) => {
                        if (err) reject(err);
                        resolve(results[0].userName);
                  })
            });
      },


      /**
      *
      * @param body 
      * @return {*}
      */
      loginAdm: (body) => {
            const encrypt = (valueEncrypt) => {
                  let dechiper = crypto.createDecipher(hash, typeHash);
                  return dechiper.update(valueEncrypt, 'utf8', 'hex');
            }

            const setStatusUser = (status, id) => {
                  return new Promise((resolve, reject) => {
                        const setStatus = `UPDATE usuario SET status_logged='${status}' WHERE id = ${id}`;
                        conn.query(setStatus, (err, results) => {
                              if (err) {
                                    reject(err);
                              } else {
                                    resolve(id);
                              }
                        });
                  })
            };

            return new Promise((resolve, reject) => {
                  if (body.email && body.senha) {
                        conn.query('SELECT id, email, senha FROM login WHERE email = ? AND senha = ?', [encrypt(body.email), encrypt(body.senha)], (err, results) => {
                              if (results.length > 0) {
                                    results.map(resp => {
                                          setStatusUser(1, resp.id)
                                                .then((id) => {
                                                      resolve(id);
                                                }).catch((err) => {
                                                      reject(err);
                                                })
                                    });
                              } else {
                                    reject(err);
                              }
                        });
                  } else {
                        reject();
                  }
            })
      },
}