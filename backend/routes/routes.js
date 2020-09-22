const express = require('express');
const router = express.Router();

// method render
const pages = require('../views/render');
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

router // Routes of pages //
    .get('/', pages.index)
    .get('/home', (req, res) => res.redirect('/'))
    .get('/historico', pages.historic)
    .get('/apm', pages.apm)
    .get('/cipa', pages.cipa)
    .get('/conselho', pages.advice)
    .get('/desenvolvedor/diogo', pages.biographyDiogo)
    .get('/desenvolvedor/hector', pages.biographyHector)
    .get('/desenvolvedor/gustavo', pages.biographyGustavo)
    .get('/desenvolvedor/giovane', pages.biographyGiovane)
    .get('/desenvolvedor/arion', pages.biographyArion)
    .get('/desenvolvedor/norton', pages.biographyNorton)
    .get('/diretoria', pages.directory)
    .get('/admin/school', pages.editEtec)
    .get('/registro/atividade', pages.activityRecord)
    .get('/enem', pages.enem)
    .get('/funcionarios/admin', pages.employeesPrivate)
    .get('/funcionarios', pages.employeesPublic)
    .get('/login/admin', pages.login)
    .get('/login', (req, res) => res.redirect('/login/admin'))
    .get('/admin', (req, res) => res.redirect('/login/admin'))
    .get('/observatorio', pages.observatory)
    .get('/curso/ds', pages.courseDS)
    .get('/curso/eletronica', pages.courseEletronic)
    .get('/curso/enfermagem', pages.courseNursing)
    .get('/curso/seguranca-do-trabalho', pages.courseSecurityWorkspace)
    .get('/curso/em/habilitacao/ds', pages.courseHabilitationDs)
    .get('/curso/marketing', pages.courseMarketing)
    .get('/curso/mecanica', pages.courseMecanic)
    .get('/curso/em', pages.courseHighSchool)
    .get('/curso/em/habilitacao/adm', pages.courseHighSchoolAdmin)
    .get('/curso/em/integrado/ds', pages.courseHighSchoolDs)
    .get('/curso/em/integrado/mecatronica', pages.courseHighSchoolMecatronic)
    .get('/professores/admin', pages.teachersPrivate)
    .get('/professores', pages.teacherPublic)
    .get('/sai', pages.sai)
    .get('/saresp', pages.saresp)

// Routes of API //
    .get('/admin/logout', pages.logout)
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
    .get('*', pages.notfound)

module.exports = router;