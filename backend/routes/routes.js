const express = require('express');
const router = express.Router();

// method render
const view = require('../view/render');
// methods dao
const contact = require('../controller/contact');
const infoSchool = require('../controller/schoolInfo-dao');
const employees = require('../controller/employees-dao');
const teachers = require('../controller/teachers-dao');
const publications = require('../controller/publications-dao');
const users = require('../controller/users-dao');
const log = require('../controller/log-dao');

// config upload
const multer = require('multer');
const multerImage = require('../config/multerImage');
const multerVideo = require('../config/multerVideo');

router
    // Routes of view //
    .get('/', (req, res) => view.render('index', req, res))
    .get('/home', (req, res) => res.redirect('/'))
    .get('/historico', (req, res) => view.render('historico', req, res))
    .get('/apm', (req, res) => view.render('apm', req, res))
    .get('/cipa', (req, res) => view.render('cipa', req, res))
    .get('/conselho', (req, res) => view.render('conselho', req, res))
    .get('/desenvolvedor/diogo', (req, res) => view.render('diogo', req, res))
    .get('/desenvolvedor/hector', (req, res) => view.render('hector', req, res))
    .get('/desenvolvedor/gustavo', (req, res) => view.render('gustavo', req, res))
    .get('/desenvolvedor/giovane',(req, res) => view.render('giovane', req, res))
    .get('/desenvolvedor/arion', (req, res) => view.render('arion', req, res))
    .get('/desenvolvedor/norton', (req, res) => view.render('norton', req, res))
    .get('/diretoria',(req, res) => view.render('diretoria', req, res))
    .get('/admin/school', (req, res) => view.render('editEtec', req, res))
    .get('/registro/atividade', (req, res) => view.render('registroAtividade', req, res))
    .get('/enem', (req, res) => view.render('enem', req, res))
    .get('/funcionarios/admin', (req, res) => view.render('funcionarios', req, res))
    .get('/funcionarios', (req, res) => view.render('funcionariosPublic', req, res))
    .get('/login/admin', (req, res) => view.render('login', req, res))
    .get('/login', (req, res) => res.redirect('/login/admin'))
    .get('/admin', (req, res) => res.redirect('/login/admin'))
    .get('/observatorio', (req, res) => view.render('observatorio', req, res))
    .get('/curso/ds', (req, res) => view.render('pageDs', req, res))
    .get('/curso/eletronica', (req, res) => view.render('pageEletronica', req, res))
    .get('/curso/enfermagem', (req, res) => view.render('pageEnfermagem', req, res))
    .get('/curso/seguranca-do-trabalho', (req, res) => view.render('pageSeguranca', req, res))
    .get('/curso/em/habilitacao/ds', (req, res) => view.render('pageHabilitacaoDs', req, res))
    .get('/curso/marketing', (req, res) => view.render('pageMarketing', req, res))
    .get('/curso/mecanica', (req, res) => view.render('pageMecanica', req, res))
    .get('/curso/em', (req, res) => view.render('pageMedio', req, res))
    .get('/curso/em/habilitacao/adm', (req, res) => view.render('pageMedioAdmin', req, res))
    .get('/curso/em/integrado/ds', (req, res) => view.render('pageMedioDs', req, res))
    .get('/curso/em/integrado/mecatronica', (req, res) => view.render('pageMedioMecatronica', req, res))
    .get('/professores/admin', (req, res) => view.render('professores', req, res))
    .get('/professores', (req, res) => view.render('professoresPublic', req, res))
    .get('/sai', (req, res) => view.render('sai', req, res))
    .get('/saresp', (req, res) => view.render('saresp', req, res))

    // Routes of API //
    .get('/admin/logout', (req, res) => view.logout('/', req, res))
    .get('/get/logs', log.GETlogs)
    .get('/get/info/escola', infoSchool.GETinformationsSchool)
    .get('/get/noticias/escola', infoSchool.GETinformationsSchool)
    .get('/get/professores', teachers.GETinformationsTeachers)
    .get('/get/professor/:id', teachers.GETteacher)
    .get('/get/funcionarios', employees.GETemployees)
    .get('/get/diretoria', employees.GETdirectory)
    .get('/get/coordenacao', employees.GETcoordination)
    .get('/pagination/noticias/:offset/:limit', publications.GETpaginationIndex)
    .get('/get/noticias', publications.GETpublications)
    .get('/get/noticias/index', publications.GETpublicationsIndex)
    .get('/get/count/noticias', publications.COUNTpublications)
    .get('/get/noticia/:id', publications.GETpublicationsID)
    .get('/get/users', users.GETusers)
    .get('/get/user/:id', users.GETuser)
    .patch('/patch/user/:id', users.UPDATEuser)
    .patch('/patch/user/admin/:id', users.UPDATEuserlogged)
    .patch('/patch/status/user/:id', users.UPDATEstatusLogged)
    .put('/put/diretoria', employees.UPDATEdirectory)
    .put('/put/coordenacao', employees.UPDATEcoordination)
    .put('/put/info/escola', infoSchool.UPDATEinformationsSchool)
    .put('/put/funcionario/:id', employees.UPDATEemployees)
    .put('/put/professor/:id', teachers.UPDATEteachers)
    .patch('/patch/noticia/:id', publications.UPDATEpublications)
    .patch('/patch/user/password/:id', users.UPDATEpassword)
    .delete('/delete/user/:id', users.DELETEUser)
    .delete('/delete/professor/:id', teachers.DELETEteachers)
    .delete('/delete/funcionario/:id', employees.DELETEemployees)
    .delete('/delete/noticia/:id', publications.DELETEpublications)
    .post('/post/noticias', publications.INSERTpublications)
    .post('/login/admin', users.VALIDATElogin)
    .post('/post/send/email', contact.SendContact)
    .post('/post/send/email/plataforma', contact.SendEmailUser)
    .post('/post/professores', teachers.POSTteachers)
    .post('/post/funcionarios', employees.POSTemployees)
    .post('/post/user', users.POSTuser)
    .post('/post/validate/email', users.VALIDATEemail)
    .post('/post/validate/user/email', users.RESETuserPassword)
    .post('/post/validate/code/user', users.VALIDATEcodeUser)
    .post('/post/log', log.POSTlog)
    .post('/post/image', multer(multerImage).single('file'), (req, res) => {
        if (res)
            return res.status(200).send({ success: 'upload de imagem feito com sucesso' });
        return res.status(500).send({ error: 'falha de upload de imagem' });
    })
    .post('/post/video', multer(multerVideo).single('video'), (req, res) => {
        if (res)
            return res.status(200).send({ success: 'upload de video feito com sucesso' });
        return res.status(500).send({ error: 'falha de upload de video' });
    })
    // render page error 404
    .get('*', (req, res) => view.render('404', req, res))

module.exports = router;