'use strict';

var registerUser = function registerUser() {
    event.preventDefault();
    moment.locale('pt-br');

    var PermissionToken = localStorage.getItem(btoa('login'));
    var idURL = localStorage.getItem(btoa('idUser'));
    var PermissionidUser = localStorage.getItem(btoa('idUser'));
    var PermissionidDefault = localStorage.getItem(btoa('idDefault'));
    var hashValidade = localStorage.getItem(btoa('emailUser'));
    var senhaFraca = '<div class="alert alert-danger alert-dismissible alert-pass fade-pass" role="alert">\n        <strong>Senha fraca!</strong> A senha tem que ter pelo menos 6 letras min\xFAsculas com um 1 n\xFAmero ou uma letra mai\xFAscula, duas min\xFAscula e 2 n\xFAmeros!\n    </div>';

    var generateHash = function generateHash(d) {
        var r = M(V(Y(X(d), 8 * d.length)));return r.toLowerCase();
    };function M(d) {
        for (var _, m = "0123456789ABCDEF", f = "", r = 0; r < d.length; r++) {
            _ = d.charCodeAt(r), f += m.charAt(_ >>> 4 & 15) + m.charAt(15 & _);
        }return f;
    }function X(d) {
        for (var _ = Array(d.length >> 2), m = 0; m < _.length; m++) {
            _[m] = 0;
        }for (m = 0; m < 8 * d.length; m += 8) {
            _[m >> 5] |= (255 & d.charCodeAt(m / 8)) << m % 32;
        }return _;
    }function V(d) {
        for (var _ = "", m = 0; m < 32 * d.length; m += 8) {
            _ += String.fromCharCode(d[m >> 5] >>> m % 32 & 255);
        }return _;
    }function Y(d, _) {
        d[_ >> 5] |= 128 << _ % 32, d[14 + (_ + 64 >>> 9 << 4)] = _;for (var m = 1732584193, f = -271733879, r = -1732584194, i = 271733878, n = 0; n < d.length; n += 16) {
            var h = m,
                t = f,
                g = r,
                e = i;f = md5_ii(f = md5_ii(f = md5_ii(f = md5_ii(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_ff(f = md5_ff(f = md5_ff(f = md5_ff(f, r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 0], 7, -680876936), f, r, d[n + 1], 12, -389564586), m, f, d[n + 2], 17, 606105819), i, m, d[n + 3], 22, -1044525330), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 4], 7, -176418897), f, r, d[n + 5], 12, 1200080426), m, f, d[n + 6], 17, -1473231341), i, m, d[n + 7], 22, -45705983), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 8], 7, 1770035416), f, r, d[n + 9], 12, -1958414417), m, f, d[n + 10], 17, -42063), i, m, d[n + 11], 22, -1990404162), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 12], 7, 1804603682), f, r, d[n + 13], 12, -40341101), m, f, d[n + 14], 17, -1502002290), i, m, d[n + 15], 22, 1236535329), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 1], 5, -165796510), f, r, d[n + 6], 9, -1069501632), m, f, d[n + 11], 14, 643717713), i, m, d[n + 0], 20, -373897302), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 5], 5, -701558691), f, r, d[n + 10], 9, 38016083), m, f, d[n + 15], 14, -660478335), i, m, d[n + 4], 20, -405537848), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 9], 5, 568446438), f, r, d[n + 14], 9, -1019803690), m, f, d[n + 3], 14, -187363961), i, m, d[n + 8], 20, 1163531501), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 13], 5, -1444681467), f, r, d[n + 2], 9, -51403784), m, f, d[n + 7], 14, 1735328473), i, m, d[n + 12], 20, -1926607734), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 5], 4, -378558), f, r, d[n + 8], 11, -2022574463), m, f, d[n + 11], 16, 1839030562), i, m, d[n + 14], 23, -35309556), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 1], 4, -1530992060), f, r, d[n + 4], 11, 1272893353), m, f, d[n + 7], 16, -155497632), i, m, d[n + 10], 23, -1094730640), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 13], 4, 681279174), f, r, d[n + 0], 11, -358537222), m, f, d[n + 3], 16, -722521979), i, m, d[n + 6], 23, 76029189), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 9], 4, -640364487), f, r, d[n + 12], 11, -421815835), m, f, d[n + 15], 16, 530742520), i, m, d[n + 2], 23, -995338651), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 0], 6, -198630844), f, r, d[n + 7], 10, 1126891415), m, f, d[n + 14], 15, -1416354905), i, m, d[n + 5], 21, -57434055), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 12], 6, 1700485571), f, r, d[n + 3], 10, -1894986606), m, f, d[n + 10], 15, -1051523), i, m, d[n + 1], 21, -2054922799), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 8], 6, 1873313359), f, r, d[n + 15], 10, -30611744), m, f, d[n + 6], 15, -1560198380), i, m, d[n + 13], 21, 1309151649), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 4], 6, -145523070), f, r, d[n + 11], 10, -1120210379), m, f, d[n + 2], 15, 718787259), i, m, d[n + 9], 21, -343485551), m = safe_add(m, h), f = safe_add(f, t), r = safe_add(r, g), i = safe_add(i, e);
        }return Array(m, f, r, i);
    }function md5_cmn(d, _, m, f, r, i) {
        return safe_add(bit_rol(safe_add(safe_add(_, d), safe_add(f, i)), r), m);
    }function md5_ff(d, _, m, f, r, i, n) {
        return md5_cmn(_ & m | ~_ & f, d, _, r, i, n);
    }function md5_gg(d, _, m, f, r, i, n) {
        return md5_cmn(_ & f | m & ~f, d, _, r, i, n);
    }function md5_hh(d, _, m, f, r, i, n) {
        return md5_cmn(_ ^ m ^ f, d, _, r, i, n);
    }function md5_ii(d, _, m, f, r, i, n) {
        return md5_cmn(m ^ (_ | ~f), d, _, r, i, n);
    }function safe_add(d, _) {
        var m = (65535 & d) + (65535 & _);return (d >> 16) + (_ >> 16) + (m >> 16) << 16 | 65535 & m;
    }function bit_rol(d, _) {
        return d << _ | d >>> 32 - _;
    };

    if (PermissionidUser === PermissionidDefault) {

        $.get(ENV.API_URL + '/get/user/' + PermissionidUser).done(function (res) {

            if (PermissionToken === res.webtoken && hashValidade === generateHash(res.email)) {
                var nome = $('#nome-register').val();
                var email = $('#email-register').val();
                var senha = $('#senha-register').val();
                var confirmsenha = $('#confsenha-register').val();
                var sexo = $('#sexo-register').val();
                var permissao = $('#permissao-register').val();
                var cargo = $('#cargo-register').val();

                var validateEmail = function validateEmail(emailValue) {
                    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return re.test(String(emailValue).toLowerCase());
                };

                var validatePass = function validatePass(password) {
                    var average = /(?=.*[a-z])(?=.*[0-9])(?=.{6,}).*/;
                    if (average.test(password)) {
                        return true;
                    } else {
                        return false;
                    }
                };

                if (!nome || !email || !senha || !sexo || !permissao || !cargo || !confirmsenha) {
                    swal("Preencha todos os campos!", "Clique em ok para sair", "warning");
                } else if (confirmsenha !== senha) {
                    swal("As senhas n??o se correspondem!", "Clique em ok para sair", "warning");
                    $("#senha-register").addClass("error");
                    $("#confsenha-register").addClass("error");
                } else if (!validateEmail(email)) {
                    swal("Email inv??lido!", "Clique em ok para sair", "warning");
                    $("#email-register").addClass("error");
                } else if (!validatePass(senha)) {
                    $('#senha-fraca').html(senhaFraca);
                } else if (senha.length > 35) {
                    swal("Voc?? s?? pode cadastrar um senha com um m??ximo de 35 caracteres!", "Clique em ok para sair", "warning");
                } else {
                    var data = {
                        nome: nome,
                        email: email,
                        senha: senha,
                        sexo: sexo,
                        permissao: permissao,
                        cargo: cargo
                    };

                    $.ajax({
                        url: ENV.API_URL + '/post/validate/email',
                        data: JSON.stringify(data),
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-type': 'application/json'
                        }
                    }).then(function () {
                        $.ajax({
                            url: ENV.API_URL + '/post/user',
                            data: JSON.stringify(data),
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-type': 'application/json',
                                'Authorization': PermissionToken
                            }
                        }).then(function () {
                            $.get(ENV.API_URL + '/get/user/' + idURL).done(function (res) {

                                var data = {
                                    icone: '<i class="fa fa-warning bg-yellow"></i>',
                                    usuario: res.userName,
                                    cargo: res.cargo,
                                    atividade: 'Cadastrou um usu??rio'
                                };

                                $.ajax({
                                    url: ENV.API_URL + '/post/log',
                                    data: JSON.stringify(data),
                                    method: 'POST',
                                    headers: {
                                        'Accept': 'application/json',
                                        'Content-type': 'application/json',
                                        'Authorization': PermissionToken
                                    }
                                }).then(function () {
                                    console.log({ registerLog: 'success' });
                                }).fail(function () {
                                    console.log({ registerLog: 'error' });
                                });
                            });

                            var dateSend = moment(new Date()).tz('America/Sao_Paulo').format('HH:mm DD/MM/YYYY');
                            console.log(dateSend);

                            fetch(ENV.API_URL + '/get/users').then(function (response) {
                                response.json().then(function (resp) {
                                    var itemUsers = '';

                                    resp.map(function (user) {
                                        itemUsers += '<div style="margin-bottom: 15px;" class="col-xs-12 col-sm-12 col-md-12 col-lg-12">\n                                                    <hr class="hr-div">\n                                                    <div id="item' + user.id + '" class="data-users">\n                                                        <div class="info-user">\n                                                            <p> <span class="user-name"><b>' + user.userName + '</b></span>\n                                                                <span class="email"> - email: ' + user.email + '</span>\n                                                                <button style="border-radius: 50px;" onclick="deleteUser(' + user.id + ')" class="btn btn-danger"><i class="fa fa-trash"></i></i></button>\n                                                            </p>\n                                                        </div>\n                                                    </div>\n                                            </div>';
                                        $('#content-users').html(itemUsers);
                                    });
                                }).catch(function () {
                                    swal("Erro ao listar usu??rios, por favor contatar com os programadores!", "Clique em ok para sair", "error").then(function () {
                                        window.location.reload();
                                    });
                                });
                            });

                            $('#nome-register').val('');
                            $('#email-register').val('');
                            $('#senha-register').val('');
                            $('#confsenha-register').val('');
                            $('.alert').remove();

                            swal("Usu??rio cadastrado com sucesso!", "Clique em ok para sair", "success").then(function () {

                                var data = {
                                    nome: nome,
                                    assunto: 'Login website - Etec Monsenhor Ant??nio Magliano',
                                    email: email.toLowerCase(),
                                    date: dateSend
                                };

                                $.ajax({
                                    url: ENV.API_URL + '/post/send/email/plataforma',
                                    data: JSON.stringify(data),
                                    method: 'POST',
                                    headers: {
                                        'Accept': 'application/json',
                                        'Content-type': 'application/json'
                                    }
                                }).then(function () {
                                    console.log({ success: 'Email enviado para usu\xE1rio com sucesso!' });
                                }).fail(function () {
                                    console.log({ err: 'Falha no envio de email para o usu\xE1rio' });
                                });
                                $("#email-register").removeClass("error");
                                $("#senha-register").removeClass("error");
                                $("#confsenha-register").removeClass("error");
                                $('#fade-senha').remove();
                                $('#register-user').modal('hide');
                            });
                        }).fail(function () {
                            swal("Erro ao cadastrar, por favor contatar com os programadores!", "Clique em ok para sair", "error").then(function () {
                                window.location.reload();
                            });
                        });
                    }).fail(function () {
                        swal("Email de usu??rio j?? existente!", "Clique em ok para sair", "warning");
                    });
                }
            } else {
                platformLogout();
            }
        });
    } else {
        platformLogout();
    }
};