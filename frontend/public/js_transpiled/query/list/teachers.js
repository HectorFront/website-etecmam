'use strict';

$(document).ready(function () {

    var PermissionToken = localStorage.getItem(btoa('login'));
    var PermissionidUser = localStorage.getItem(btoa('idUser'));
    var PermissionidDefault = localStorage.getItem(btoa('idDefault'));

    if (PermissionidUser === PermissionidDefault) {

        $.get(ENV.API_URL + '/get/user/' + PermissionidUser).done(function (user) {

            if (PermissionToken === user.webtoken) {

                $.get(ENV.API_URL + '/get/professores').done(function (res) {
                    var prof = '';

                    res.map(function (resp) {

                        prof += '\n                                <div style="margin-bottom: 15px;" class="col-xs-12 col-sm-12 col-md-12 col-lg-12">\n                                    <hr class="hr-div">\n                                    <div id="item' + resp.id + '" class="data-teacher">\n                                            <div class="info-prof">\n                                                    <p> <span class="professor">' + resp.nome + '</span>\n                                                        <span class="email"> - email: ' + resp.email + '</span>\n                                                        <span class="email-prof"></span>\n                                                        <button onclick="editModal(' + resp.id + ')" class="edit-prof"><i class="fa fa-edit"></i></i></button>\n                                                        ' + (user.permissao == 1 ? '<button onclick="deleteModal(' + resp.id + ')" class="edit-prof"><i class="fa fa-trash"></i></i></button>' : '') + '\n                                                    </p>\n                                            </div>\n                                            <div class="form-list">\n                                                    <div style="margin-top: 10px;" id="edit-form' + resp.id + '" class="edit-form">\n                                                        <form>\n                                                            <div class="form-group col-lg-12 mb-2">\n                                                                <label class="input-editName" for="exampleInputName1">Nome do professor</label>\n                                                                <input type="text" class="form-control" id="name' + resp.id + '" value="' + resp.nome + '" placeholder="Nome do professor" required>\n                                                            </div>\n\n                                                            <div class="form-group col-lg-12 mb-2">\n                                                                <label class="input-editProf" for="exampleInputEmail1">Email do professor</label>\n                                                                <input type="email" class="form-control" id="email' + resp.id + '" value="' + resp.email + '" placeholder="Email do professor" required>\n                                                                <button style="margin-top: 20px; color:white;" type="submit" onclick="updateProf(' + resp.id + ')" class="btn-list">Salvar</button>\n                                                            </div>\n                                                        </form>\n                                                    </div>\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                    ';
                        $('#list-main').html(prof);
                    });
                }).fail(function () {
                    console.log('Error in request professor');
                });
            } else {
                platformLogout();
            }
        });
    } else {
        platformLogout();
    }
});