'use strict';

$(document).ready(function () {

    var PermissionToken = localStorage.getItem(btoa('login'));
    var PermissionidUser = localStorage.getItem(btoa('idUser'));
    var PermissionidDefault = localStorage.getItem(btoa('idDefault'));

    if (PermissionidUser === PermissionidDefault) {

        $.get(ENV.API_URL + '/get/user/' + PermissionidUser).done(function (user) {

            if (PermissionToken === user.webtoken) {

                $.get(ENV.API_URL + '/get/funcionarios').done(function (res) {
                    var func = '';

                    res.map(function (resp) {
                        func += '\n                                <div style="margin-bottom: 15px;" class="col-xs-12 col-sm-12 col-md-12 col-lg-12">\n                                    <hr class="hr-div">\n                                    <div id="item' + resp.id + '" class="data-employees">\n                                        <div class="info-prof">\n                                            <p> <span class="professor">' + resp.nome + '</span>\n                                                <span class="email"> - cargo: ' + resp.cargo + '</span>\n                                                <span class="email-prof"></span>\n                                                <button onclick="editModal(' + resp.id + ')" class="edit-func"><i class="fa fa-edit"></i></i></button>\n                                                ' + (user.permissao == 1 ? '<button onclick="deleteModalFunc(' + resp.id + ')" class="edit-func" style="margin-left: 10px"><i class="fa fa-trash"></i></i></button>' : '') + '\n                                            </p>\n                                        </div>\n                                        <div class="form-list">\n                                            <div style="margin-top: 10px;" id="edit-form' + resp.id + '" class="edit-form">\n                                                <form id="toggle' + resp.nome + '">\n                                                    <div class="form-group col-lg-12 mb-2">\n                                                        <label class="input-editName">Nome do funcion\xE1rio</label>\n                                                        <input type="text" class="form-control" id="name' + resp.id + '" value="' + resp.nome + '" placeholder="Nome do funcion\xE1rio" required>\n                                                    </div>\n                                                    <div class="form-group col-lg-12 mb-2">\n                                                        <label class="input-editProf">Cargo do funcion\xE1rio</label>\n                                                        <input type="text" class="form-control" id="office' + resp.id + '" value="' + resp.cargo + '" placeholder="Cargo do funcin\xE1rio" required>\n                                                        <button style="margin-top: 20px; color:white;" type="submit" onclick="updateFunc(' + resp.id + ')" class="btn-list">Salvar</button>\n                                                    </div>\n                                                </form>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>';
                        $('#list-funcionarios').html(func);
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