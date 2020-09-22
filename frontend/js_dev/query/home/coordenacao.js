$(document).ready(() => {
   $.get(`${ENV.API_URL}/get/coordenacao`)
      .done(res => {
         $('#coordenacao_medio').html(res.ensino_medio);
      }).fail(() => {
         console.log('Error in request coordenacao ensino médio')
      });
});