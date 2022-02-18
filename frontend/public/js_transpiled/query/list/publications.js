'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var publications = function () {
    function publications() {
        _classCallCheck(this, publications);

        this.html = '';
        this.publicationsMore = new MorePublicationss();
        this.Request();
        this.banco = 0;
    }

    _createClass(publications, [{
        key: 'Request',
        value: function Request() {
            var _this = this;

            var nenhumaPublicacao = '<center><span style="font-size: 19px;">Nenhuma publica\xE7\xE3o encontrada</span></center>';

            $.get(ENV.API_URL + '/get/noticias/index').done(function (res) {
                res.length > 0 ? res.map(function (response) {
                    _this.html = _this.publicationsMore.innerhtml(response);
                }) : $('#publications').html(nenhumaPublicacao);
            });
            $.get(ENV.API_URL + '/get/noticias').done(function (count) {
                _this.banco = count.length - 3;
                if (count.length > 3) {
                    var buttonMais = '<button type="button" class="ver-mais">VER MAIS PUBLICA\xC7\xD5ES</button>';
                    $('#publications').append(_this.html);
                    $('#button-pagination').html(buttonMais);
                } else {
                    $('#publications').append(_this.html);
                }

                $('.ver-mais').on('click', function () {
                    if (_this.banco >= 3) {
                        _this.publicationsMore.morePublications(3);
                        _this.banco += -3;
                        if (_this.banco <= 0) {
                            _this.buttonexclude();
                        }
                    } else if (_this.banco > 0 && _this.banco <= 2) {
                        _this.publicationsMore.morePublications(_this.banco);
                        _this.banco += -3;
                        if (_this.banco <= 0) {
                            _this.buttonexclude();
                        }
                    }
                });
            });
        }
    }, {
        key: 'buttonexclude',
        value: function buttonexclude() {
            $('#button-pagination').remove();
        }
    }]);

    return publications;
}();

new publications();