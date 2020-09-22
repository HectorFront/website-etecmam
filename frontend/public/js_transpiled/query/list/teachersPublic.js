'use strict';

$(document).ready(function () {

    $.get(ENV.API_URL + '/get/professores').done(function (res) {
        var profPublic = '';

        res.map(function (resp) {

            profPublic += '\n            <div class="info-prof data-teacher">\n                    <p> <span class="professor">' + resp.nome + '</span>\n                        <span class="email"> - <span style="color: #ce1c1c;">email:</span> ' + resp.email + '</span>\n                        <span class="email-prof"></span>\n    \n                    </p>\n            </div>\n            <hr class="hr-div">\n\n        ';
            $('#list-professores').html(profPublic);
        });
        $('.load').remove();
    }).fail(function () {
        console.log('Error in request professor');
    });
});