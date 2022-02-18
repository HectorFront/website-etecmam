'use strict';

$(document).ready(function () {
   $.get(ENV.API_URL + '/get/coordenacao').done(function (res) {
      $('#coordenacao_medio').html(res.ensino_medio);
   }).fail(function () {
      console.log('Error in request coordenacao ensino médio');
   });
});