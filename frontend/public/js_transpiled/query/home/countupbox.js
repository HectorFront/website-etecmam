'use strict';

$(document).ready(function () {

    $.get(ENV.API_URL + '/get/info/escola').done(function (res) {
        console.log(res);
        var alunos = document.getElementById('res-aluno');
        var tradicao = document.getElementById('res-tradicao');
        var cursos = document.getElementById('res-cursos');
        alunos.innerHTML = res.alunos;
        tradicao.innerHTML = res.anos_tradicao;
        cursos.innerHTML = res.cursos;

        $('.counter-count').each(function () {

            $(this).prop('Counter', 0).animate({

                Counter: $(this).text()
            }, {

                duration: 2500, easing: 'swing',
                step: function step(now) {

                    $(this).text(Math.ceil(now));
                }
            });
        });
    }).fail(function () {

        console.log("Error in request alunos");
    });
});