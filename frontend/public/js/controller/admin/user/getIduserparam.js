"use strict";$(document).ready(function(){function o(t){return function(t){for(var o,e="0123456789ABCDEF",r="",a=0;a<t.length;a++)o=t.charCodeAt(a),r+=e.charAt(o>>>4&15)+e.charAt(15&o);return r}(function(t){for(var o="",e=0;e<32*t.length;e+=8)o+=String.fromCharCode(t[e>>5]>>>e%32&255);return o}(function(t,o){t[o>>5]|=128<<o%32,t[14+(o+64>>>9<<4)]=o;for(var e=1732584193,r=-271733879,a=-1732584194,n=271733878,i=0;i<t.length;i+=16){var u=e,l=r,c=a,g=n;r=h(r=h(r=h(r=h(r=d(r=d(r=d(r=d(r=f(r=f(r=f(r=f(r=s(r=s(r=s(r=s(r,a=s(a,n=s(n,e=s(e,r,a,n,t[i+0],7,-680876936),r,a,t[i+1],12,-389564586),e,r,t[i+2],17,606105819),n,e,t[i+3],22,-1044525330),a=s(a,n=s(n,e=s(e,r,a,n,t[i+4],7,-176418897),r,a,t[i+5],12,1200080426),e,r,t[i+6],17,-1473231341),n,e,t[i+7],22,-45705983),a=s(a,n=s(n,e=s(e,r,a,n,t[i+8],7,1770035416),r,a,t[i+9],12,-1958414417),e,r,t[i+10],17,-42063),n,e,t[i+11],22,-1990404162),a=s(a,n=s(n,e=s(e,r,a,n,t[i+12],7,1804603682),r,a,t[i+13],12,-40341101),e,r,t[i+14],17,-1502002290),n,e,t[i+15],22,1236535329),a=f(a,n=f(n,e=f(e,r,a,n,t[i+1],5,-165796510),r,a,t[i+6],9,-1069501632),e,r,t[i+11],14,643717713),n,e,t[i+0],20,-373897302),a=f(a,n=f(n,e=f(e,r,a,n,t[i+5],5,-701558691),r,a,t[i+10],9,38016083),e,r,t[i+15],14,-660478335),n,e,t[i+4],20,-405537848),a=f(a,n=f(n,e=f(e,r,a,n,t[i+9],5,568446438),r,a,t[i+14],9,-1019803690),e,r,t[i+3],14,-187363961),n,e,t[i+8],20,1163531501),a=f(a,n=f(n,e=f(e,r,a,n,t[i+13],5,-1444681467),r,a,t[i+2],9,-51403784),e,r,t[i+7],14,1735328473),n,e,t[i+12],20,-1926607734),a=d(a,n=d(n,e=d(e,r,a,n,t[i+5],4,-378558),r,a,t[i+8],11,-2022574463),e,r,t[i+11],16,1839030562),n,e,t[i+14],23,-35309556),a=d(a,n=d(n,e=d(e,r,a,n,t[i+1],4,-1530992060),r,a,t[i+4],11,1272893353),e,r,t[i+7],16,-155497632),n,e,t[i+10],23,-1094730640),a=d(a,n=d(n,e=d(e,r,a,n,t[i+13],4,681279174),r,a,t[i+0],11,-358537222),e,r,t[i+3],16,-722521979),n,e,t[i+6],23,76029189),a=d(a,n=d(n,e=d(e,r,a,n,t[i+9],4,-640364487),r,a,t[i+12],11,-421815835),e,r,t[i+15],16,530742520),n,e,t[i+2],23,-995338651),a=h(a,n=h(n,e=h(e,r,a,n,t[i+0],6,-198630844),r,a,t[i+7],10,1126891415),e,r,t[i+14],15,-1416354905),n,e,t[i+5],21,-57434055),a=h(a,n=h(n,e=h(e,r,a,n,t[i+12],6,1700485571),r,a,t[i+3],10,-1894986606),e,r,t[i+10],15,-1051523),n,e,t[i+1],21,-2054922799),a=h(a,n=h(n,e=h(e,r,a,n,t[i+8],6,1873313359),r,a,t[i+15],10,-30611744),e,r,t[i+6],15,-1560198380),n,e,t[i+13],21,1309151649),a=h(a,n=h(n,e=h(e,r,a,n,t[i+4],6,-145523070),r,a,t[i+11],10,-1120210379),e,r,t[i+2],15,718787259),n,e,t[i+9],21,-343485551),e=m(e,u),r=m(r,l),a=m(a,c),n=m(n,g)}return Array(e,r,a,n)}(function(t){for(var o=Array(t.length>>2),e=0;e<o.length;e++)o[e]=0;for(e=0;e<8*t.length;e+=8)o[e>>5]|=(255&t.charCodeAt(e/8))<<e%32;return o}(t),8*t.length))).toLowerCase()}var t=window.location.search,e=new URLSearchParams(t),r=localStorage.getItem(btoa("emailUser"));function u(t,o,e,r,a,n){return m((i=m(m(o,t),m(r,n)))<<(u=a)|i>>>32-u,e);var i,u}function s(t,o,e,r,a,n,i){return u(o&e|~o&r,t,o,a,n,i)}function f(t,o,e,r,a,n,i){return u(o&r|e&~r,t,o,a,n,i)}function d(t,o,e,r,a,n,i){return u(o^e^r,t,o,a,n,i)}function h(t,o,e,r,a,n,i){return u(e^(o|~r),t,o,a,n,i)}function m(t,o){var e=(65535&t)+(65535&o);return(t>>16)+(o>>16)+(e>>16)<<16|65535&e}var a=e.get("param"),n=localStorage.getItem(btoa("idUser")),i=localStorage.getItem(btoa("idDefault")),l=localStorage.getItem(btoa("login"));i||n||l||r?i&&n&&l&&r&&i===n?i===n&&$.get(ENV.API_URL+"/get/user/"+a).done(function(t){l!==t.webtoken||r!==o(t.email)||a!==n&&a!==i?platformLogout():console.log({status_reload:"without permission on change id"})}).fail(function(){platformLogout()}):platformLogout():(localStorage.setItem(btoa("idUser"),a),localStorage.setItem(btoa("idDefault"),a),$.get(ENV.API_URL+"/get/user/"+a).done(function(t){var o={icone:'<i class="fa fa-unlock bg-blue"></i>',usuario:t.userName,cargo:t.cargo,atividade:"Logou na plataforma"};$.ajax({url:ENV.API_URL+"/post/log",data:JSON.stringify(o),method:"POST",headers:{Accept:"application/json","Content-type":"application/json",Authorization:t.webtoken}}).then(function(){console.log({registerLog:"success"})}).fail(function(){console.log({registerLog:"error"})}),console.log({status_reload:"login_status: 200 OK"})}).fail(function(){platformLogout()}))});