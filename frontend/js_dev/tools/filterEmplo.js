$(document).ready(function () {

    $('.search-employees').keyup(function () {

        // Search text
        let text = $(this).val().toLowerCase().trim();

        // Hide all content class element
        $('.data-employees').hide();

        // Search 
        $('.data-employees .professor').each(function () {

            if ($(this).text().toLowerCase().trim().indexOf("" + text + "") != -1) {
                $(this).closest('.data-employees').show();
                $('.hr-div').hide();
            }
        });
    });
});