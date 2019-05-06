function main () {
    $('.nav-button').on('click', function () {
        if ($('.nav-button')) {
            $('.slidable').toggleClass('slide-in');
            $('.slidable').toggleClass('slide-out');
            console.log('owo');
            
        }
        
    });
    /*function menuSlideIn () {
    $('.nav-button').on('click', function () {
        if ($('.nav-button')) {
            $('.slidable').toggleClass('slide-in');
            $('.slidable').toggleClass('slide-out');
            console.log('owo');
            
        }
        
    });
}*/
    /*$('.menu-slide-in').on('click', function () {
        /*if($('.slide-out')) {
        $('.slideable').toggleClass('slide-out');
        $('.slideable').toggleClass('slide-in');
        }
        console.log('neat')
        menuSlideIn ();
    });*/
    $('.main-page-button').on('click', function () {
        $('.main-page').siblings().fadeOut();
        $('.main-page').fadeIn();
    });
    $('.button').on('click', function () {
        $('.downloads-page').removeClass('invis');
        $('.downloads-page').siblings().removeClass('invis');
    });
    $('.downloads-button').on('click', function () {
        $('.downloads-page').siblings().fadeOut();
        $('.downloads-page').fadeIn();

    });
    $('.misc-button').on('click', function () {
        $('.misc-page').siblings().fadeOut();
        $('.misc-page').fadeIn();
    });
    $('.pictures-button').on('click', function () {
        $('.pictures-page').siblings().fadeOut();
        $('.pictures-page').fadeIn();
    });
    $('.videos-button').on('click', function () {
        $('.videos-page').siblings().fadeOut();
        $('.videos-page').fadeIn();
    });

    
}
$(document).ready(main);