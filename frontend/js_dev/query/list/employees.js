$(document).ready(() => {

    let PermissionToken = localStorage.getItem(btoa('login'));
    let PermissionidUser = localStorage.getItem(btoa('idUser'));
    let PermissionidDefault = localStorage.getItem(btoa('idDefault'));

    if (PermissionidUser === PermissionidDefault) {

        $.get(`${ENV.API_URL}/get/user/${PermissionidUser}`)
            .done(user => {

                if (PermissionToken === user.webtoken) {

                    $.get(`${ENV.API_URL}/get/funcionarios`)
                        .done(res => {
                            let func = '';

                            res.map(resp => {
                                func +=
                                    `
                                <div style="margin-bottom: 15px;" class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <hr class="hr-div">
                                    <div id="item${resp.id}" class="data-employees">
                                        <div class="info-prof">
                                            <p> <span class="professor">${resp.nome}</span>
                                                <span class="email"> - cargo: ${resp.cargo}</span>
                                                <span class="email-prof"></span>
                                                <button onclick="editModal(${resp.id})" class="edit-func"><i class="fa fa-edit"></i></i></button>
                                                ${user.permissao == 1 ? `<button onclick="deleteModalFunc(${resp.id})" class="edit-func" style="margin-left: 10px"><i class="fa fa-trash"></i></i></button>` : ''}
                                            </p>
                                        </div>
                                        <div class="form-list">
                                            <div style="margin-top: 10px;" id="edit-form${resp.id}" class="edit-form">
                                                <form id="toggle${resp.nome}">
                                                    <div class="form-group col-lg-12 mb-2">
                                                        <label class="input-editName">Nome do funcionário</label>
                                                        <input type="text" class="form-control" id="name${resp.id}" value="${resp.nome}" placeholder="Nome do funcionário" required>
                                                    </div>
                                                    <div class="form-group col-lg-12 mb-2">
                                                        <label class="input-editProf">Cargo do funcionário</label>
                                                        <input type="text" class="form-control" id="office${resp.id}" value="${resp.cargo}" placeholder="Cargo do funcinário" required>
                                                        <button style="margin-top: 20px; color:white;" type="submit" onclick="updateFunc(${resp.id})" class="btn-list">Salvar</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;
                                $('#list-funcionarios').html(func);
                            });
                        }).fail(() => {
                            console.log('Error in request professor')
                        });
                } else {
                    platformLogout();
                }
            });
    } else {
        platformLogout();
    }
});