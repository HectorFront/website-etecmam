'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MorePublicationss = function () {
    function MorePublicationss() {
        _classCallCheck(this, MorePublicationss);

        this.main = document.querySelector('.section-publications');
        this.publicationMore = '';
        this.offset = 0;
        this.url = ENV.API_URL;
        this.main = $('#publications');
        this.idUser = localStorage.getItem(btoa('idUser'));
        this.idDefault = localStorage.getItem(btoa('idDefault'));
        this.webtoken = localStorage.getItem(btoa('login'));
        this.permissionDelete();
        this.permissionDeletePublication = false;
        this.permissionEditPublication = false;
    }

    _createClass(MorePublicationss, [{
        key: 'morePublications',
        value: function morePublications(key) {
            var _this = this;

            this.offset += 3;

            fetch(this.url + '/pagination/noticias/' + this.offset + '/' + key).then(function (res) {
                return res.json();
            }).then(function (json) {
                json.map(function (res) {
                    _this.innerhtml(res);
                });
            });
        }
    }, {
        key: 'permissionDelete',
        value: function permissionDelete() {
            var _this2 = this;

            var iduser = this.idUser;
            var iddefault = this.idDefault;
            var webtoken = this.webtoken;

            if (iduser && iduser === iddefault) {
                $.get(this.url + '/get/user/' + iduser).done(function (user) {
                    if (webtoken === user.webtoken && user.permissao == 1) {
                        _this2.permissionDeletePublication = true;
                        _this2.permissionEditPublication = true;
                    } else if (webtoken === user.webtoken && user.permissao == 0) {
                        _this2.permissionDeletePublication = false;
                        _this2.permissionEditPublication = true;
                    }
                }).fail(function () {
                    swal("Falha no banco de dados, por favor contatar com os programadores!", "Clique em ok para sair", "error").then(function () {
                        platformLogout();
                    });
                });
            }
        }
    }, {
        key: 'innerhtml',
        value: function innerhtml(responseMore) {
            moment.locale('pt-br');
            var formatUrl = (responseMore.descricao || "").replace(/([^\S]|^)(((https?\:\/\/)|(www\.))(\S+))/gi, function (match, space, url) {
                var hyperlink = url;
                if (!hyperlink.match('^https?:\/\/')) {
                    hyperlink = 'http://' + hyperlink;
                }
                return space + '<a style="line-break: anywhere;" href="' + hyperlink + '">' + hyperlink + '</a>';
            });
            responseMore.descricao = formatUrl;
            var dataFormat = moment(responseMore.data).tz('America/Sao_Paulo').format('HH:mm DD/MM/YYYY');

            var youtube_parser = function youtube_parser(url) {
                var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
                var match = url.match(regExp);
                return match && match[7].length == 11 ? match[7] : false;
            };

            console.log(this.permissionPublication);

            this.publicationMore += '<div style="margin-bottom: 30px; margin-top: 30px;" class="event-index" id="' + responseMore.id + '">\n            <div class="blog-slider">\n            ' + (this.permissionEditPublication ? '<button onclick="listModal(' + responseMore.id + ')" title="Editar publica\xE7\xE3o" data-toggle="modal" data-target="#modal_edit_publication"\n                    style="\n                    background-color: rgb(37, 44, 50);\n                    position: absolute;\n                    right: -4px;\n                    z-index: 999;\n                    border-radius: 10px;\n                    top: -18px;\n                    font-size: 20px;\n                    padding: 14px 17px 14px 17px;\n                    color: white;"\n                >\n                    <i class="fa fa-pencil"></i>\n                </button>' : '') + '\n                ' + (this.permissionDeletePublication && this.permissionEditPublication ? '<button onclick="deletePublication(' + responseMore.id + ')" title="Excluir publica\xE7\xE3o"\n                    style="\n                    position: absolute;\n                    border-radius: 10px;\n                    padding: 12px 17px 12px 17px;\n                    color: white;\n                    font-size: 23px;\n                    z-index: 1200;\n                    top: -18px;\n                    right: 55px;"\n                >\n                    <i class="fa fa-trash"></i>\n                </button>' : '') + '\n                <div class="blog-slider__wrp swiper-wrapper">\n                    <div class="blog-slider__item swiper-slide">\n                        <div style="background-image: url(\'/assets/images/publication.png\');" class="blog-slider__img"></div>\n                        <div class="blog-slider__content" ' + (responseMore.video_yt != 0 && 'style="width: 100% !important;') + '">\n                            ' + (responseMore.video_yt != 0 && '<div class="video_yt_publication">\n                                        <iframe\n                                                id="youtube_player"\n                                                height="100%"\n                                                width="100%"\n                                                src=\'https://www.youtube.com/embed/' + youtube_parser(responseMore.video_yt) + '\'\n                                                frameBorder="0"\n                                                allowFullScreen\n                                                allow=\'autoplay; encrypted-media\'\n                                            />\n                                    </div>') + '\n                            ' + (responseMore.imagem != 0 && '<figure>\n                                     <img src=\'/assets/' + responseMore.imagem + '\' width="900px" height="auto" />\n                                </figure>') + '\n                            <div style="' + (responseMore.video == 0 ? 'display: none' : 'display: block') + '">\n                                <div class="content__video">\n                                ' + (responseMore.video != 0 && '<video controls class="video-publication" controls>\n                                        <source src="/assets/' + responseMore.video + '" type="video/mp4">\n                                    </video>') + '\n                                </div>\n                            </div>\n                            <span style="font-weight: bold;" class="blog-slider__code">Quem publicou:</span>\n                            <span class="blog-slider__code">\n                                <i class="fa fa-user">\n                                <b style="font-family: \'nunito\', sans-serif; margin-left: 5px;" id="autor-box"> ' + responseMore.autor + '</b>\n                                    </i>\n                            </span>\n                            <span style="font-weight: bold;" class="blog-slider__code">Data da publica\xE7\xE3o:</span>\n                            <span style="font-weight: bold;" class="blog-slider__code" id="data-public"></span>\n                                <span class="blog-slider__code" id="data-public">\n                                    <i class="fa fa-clock-o">\n                                    <b style="margin-left: 2px; font-family: \'nunito\', sans-serif;" id="data-event-box">' + dataFormat + '</b>\n                                    </i>\n                                </span>\n                                <div style="font-family: \'montserrat\', sans-serif; font-size: 20px; line-height: 30px;"\n                                    class="blog-slider__title" id="titulo-evento-box">' + responseMore.titulo + '\n                                </div>\n                                <div style="text-align:justify;" id="desc-evento-box" class="blog-slider__text">\n                                    <p>' + responseMore.descricao + '<p>\n                                </div>\n                            </div>\n                            ' + (responseMore.assunto != '0' ? '\n                            <div style="margin-top: 20px; margin-bottom: 20px;" class="blog-slider__button"\n                                id="assunto-box">' + responseMore.assunto + '\n                            </div>' : ' ') + ' \n                        </div>\n                    </div>\n                    <div class="blog-slider__pagination"></div>\n                </div>\n            </div>\n        ';

            var htmlmore = $.parseHTML(this.publicationMore);
            var contentPublications = document.createElement('div');

            $(contentPublications).append(htmlmore);
            this.main.html(contentPublications);

            return htmlmore;
        }
    }]);

    return MorePublicationss;
}();