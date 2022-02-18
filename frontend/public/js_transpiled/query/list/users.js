'use strict';

var listAllUsers = function listAllUsers() {
    var PermissionidUser = localStorage.getItem(btoa('idUser'));
    var PermissionidDefault = localStorage.getItem(btoa('idDefault'));
    var PermissionPlatform = localStorage.getItem(btoa('permission'));

    if (PermissionidUser === PermissionidDefault) {

        fetch(ENV.API_URL + '/get/users').then(function (response) {
            response.json().then(function (resp) {

                var itemUsers = '';
                var nenhumUsuario = '<center><p>Nenhum usu\xE1rio encontrado</p></center>';

                resp.map(function (user) {

                    itemUsers += '<div style="margin-bottom: 15px;" class="col-xs-12 col-sm-12 col-md-12 col-lg-12">\n                                    <hr class="hr-div">\n                                    <div id="item' + user.id + '" class="data-users">\n                                            <div class="info-user">\n                                                <p>' + (user.status_logged == 1 ? '<span class="icon__on" style="color: rgb(46, 151, 90);"><i class="fa fa-signal"></i></span>&nbsp;<strong style="font-weight: bold; color: rgb(7, 126, 56);">Online</strong>&nbsp;' : '<span><i class="fa fa-close"></i></span>&nbsp;<strong>Offline</strong>&nbsp;') + '\n                                                <b style="font-family: \'Open Sans\', sans-serif;">' + (user.id == PermissionidUser ? 'Você' : 'Usuário') + ':</b> <span class="name-user">' + user.userName + '</span></span>\n                                                    <span class="email"> - <b style="font-family: \'Open Sans\', sans-serif;">Email:</b> ' + user.email + '</span>\n                                                    ' + (PermissionPlatform == 1 && user.id != PermissionidUser ? '<button style="border-radius: 50px;" onclick="deleteUser(' + user.id + ')" class="btn btn-danger"><i class="fa fa-trash"></i></i></button>' : '') + '\n                                                </p>\n                                            </div>\n                                    </div>\n                             </div>';
                    resp.length > 0 ? $('#content-users').html(itemUsers) : $('#content-users').html(nenhumUsuario);
                });
                (function blink() {
                    $('.icon__on').fadeOut(1500).fadeIn(1500, blink);
                })();
            }).catch(function () {
                swal("Erro ao listar usuários, por favor contatar com os programadores!", "Clique em ok para sair", "error").then(function () {
                    window.location.href = '/login/admin';
                });
            });
        });
    } else {
        platformLogout();
    }
};
setInterval(function () {
    listAllUsers();
}, 60000);