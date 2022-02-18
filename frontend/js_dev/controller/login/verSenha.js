$("#eye-senha").on('click', function () {
    let $show = $("#senha-login");
    if ($show.attr('type') === 'password') {
        $show.attr('type', 'text');
        $('#icon-eye-login').html('<i class="fa fa-eye"></i>')
    } else {
        $show.attr('type', 'password');
        $('#icon-eye-login').html('<i class="fa fa-eye-slash"></i>');
    }
});