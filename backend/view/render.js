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
};

module.exports = {

  /**
    *
    * @param req
    * @param res
    * @method GET
    * @return {*}
    */
   render: (page, req, res) => {
     this.state.logged
        ? res.render(page, { user: this.state.user, year: year })
        : res.render(page, { user: 'Login', year: year });
   },

   /**
    *
    * @param req
    * @param res
    * @method GET
    * @return {*}
    */
   logout: (page, req, res) => {
      this.state.logged = false;
      res.redirect(page);
   }
}