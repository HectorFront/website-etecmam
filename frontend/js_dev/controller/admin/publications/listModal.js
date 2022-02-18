const listModal = (id) => {
    console.log(id)
    let PermissionToken = localStorage.getItem(btoa('login'));
    let PermissionidUser = localStorage.getItem(btoa('idUser'));
    let PermissionidDefault = localStorage.getItem(btoa('idDefault'));

    if (PermissionidUser === PermissionidDefault) {

        $.get(`${ENV.API_URL}/get/user/${PermissionidUser}`)
            .done(res => {

                if (PermissionToken === res.webtoken && res.permissao == 1 || res.permissao == 0) {

                    $.get(`${ENV.API_URL}/get/noticia/${id}`)
                        .done(res => {
                            $('#titulo_publicacao').val(res.titulo);
                            $('#assunto_publicacao').val(res.assunto == 0 ? null : res.assunto);
                            $('#urlyt_publicacao').val(res.video_yt == 0 ? null : res.video_yt);
                            $('#descricao_publicacao').val(res.descricao);
                            $('#update_publicacao_button').attr('onclick', `updatePublication(${res.id})`);

                        }).fail(() => {
                            swal("Falha no banco de dados, por favor contatar com os programadores!", "Clique em ok para sair", "error").then(() => {
                                window.onload();
                            })
                        });
                } else {
                    platformLogout();
                }
            });
    } else {
        platformLogout();
    }
}