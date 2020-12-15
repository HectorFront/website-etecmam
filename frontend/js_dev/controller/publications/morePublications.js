class MorePublicationss {

    constructor() {
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

    morePublications(key) {
        this.offset += 3;

        fetch(`${this.url}/pagination/noticias/${this.offset}/${key}`)
            .then(res => {
                return res.json()
            })
            .then(json => {
                json.map(res => {
                    this.innerhtml(res)
                })
            })
    }

    permissionDelete() {
        const iduser = this.idUser;
        const iddefault = this.idDefault;
        const webtoken = this.webtoken;

        if (iduser && iduser === iddefault) {
            $.get(`${this.url}/get/user/${iduser}`)
                .done(user => {
                    if (webtoken === user.webtoken && user.permissao == 1) {
                        this.permissionDeletePublication = true;
                        this.permissionEditPublication = true;
                    } else if (webtoken === user.webtoken && user.permissao == 0) {
                        this.permissionDeletePublication = false;
                        this.permissionEditPublication = true;
                    }
                }).fail(() => {
                    swal("Falha no banco de dados, por favor contatar com os programadores!", "Clique em ok para sair", "error").then(() => {
                        platformLogout();
                    })
                })
        }
    }

    innerhtml(responseMore) {
        moment.locale('pt-br');
        let formatUrl = (responseMore.descricao || "").replace(
            /([^\S]|^)(((https?\:\/\/)|(www\.))(\S+))/gi,
            function (match, space, url) {
                let hyperlink = url;
                if (!hyperlink.match('^https?:\/\/')) {
                    hyperlink = 'http://' + hyperlink;
                }
                return space + '<a style="line-break: anywhere;" href="' + hyperlink + '">' + hyperlink + '</a>';
            }
        );
        responseMore.descricao = formatUrl;
        let dataFormat = moment(responseMore.data).tz('America/Sao_Paulo').format('HH:mm DD/MM/YYYY');

        const youtube_parser = (url) => {
            let regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
            let match = url.match(regExp);
            return (match && match[7].length == 11) ? match[7] : false;
        }

        console.log(this.permissionPublication);

        this.publicationMore +=
            `<div style="margin-bottom: 30px; margin-top: 30px;" class="event-index" id="${responseMore.id}">
            <div class="blog-slider">
            ${this.permissionEditPublication ?
                `<button onclick="listModal(${responseMore.id})" title="Editar publicação" data-toggle="modal" data-target="#modal_edit_publication"
                    style="
                    background-color: rgb(37, 44, 50);
                    position: absolute;
                    right: -4px;
                    z-index: 999;
                    border-radius: 10px;
                    top: -18px;
                    font-size: 20px;
                    padding: 14px 17px 14px 17px;
                    color: white;"
                >
                    <i class="fa fa-pencil"></i>
                </button>`
                : ''
            }
                ${this.permissionDeletePublication && this.permissionEditPublication ?
                `<button onclick="deletePublication(${responseMore.id})" title="Excluir publicação"
                    style="
                    position: absolute;
                    border-radius: 10px;
                    padding: 12px 17px 12px 17px;
                    color: white;
                    font-size: 23px;
                    z-index: 1200;
                    top: -18px;
                    right: 55px;"
                >
                    <i class="fa fa-trash"></i>
                </button>`
                : ''
            }
                <div class="blog-slider__wrp swiper-wrapper">
                    <div class="blog-slider__item swiper-slide">
                        <div style="background-image: url('/assets/images/publication.png');" class="blog-slider__img"></div>
                        <div class="blog-slider__content" ${responseMore.video_yt != 0 && 'style="width: 100% !important;'}">
                            ${responseMore.video_yt != 0 &&
                                `<div class="video_yt_publication">
                                        <iframe
                                                id="youtube_player"
                                                height="100%"
                                                width="100%"
                                                src='https://www.youtube.com/embed/${youtube_parser(responseMore.video_yt)}'
                                                frameBorder="0"
                                                allowFullScreen
                                                allow='autoplay; encrypted-media'
                                            />
                                    </div>`}
                            ${responseMore.imagem != 0 &&
                                `<figure>
                                     <img src='/assets/${responseMore.imagem}' width="900px" height="auto" />
                                </figure>`}
                            <div style="${responseMore.video == 0 ? 'display: none' : 'display: block'}">
                                <div class="content__video">
                                ${responseMore.video != 0 &&
                                    `<video controls class="video-publication" controls>
                                        <source src="/assets/${responseMore.video}" type="video/mp4">
                                    </video>`}
                                </div>
                            </div>
                            <span style="font-weight: bold;" class="blog-slider__code">Quem publicou:</span>
                            <span class="blog-slider__code">
                                <i class="fa fa-user">
                                <b style="font-family: 'nunito', sans-serif; margin-left: 5px;" id="autor-box"> ${responseMore.autor}</b>
                                    </i>
                            </span>
                            <span style="font-weight: bold;" class="blog-slider__code">Data da publicação:</span>
                            <span style="font-weight: bold;" class="blog-slider__code" id="data-public"></span>
                                <span class="blog-slider__code" id="data-public">
                                    <i class="fa fa-clock-o">
                                    <b style="margin-left: 2px; font-family: 'nunito', sans-serif;" id="data-event-box">${dataFormat}</b>
                                    </i>
                                </span>
                                <div style="font-family: 'montserrat', sans-serif; font-size: 20px; line-height: 30px;"
                                    class="blog-slider__title" id="titulo-evento-box">${responseMore.titulo}
                                </div>
                                <div style="text-align:justify;" id="desc-evento-box" class="blog-slider__text">
                                    <p>${responseMore.descricao}<p>
                                </div>
                            </div>
                            ${responseMore.assunto != '0' ? `
                            <div style="margin-top: 20px; margin-bottom: 20px;" class="blog-slider__button"
                                id="assunto-box">${responseMore.assunto}
                            </div>` : ' '} 
                        </div>
                    </div>
                    <div class="blog-slider__pagination"></div>
                </div>
            </div>
        `;

        let htmlmore = $.parseHTML(this.publicationMore)
        let contentPublications = document.createElement('div');

        $(contentPublications).append(htmlmore);
        this.main.html(contentPublications);

        return htmlmore;
    }

}