$(document).ready(() => {

    $.get(`${ENV.API_URL}/get/professores`)
        .done(res => {
            let profPublic = '';

            res.map(resp => {

                profPublic +=
                    `
            <div class="info-prof data-teacher">
                    <p> <span class="professor">${resp.nome}</span>
                        <span class="email"> - <span style="color: #ce1c1c;">email:</span> ${resp.email}</span>
                        <span class="email-prof"></span>
    
                    </p>
            </div>
            <hr class="hr-div">

        `;
                $('#list-professores').html(profPublic);
            });
            $('.load').remove();
        }).fail(() => {
            console.log('Error in request professor')
        });
});