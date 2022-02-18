const verSenha = () => {
    const idUser = localStorage.getItem(btoa('idUser'));

    $.get(`${ENV.API_URL}/get/user/${idUser}`)
        .done(res => {

            let pass = '';
            let senha = $('#info-senha').html();
            let lengthSenha = res.senha.length;

            for (let i = 0; i < lengthSenha; i++) {
                pass += '•';
            }
            (senha === pass)
                ? $('#info-senha').html(res.senha) && $('#icon-eye').html('<i class="fa fa-eye"></i>')
                : $('#info-senha').html(pass) && $('#icon-eye').html('<i class="fa fa-eye-slash"></i>')
        });
}

$("#eye-senha").on('click', function () {
    let $show = $("#senha");
    if ($show.attr('type') === 'password') {
        $show.attr('type', 'text');
        $('#icon-input-eye').html('<i class="fa fa-eye"></i>')
    } else {
        $show.attr('type', 'password');
        $('#icon-input-eye').html('<i class="fa fa-eye-slash"></i>');
    }
});

$("#eye-confirmar_senha").on('click', function () {
    let $show = $("#confirmar_senha");
    if ($show.attr('type') === 'password') {
        $show.attr('type', 'text');
        $('#icon-input-confirmeye').html('<i class="fa fa-eye"></i>')
    } else {
        $show.attr('type', 'password');
        $('#icon-input-confirmeye').html('<i class="fa fa-eye-slash"></i>');
    }
});

$("#eye-register_senha").on('click', function () {
    let $show = $("#senha-register");
    if ($show.attr('type') === 'password') {
        $show.attr('type', 'text');
        $('#span-eye-register').html('<i class="fa fa-eye"></i>')
    } else {
        $show.attr('type', 'password');
        $('#span-eye-register').html('<i class="fa fa-eye-slash"></i>');
    }
});

$("#eye-register_confirmsenha").on('click', function () {
    let $show = $("#confsenha-register");
    if ($show.attr('type') === 'password') {
        $show.attr('type', 'text');
        $('#span-eye-confregister').html('<i class="fa fa-eye"></i>')
    } else {
        $show.attr('type', 'password');
        $('#span-eye-confregister').html('<i class="fa fa-eye-slash"></i>');
    }
});