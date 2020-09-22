'use strict';

var id = null;
var email = null;
var hora = null;

var validadeCodeUser = function validadeCodeUser(code) {
    var data = {
        codigo: code
    };

    $.ajax({
        url: ENV.API_URL + '/post/validate/code/user',
        method: 'POST',
        data: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        success: function success(data) {
            data.status.map(function (item) {
                return id = item.id;
            });
        }
    }).then(function () {
        swalNewPass();
    }).fail(function (err) {
        switch (err.status) {
            case 404:
                swal("Código de redefinição inválido!", "Clique em ok para sair", "error").then(function () {
                    swalTypeItCode();
                });
                break;
            case 500:
                swal("Erro ao verificar código de recuperação, por favor contatar com os programadores!", "Clique em ok para sair", "error").then(function () {
                    swalTypeItCode();
                });
                break;
        }
    });
};

var swalNewPass = function swalNewPass() {
    var div = document.createElement("div");
    var divConfirm = document.createElement("div");
    var input = document.createElement("input");
    var inputConfirm = document.createElement("input");

    input.setAttribute('class', 'swal-content__input');
    input.setAttribute('placeholder', 'Digite sua senha');
    input.setAttribute('type', 'password');
    inputConfirm.setAttribute('class', 'swal-content__input');
    inputConfirm.setAttribute('placeholder', 'Confirme sua senha');
    inputConfirm.setAttribute('type', 'password');

    div.appendChild(input);
    divConfirm.appendChild(inputConfirm);

    swal({
        text: 'Digite sua nova senha:',
        content: div,
        button: {
            closeModal: false,
            text: 'Próximo'
        }

    }).then(function () {
        if (input.value) {

            var validatePass = function validatePass(password) {
                var average = /(?=.*[a-z])(?=.*[0-9])(?=.{6,}).*/;
                if (average.test(password)) {
                    return true;
                } else {
                    return false;
                }
            };

            if (!validatePass(input.value)) {
                swal({
                    title: "Senha fraca!",
                    text: "A senha tem que ter pelo menos 6 letras minúsculas com um 1 número!",
                    icon: "error",
                    buttons: ['Cancelar', 'Continuar']
                }).then(function (ok) {
                    if (ok) swalNewPass();
                });
            } else {

                swal({
                    text: 'Confirme novamente sua senha:',
                    content: divConfirm,
                    button: {
                        closeModal: false,
                        text: 'Confirmar'
                    }
                }).then(function () {
                    if (inputConfirm.value) {
                        if (input.value != inputConfirm.value) {
                            swal({
                                title: "As senhas não se correspondem!",
                                text: "Clique em continuar para seguir com o processo",
                                icon: "error",
                                buttons: ['Cancelar', 'Continuar']
                            }).then(function (ok) {
                                if (ok) swalNewPass();
                            });
                        } else {
                            $('#email').val(email);
                            $('#senha-login').val(inputConfirm.value);

                            var data = {
                                senha: inputConfirm.value
                            };
                            $.ajax({
                                url: ENV.API_URL + '/patch/user/password/' + id,
                                method: 'PATCH',
                                data: JSON.stringify(data),
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-type': 'application/json'
                                }
                            }).then(function () {
                                swal("Senha redefinida com sucesso!", "Clique em ok para sair", "success").then(function () {
                                    $('#button_login').click();
                                });
                            }).fail(function () {
                                swal("Falha ao redefinir senha de usuário, por favor contatar com os programadores!", "Clique em ok para sair", "error").then(function () {
                                    window.location.reload();
                                });
                            });
                        }
                    } else {
                        swal({
                            title: "Senha inválida!",
                            text: "Clique em continuar para seguir com o processo",
                            icon: "error",
                            buttons: ['Cancelar', 'Continuar']
                        }).then(function (ok) {
                            if (ok) swalNewPass();
                        });
                    }
                });
            }
        } else {
            swal({
                title: "Senha inválida!",
                text: "Clique em continuar para seguir com o processo",
                icon: "error",
                buttons: ['Cancelar', 'Continuar']
            }).then(function (ok) {
                if (ok) swalNewPass();
            });
        }
    });
};

var swalTypeItCode = function swalTypeItCode() {
    swal({
        text: 'Digite o código de verificação que você recebeu em seu email:',
        content: "input",
        button: {
            closeModal: false,
            text: 'Próximo'
        }

    }).then(function (name) {
        if (name) {
            validadeCodeUser(name);
        } else {
            swal({
                title: "Código de verificação inválido!",
                text: "Clique em continuar para seguir com o processo",
                icon: "error",
                buttons: ['Cancelar', 'Continuar']
            }).then(function (ok) {
                if (ok) swalTypeItCode();
            });
        }
    });
};

var checkUserPassword = function checkUserPassword() {
    swal({
        title: 'Esqueceu sua senha?',
        text: 'Digite seu email previamente cadastrado:',
        content: "input",
        button: {
            closeModal: false,
            text: 'Próximo'
        }

    }).then(function (name) {
        if (name) {
            email = name;
            var dateSend = moment(new Date()).tz('America/Sao_Paulo').format('HH:mm DD/MM/YYYY');

            var data = {
                email: name,
                date: dateSend
            };
            $.ajax({
                url: ENV.API_URL + '/post/validate/user/email',
                method: 'POST',
                data: JSON.stringify(data),
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                }
            }).then(function () {
                swalTypeItCode();
            }).fail(function (err) {
                switch (err.status) {
                    case 404:
                        swal("Email de usuário inválido", "Clique em ok para sair", "error").then(function () {
                            checkUserPassword();
                        });
                        break;
                    case 500:
                        swal("Erro na verificação de email", "Clique em ok para sair", "error").then(function () {
                            checkUserPassword();
                        });
                        break;
                    case 400:
                        swal("Erro na verificação de email", "Clique em ok para sair", "error").then(function () {
                            checkUserPassword();
                        });
                        break;
                }
            });
        } else {
            swal({
                title: "Email inválido!",
                text: "Clique em continuar para seguir com o processo",
                icon: "error",
                buttons: ['Cancelar', 'Continuar']
            }).then(function (ok) {
                if (ok) checkUserPassword();
            });
        }
    });
};