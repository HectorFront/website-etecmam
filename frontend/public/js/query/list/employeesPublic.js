"use strict";$(document).ready(function(){$.get(ENV.API_URL+"/get/funcionarios").done(function(n){var a="";n.map(function(n){a+='\n                    <div class="info-func">\n                      <p>\n                        <span class="funcionario name'+n.id+'">'+n.nome+'</span>\n                        <span class="email"> - cargo: </span><span class="email-func cargo'+n.id+'">'+n.cargo+"</span>\n                      </p>\n                    </div>\n                    <hr>\n               ",$("#list-funcionarios").html(a)})}).fail(function(){console.log("Error in request funcionarios")})});