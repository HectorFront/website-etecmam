class publications {
    constructor() {
        this.html = '';
        this.publicationsMore = new MorePublicationss();
        this.Request();
        this.banco = 0;
    }

    Request() {
        let nenhumaPublicacao = `<center><span style="font-size: 19px;">Nenhuma publicação encontrada</span></center>`

        $.get(`${ENV.API_URL}/get/noticias/index`)
            .done(res => {
                res.length > 0
                ? res.map(response => {
                    this.html = this.publicationsMore.innerhtml(response);
                  })
                : $('#publications').html(nenhumaPublicacao);
            });
        $.get(`${ENV.API_URL}/get/noticias`)
            .done(count => {
                this.banco = count.length - 3;
                if (count.length > 3) {
                    let buttonMais = `<button type="button" class="ver-mais">VER MAIS PUBLICAÇÕES</button>`;
                    $('#publications').append(this.html);
                    $('#button-pagination').html(buttonMais);
                }
                else {
                    $('#publications').append(this.html);
                }

                $('.ver-mais').on('click', () => {
                    if (this.banco >= 3) {
                        this.publicationsMore.morePublications(3);
                        this.banco += -3;
                        if (this.banco <= 0) {
                            this.buttonexclude()
                        }
                    } else if (this.banco > 0 && this.banco <= 2) {
                        this.publicationsMore.morePublications(this.banco);
                        this.banco += -3;
                        if (this.banco <= 0) {
                            this.buttonexclude()
                        }
                    }
                })
            });
    }

    buttonexclude() {
        $('#button-pagination').remove();
    }
}
new publications();
