"use strict";var _createClass=function(){function e(i,t){for(var n=0;n<t.length;n++){var e=t[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(i,e.key,e)}}return function(i,t,n){return t&&e(i.prototype,t),n&&e(i,n),i}}();function _classCallCheck(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}var MorePublicationss=function(){function i(){_classCallCheck(this,i),this.main=document.querySelector(".section-publications"),this.publicationMore="",this.offset=0,this.url=ENV.API_URL,this.main=$("#publications"),this.idUser=localStorage.getItem(btoa("idUser")),this.idDefault=localStorage.getItem(btoa("idDefault")),this.webtoken=localStorage.getItem(btoa("login")),this.permissionDelete(),this.permissionDeletePublication=!1,this.permissionEditPublication=!1}return _createClass(i,[{key:"morePublications",value:function(i){var t=this;this.offset+=3,fetch(this.url+"/pagination/noticias/"+this.offset+"/"+i).then(function(i){return i.json()}).then(function(i){i.map(function(i){t.innerhtml(i)})})}},{key:"permissionDelete",value:function(){var t=this,i=this.idUser,n=this.idDefault,e=this.webtoken;i&&i===n&&$.get(this.url+"/get/user/"+i).done(function(i){e===i.webtoken&&1==i.permissao?(t.permissionDeletePublication=!0,t.permissionEditPublication=!0):e===i.webtoken&&0==i.permissao&&(t.permissionDeletePublication=!1,t.permissionEditPublication=!0)}).fail(function(){swal("Falha no banco de dados, por favor contatar com os programadores!","Clique em ok para sair","error").then(function(){platformLogout()})})}},{key:"innerhtml",value:function(i){moment.locale("pt-br");var t=(i.descricao||"").replace(/([^\S]|^)(((https?\:\/\/)|(www\.))(\S+))/gi,function(i,t,n){var e=n;return e.match("^https?://")||(e="http://"+e),t+'<a style="line-break: anywhere;" href="'+e+'">'+e+"</a>"});i.descricao=t;var n,e,o=moment(i.data).tz("America/Sao_Paulo").format("HH:mm DD/MM/YYYY");console.log(this.permissionPublication),this.publicationMore+='<div style="margin-bottom: 30px; margin-top: 30px;" class="event-index" id="'+i.id+'">\n            <div class="blog-slider">\n            '+(this.permissionEditPublication?'<button onclick="listModal('+i.id+')" title="Editar publicação" data-toggle="modal" data-target="#modal_edit_publication"\n                    style="\n                    background-color: rgb(37, 44, 50);\n                    position: absolute;\n                    right: -4px;\n                    z-index: 999;\n                    border-radius: 10px;\n                    top: -18px;\n                    font-size: 20px;\n                    padding: 14px 17px 14px 17px;\n                    color: white;"\n                >\n                    <i class="fa fa-pencil"></i>\n                </button>':"")+"\n                "+(this.permissionDeletePublication&&this.permissionEditPublication?'<button onclick="deletePublication('+i.id+')" title="Excluir publicação"\n                    style="\n                    position: absolute;\n                    border-radius: 10px;\n                    padding: 12px 17px 12px 17px;\n                    color: white;\n                    font-size: 23px;\n                    z-index: 1200;\n                    top: -18px;\n                    right: 55px;"\n                >\n                    <i class="fa fa-trash"></i>\n                </button>':"")+'\n                <div class="blog-slider__wrp swiper-wrapper">\n                    <div class="blog-slider__item swiper-slide">\n                        <div style="background-image: url(\'/assets/images/publication.png\');" class="blog-slider__img"></div>\n                        <div class="blog-slider__content" '+(0!=i.video_yt&&'style="width: 100% !important;')+'">\n                            '+(0!=i.video_yt&&'<div class="video_yt_publication">\n                                        <iframe\n                                                id="youtube_player"\n                                                height="100%"\n                                                width="100%"\n                                                src=\'https://www.youtube.com/embed/'+(n=i.video_yt,!(!(e=n.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/))||11!=e[7].length)&&e[7])+"'\n                                                frameBorder=\"0\"\n                                                allowFullScreen\n                                                allow='autoplay; encrypted-media'\n                                            />\n                                    </div>")+"\n                            "+(0!=i.imagem&&"<figure>\n                                     <img src='/assets/"+i.imagem+'\' width="900px" height="auto" />\n                                </figure>')+'\n                            <div style="'+(0==i.video?"display: none":"display: block")+'">\n                                <div class="content__video">\n                                '+(0!=i.video&&'<video controls class="video-publication" controls>\n                                        <source src="/assets/'+i.video+'" type="video/mp4">\n                                    </video>')+'\n                                </div>\n                            </div>\n                            <span style="font-weight: bold;" class="blog-slider__code">Quem publicou:</span>\n                            <span class="blog-slider__code">\n                                <i class="fa fa-user">\n                                <b style="font-family: \'nunito\', sans-serif; margin-left: 5px;" id="autor-box"> '+i.autor+'</b>\n                                    </i>\n                            </span>\n                            <span style="font-weight: bold;" class="blog-slider__code">Data da publicação:</span>\n                            <span style="font-weight: bold;" class="blog-slider__code" id="data-public"></span>\n                                <span class="blog-slider__code" id="data-public">\n                                    <i class="fa fa-clock-o">\n                                    <b style="margin-left: 2px; font-family: \'nunito\', sans-serif;" id="data-event-box">'+o+'</b>\n                                    </i>\n                                </span>\n                                <div style="font-family: \'montserrat\', sans-serif; font-size: 20px; line-height: 30px;"\n                                    class="blog-slider__title" id="titulo-evento-box">'+i.titulo+'\n                                </div>\n                                <div style="text-align:justify;" id="desc-evento-box" class="blog-slider__text">\n                                    <p>'+i.descricao+"<p>\n                                </div>\n                            </div>\n                            "+("0"!=i.assunto?'\n                            <div style="margin-top: 20px; margin-bottom: 20px;" class="blog-slider__button"\n                                id="assunto-box">'+i.assunto+"\n                            </div>":" ")+' \n                        </div>\n                    </div>\n                    <div class="blog-slider__pagination"></div>\n                </div>\n            </div>\n        ';var s=$.parseHTML(this.publicationMore),a=document.createElement("div");return $(a).append(s),this.main.html(a),s}}]),i}();