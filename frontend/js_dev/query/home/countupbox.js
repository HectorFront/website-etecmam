$(document).ready(() => {

    $.get(`${ENV.API_URL}/get/info/escola`)
        .done(res => {
            console.log(res)
            let alunos = document.getElementById('res-aluno');
            let tradicao = document.getElementById('res-tradicao');
            let cursos = document.getElementById('res-cursos');
            alunos.innerHTML = res.alunos;
            tradicao.innerHTML = res.anos_tradicao;
            cursos.innerHTML = res.cursos;

            $('.counter-count').each(function () {

                $(this).prop('Counter', 0).animate({

                    Counter: $(this).text()
                }, {

                    duration: 2500, easing: 'swing',
                    step: function (now) {

                        $(this).text(Math.ceil(now));
                    }
                });
            });


        }).fail(() => {

            console.log("Error in request alunos")

        });
});

