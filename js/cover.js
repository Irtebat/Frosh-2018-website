$(document).ready(function(){

    var i=1;
    setInterval(function() {
       $("#img").css("background-image", "url(img/back/back"+i+".jpg)");
       i++;
       if(i==15)
        i=1;
    },200);

});

$(document).scroll(function(){

    var scroll=$(this).scrollTop();
    var vph=document.body.clientHeight;
    val=1-scroll/(1*vph);
    var val_logo=1-scroll/(1.5*vph);
    
    $('#cover').css('opacity',val);
    $('#logo').css('opacity',val_logo);
    
    $('.slider').click(function(e){
      e.preventDefault();
      y=$('#about').offset().top-20;
      $('html,body').stop(true, false).animate({scrollTop:y},800);
      });
    
});
    
