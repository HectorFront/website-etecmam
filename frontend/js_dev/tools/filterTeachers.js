$(document).ready(function () {

    $('.search-teacher').keyup(function () {

        // Search text
        let text = $(this).val().toLowerCase().trim();

        // Hide all content class element
        $('.data-teacher').hide();
        $('.hr-div').hide();

        // Search 
        $('.data-teacher .professor').each(function () {

            if ($(this).text().toLowerCase().indexOf("" + text + "") != -1) {
                $(this).closest('.data-teacher').show();
            }
        });
    });
});