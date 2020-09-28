$(function(){
    var  windowWidth = $(window)[0].innerWidth;
    if(windowWidth <= 768) {
        $('.nome-usuario h2').click(function(){
            var el = $('.sidebar');
            if(el.is(':visible')) {
                el.hide();
                $('.main-content').css('left','0')
            } else {
                el.show();
                $('.main-content').css('left','300px')
            }
        })
        $(window).resize(function(){
            windowWidth = $(window)[0].innerWidth;
        })
    }
})