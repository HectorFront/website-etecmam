'use strict';

var updateFunc = function updateFunc(id) {
    event.preventDefault();
    var PermissionToken = localStorage.getItem(btoa('login'));
    var PermissionidUser = localStorage.getItem(btoa('idUser'));
    var idURL = localStorage.getItem(btoa('idUser'));
    var PermissionidDefault = localStorage.getItem(btoa('idDefault'));
    var hashValidade = localStorage.getItem(btoa('emailUser'));
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
                var nome = $('#name' + id).val();
                var cargo = $('#office' + id).val();

                if (!nome || !cargo) {
                    swal("Preencha todos os campos!", "Clique em ok para sair", "warning");
                } else {

                    swal({
                        title: "Deseja mesmo atualizar?",
                        text: "Se você atualizar este funcionário a lista será atualizada automaticamente!",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true
                    }).then(function (willUpdate) {
                        if (willUpdate) {

                            var data = {
                                nome: nome,
                                cargo: cargo
                            };

                            $.ajax({
                                url: ENV.API_URL + '/put/funcionario/' + id,
                                data: JSON.stringify(data),
                                method: 'PUT',
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
                                        atividade: 'Atualizou em <a href="/Funcionarios-Admin">Funcionários</a>'
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
                                swal("Funcionário atualizado!", "Clique em ok para sair", "success").then(function () {

                                    var loading = '\n                                            <div class="load">\n                                                <div class="lds-ring">\n                                                    <div></div>\n                                                    <div></div>\n                                                    <div></div>\n                                                    <div></div>\n                                                </div>\n                                            </div>';
                                    $('#list-funcionarios').html(loading);

                                    $.get(ENV.API_URL + '/get/funcionarios').done(function (res) {
                                        var func = '';

                                        res.map(function (resp) {
                                            func += '\n                                                    <div style="margin-bottom: 15px;" class="col-xs-12 col-sm-12 col-md-12 col-lg-12">\n                                                        <hr class="hr-div">\n                                                        <div id="item' + resp.id + '" class="data-employees">\n                                                            <div class="info-prof">\n                                                                <p> <span class="professor">' + resp.nome + '</span>\n                                                                    <span class="email"> - cargo: ' + resp.cargo + '</span>\n                                                                    <span class="email-prof"></span>\n                                                                    <button onclick="editModal(' + resp.id + ')" class="edit-func"><i class="fa fa-edit"></i></i></button>\n                                                                    <button onclick="deleteModalFunc(' + resp.id + ')" class="edit-func"><i class="fa fa-trash"></i></i></button>\n                                                                </p>\n                                                            </div>\n                                                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">\n                                                                <div style="margin-top: 10px;" id="edit-form' + resp.id + '" class="edit-form">\n                                                                    <form id="toggle' + resp.nome + '">\n                                                                        <div class="form-group col-lg-12 mb-2">\n                                                                            <label class="input-editName">Nome do funcion\xE1rio</label>\n                                                                            <input type="text" class="form-control" id="name' + resp.id + '" value="' + resp.nome + '" placeholder="Nome do funcion\xE1rio" required>\n                                                                        </div>\n                                                                        <div class="form-group col-lg-12 mb-2">\n                                                                            <label class="input-editProf">Cargo do funcion\xE1rio</label>\n                                                                            <input type="text" class="form-control" id="office' + resp.id + '" value="' + resp.cargo + '" placeholder="Cargo do funcin\xE1rio" required>\n                                                                            <button style="margin-top: 20px; color:white;" type="submit" onclick="updateFunc(' + resp.id + ')" class="btn-list">Salvar</button>\n                                                                        </div>\n                                                                    </form>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </div>';
                                            $('#list-funcionarios').html(func);
                                        });
                                    }).fail(function () {
                                        console.log({ error: 'Error in request professor' });
                                    });
                                });
                            }).fail(function () {
                                swal("Funcionário não atualizado, por favor contatar os programadores!", "Clique em ok para sair", "error").then(function () {
                                    window.location.reload();
                                });
                            });
                        } else {
                            swal("Atualização cancelada!", "Clique em ok para sair", "error");
                        }
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