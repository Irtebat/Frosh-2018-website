$(document).scroll(function() {

    var scrollv=$(this).scrollTop();
    var h=document.body.clientHeight;

/* 
  $('.content').each(function() {

    var ho=$(this).offset().top;
  
    input= ((scrollv-ho+(h/1))/(0.55*h));
    if(input<0)
    input=0;
  
    $(this).css('opacity',input);
  
    });
*/
  $('#about').each(function() {
  
    var ho=$(this).offset().top;
  
    input= ((scrollv-ho+(h/1.3))/(0.55*h));
    if(input<0)
    input=0;
  
    $(this).css('opacity',input);
  
    });


  });
  