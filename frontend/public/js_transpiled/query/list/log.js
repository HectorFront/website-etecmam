'use strict';

$(document).ready(function () {
    moment.locale('pt-br');

    var nenhumResultado = '<center><p>Nenhum registro de atividade foi encontrado</p></center>';

    var day = moment(new Date()).tz('America/Sao_Paulo').format('DD');
    var month = moment(new Date()).tz('America/Sao_Paulo').format('MMMM');
    var year = moment(new Date()).tz('America/Sao_Paulo').format('YYYY');
    var date = day + ' de ' + month + ' de ' + year;
    $('#time-date').html(date);

    $.get(ENV.API_URL + '/get/logs').done(function (res) {
        var logsData = res.reverse();
        if (logsData.length > 0) {
            var log = '';

            logsData.map(function (item) {
                var end = moment(new Date()).tz('America/Sao_Paulo');
                moment(end.diff(item.data_atividade)).tz('America/Sao_Paulo').format("m[m] s[s]");

                var hora = moment(item.data_atividade).tz('America/Sao_Paulo').format("HH:mm");

                var duration = moment.duration(end.diff(item.data_atividade));
                var horaPassadas = duration.hours() === 1 ? '&nbsp;h\xE1 uma hora' : '&nbsp;h\xE1 ' + duration.hours() + ' horas';
                var minutoPassados = duration.minutes() === 1 ? '&nbsp;h\xE1 um minuto' : '&nbsp;h\xE1 ' + duration.minutes() + ' minutos';

                log += '\n                    <li>\n                        <div class="timeline-item"><span class="time"><i class="fa fa-clock-o"></i>' + (duration.hours() >= 1 ? horaPassadas : duration.minutes() === 0 ? '&nbsp;agora' : minutoPassados) + '</span>\n                            <h3 class="timeline-header no-border">' + item.icon + '&nbsp;&nbsp;' + hora + ' \u2022 <a> <b style="color:brown">' + item.usuario + '</b> - <b>' + item.cargo + '</b></a> ' + item.atividade + '</h3>\n                        </div>\n                    </li> \n                    ';
            });
            $('#list-registros').html(log);
        } else {
            $('#list-registros').html(nenhumResultado);
        }
    });
});