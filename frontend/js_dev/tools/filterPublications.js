$(document).ready(function () {

    $('.search-publication').keyup(function () {

        // Search text
        let text = $(this).val().toLowerCase().trim();

        // Hide all content class element
        $('.event-index').hide();

        // Search 
        $('.event-index .blog-slider__title').each(function () {

            if ($(this).text().toLowerCase().indexOf("" + text + "") != -1) {
                $(this).closest('.event-index').show();
            }
        });
    });
});