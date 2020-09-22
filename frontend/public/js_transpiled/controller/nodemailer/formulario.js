'use strict';

$('#contatar-escola').on('submit', function (event) {
    event.preventDefault();

    var resetbutton = '<button type="submit"> Enviar formul\xE1rio</button>';
    var refreshButton = '<button type="submit" disabled><i class="fa fa-refresh fa-spin"></i> Enviando...</button>';
    var divButton = document.getElementById('button-submit');

    var nome = $('#nome').val();
    var assunto = $('#assunto').val();
    var email = $('#email').val();
    var telefone = $('#telefone').val();
    var mensagem = $('#mensagem').val();

    var validateEmail = function validateEmail(emailValue) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(emailValue).toLowerCase());
    };

    if (!nome || !assunto || !email || !telefone || !mensagem) {
        swal("Oppss...achou que ia enviar nada sem o 'required' neh?!", "Achou errado, otário!", "warning").then(function () {
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

        var data = {
            nome: nome,
            assunto: assunto,
            email: email,
            telefone: telefone,
            mensagem: mensagem
        };

        $.ajax({
            url: ENV.API_URL + '/post/send/email',
            data: JSON.stringify(data),
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        }).then(function () {
            swal("Formulário enviado com sucesso, aguarde um retorno de contato", "Clique em ok para sair", "success").then(function () {
                $("#email-register").removeClass("error");
                $("#telefone").removeClass("error");
                $('#nome').val('');
                $('#assunto').val('');
                $('#email').val('');
                $('#telefone').val('');
                $('#mensagem').val('');
                divButton.innerHTML = resetbutton;
            });
        }).fail(function (err) {
            console.log(err);
            swal("Falha de envio, tente novamente mais tarde!", "Clique em ok para sair", "error").then(function () {
                divButton.innerHTML = resetbutton;
            });
        });
    }
});