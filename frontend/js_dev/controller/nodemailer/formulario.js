$('#contatar-escola').on('submit', (event) => {
    event.preventDefault();

    let resetbutton = `<button type="submit"> Enviar formulário</button>`;
    let refreshButton = `<button type="submit" disabled><i class="fa fa-refresh fa-spin"></i> Enviando...</button>`;
    let divButton = document.getElementById('button-submit');

    let nome = $('#nome').val();
    let assunto = $('#assunto').val();
    let email = $('#email').val();
    let telefone = $('#telefone').val();
    let mensagem = $('#mensagem').val();

    const validateEmail = (emailValue) => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(emailValue).toLowerCase());
    }

    if (!nome || !assunto || !email || !telefone || !mensagem) {
        swal("Oppss...achou que ia enviar nada sem o 'required' neh?!", "Achou errado, otário!", "warning")
            .then(() => {
                window.location.reload();
            });
    } else if (!validateEmail(email)) {
        swal("Email inválido!", "Clique em ok para sair", "warning");
        $("#email").addClass("error");
    } else if (telefone.length < 15) {
        swal("Telefone celular inválido!", "Clique em ok para sair", "warning");
        $("#telefone").addClass("error");
    } else {
        divButton.innerHTML = refreshButton;

        let data = {
            nome: nome,
            assunto: assunto,
            email: email,
            telefone: telefone,
            mensagem: mensagem
        }

        $.ajax({
            url: `${ENV.API_URL}/post/send/email`,
            data: JSON.stringify(data),
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        }).then(() => {
            swal("Formulário enviado com sucesso, aguarde um retorno de contato", "Clique em ok para sair", "success")
                .then(() => {
                    $("#email-register").removeClass("error");
                    $("#telefone").removeClass("error");
                    $('#nome').val('');
                    $('#assunto').val('');
                    $('#email').val('');
                    $('#telefone').val('');
                    $('#mensagem').val('');
                    divButton.innerHTML = resetbutton;
                });
        }).fail((err) => {
            console.log(err)
            swal("Falha de envio, tente novamente mais tarde!", "Clique em ok para sair", "error")
                .then(() => {
                    divButton.innerHTML = resetbutton;
                });
        })
    }
})