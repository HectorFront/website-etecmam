"use strict";$("#info-coordination").on("submit",function(a){a.preventDefault();function o(a){return function(a){for(var o,e="0123456789ABCDEF",r="",t=0;t<a.length;t++)o=a.charCodeAt(t),r+=e.charAt(o>>>4&15)+e.charAt(15&o);return r}(function(a){for(var o="",e=0;e<32*a.length;e+=8)o+=String.fromCharCode(a[e>>5]>>>e%32&255);return o}(function(a,o){a[o>>5]|=128<<o%32,a[14+(o+64>>>9<<4)]=o;for(var e=1732584193,r=-271733879,t=-1732584194,n=271733878,c=0;c<a.length;c+=16){var i=e,l=r,u=t,s=n;r=h(r=h(r=h(r=h(r=p(r=p(r=p(r=p(r=m(r=m(r=m(r=m(r=f(r=f(r=f(r=f(r,t=f(t,n=f(n,e=f(e,r,t,n,a[c+0],7,-680876936),r,t,a[c+1],12,-389564586),e,r,a[c+2],17,606105819),n,e,a[c+3],22,-1044525330),t=f(t,n=f(n,e=f(e,r,t,n,a[c+4],7,-176418897),r,t,a[c+5],12,1200080426),e,r,a[c+6],17,-1473231341),n,e,a[c+7],22,-45705983),t=f(t,n=f(n,e=f(e,r,t,n,a[c+8],7,1770035416),r,t,a[c+9],12,-1958414417),e,r,a[c+10],17,-42063),n,e,a[c+11],22,-1990404162),t=f(t,n=f(n,e=f(e,r,t,n,a[c+12],7,1804603682),r,t,a[c+13],12,-40341101),e,r,a[c+14],17,-1502002290),n,e,a[c+15],22,1236535329),t=m(t,n=m(n,e=m(e,r,t,n,a[c+1],5,-165796510),r,t,a[c+6],9,-1069501632),e,r,a[c+11],14,643717713),n,e,a[c+0],20,-373897302),t=m(t,n=m(n,e=m(e,r,t,n,a[c+5],5,-701558691),r,t,a[c+10],9,38016083),e,r,a[c+15],14,-660478335),n,e,a[c+4],20,-405537848),t=m(t,n=m(n,e=m(e,r,t,n,a[c+9],5,568446438),r,t,a[c+14],9,-1019803690),e,r,a[c+3],14,-187363961),n,e,a[c+8],20,1163531501),t=m(t,n=m(n,e=m(e,r,t,n,a[c+13],5,-1444681467),r,t,a[c+2],9,-51403784),e,r,a[c+7],14,1735328473),n,e,a[c+12],20,-1926607734),t=p(t,n=p(n,e=p(e,r,t,n,a[c+5],4,-378558),r,t,a[c+8],11,-2022574463),e,r,a[c+11],16,1839030562),n,e,a[c+14],23,-35309556),t=p(t,n=p(n,e=p(e,r,t,n,a[c+1],4,-1530992060),r,t,a[c+4],11,1272893353),e,r,a[c+7],16,-155497632),n,e,a[c+10],23,-1094730640),t=p(t,n=p(n,e=p(e,r,t,n,a[c+13],4,681279174),r,t,a[c+0],11,-358537222),e,r,a[c+3],16,-722521979),n,e,a[c+6],23,76029189),t=p(t,n=p(n,e=p(e,r,t,n,a[c+9],4,-640364487),r,t,a[c+12],11,-421815835),e,r,a[c+15],16,530742520),n,e,a[c+2],23,-995338651),t=h(t,n=h(n,e=h(e,r,t,n,a[c+0],6,-198630844),r,t,a[c+7],10,1126891415),e,r,a[c+14],15,-1416354905),n,e,a[c+5],21,-57434055),t=h(t,n=h(n,e=h(e,r,t,n,a[c+12],6,1700485571),r,t,a[c+3],10,-1894986606),e,r,a[c+10],15,-1051523),n,e,a[c+1],21,-2054922799),t=h(t,n=h(n,e=h(e,r,t,n,a[c+8],6,1873313359),r,t,a[c+15],10,-30611744),e,r,a[c+6],15,-1560198380),n,e,a[c+13],21,1309151649),t=h(t,n=h(n,e=h(e,r,t,n,a[c+4],6,-145523070),r,t,a[c+11],10,-1120210379),e,r,a[c+2],15,718787259),n,e,a[c+9],21,-343485551),e=v(e,i),r=v(r,l),t=v(t,u),n=v(n,s)}return Array(e,r,t,n)}(function(a){for(var o=Array(a.length>>2),e=0;e<o.length;e++)o[e]=0;for(e=0;e<8*a.length;e+=8)o[e>>5]|=(255&a.charCodeAt(e/8))<<e%32;return o}(a),8*a.length))).toLowerCase()}var s=localStorage.getItem("login"),e=localStorage.getItem("idUser"),d=localStorage.getItem("idUser"),r=localStorage.getItem("idDefault"),g=localStorage.getItem("emailUser");function i(a,o,e,r,t,n){return v((c=v(v(o,a),v(r,n)))<<(i=t)|c>>>32-i,e);var c,i}function f(a,o,e,r,t,n,c){return i(o&e|~o&r,a,o,t,n,c)}function m(a,o,e,r,t,n,c){return i(o&r|e&~r,a,o,t,n,c)}function p(a,o,e,r,t,n,c){return i(o^e^r,a,o,t,n,c)}function h(a,o,e,r,t,n,c){return i(e^(o|~r),a,o,t,n,c)}function v(a,o){var e=(65535&a)+(65535&o);return(a>>16)+(o>>16)+(e>>16)<<16|65535&e}e===r?$.get(ENV.API_URL+"/get/user/"+e).done(function(a){var e,r,t,n,c,i,l,u;s===a.webtoken&&g===o(a.email)?(e=$("#coordenacaoMedio").val(),r=$("#coordenacaoAdm").val(),t=$("#coordenacaoIndustrial").val(),n=$("#coordenacaoDs").val(),c=$("#coordenacaoEnfer").val(),i=$("#coordenacaoEtimDs").val(),l=$("#coordenacaoEtimMeca").val(),u=$("#coordenacaoMecanicaMecatronica").val(),e&&r&&t&&n&&c&&i&&l&&u?swal({title:"Deseja mesmo atualizar?",text:"Se você atualizar estes campos a lista será atualizada automaticamente!",icon:"warning",buttons:!0,dangerMode:!0}).then(function(a){var o;a?(o={coordenacaoMedio:e,coordenacaoAdm:r,coordenacaoIndustrial:t,coordenacaoDs:n,coordenacaoEnfer:c,coordenacaoEtimDs:i,coordenacaoEtimMeca:l,coordenacaoMecanicaMecatronica:u},$.ajax({url:ENV.API_URL+"/put/coordenacao",data:JSON.stringify(o),method:"PUT",headers:{Accept:"application/json","Content-type":"application/json",Authorization:s}}).then(function(){$.get(ENV.API_URL+"/get/user/"+d).done(function(a){var o={icone:'<i class="fa fa-warning bg-yellow"></i>',usuario:a.userName,cargo:a.cargo,atividade:'Atualizou em <a href="/Diretoria">Coordenação</a>'};$.ajax({url:ENV.API_URL+"/post/log",data:JSON.stringify(o),method:"POST",headers:{Accept:"application/json","Content-type":"application/json",Authorization:s}}).then(function(){console.log({registerLog:"success"})}).fail(function(){console.log({registerLog:"error"})})}),swal("Coordenação atualizada!","Clique em ok para sair","success")}).fail(function(){swal("Problema ao atualizar, por favor contatar os programadores!","Clique em ok para sair","error").then(function(){window.location.reload()})})):swal("Atualização cancelada!","Clique em ok para sair","error")}):swal("Preencha todos os campos!","Clique em ok para sair","warning")):platformLogout()}):platformLogout()});