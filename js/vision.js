$(document).ready(function(){
  $('.cover').css("visibility","hidden");

})

$(document).scroll(function() {

    scrollv=$(this).scrollTop();
    var h=$(window).height()/1.8;
    var condition=$('#vision').offset().top-h;

    if(scrollv>condition)
    {
      $('.vbox').each(function(i) {

        setTimeout(function(){
          $('.vbox').eq(i).css({'transform':'translateX(0)','opacity':'1'});
          },150*(i+1));
      });

      setTimeout(function(){
        $('.cover').css("visibility","visible");
      },1000);
      
    }
    if(scrollv<condition)
    {
      $('.vbox').each(function(i) {

        setTimeout(function(){
          $('.vbox').eq(i).css({'transform':'translateX(-100%) rotate(30deg) ','opacity':'0'});
          },150*(i+1));
      });

      setTimeout(function(){
          $('.cover').css("visibility","hidden");
        },0);

      

    }

})

// Our Identity Container hover effects

