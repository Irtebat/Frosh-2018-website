$(document).scroll(function(){

    scroll=$(this).scrollTop();
    vph = document.body.clientHeight;
    
    if(scroll>(1.5*vph))
    {
        $('#a_head').css({'transform':'translateY(0)','opacity':'1'});
        $('#a_txt').css({'transform':'translateX(0)','opacity':'1'});
    }
    if(scroll<(1.3*vph))
    {
        $('#a_head').css({'transform':'translateY(-40px)','opacity':'0'});
        $('#a_txt').css({'transform':'translateX(50px)','opacity':'0'});
    }

    var h=$(window).height()/1;
    var condition=$('#vision').offset().top-h;

    if(scroll>condition)
    {
    
    $('.par_icon').css({
        '-webkit-transform' : 'translateX('+ 0.16*(scroll-condition) +'%)',
        });
    $('.par_icon').css({
        'transform' : 'translateX('+ 0.16*(scroll-condition) +'%)',
        });

    $('.par_icon_2').css({
        '-webkit-transform' : 'translateX('+ -0.16*(scroll-condition) +'%)',
        });
    $('.par_icon_2').css({
        'transform' : 'translateX('+ -0.16*(scroll-condition) +'%)',
        });
    }

})