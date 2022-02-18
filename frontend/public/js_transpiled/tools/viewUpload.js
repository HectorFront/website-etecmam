'use strict';

var readURL = function readURL(input) {
    if (input.files && input.files[0]) {

        var reader = new FileReader();

        reader.onload = function (e) {
            $('.image-upload-wrap').hide();

            $('.file-upload-image').attr('src', e.target.result);
            $('.file-upload-content').show();

            $('.image-title').html(input.files[0].name);
        };

        reader.readAsDataURL(input.files[0]);
    } else {
        removeUpload();
    }
};

var removeUpload = function removeUpload() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-content').hide();
    $('.image-upload-wrap').show();
};
$('.image-upload-wrap').bind('dragover', function () {
    $('.image-upload-wrap').addClass('image-dropping');
});
$('.image-upload-wrap').bind('dragleave', function () {
    $('.image-upload-wrap').removeClass('image-dropping');
});

var verifyValue = function verifyValue(input) {
    var close = '<div class="close-video" onclick="closeVideo()"><i class="fa fa-close"></i></div>';
    if (input.value) {
        $('#video-publication').addClass('width-video');
        $("#close").html(close);
    }
};

var closeVideo = function closeVideo() {
    $('#video-publication').val('');
    $('#video-publication').removeClass('width-video');
    $('.close-video').remove();
};