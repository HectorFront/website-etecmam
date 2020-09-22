const listAllUsers = () => {
    let PermissionidUser = localStorage.getItem(btoa('idUser'));
    let PermissionidDefault = localStorage.getItem(btoa('idDefault'));
    let PermissionPlatform = localStorage.getItem(btoa('permission'));

    if (PermissionidUser === PermissionidDefault) {

        fetch(`${ENV.API_URL}/get/users`)
            .then((response) => {
                response.json().then((resp) => {

                    let itemUsers = '';
                    let nenhumUsuario = `<center><p>Nenhum usuário encontrado</p></center>`;

                    resp.map(user => {

                        itemUsers +=
                            `<div style="margin-bottom: 15px;" class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <hr class="hr-div">
                                    <div id="item${user.id}" class="data-users">
                                            <div class="info-user">
                                                <p>${user.status_logged == 1 ? `<span class="icon__on" style="color: rgb(46, 151, 90);"><i class="fa fa-signal"></i></span>&nbsp;<strong style="font-weight: bold; color: rgb(7, 126, 56);">Online</strong>&nbsp;` : `<span><i class="fa fa-close"></i></span>&nbsp;<strong>Offline</strong>&nbsp;`}
                                                <b style="font-family: 'Open Sans', sans-serif;">${user.id == PermissionidUser ? 'Você' : 'Usuário'}:</b> <span class="name-user">${user.userName}</span></span>
                                                    <span class="email"> - <b style="font-family: 'Open Sans', sans-serif;">Email:</b> ${user.email}</span>
                                                    ${PermissionPlatform == 1 && user.id != PermissionidUser ? `<button style="border-radius: 50px;" onclick="deleteUser(${user.id})" class="btn btn-danger"><i class="fa fa-trash"></i></i></button>` : ``}
                                                </p>
                                            </div>
                                    </div>
                             </div>`;
                        resp.length > 0 ? $('#content-users').html(itemUsers) : $('#content-users').html(nenhumUsuario);
                    });
                    (function blink() {
                        $('.icon__on').fadeOut(1500).fadeIn(1500, blink);
                    })();
                }).catch(() => {
                    swal("Erro ao listar usuários, por favor contatar com os programadores!", "Clique em ok para sair", "error").then(() => {
                        window.location.href = '/login/admin';
                    });
                })
            })
    } else {
        platformLogout();
    }
};
setInterval(() => {
    listAllUsers();
}, 60000)