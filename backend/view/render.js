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
    const { logged, user, id } = this.state;

    if (logged && page === 'login') {
      return res.redirect(`/admin/school?param=${id}`);
    } else if (logged && page !== 'login') {
      return res.render(page, { user: user, year: year });
    } else {
      return res.render(page, { user: 'Login', year: year });
    }
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
    return res.redirect(page);
  }
}