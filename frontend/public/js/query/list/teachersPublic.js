"use strict";$(document).ready(function(){$.get(ENV.API_URL+"/get/professores").done(function(s){var n="";s.map(function(s){n+='\n            <div class="info-prof data-teacher">\n                    <p> <span class="professor">'+s.nome+'</span>\n                        <span class="email"> - <span style="color: #ce1c1c;">email:</span> '+s.email+'</span>\n                        <span class="email-prof"></span>\n    \n                    </p>\n            </div>\n            <hr class="hr-div">\n\n        ',$("#list-professores").html(n)}),$(".load").remove()}).fail(function(){console.log("Error in request professor")})});