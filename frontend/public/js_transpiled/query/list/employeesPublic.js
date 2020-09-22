'use strict';

$(document).ready(function () {

  $.get(ENV.API_URL + '/get/funcionarios').done(function (res) {

    var funcPublic = '';
    res.map(function (resp) {

      funcPublic += '\n                    <div class="info-func">\n                      <p>\n                        <span class="funcionario name' + resp.id + '">' + resp.nome + '</span>\n                        <span class="email"> - cargo: </span><span class="email-func cargo' + resp.id + '">' + resp.cargo + '</span>\n                      </p>\n                    </div>\n                    <hr>\n               ';
      $('#list-funcionarios').html(funcPublic);
    });
  }).fail(function () {
    console.log('Error in request funcionarios');
  });
});