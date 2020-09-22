'use strict';

var listModal = function listModal(id) {
    console.log(id);
    var PermissionToken = localStorage.getItem(btoa('login'));
    var PermissionidUser = localStorage.getItem(btoa('idUser'));
    var PermissionidDefault = localStorage.getItem(btoa('idDefault'));

    if (PermissionidUser === PermissionidDefault) {

        $.get(ENV.API_URL + '/get/user/' + PermissionidUser).done(function (res) {

            if (PermissionToken === res.webtoken && res.permissao == 1 || res.permissao == 0) {

                $.get(ENV.API_URL + '/get/noticia/' + id).done(function (res) {
                    $('#titulo_publicacao').val(res.titulo);
                    $('#assunto_publicacao').val(res.assunto == 0 ? null : res.assunto);
                    $('#urlyt_publicacao').val(res.video_yt == 0 ? null : res.video_yt);
                    $('#descricao_publicacao').val(res.descricao);
                    $('#update_publicacao_button').attr('onclick', 'updatePublication(' + res.id + ')');
                }).fail(function () {
                    swal("Falha no banco de dados, por favor contatar com os programadores!", "Clique em ok para sair", "error").then(function () {
                        window.onload();
                    });
                });
            } else {
                platformLogout();
            }
        });
    } else {
        platformLogout();
    }
};