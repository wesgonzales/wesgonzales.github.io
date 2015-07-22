(function($)
{
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() < 150) {
                $('.intro').fadeIn(500);
            } else {
                $('.intro').fadeOut(500);
            }
        });
    });

})(jQuery);

(function init()
{
    $('.menu').addClass('original')
        .clone()
        .insertAfter('.menu')
        .addClass('cloned')
        .css('position', 'fixed')
        .css('top', '0')
        .css('margin-top', '0')
        .css('z-index', '500')
        .removeClass('original')
        .hide();

    scrollIntervalID = setInterval(stickIt, 10);

})();

function stickIt()
{
    var orgElementPos = $('.original').offset(),
        orgElementTop = orgElementPos.top;

    if ($(window).scrollTop() >= (orgElementTop))
    {
        var orgElement = $('.original'),
            coordsOrgElement = orgElement.offset(),
            leftOrgElement = coordsOrgElement.left,
            widthOrgElement = orgElement.css('width');

        $('.cloned').css('left', leftOrgElement + 'px')
                    .css('top', 0)
                    .css('width', widthOrgElement)
                    .show();

        $('.original').css('visibility', 'hidden');

    } else {
        $('.cloned').hide();
        $('.original').css('visibility', 'visible');
    }
};

