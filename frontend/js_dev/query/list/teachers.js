$(document).ready(() => {

    let PermissionToken = localStorage.getItem(btoa('login'));
    let PermissionidUser = localStorage.getItem(btoa('idUser'));
    let PermissionidDefault = localStorage.getItem(btoa('idDefault'));

    if (PermissionidUser === PermissionidDefault) {

        $.get(`${ENV.API_URL}/get/user/${PermissionidUser}`)
            .done(user => {

                if (PermissionToken === user.webtoken) {

                    $.get(`${ENV.API_URL}/get/professores`)
                        .done(res => {
                            let prof = '';
                            
                            res.map(resp => {

                                prof +=
                                    `
                                <div style="margin-bottom: 15px;" class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <hr class="hr-div">
                                    <div id="item${resp.id}" class="data-teacher">
                                            <div class="info-prof">
                                                    <p> <span class="professor">${resp.nome}</span>
                                                        <span class="email"> - email: ${resp.email}</span>
                                                        <span class="email-prof"></span>
                                                        <button onclick="editModal(${resp.id})" class="edit-prof"><i class="fa fa-edit"></i></i></button>
                                                        ${user.permissao == 1 ? `<button onclick="deleteModal(${resp.id})" class="edit-prof"><i class="fa fa-trash"></i></i></button>` : ''}
                                                    </p>
                                            </div>
                                            <div class="form-list">
                                                    <div style="margin-top: 10px;" id="edit-form${resp.id}" class="edit-form">
                                                        <form>
                                                            <div class="form-group col-lg-12 mb-2">
                                                                <label class="input-editName" for="exampleInputName1">Nome do professor</label>
                                                                <input type="text" class="form-control" id="name${resp.id}" value="${resp.nome}" placeholder="Nome do professor" required>
                                                            </div>

                                                            <div class="form-group col-lg-12 mb-2">
                                                                <label class="input-editProf" for="exampleInputEmail1">Email do professor</label>
                                                                <input type="email" class="form-control" id="email${resp.id}" value="${resp.email}" placeholder="Email do professor" required>
                                                                <button style="margin-top: 20px; color:white;" type="submit" onclick="updateProf(${resp.id})" class="btn-list">Salvar</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>

                                    `;
                                $('#list-main').html(prof);
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