$(document).ready(function () {

    $('#search-users').keyup(function () {

        // Search text
        let text = $(this).val().toLowerCase().trim();

        // Hide all content class element
        $('.data-users').hide();

        // Search 
        $('.data-users .name-user').each(function () {

            if ($(this).text().toLowerCase().indexOf("" + text + "") != -1) {
                $(this).closest('.data-users').show();
                $('.hr-div').hide();
            }
        });
    });
});