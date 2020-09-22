'use strict';

var logoutAdmin = function logoutAdmin(idURL) {
    var tokenPermission = void 0;
    tokenPermission = localStorage.getItem(btoa('login'));
    localStorage.removeItem('idUser');
    localStorage.removeItem('login');
    localStorage.removeItem('idDefault');
    localStorage.removeItem('emailUser');
    localStorage.removeItem('permission');
    $.get(ENV.API_URL + '/get/user/' + idURL).done(function (res) {

        var data = {
            icone: '<i class="fa fa-sign-out"></i>',
            usuario: res.userName,
            cargo: res.cargo,
            atividade: 'Deslogou da plataforma'
        };

        $.ajax({
            url: ENV.API_URL + '/post/log',
            data: JSON.stringify(data),
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'Authorization': tokenPermission
            }
        }).then(function () {
            console.log({ registerLog: 'success' });
        }).fail(function () {
            console.log({ registerLog: 'error' });
        });
    });

    $.ajax({
        url: ENV.API_URL + '/patch/status/user/' + idURL,
        data: JSON.stringify({ status: 0 }),
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': tokenPermission
        }
    }).then(function () {
        console.log({ post_status: 'success' });
    }).fail(function () {
        console.log({ post_status: 'error' });
    });
};