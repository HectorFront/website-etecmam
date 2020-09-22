require('../controller/employees-dao');
require('../controller/log-dao');
require('../controller/publications-dao');
require('../controller/schoolInfo-dao');
require('../controller/teachers-dao');
require('../controller/users-dao');
const year = new Date().getFullYear();
/**
 * @author Hector Rodrigues Da Silva
 * @methods of render
 */
this.state = {
  logged: false,
  id: null,
  user: null
}

module.exports = {
  //Render Pages

  /**
    *
    * @param req
    * @param res
    * @method GET
    * @return {*}
    */
  index: (req, res) => {
    this.state.logged
      ? res.render('index', { user: this.state.user, year: year })
      : res.render('index', { user: 'Login', year: year });
  },

  /**
    *
    * @param req
    * @param res
    * @method GET
    * @return {*}
    */
  notfound: (req, res) => {
    res.status(404).render('404')
  },

  /**
    *
    * @param req
    * @param res
    * @method GET
    * @return {*}
    */
  biographyDiogo: (req, res) => {
    res.render('diogo');
  },

  /**
    *
    * @param req
    * @param res
    * @method GET
    * @return {*}
    */
  biographyHector: (req, res) => {
    res.render('hector');
  },

  /**
    *
    * @param req
    * @param res
    * @method GET
    * @return {*}
    */
  biographyGiovane: (req, res) => {
    res.render('giovane');
  },

  /**
    *
    * @param req
    * @param res
    * @method GET
    * @return {*}
    */
  biographyArion: (req, res) => {
    res.render('arion');
  },

  /**
    *
    * @param req
    * @param res
    * @method GET
    * @return {*}
    */
  biographyNorton: (req, res) => {
    res.render('norton');
  },

  /**
    *
    * @param req
    * @param res
    * @method GET
    * @return {*}
    */
  biographyGustavo: (req, res) => {
    res.render('gustavo');
  },

  /**
    *
    * @param req
    * @param res
    * @method GET
    * @return {*}
    */
  logout: (req, res) => {
    this.state.logged = false;
    res.redirect('/');
  },

  /**
    *
    * @param req
    * @param res
    * @method GET
    * @return {*}
    */
  editEtec: (req, res) => {
    this.state.logged
      ? res.render('editEtec', { year: year })
      : res.redirect('/');
  },

  /**
    *
    * @param req
    * @param res
    * @method GET
    * @return {*}
    */
  login: (req, res) => {
    this.state.logged
      ? res.redirect(`/admin/school?param=${this.state.id}`)
      : res.render('login');
  },

  /**
    *
    * @param req
    * @param res
    * @method GET
    * @return {*}
    */
  activityRecord: (req, res) => {
    this.state.logged
      ? res.render('registroAtividade', { year: year })
      : res.redirect('/');
  },

  /**
    *
    * @param req
    * @param res
    * @method GET
    * @return {*}
    */
  observatory: (req, res) => {
    this.state.logged
      ? res.render('observatorio', { user: this.state.user, year: year })
      : res.render('observatorio', { user: 'Login', year: year });
  },

  /**
    *
    * @param req
    * @param res
    * @method GET
    * @return {*}
    */
  apm: (req, res) => {
    this.state.logged
      ? res.render('apm', { user: this.state.user, year: year })
      : res.render('apm', { user: 'Login', year: year });
  },

  /**
    *
    * @param req
    * @param res
    * @method GET
    * @return {*}
    */
  cipa: (req, res) => {
    this.state.logged
      ? res.render('cipa', { user: this.state.user, year: year })
      : res.render('cipa', { user: 'Login', year: year });
  },

  /**
    *
    * @param req
    * @param res
    * @method GET
    * @return {*}
    */
  advice: (req, res) => {
    this.state.logged
      ? res.render('conselho', { user: this.state.user, year: year })
      : res.render('conselho', { user: 'Login', year: year });
  },

  /**
    *
    * @param req
    * @param res
    * @method GET
    * @return {*}
    */
  directory: (req, res) => {
    this.state.logged
      ? res.render('diretoria', { user: this.state.user, year: year })
      : res.render('diretoria', { user: 'Login', year: year });
  },

  /**
    *
    * @param req
    * @param res
    * @method GET
    * @return {*}
    */
  enem: (req, res) => {
    this.state.logged
      ? res.render('enem', { user: this.state.user, year: year })
      : res.render('enem', { user: 'Login', year: year });
  },

  /**
    *
    * @param req
    * @param res
    * @method GET
    * @return {*}
    */
  employeesPrivate: (req, res) => {
    this.state.logged
      ? res.render('funcionarios', { user: this.state.user, year: year })
      : res.render('funcionariosPublic', { user: 'Login', year: year });
  },

  /**
    *
    * @param req
    * @param res
    * @method GET
    * @return {*}
    */
  employeesPublic: (req, res) => {
    this.state.logged
      ? res.render('funcionariosPublic', { user: this.state.user, year: year })
      : res.render('funcionariosPublic', { user: 'Login', year: year });
  },

  /**
    *
    * @param req
    * @param res
    * @method GET
    * @return {*}
    */
  historic: (req, res) => {
    this.state.logged
      ? res.render('historico', { user: this.state.user, year: year })
      : res.render('historico', { user: 'Login', year: year });
  },

  /**
    *
    * @param req
    * @param res
    * @method GET
    * @return {*}
    */
  courseDS: (req, res) => {
    this.state.logged
      ? res.render('pageDs', { user: this.state.user, year: year })
      : res.render('pageDs', { user: 'Login', year: year });
  },

  /**
    *
    * @param req
    * @param res
    * @method GET
    * @return {*}
    */
  courseEletronic: (req, res) => {
    this.state.logged
      ? res.render('pageEletronica', { user: this.state.user, year: year })
      : res.render('pageEletronica', { user: 'Login', year: year });
  },

  /**
    *
    * @param req
    * @param res
    * @method GET
    * @return {*}
    */
  courseNursing: (req, res) => {
    this.state.logged
      ? res.render('pageEnfermagem', { user: this.state.user, year: year })
      : res.render('pageEnfermagem', { user: 'Login', year: year });
  },

  /**
    *
    * @param req
    * @param res
    * @method GET
    * @return {*}
    */
  courseHabilitationDs: (req, res) => {
    this.state.logged
      ? res.render('pageHabilitacaoDs', { user: this.state.user, year: year })
      : res.render('pageHabilitacaoDs', { user: 'Login', year: year });
  },

  /**
    *
    * @param req
    * @param res
    * @method GET
    * @return {*}
    */
  courseMarketing: (req, res) => {
    this.state.logged
      ? res.render('pageMarketing', { user: this.state.user, year: year })
      : res.render('pageMarketing', { user: 'Login', year: year });
  },

  /**
    *
    * @param req
    * @param res
    * @method GET
    * @return {*}
    */
  courseMecanic: (req, res) => {
    this.state.logged
      ? res.render('pageMecanica', { user: this.state.user, year: year })
      : res.render('pageMecanica', { user: 'Login', year: year });
  },

  /**
    *
    * @param req
    * @param res
    * @method GET
    * @return {*}
    */
  courseHighSchool: (req, res) => {
    this.state.logged
      ? res.render('pageMedio', { user: this.state.user, year: year })
      : res.render('pageMedio', { user: 'Login', year: year });
  },

  /**
    *
    * @param req
    * @param res
    * @method GET
    * @return {*}
    */
  courseHighSchoolAdmin: (req, res) => {
    this.state.logged
      ? res.render('pageMedioAdmin', { user: this.state.user, year: year })
      : res.render('pageMedioAdmin', { user: 'Login', year: year });
  },

  /**
    *
    * @param req
    * @param res
    * @method GET
    * @return {*}
    */
  courseHighSchoolDs: (req, res) => {
    this.state.logged
      ? res.render('pageMedioDs', { user: this.state.user, year: year })
      : res.render('pageMedioDs', { user: 'Login', year: year });
  },

  /**
    *
    * @param req
    * @param res
    * @method GET
    * @return {*}
    */
  courseHighSchoolMecatronic: (req, res) => {
    this.state.logged
      ? res.render('pageMedioMecatronica', { user: this.state.user, year: year })
      : res.render('pageMedioMecatronica', { user: 'Login', year: year });
  },

  /**
    *
    * @param req
    * @param res
    * @method GET
    * @return {*}
    */
  courseSecurityWorkspace: (req, res) => {
    this.state.logged
      ? res.render('pageSeguranca', { user: this.state.user, year: year })
      : res.render('pageSeguranca', { user: 'Login', year: year });
  },

  /**
    *
    * @param req
    * @param res
    * @method GET
    * @return {*}
    */
  teachersPrivate: (req, res) => {
    this.state.logged
      ? res.render('professores', { user: this.state.user, year: year })
      : res.render('professorespublic', { user: 'Login', year: year });
  },

  /**
    *
    * @param req
    * @param res
    * @method GET
    * @return {*}
    */
  teacherPublic: (req, res) => {
    this.state.logged
      ? res.render('professorespublic', { user: this.state.user, year: year })
      : res.render('professorespublic', { user: 'Login', year: year });
  },

  /**
    *
    * @param req
    * @param res
    * @method GET
    * @return {*}
    */
  sai: (req, res) => {
    this.state.logged
      ? res.render('sai', { user: this.state.user, year: year })
      : res.render('sai', { user: 'Login', year: year });
  },

  /**
    *
    * @param req
    * @param res
    * @method GET
    * @return {*}
    */
  saresp: (req, res) => {
    this.state.logged
      ? res.render('saresp', { user: this.state.user, year: year })
      : res.render('saresp', { user: 'Login', year: year });
  }
}