"use strict";var deletePublication=function(t){function o(e){return function(e){for(var t,o="0123456789ABCDEF",a="",n=0;n<e.length;n++)t=e.charCodeAt(n),a+=o.charAt(t>>>4&15)+o.charAt(15&t);return a}(function(e){for(var t="",o=0;o<32*e.length;o+=8)t+=String.fromCharCode(e[o>>5]>>>o%32&255);return t}(function(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;for(var o=1732584193,a=-271733879,n=-1732584194,r=271733878,i=0;i<e.length;i+=16){var l=o,c=a,u=n,s=r;a=h(a=h(a=h(a=h(a=d(a=d(a=d(a=d(a=f(a=f(a=f(a=f(a=g(a=g(a=g(a=g(a,n=g(n,r=g(r,o=g(o,a,n,r,e[i+0],7,-680876936),a,n,e[i+1],12,-389564586),o,a,e[i+2],17,606105819),r,o,e[i+3],22,-1044525330),n=g(n,r=g(r,o=g(o,a,n,r,e[i+4],7,-176418897),a,n,e[i+5],12,1200080426),o,a,e[i+6],17,-1473231341),r,o,e[i+7],22,-45705983),n=g(n,r=g(r,o=g(o,a,n,r,e[i+8],7,1770035416),a,n,e[i+9],12,-1958414417),o,a,e[i+10],17,-42063),r,o,e[i+11],22,-1990404162),n=g(n,r=g(r,o=g(o,a,n,r,e[i+12],7,1804603682),a,n,e[i+13],12,-40341101),o,a,e[i+14],17,-1502002290),r,o,e[i+15],22,1236535329),n=f(n,r=f(r,o=f(o,a,n,r,e[i+1],5,-165796510),a,n,e[i+6],9,-1069501632),o,a,e[i+11],14,643717713),r,o,e[i+0],20,-373897302),n=f(n,r=f(r,o=f(o,a,n,r,e[i+5],5,-701558691),a,n,e[i+10],9,38016083),o,a,e[i+15],14,-660478335),r,o,e[i+4],20,-405537848),n=f(n,r=f(r,o=f(o,a,n,r,e[i+9],5,568446438),a,n,e[i+14],9,-1019803690),o,a,e[i+3],14,-187363961),r,o,e[i+8],20,1163531501),n=f(n,r=f(r,o=f(o,a,n,r,e[i+13],5,-1444681467),a,n,e[i+2],9,-51403784),o,a,e[i+7],14,1735328473),r,o,e[i+12],20,-1926607734),n=d(n,r=d(r,o=d(o,a,n,r,e[i+5],4,-378558),a,n,e[i+8],11,-2022574463),o,a,e[i+11],16,1839030562),r,o,e[i+14],23,-35309556),n=d(n,r=d(r,o=d(o,a,n,r,e[i+1],4,-1530992060),a,n,e[i+4],11,1272893353),o,a,e[i+7],16,-155497632),r,o,e[i+10],23,-1094730640),n=d(n,r=d(r,o=d(o,a,n,r,e[i+13],4,681279174),a,n,e[i+0],11,-358537222),o,a,e[i+3],16,-722521979),r,o,e[i+6],23,76029189),n=d(n,r=d(r,o=d(o,a,n,r,e[i+9],4,-640364487),a,n,e[i+12],11,-421815835),o,a,e[i+15],16,530742520),r,o,e[i+2],23,-995338651),n=h(n,r=h(r,o=h(o,a,n,r,e[i+0],6,-198630844),a,n,e[i+7],10,1126891415),o,a,e[i+14],15,-1416354905),r,o,e[i+5],21,-57434055),n=h(n,r=h(r,o=h(o,a,n,r,e[i+12],6,1700485571),a,n,e[i+3],10,-1894986606),o,a,e[i+10],15,-1051523),r,o,e[i+1],21,-2054922799),n=h(n,r=h(r,o=h(o,a,n,r,e[i+8],6,1873313359),a,n,e[i+15],10,-30611744),o,a,e[i+6],15,-1560198380),r,o,e[i+13],21,1309151649),n=h(n,r=h(r,o=h(o,a,n,r,e[i+4],6,-145523070),a,n,e[i+11],10,-1120210379),o,a,e[i+2],15,718787259),r,o,e[i+9],21,-343485551),o=m(o,l),a=m(a,c),n=m(n,u),r=m(r,s)}return Array(o,a,n,r)}(function(e){for(var t=Array(e.length>>2),o=0;o<t.length;o++)t[o]=0;for(o=0;o<8*e.length;o+=8)t[o>>5]|=(255&e.charCodeAt(o/8))<<o%32;return t}(e),8*e.length))).toLowerCase()}var a=localStorage.getItem(btoa("login")),e=localStorage.getItem(btoa("idUser")),n=localStorage.getItem(btoa("idUser")),r=localStorage.getItem(btoa("idDefault")),i=localStorage.getItem(btoa("emailUser"));function l(e,t,o,a,n,r){return m((i=m(m(t,e),m(a,r)))<<(l=n)|i>>>32-l,o);var i,l}function g(e,t,o,a,n,r,i){return l(t&o|~t&a,e,t,n,r,i)}function f(e,t,o,a,n,r,i){return l(t&a|o&~a,e,t,n,r,i)}function d(e,t,o,a,n,r,i){return l(t^o^a,e,t,n,r,i)}function h(e,t,o,a,n,r,i){return l(o^(t|~a),e,t,n,r,i)}function m(e,t){var o=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(o>>16)<<16|65535&o}e===r&&$.get(ENV.API_URL+"/get/user/"+e).done(function(e){a===e.webtoken&&i===o(e.email)?swal({title:"Deseja mesmo deletar?",text:"Se você deletar esta publicação a página será atualizada automaticamente!",icon:"warning",buttons:!0,dangerMode:!0}).then(function(e){e?$.ajax({url:ENV.API_URL+"/delete/noticia/"+t,method:"DELETE",headers:{Accept:"application/json","Content-type":"application/json",Authorization:a}}).then(function(){$.get(ENV.API_URL+"/get/user/"+n).done(function(e){var t={icone:'<i class="fa fa-warning bg-yellow"></i>',usuario:e.userName,cargo:e.cargo,atividade:"Deletou uma publicação"};$.ajax({url:ENV.API_URL+"/post/log",data:JSON.stringify(t),method:"POST",headers:{Accept:"application/json","Content-type":"application/json",Authorization:a}}).then(function(){console.log({registerLog:"success"})}).fail(function(){console.log({registerLog:"error"})})}),swal("Publicação deletada!","Clique em ok para sair","success").then(function(){window.location.reload()})}).fail(function(){swal("Publicação não deletada, por favor contatar com os programadores!","Clique em ok para sair","error").then(function(){window.location.reload()})}):swal("Deleção cancelada!","Clique em ok para sair","error")}):platformLogout()})};