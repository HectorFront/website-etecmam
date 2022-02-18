$(document).ready(() => {
    moment.locale('pt-br');

    let nenhumResultado = `<center><p>Nenhum registro de atividade foi encontrado</p></center>`

    let day = moment(new Date()).tz('America/Sao_Paulo').format(`DD`);
    let month = moment(new Date()).tz('America/Sao_Paulo').format(`MMMM`);
    let year = moment(new Date()).tz('America/Sao_Paulo').format(`YYYY`);
    let date = `${day} de ${month} de ${year}`;
    $('#time-date').html(date);

    $.get(`${ENV.API_URL}/get/logs`)
        .done(res => {
            let logsData = res.reverse();
            if (logsData.length > 0) {
                let log = '';

                logsData.map(item => {
                    let end = moment(new Date()).tz('America/Sao_Paulo');
                    moment(end.diff(item.data_atividade)).tz('America/Sao_Paulo').format("m[m] s[s]");

                    let hora = moment(item.data_atividade).tz('America/Sao_Paulo').format("HH:mm");

                    let duration = moment.duration(end.diff(item.data_atividade));
                    let horaPassadas = duration.hours() === 1 ? `&nbsp;há uma hora` : `&nbsp;há ${duration.hours()} horas`;
                    let minutoPassados = duration.minutes() === 1 ? `&nbsp;há um minuto` : `&nbsp;há ${duration.minutes()} minutos`;

                    log +=
                        `
                    <li>
                        <div class="timeline-item"><span class="time"><i class="fa fa-clock-o"></i>${duration.hours() >= 1 ? horaPassadas : duration.minutes() === 0 ? '&nbsp;agora' : minutoPassados}</span>
                            <h3 class="timeline-header no-border">${item.icon}&nbsp;&nbsp;${hora} • <a> <b style="color:brown">${item.usuario}</b> - <b>${item.cargo}</b></a> ${item.atividade}</h3>
                        </div>
                    </li> 
                    `
                });
                $('#list-registros').html(log);
            } else {
                $('#list-registros').html(nenhumResultado);
            }
        });
})