$(document).ready(() => {

  $.get(`${ENV.API_URL}/get/funcionarios`)
    .done(res => {

      let funcPublic = '';
      res.map(resp => {

        funcPublic += `
                    <div class="info-func">
                      <p>
                        <span class="funcionario name${resp.id}">${resp.nome}</span>
                        <span class="email"> - cargo: </span><span class="email-func cargo${resp.id}">${resp.cargo}</span>
                      </p>
                    </div>
                    <hr>
               `;
        $('#list-funcionarios').html(funcPublic);
      });
    }).fail(() => {
      console.log('Error in request funcionarios')
    });

});