$(window).on('load', function () {
    /*------------------

     
        Preloder
    --------------------*/
    $('.wrapper').hide()

    $(".loader").fadeOut();
    $("#preloder").delay(2000).fadeOut("slow");

    $('.wrapper').fadeIn(3000)

});