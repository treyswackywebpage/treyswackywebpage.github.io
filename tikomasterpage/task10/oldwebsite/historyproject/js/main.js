function main ()
{
    $('.clickable').on('click',function()
    {
        $(this).toggleClass('hidden');
    });
    $('.factions-click').on('click', function () {
        $('.factions-fade').fadeToggle();
    }).css({'cursor': 'pointer'});
    $('.causes-click').on('click', function () {
        $('.causes-fade').fadeToggle();
    }).css({'cursor': 'pointer'});
    $('.phases-click').on('click', function () {
        $('.phases-fade').fadeToggle();
    }).css({'cursor': 'pointer'});
    $('.misc-click').on('click', function () {
        $('.misc-fade').fadeToggle();
    }).css({'cursor': 'pointer'});
}
$(document).ready(main);